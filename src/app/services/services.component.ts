import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import artisansData from '../../assets/datas.json';
import { CategoryFilterPipe } from '../pipes/category-filter.pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services',
  imports: [CommonModule, CategoryFilterPipe, RouterLink],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  title ="Services"
  artisans = artisansData;

}
