import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Client } from 'src/app/models/client';
import { ClientState } from 'src/app/state/client/client.reducers';
import {
  isLoadingClients,
  selectClients,
} from 'src/app/state/client/client.selectors';
import { CreateComponent } from '../create/create.component';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent {
  client$: Observable<Client[]>;
  selectedClient: Client | null = null;
  isLoadingClients$: Observable<boolean>;
  subscriptions: Subscription[] = [];

  constructor(private store: Store<ClientState>, private dialog: MatDialog) {
    this.isLoadingClients$ = this.store.select(isLoadingClients);
    this.client$ = this.store.select(selectClients);
  }

  onSelectClient(client: Client): void {
    this.selectedClient = client;
  }

  onClickPlus(): void {
    this.dialog.open(CreateComponent, {
      width: '40%',
      minWidth: '800px',
    });
  }
}
