import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopFilterSidebarComponent } from './laptop-filter-sidebar.component';

describe('LaptopFilterSidebarComponent', () => {
  let component: LaptopFilterSidebarComponent;
  let fixture: ComponentFixture<LaptopFilterSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LaptopFilterSidebarComponent]
    });
    fixture = TestBed.createComponent(LaptopFilterSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
