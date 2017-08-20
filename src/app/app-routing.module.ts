import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './static-pages/page-not-found.component';

export const appRoutes: Routes = [
  	{ path: '',  component: HomeComponent},

	{ path: 'user', loadChildren: './user/user.module#UserModule' },

	{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  providers: [
  ]
})

export class AppRoutingModule { }
