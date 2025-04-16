import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './HautDePage/header/header.component';
import { FooterComponent } from './BasDePage/footer/footer.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports:[RouterOutlet, HeaderComponent, FooterComponent], // Correctement inclus
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']  // Utilisation correcte de styleUrls
})
export class AppComponent {
  title = 'Trouve ton artisan';
}
