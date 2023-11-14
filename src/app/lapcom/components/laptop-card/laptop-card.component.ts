import {Component, OnInit} from '@angular/core';
import {LaptopsService} from "../../services/laptops/laptops.service";

@Component({
  selector: 'app-laptop-card',
  templateUrl: './laptop-card.component.html',
  styleUrls: ['./laptop-card.component.css']
})
export class LaptopCardComponent implements OnInit {
  laptops: any[] = [];

  constructor(private laptopsService: LaptopsService) { }

  ngOnInit(): void {
    this.getLaptops();
  }

  getLaptops() {
    this.laptopsService.getAllLaptops().subscribe(
      (data: any) => {
        this.laptops = data; // Asumiendo que la respuesta contiene un array de laptops
      },
      error => {
        // Manejo de errores
        console.error('Hubo un error al obtener los laptops:', error);
      }
    );
  }

}
