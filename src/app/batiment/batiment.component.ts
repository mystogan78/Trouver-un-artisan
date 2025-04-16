import { Component } from '@angular/core';
import { CategoryFilterPipe } from '../pipes/category-filter.pipe';
import artisansData from '../../assets/datas.json';


import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-batiment',
  imports: [CategoryFilterPipe,CommonModule, RouterLink],
  templateUrl: './batiment.component.html',
  styleUrl: './batiment.component.scss'
})
export class BatimentComponent {
title ="Bâtiment"
artisans = artisansData;
}
