import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Shared } from './shared/shared.module';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutes } from './app.routes';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { LaunchesDetailsComponent } from './components/launches/launches-details/launches-details.component';
import { LaunchesItemComponent } from './components/launches/launches-item/launches-item.component';
import { LaunchesComponent } from './components/launches/launches.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoaderComponent,
    LaunchesComponent,
    LaunchesDetailsComponent,
    LaunchesItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    Shared,
    RouterModule.forRoot(AppRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
