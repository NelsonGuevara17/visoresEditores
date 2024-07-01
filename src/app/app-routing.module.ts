import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { VisordocComponent } from './visordoc/visordoc.component';
import { VisorpdfComponent } from './visorpdf/visorpdf.component';
import { VisorxlsxComponent } from './visorxlsx/visorxlsx.component';

const routes: Routes = [
  { path: '', redirectTo: '/principal', pathMatch: 'full' },
  { path: 'principal',component: PrincipalComponent},
  { path: 'visordoc' ,component: VisordocComponent},
  { path: 'visorrpdf' , component: VisorpdfComponent},
  { path: 'visorxlsx' , component: VisorxlsxComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
