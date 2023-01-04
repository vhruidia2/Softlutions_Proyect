import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrouselBannerComponent } from './carrousel-banner.component';

describe('CarrouselBannerComponent', () => {
  let component: CarrouselBannerComponent;
  let fixture: ComponentFixture<CarrouselBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrouselBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrouselBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
