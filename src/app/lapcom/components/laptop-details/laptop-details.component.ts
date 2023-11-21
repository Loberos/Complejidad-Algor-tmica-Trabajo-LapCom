import {Component, OnInit} from '@angular/core';
import {Laptop} from "../../model/laptop";
import {ActivatedRoute} from "@angular/router";
import {LaptopsService} from "../../services/laptops/laptops.service";

interface FilterParams {
  brand: string;
  status: string;
  price: string;
  typeStorage: string;
  cpu: string;
  gpu: string;
  storage: string;
}



@Component({
  selector: 'app-laptop-details',
  templateUrl: './laptop-details.component.html',
  styleUrls: ['./laptop-details.component.css']
})

export class LaptopDetailsComponent implements OnInit {
  laptop: Laptop | undefined;
  recommendations: any[] = [];

  filterParams: FilterParams = {
    brand: 'False',
    status: 'False',
    price: 'False',
    typeStorage: 'False',
    cpu: 'False',
    gpu: 'False',
    storage: 'False'
  };

  constructor(
    private route: ActivatedRoute,
    private laptopService: LaptopsService
  ) {}

  ngOnInit(): void {
    this.getLaptopDetails();
    this.getRecommendations();
    // @ts-ignore
    const laptopId = +this.route.snapshot.paramMap.get('id');
  }

  getLaptopDetails(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.laptopService.getLaptopById(id).subscribe((data) => {
      this.laptop = data;
    });
  }

  getRecommendations(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.laptopService.getRecommendationsById(id).subscribe((data) => {
      this.recommendations = data;
    });
  }



  filterLaptops() {
    // @ts-ignore
    const laptopId = +this.route.snapshot.paramMap.get('id');
    this.laptopService.filterLaptops(laptopId, this.filterParams).subscribe(data => {
      console.log(data);
    });
  }


}
