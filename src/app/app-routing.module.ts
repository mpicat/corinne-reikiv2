import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AProposComponent } from './a-propos/a-propos.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ConfidentialiteComponent } from './confidentialite/confidentialite.component';
import { MentionsComponent } from './mentions/mentions.component';

const routes: Routes = [
  { path: '', component: AccueilComponent},
  { path: 'apropos', component: AProposComponent},
  { path: 'confidentialite', component: ConfidentialiteComponent},
  { path: 'mentions', component: MentionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
