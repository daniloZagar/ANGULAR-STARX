import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedRoutes } from './shared.routes';
import { LaunchesDetailsComponent } from './components/launches/launches-details/launches-details.component';
import { LaunchesItemComponent } from './components/launches/launches-item/launches-item.component';
import { LaunchesComponent } from './components/launches/launches.component';
import { HttpClientModule } from '@angular/common/http';
import { EnterViewportDirective } from './directives/enter-viewport.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild(SharedRoutes),
  ],
  declarations: [
    LaunchesComponent,
    LaunchesDetailsComponent,
    LaunchesItemComponent,
    EnterViewportDirective,
  ],
  exports: [
    LaunchesComponent,
    LaunchesDetailsComponent,
    LaunchesItemComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class Shared {}
