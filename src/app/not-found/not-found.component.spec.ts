import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotFoundComponent } from './not-found.component';
import { By } from '@angular/platform-browser';
import { PlaceholderComponent } from '../shared/utilities/placeholder/placeholder.component';

describe('NotFoundComponent', () => {
  let component: NotFoundComponent;
  let fixture: ComponentFixture<NotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotFoundComponent, PlaceholderComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should pass correct message to app-placeholder', () => {
    const placeholderEl = fixture.debugElement.query(
      By.directive(PlaceholderComponent)
    );
    expect(placeholderEl.componentInstance.message).toEqual('Not found');
  });

  it('should pass correct iconKey to app-placeholder', () => {
    const placeholderEl = fixture.debugElement.query(
      By.directive(PlaceholderComponent)
    );
    expect(placeholderEl.componentInstance.iconKey).toEqual('warning');
  });
});
