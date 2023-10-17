import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Subscription, filter } from 'rxjs';
import { Client } from 'src/app/models/client';
import { ClientState } from 'src/app/state/client/client.reducers';
import { selectClients } from 'src/app/state/client/client.selectors';
import { CreateComponent } from '../create/create.component';
import { SnackbarService } from './../../services/snackbar.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit, OnDestroy {
  clients: Client[] | null = null;
  selectedClient: Client | null = null;
  isLoading: boolean = true;
  subscriptions: Subscription[] = [];

  constructor(
    private store: Store<ClientState>,
    private snackbarService: SnackbarService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    const loadClientsSubscription = this.store
      .select(selectClients)
      .pipe(filter((clients) => clients && clients.length > 0))
      .subscribe({
        next: (clients) => {
          this.clients = clients;
          this.isLoading = false;
        },
        error: (errorMessage: string) => {
          this.snackbarService.showError(errorMessage);
          this.isLoading = false;
        },
      });

    this.subscriptions.push(loadClientsSubscription);
  }

  ngOnDestroy(): void {
    for (const subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
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
