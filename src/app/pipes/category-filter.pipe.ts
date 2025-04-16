import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryFilter',
  standalone: true
})
export class CategoryFilterPipe implements PipeTransform {
  transform(artisans: any[], category: string): any[] {
    if (!category) return artisans;
    return artisans.filter(a => a.category.toLowerCase() === category.toLowerCase());
  }
}
