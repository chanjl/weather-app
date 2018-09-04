import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListAddComponent } from './components/list-add.component';
import { ListDisplayComponent } from './components/list-display.component';

const appRoutes: Routes = [
  { path: '', component: ListAddComponent },
  { path: 'add', component: ListAddComponent },
  { path: 'display/:cityName', component: ListDisplayComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
