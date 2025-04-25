import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CategoryFilterPipe } from '../pipes/category-filter.pipe';
import artisansData from '../../assets/datas.json';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-alimentation',
  imports: [CommonModule, CategoryFilterPipe, RouterLink],
  templateUrl: './alimentation.component.html',
  styleUrl: './alimentation.component.scss'
})
export class AlimentationComponent {
title ="Alimentation"
artisans = artisansData;


}
