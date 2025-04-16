import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import artisansData from '../../assets/datas.json';
import { CategoryFilterPipe } from '../pipes/category-filter.pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-fabrication',
  imports: [CommonModule, CategoryFilterPipe,RouterLink],
  templateUrl: './fabrication.component.html',
  styleUrl: './fabrication.component.scss'
})
export class FabricationComponent {
title ="Fabrication"
artisans = artisansData;
}
