import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { initializeClientStore } from './state/client/client.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'AngularAssignment';

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(initializeClientStore());
  }
}
