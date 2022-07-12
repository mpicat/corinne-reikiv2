import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AccueilComponent } from './accueil/accueil.component';
import { FooterComponent } from './footer/footer.component';
import { AProposComponent } from './a-propos/a-propos.component';
import { ConfidentialiteComponent } from './confidentialite/confidentialite.component';
import { MentionsComponent } from './mentions/mentions.component';
import { FormulesComponent } from './formules/formules.component';
import { PrestationsComponent } from './prestations/prestations.component';
import { ReikiComponent } from './reiki/reiki.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AccueilComponent,
    FooterComponent,
    AProposComponent,
    ConfidentialiteComponent,
    MentionsComponent,
    FormulesComponent,
    PrestationsComponent,
    ReikiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
