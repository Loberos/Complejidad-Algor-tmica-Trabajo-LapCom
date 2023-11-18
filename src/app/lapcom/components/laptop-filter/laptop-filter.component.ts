import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LaptopsService} from "../../services/laptops/laptops.service";
import {Laptop} from "../../model/laptop";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {Router} from "@angular/router";

@Component({
  selector: 'app-laptop-filter',
  templateUrl: './laptop-filter.component.html',
  styleUrls: ['./laptop-filter.component.css']
})
export class LaptopFilterComponent  {
  filterForm: FormGroup;

  laptops: Laptop[] = [];
  paginatedLaptops: Laptop[] = [];

  brandOptions = ['', 'ACER', 'APPLE', 'DELL','ASUS', 'LG', 'MSI', 'RAZER', 'SAMSUNG', 'TOSHIBA', 'GIGABYTE', 'HP', 'ALURIN'];
  typeStorageOptions = ['', 'SSD'];
  cpuOptions = ['', 'Intel', 'AMD'];
  gpuOptions = ['', 'RTX', 'GTX', 'T', 'Radeon'];
  order = ['', 'DESC', 'ASC'];
  pageSize = 8;
  currentPage = 0;
  totalItems = 0;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(private fb: FormBuilder, private laptopService: LaptopsService,private router:Router) {
    this.filterForm = this.fb.group({
      brand: ["", Validators.required],
      priceMin: [null, [Validators.required, Validators.min(1)]],
      priceMax: [null, [Validators.required, Validators.min(1)]],
      typeStorage: ["", Validators.required],
      cpu: ["", Validators.required],
      gpu: ["", Validators.required],
      order: ["", Validators.required]
    });
  }
  paginateLaptops(): void {
    const startIndex = this.currentPage * this.pageSize;
    this.paginatedLaptops = this.laptops.slice(startIndex, startIndex + this.pageSize);
  }

  buscarConFiltros() {
    const filters = this.filterForm.value;
    this.laptopService.getLaptopsByFilter(filters).subscribe(
      (data) => {
        this.laptops = data;
        this.totalItems = this.laptops.length;
        this.paginateLaptops();
        this.paginator.length = this.totalItems;
        this.paginator.pageSize = this.pageSize;
        this.paginator.page.subscribe((event: PageEvent) => {
          this.currentPage = event.pageIndex;
          this.paginateLaptops();
        });
      },
      (error) => {
        console.error('Error fetching laptops:', error);
      }
    );
  }
  verMas(id: number): void {
    this.router.navigate(['/laptops', id]);
  }
}


