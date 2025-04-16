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
  title ='Comment choisir un artisan ?';
  steps: Array<{ title: string, text: string }> = [
    { title: '1. Choisir la catégorie d\'artisanat', text: 'Sélectionnez une catégorie d artisanat parmi nos options disponibles au niveau du menu . Vous pourrez ensuite voir une liste d\'artisans spécialisés dans cette catégorie. ' },
    { title: '2. Choisir un artisan', text: 'Parcourez la liste des artisans disponibles dans la catégorieque vous avez choisie. ' },
    { title: '3. Le contacter via le formulaire', text: 'Une fois que vous avez choisi votre artisan, contactez-le directement via le formulaire de contact sur sa page. Il recevra votre message.' },
    { title: '4. Réponse sous 48h', text: 'Vous recevrez une réponse sous 48 heures. L\'artisan prendra contact avec vous pour discuter de votre demande. ' }
  ];
  titleArtisansDuMois = 'Voici nos 3 artisans du mois';
  artisansDuMois: any[] = [];

  ngOnInit(): void {
    // Tu choisis les artisans du mois ici (filtrage simple ou basé sur une propriété)
    this.artisansDuMois = artisansData.filter(a => a.top === true);

    // ou manuellement : this.artisansDuMois = artisansData.slice(0, 2);
  }
}

