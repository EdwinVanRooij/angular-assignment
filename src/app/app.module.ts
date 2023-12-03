import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreKeys } from './state/store-keys';
import { clientReducer } from './state/client/client.reducers';
import { ClientEffects } from './state/client/client.effects';
import { NotFoundComponent } from './not-found/not-found.component';
import { MaterialModule } from './shared/material/material.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UtilitiesModule } from './shared/utilities/utilities.module';
import { NgxsModule } from '@ngxs/store';
import { PersonsState } from './state/person/person.state';
import { CLIENT_SERVICE, clientServiceProvider } from './utilities/client-service-provider';

@NgModule({
	declarations: [AppComponent, NotFoundComponent],
	imports: [
		BrowserModule,
		MaterialModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		HttpClientModule,
		UtilitiesModule,
		NgxsModule.forRoot([PersonsState]),
		StoreModule.forRoot({ [StoreKeys.Client]: clientReducer }),
		EffectsModule.forRoot([ClientEffects]),
	],
	// In the providers, you can implement your own custom dependency injection provider.
	providers: [{ provide: CLIENT_SERVICE, useFactory: clientServiceProvider, deps: [HttpClient] }],
	bootstrap: [AppComponent],
})
export class AppModule {}
