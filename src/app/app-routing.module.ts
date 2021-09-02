import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: '', component: BlogComponent },
  {
    path: 'edit/:id',
    component: EditComponent,
  },
  { path: '**', component: BlogComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
