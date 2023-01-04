import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevsFrontComponent } from './devs-front.component';

describe('DevsFrontComponent', () => {
  let component: DevsFrontComponent;
  let fixture: ComponentFixture<DevsFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevsFrontComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevsFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
