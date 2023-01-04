import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlldevsComponent } from './alldevs.component';

describe('AlldevsComponent', () => {
  let component: AlldevsComponent;
  let fixture: ComponentFixture<AlldevsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlldevsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlldevsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
