import { Component, OnInit } from '@angular/core';
import artisansData from '../../../assets/datas.json';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-artisans',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterLink],
  templateUrl: './artisans.component.html',
  styleUrls: ['./artisans.component.scss']
})
export class ArtisansComponent implements OnInit {
  artisans = artisansData;
  filteredArtisans = artisansData;
  searchTerm: string = '';
  isSearching: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.searchTerm = params['search'] || '';
      if (this.searchTerm) {
        this.isSearching = true;
      }
      this.filterArtisans();
    });
  }

  filterArtisans(): void {
    const term = this.searchTerm.toLowerCase();
  
    this.filteredArtisans = this.artisans.filter(a =>
      a.name.toLowerCase().includes(term) ||
      a.specialty.toLowerCase().includes(term) ||
      a.location.toLowerCase().includes(term) ||
      a.category.toLowerCase().includes(term)
    );
  
    if (this.isSearching && this.filteredArtisans.length === 0) {
      this.router.navigate(['/page404']);
    }
  }
  

  onSearch(): void {
    this.filterArtisans();
  }
  getStars(note: number): number[] {
    return Array(5).fill(0).map((_, i) => i < note ? 1 : 0);
  }
  
}
