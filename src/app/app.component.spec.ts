import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { MaterialModule } from './shared/material/material.module';
import { initializeClientStore } from './state/client/client.actions';

describe('AppComponent', () => {
  let store: MockStore;

  const initialState = {};

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, StoreModule.forRoot({}), MaterialModule],
      declarations: [AppComponent],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();

    store = TestBed.inject(MockStore);
  });

  it('should dispatch initializeClientStore action on initialization', () => {
    const dispatchSpy = jest.spyOn(store, 'dispatch');

    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    expect(dispatchSpy).toHaveBeenCalledWith(initializeClientStore());
  });

  it('should render the "Clients" title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('mat-card-title')?.textContent).toContain(
      'Clients'
    );
  });

  it('should render the correct subtitle', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('mat-card-subtitle')?.textContent).toContain(
      'Use this application to view and add clients.'
    );
  });

  it('should have a router-outlet for child routes', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('router-outlet')).toBeTruthy();
  });
});
