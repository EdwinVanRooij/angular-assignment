import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Client } from 'src/app/models/client';
import { ClientState } from 'src/app/state/client/client.reducers';
import { selectClients } from 'src/app/state/client/client.selectors';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent {
  client$: Observable<Client[]>;
  selectedClient: Client | null = null;

  constructor(private store: Store<ClientState>) {
    this.client$ = this.store.select(selectClients);
  }

  onSelectClient(client: Client): void {
    this.selectedClient = client;
  }
}
