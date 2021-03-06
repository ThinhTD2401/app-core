import { Routes } from '@angular/router';
import { MainComponent } from './main.component';

export const mainRoutes: Routes = [
    
{
    path: '', component: MainComponent, children: [
        //localhost:4200/main
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        //localhost:4200/main/home
        { path: 'home', loadChildren: './home/home.module#HomeModule' },
        //localhost:4200/main/user
        { path: 'user', loadChildren: './user/user.module#UserModule' }
    ]
}
        
        //{ path: '', redirectTo: 'index', pathMatch: 'full' },
        //localhost:4200/main/home/index
      // { path: 'index', component: MainComponent } 
    

]