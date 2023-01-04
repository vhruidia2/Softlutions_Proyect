import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevsBackComponent } from './devs-back.component';

describe('DevsBackComponent', () => {
  let component: DevsBackComponent;
  let fixture: ComponentFixture<DevsBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevsBackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevsBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
