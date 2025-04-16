import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BatimentComponent } from './batiment/batiment.component';
import { ServicesComponent} from './services/services.component';
import { FabricationComponent } from './fabrication/fabrication.component';
import { AlimentationComponent } from './alimentation/alimentation.component';
import { ArtisansComponent } from './pages/artisans/artisans.component';
import { ArtisansDetailsComponent } from './pages/artisans.details/artisans.details.component';
import { MentionsLegalesComponent } from './BasDePage/mentions.legales/mentions.legales.component';
import { DonneesPersonnellesComponent } from './BasDePage/donnees.personnelles/donnees.personnelles.component';
import { AccessibiliteComponent } from './BasDePage/accessibilite/accessibilite.component';
import { CookiesComponent } from './BasDePage/cookies/cookies.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
export const routes: Routes = [
    {path:'', component: HomeComponent},
    {path:'batiment', component : BatimentComponent},
    {path:'services', component: ServicesComponent},
    {path:'fabrication', component: FabricationComponent},
    {path: 'alimentation', component: AlimentationComponent},
    { path: 'artisans', component: ArtisansComponent },
    {path:'artisans/:id', component: ArtisansDetailsComponent},
    {path:'mentions-Légales',component: MentionsLegalesComponent},
    {path:'donnees-personnelles',component: DonneesPersonnellesComponent},
    {path:'accessibilite',component: AccessibiliteComponent},
    {path:'cookies',component: CookiesComponent},
    {path:'page404', component: PageNotFoundComponent},
    {path:'**', redirectTo: ''} // redirection vers la page d'accueil si la route n'existe pas 
];
