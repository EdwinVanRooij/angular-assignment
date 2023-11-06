import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailsComponent } from './details.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { Client } from 'src/app/models/client';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;
  let element: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [DetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display client details correctly', () => {
    const mockClient: Client = {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      address: {
        streetName: 'Main St',
        houseNumber: '123',
        postalCode: '12345',
        city: 'Sample City',
      },
    };
    component.client = mockClient;
    fixture.detectChanges();

    expect(element.querySelector('mat-card-title')?.textContent).toContain(
      'John Doe'
    );
    expect(element.querySelector('mat-card-subtitle')?.textContent).toBe(
      'john.doe@example.com'
    );

    const listItems = element.querySelectorAll('mat-list-item div');
    expect(listItems[0].textContent).toContain('Street: Main St');
    expect(listItems[2].textContent).toContain('House Number: 123');
    expect(listItems[4].textContent).toContain('Postal Code: 12345');
    expect(listItems[6].textContent).toContain('City: Sample City');
    expect(listItems[8].textContent).toContain('Email: john.doe@example.com');
  });
});
