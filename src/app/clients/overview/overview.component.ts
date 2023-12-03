import {
	AfterContentChecked,
	AfterContentInit,
	AfterViewChecked,
	AfterViewInit,
	Component,
	DoCheck,
	ElementRef,
	OnChanges,
	OnDestroy,
	OnInit,
	QueryList,
	SimpleChanges,
	ViewChildren,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { filter, Observable, Subscription } from 'rxjs';
import { Client } from 'src/app/models/client';
import { ClientState } from 'src/app/state/client/client.reducers';
import { isLoadingClients, selectClients } from 'src/app/state/client/client.selectors';
import { CreateComponent } from '../create/create.component';
import { ClientComponent } from '../client/client.component';

@Component({
	selector: 'app-overview',
	templateUrl: './overview.component.html',
	styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent
	implements
		OnChanges,
		OnInit,
		DoCheck,
		AfterContentInit,
		AfterViewInit,
		AfterContentChecked,
		AfterViewChecked,
		OnDestroy
{
	// We can query the template for all instances of ClientComponent that it can find.
	// The QueryList has a `changes` observable that we can subscribe to.
	@ViewChildren(ClientComponent)
	clientComponentsQueryList!: QueryList<ClientComponent>;

	// Or query for the ElementRef of course.
	@ViewChildren(ClientComponent, { read: ElementRef })
	clientComponentReferencesQueryList!: QueryList<ClientComponent>;

	client$: Observable<Client[]>;
	selectedClient: Client | null = null;
	isLoadingClients$: Observable<boolean>;
	subscriptions: Subscription[] = [];

	private loggedFirstMethodCallDictionary: any = {};

	constructor(
		private store: Store<ClientState>,
		private dialog: MatDialog
	) {
		console.log(`1: the constructor was called`);
		this.isLoadingClients$ = this.store.select(isLoadingClients).pipe();
		this.client$ = this.store.select(selectClients);
	}

	ngOnChanges(changes: SimpleChanges): void {
		this.logFirstMethodCall('ngOnChanges', 2);
	}

	ngOnInit(): void {
		this.logFirstMethodCall('ngOnInit', 3);
	}

	ngDoCheck(): void {
		this.logFirstMethodCall('ngDoCheck', 4);
	}

	ngAfterContentInit(): void {
		this.logFirstMethodCall('ngAfterContentInit', 5);
	}

	ngAfterContentChecked(): void {
		// Note to self: the `Content` part in `ngAfterContentChecked` means Angular content projection.
		this.logFirstMethodCall('ngAfterContentChecked', 6);
	}

	ngAfterViewInit(): void {
		this.logFirstMethodCall('ngAfterViewInit', 7);

		const clientSubscription = this.clientComponentsQueryList.changes
			.pipe(filter((change) => change!! && change.length > 0))
			.subscribe(() => this.onClientComponentsRendered());

		const clientRefsSubscription = this.clientComponentReferencesQueryList.changes
			.pipe(filter((change) => change!! && change.length > 0))
			.subscribe(() => this.onClientComponentRefsRendered());

		this.subscriptions.push(clientSubscription, clientRefsSubscription);
	}

	ngAfterViewChecked(): void {
		this.logFirstMethodCall('ngAfterViewChecked', 8);
	}

	ngOnDestroy(): void {
		this.logFirstMethodCall('ngOnDestroy', 9);
		for (const subscription of this.subscriptions) {
			subscription.unsubscribe();
		}
	}

	onClientComponentsRendered(): void {
		console.log(
			`Found all ClientComponent elements by querying the template ` +
				`using the component's type with the decorator @ViewChildren: ${this.clientComponentsQueryList.length}`
		);
	}

	onClientComponentRefsRendered(): void {
		console.log(
			`Found all ClientComponent element references by querying the template ` +
				`using the component's type with the decorator @ViewChildren: ${this.clientComponentsQueryList.length}`
		);
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

	onToggleHighlight(highlightFeatureEnabled: boolean, client: Client) {
		console.log(`The toggle highlight feature is currently ${highlightFeatureEnabled} for ${client.firstName}`);
	}

	private logFirstMethodCall(methodName: string, orderNumber: number) {
		if (!this.loggedFirstMethodCallDictionary[methodName]) {
			console.log(`${orderNumber}: ${methodName} was called`);
			this.loggedFirstMethodCallDictionary[methodName] = true;
		}
	}
}
