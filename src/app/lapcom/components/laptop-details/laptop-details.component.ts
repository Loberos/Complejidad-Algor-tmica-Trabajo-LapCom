import {Component, OnInit} from '@angular/core';
import {Laptop} from "../../model/laptop";
import {ActivatedRoute} from "@angular/router";
import {LaptopsService} from "../../services/laptops/laptops.service";

@Component({
  selector: 'app-laptop-details',
  templateUrl: './laptop-details.component.html',
  styleUrls: ['./laptop-details.component.css']
})

export class LaptopDetailsComponent implements OnInit {
  laptop: Laptop | undefined;
  recommendations: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private laptopService: LaptopsService
  ) {}

  ngOnInit(): void {
    this.getLaptopDetails();
    this.getRecommendations();
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
}
