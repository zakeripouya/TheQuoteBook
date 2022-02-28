import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { LoginComponent } from 'login-component';

export const AppRoutes: Routes = [
    { path: '', component: LoginComponent }
];

export class AppRoutingModule { }
