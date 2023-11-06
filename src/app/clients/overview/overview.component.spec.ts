import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OverviewComponent } from './overview.component';

// describe('OverviewComponent', () => {
//   let component: OverviewComponent;
//   let fixture: ComponentFixture<OverviewComponent>;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [OverviewComponent]
//     });
//     fixture = TestBed.createComponent(OverviewComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

describe('OverviewComponent', () => {
  let component: OverviewComponent;
  let fixture: ComponentFixture<OverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OverviewComponent],
    }).compileComponents(); // Use compileComponents when working with external templates or styles

    fixture = TestBed.createComponent(OverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
