import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Person } from 'src/app/models/person';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent {
  person$: Observable<Person[]>;

  constructor(private store: Store) {
    this.person$ = this.store.select((state: any) => state.persons.persons);
  }
}
