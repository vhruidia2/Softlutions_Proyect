import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalcardRightComponent } from './personalcard-right.component';

describe('PersonalcardRightComponent', () => {
  let component: PersonalcardRightComponent;
  let fixture: ComponentFixture<PersonalcardRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalcardRightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalcardRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
