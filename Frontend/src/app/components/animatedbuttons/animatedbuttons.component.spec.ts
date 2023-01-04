import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedbuttonsComponent } from './animatedbuttons.component';

describe('AnimatedbuttonsComponent', () => {
  let component: AnimatedbuttonsComponent;
  let fixture: ComponentFixture<AnimatedbuttonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimatedbuttonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimatedbuttonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
