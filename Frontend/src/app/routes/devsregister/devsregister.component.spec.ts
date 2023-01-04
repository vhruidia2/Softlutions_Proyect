import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevsregisterComponent } from './devsregister.component';

describe('DevsregisterComponent', () => {
  let component: DevsregisterComponent;
  let fixture: ComponentFixture<DevsregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevsregisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevsregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
