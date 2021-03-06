import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';


import { MapsComponent } from '../../maps/maps.component';
import {EditprofileComponent} from '../../../editprofile/editprofile.component';
import {AuthGuardService} from '../../../auth-guard.service';


export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // },{
    //     path: 'user-profile',
    //     component: UserProfileComponent},
    //   {path: 'table-list',component: TableListComponent},
    //   {path: 'edit',component: EditprofileComponent },
    //   {path: 'maps',component: MapsComponent }]}   
    { path: 'dashboard',component: DashboardComponent,canActivate:[AuthGuardService]},
    { path: 'user-profile',component: UserProfileComponent,children:[
     {path: 'edit',component: EditprofileComponent }
    ],canActivate:[AuthGuardService]},
    {path: 'table-list',component: TableListComponent,canActivate:[AuthGuardService]},
    {path: 'maps',component: MapsComponent,canActivate:[AuthGuardService] }
]; 
    
    //{   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    // { path: 'dashboard',      component: DashboardComponent },
    // { path: 'user-profile',   component: UserProfileComponent },
    // { path: 'table-list',     component: TableListComponent },
 
   
    // { path: 'maps',           component: MapsComponent }
   
//];
