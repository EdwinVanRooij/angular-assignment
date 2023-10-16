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

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ [StoreKeys.Client]: clientReducer }),
    EffectsModule.forRoot([ClientEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
