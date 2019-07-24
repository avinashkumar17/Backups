import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthGuardService} from '../auth-guard.service';
import { RegisterComponent} from '../app/register/register.component'
const routes: Routes =[
  
  {
    path: '',
    redirectTo:'login',
    pathMatch: 'full'
  },
  {
    path:'login',
    component:LoginComponent,
    canActivate:[AuthGuardService]
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path: '',
    component: AdminLayoutComponent,
    loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
    }
    // { path: 'dashboard',      component: DashboardComponent },
    // { path: 'user-profile',   component: UserProfileComponent },
    // { path: 'table-list',     component: TableListComponent },
    // { path: 'typography',     component: TypographyComponent },
    // { path: 'icons',          component: IconsComponent },
    // { path: 'maps',           component: MapsComponent },
    // { path: 'notifications',  component: NotificationsComponent },
    // { path: 'upgrade',        component: UpgradeComponent },
    // { path: '',               redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
