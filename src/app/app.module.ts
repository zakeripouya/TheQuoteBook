import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RootComponent } from './root/root.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from 'login-component';

@NgModule({
  declarations: [
    RootComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    LoginComponent,
  ],
  exports: [
    RouterModule,
    LoginComponent
  ],
  providers: [],
  bootstrap: [RootComponent]
})

// export const AppRoutes: Routes = [
//   { path: '', component: LoginComponent }
// ];

export class AppModule { }

