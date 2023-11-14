import {Component, EventEmitter, Input, Output} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BaseService} from "../../../share/services/base.service";

@Component({
  selector: 'app-laptop-filter-sidebar',
  templateUrl: './laptop-filter-sidebar.component.html',
  styleUrls: ['./laptop-filter-sidebar.component.css']
})
export class LaptopFilterSidebarComponent {
  filtros: string[] = [];
  laptops: any[] = [];
  precioMin: number=12;
  precioMax: number=12;


  //ESTO ESTA MAL :v
  constructor(private http: HttpClient) { }

  toggleFiltro(filtro: string) {
    const index = this.filtros.indexOf(filtro);
    if (index === -1) {
      this.filtros.push(filtro);
    } else {
      this.filtros.splice(index, 1);
    }
  }

}
