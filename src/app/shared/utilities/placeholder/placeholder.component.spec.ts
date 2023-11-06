import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlaceholderComponent } from './placeholder.component';
import { MatIconModule } from '@angular/material/icon';

describe('PlaceholderComponent', () => {
  let component: PlaceholderComponent;
  let fixture: ComponentFixture<PlaceholderComponent>;
  let element: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatIconModule],
      declarations: [PlaceholderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlaceholderComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the message', () => {
    const testMessage = 'Test Message';
    component.message = testMessage;
    fixture.detectChanges();

    const messageElement = element.querySelector('h2');
    expect(messageElement?.textContent).toBe(testMessage);
  });

  it('should display the correct icon', () => {
    const testIcon = 'test_icon';
    component.iconKey = testIcon;
    fixture.detectChanges();

    const iconElement = element.querySelector('mat-icon');
    expect(iconElement?.textContent).toBe(testIcon);
  });
});
