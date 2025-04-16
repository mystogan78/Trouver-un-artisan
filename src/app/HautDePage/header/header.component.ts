
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { Router, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,CommonModule,RouterLinkActive,RouterModule,FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  title ="Trouve ton artisan"
  searchTerm: string = '';

  constructor(private router: Router) {}

  onSearch(): void {
    if (this.searchTerm.trim()) {
      // Naviguer vers ArtisansComponent avec le terme de recherche en paramètre
      this.router.navigate(['/artisans'], { queryParams: { search: this.searchTerm } });
    }
  }
}