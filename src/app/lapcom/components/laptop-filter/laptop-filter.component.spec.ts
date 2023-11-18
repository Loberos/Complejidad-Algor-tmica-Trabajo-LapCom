import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopFilterComponent } from './laptop-filter.component';

describe('LaptopFilterComponent', () => {
  let component: LaptopFilterComponent;
  let fixture: ComponentFixture<LaptopFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LaptopFilterComponent]
    });
    fixture = TestBed.createComponent(LaptopFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
