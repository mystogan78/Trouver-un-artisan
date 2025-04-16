import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // ✅ Corrigé
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; // ✅ Corrigé
import { faFacebook, faTwitter, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [RouterModule, FontAwesomeModule] // ✅ Ajouté ici
})
export class FooterComponent {
  lien1 = "Mentions Légales";
  lien2 = "Données Personnelles";
  lien3 = "Accessibilité";
  lien4 = "Cookies";

  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faGithub = faGithub;
  faLinkedin = faLinkedin;

  adresse = "101 cours Charlemagne,\nCS 20033,\n69269 Lyon Cedex 02,\nFrance";
  teL = "+33 (0)4 26 73 00 00";
}


