import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { OverviewComponent } from './overview.component';
import { Person } from 'src/app/models/person';

describe('OverviewComponent', () => {
  let component: OverviewComponent;
  let fixture: ComponentFixture<OverviewComponent>;
  let store: Store;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OverviewComponent],
      imports: [NgxsModule.forRoot([])],
      providers: [Store],
    }).compileComponents();

    fixture = TestBed.createComponent(OverviewComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render persons from the store', () => {
    const mockPersons: Person[] = [
      { id: 0, firstName: 'John', lastName: 'Doe' },
      { id: 1, firstName: 'Jane', lastName: 'Doe' },
    ];
    store.reset({ persons: { persons: mockPersons } });

    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('div').length).toBe(2);
    expect(compiled.querySelector('div').textContent).toContain('John Doe');
  });

  it('should handle no persons gracefully', () => {
    store.reset({ persons: { persons: [] } });

    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('div').length).toBe(0);
  });
});
