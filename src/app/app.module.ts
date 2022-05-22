import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//  Modulos de la Aplicacion
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { UsersModule } from './users/users.module';

//  Peticiones Http
import { HttpClientModule } from '@angular/common/http';

//  NGRX Redux - Angular
import { StoreModule } from '@ngrx/store';
import { appReducers } from './store/app.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { EffectsArray } from './store/effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    UsersModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot( appReducers ),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot( EffectsArray  )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
