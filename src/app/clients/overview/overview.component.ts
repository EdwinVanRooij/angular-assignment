import { SnackbarService } from './../../services/snackbar.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription, tap } from 'rxjs';
import { Client } from 'src/app/models/client';
import { ClientState } from 'src/app/state/client/client.reducers';
import { selectClients } from 'src/app/state/client/client.selectors';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit, OnDestroy {
  clients: Client[] | null = null;
  selectedClient: Client | null = null;
  isLoading = true;
  subscriptions: Subscription[] = [];

  constructor(
    private store: Store<ClientState>,
    private snackbarService: SnackbarService
  ) {}

  ngOnInit(): void {
    const loadClientsSubscription = this.store
      .select(selectClients)
      .pipe(tap(() => (this.isLoading = false)))
      .subscribe({
        next: (clients) => {
          this.clients = clients;
        },
        error: (errorMessage: string) => {
          this.snackbarService.showError(errorMessage);
        },
      });

    // Ensure `isLoading` is set to `false`, whatever happens (whether the subscription succeeds or fails)
    loadClientsSubscription.add(() => (this.isLoading = false));

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
}
