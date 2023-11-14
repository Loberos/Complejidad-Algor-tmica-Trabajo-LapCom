import {Component, EventEmitter, Output} from '@angular/core';
import {LaptopsService} from "../../services/laptops/laptops.service";

@Component({
  selector: 'app-recommed',
  templateUrl: './recommed.component.html',
  styleUrls: ['./recommed.component.css']
})
export class RecommedComponent {
  filtros: string[] = [];
  laptops: any[] = [];
  precioMin: string="";
  precioMax: string="";

  constructor(private laptopsService: LaptopsService) { }

  toggleFiltro(filtro: string) {
    const index = this.filtros.indexOf(filtro);
    if (index === -1) {
      this.filtros.push(filtro);
    } else {
      this.filtros.splice(index, 1);
    }
  }



  filtrarLaptops(laptops: any[]) {
    return laptops.filter(laptop => {
      return this.filtros.every(filtro => {
        const [filtroKey, filtroValue] = filtro.split(':');
        return laptop[filtroKey] === filtroValue;
      });
    });
  }
}
