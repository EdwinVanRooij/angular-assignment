import {AfterViewInit, Component, OnDestroy, QueryList, ViewChildren} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import {filter, Observable, Subscription, tap} from 'rxjs';
import { Client } from 'src/app/models/client';
import { ClientState } from 'src/app/state/client/client.reducers';
import {
  isLoadingClients,
  selectClients,
} from 'src/app/state/client/client.selectors';
import { CreateComponent } from '../create/create.component';
import {ClientComponent} from "../client/client.component";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements AfterViewInit, OnDestroy {
  @ViewChildren(ClientComponent)
  clientComponents!: QueryList<ClientComponent>;

  client$: Observable<Client[]>;
  selectedClient: Client | null = null;
  isLoadingClients$: Observable<boolean>;
  subscriptions: Subscription[] = []

  constructor(private store: Store<ClientState>, private dialog: MatDialog) {
    this.isLoadingClients$ = this.store.select(isLoadingClients).pipe();
    this.client$ = this.store.select(selectClients);
  }

  ngAfterViewInit(): void {
    const clientSubscription = this.clientComponents.changes
      .pipe(filter((change) => change!! && change.length > 0)).subscribe(() => this.onClientComponentsRendered());

    this.subscriptions.push(clientSubscription);
  }

  ngOnDestroy(): void {
    for (const subscription of this.subscriptions) {
      subscription.unsubscribe()
    }
  }

  onClientComponentsRendered(): void {
    console.log(`Found all ClientComponent elements by querying the template ` +
      `using the component's type with the decorator @ViewChildren: ${this.clientComponents.length}`)
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
