import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevsDetailComponent } from './devs-detail.component';

describe('DevsDetailComponent', () => {
  let component: DevsDetailComponent;
  let fixture: ComponentFixture<DevsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevsDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
