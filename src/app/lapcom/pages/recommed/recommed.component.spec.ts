import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommedComponent } from './recommed.component';

describe('RecommedComponent', () => {
  let component: RecommedComponent;
  let fixture: ComponentFixture<RecommedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecommedComponent]
    });
    fixture = TestBed.createComponent(RecommedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
