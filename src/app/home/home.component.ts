import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import artisansData from '../../assets/datas.json';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [RouterLink,CommonModule],
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Nos artisans du mois';
  artisansDuMois: any[] = [];

  ngOnInit(): void {
    // Tu choisis les artisans du mois ici (filtrage simple ou basé sur une propriété)
    this.artisansDuMois = artisansData.filter(a => a.top === true);

    // ou manuellement : this.artisansDuMois = artisansData.slice(0, 2);
  }
}

