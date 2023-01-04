import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevsLoginComponent } from './devs-login.component';

describe('DevsLoginComponent', () => {
  let component: DevsLoginComponent;
  let fixture: ComponentFixture<DevsLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevsLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevsLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
