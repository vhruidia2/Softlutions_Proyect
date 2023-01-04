import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevcardComponent } from './devcard.component';

describe('DevcardComponent', () => {
  let component: DevcardComponent;
  let fixture: ComponentFixture<DevcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
