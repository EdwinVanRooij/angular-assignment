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

// I'm just importing this here for now manually, but ideally you'd have a
// shared module with these kinds of imports so that you can reuse them in other
// modules.
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [AppComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ [StoreKeys.Client]: clientReducer }),
    EffectsModule.forRoot([ClientEffects]),
    MatSnackBarModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
