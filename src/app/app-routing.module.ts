import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AProposComponent } from './a-propos/a-propos.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ConfidentialiteComponent } from './confidentialite/confidentialite.component';
import { FormulesComponent } from './formules/formules.component';
import { MentionsComponent } from './mentions/mentions.component';
import { PrestationsComponent } from './prestations/prestations.component';
import { ReikiComponent } from './reiki/reiki.component';

const routes: Routes = [
  { path: '', component: AccueilComponent},
  { path: 'apropos', component: AProposComponent},
  { path: 'confidentialite', component: ConfidentialiteComponent},
  { path: 'mentions', component: MentionsComponent},
  { path: 'formules', component: FormulesComponent},
  { path: 'prestations', component: PrestationsComponent},
  { path: 'prestations/reiki', component: ReikiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
