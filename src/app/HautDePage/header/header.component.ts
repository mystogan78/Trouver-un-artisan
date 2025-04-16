import { Component, AfterViewInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

declare var bootstrap: any;


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit { ngAfterViewInit() {
  const navLinks = document.querySelectorAll('.nav-link');
  const navbarCollapse = document.querySelector('.navbar-collapse');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navbarCollapse?.classList.contains('show')) {
        (navbarCollapse as HTMLElement).classList.remove('show');
      }
    });
  });
}
  title = 'Trouve ton artisan';
  searchTerm: string = '';

  constructor(private router: Router) {}

  onSearch(): void {
    if (this.searchTerm.trim()) {
      // Naviguer vers ArtisansComponent avec le terme de recherche en paramètre
      this.router.navigate(['/artisans'], { queryParams: { search: this.searchTerm } });
    }
  }

}