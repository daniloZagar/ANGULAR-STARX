import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedRoutes } from './shared.routes';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DefaultImagePipe } from './pipes/image.pipe';
import { LoaderInterceptor } from './interceptors/loader-interceptor.service';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild(SharedRoutes),
  ],
  declarations: [DefaultImagePipe],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true,
    },
  ],
  exports: [CommonModule, FormsModule, ReactiveFormsModule, DefaultImagePipe],
})
export class Shared {}
