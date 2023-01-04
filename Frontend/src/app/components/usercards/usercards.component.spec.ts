import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercardsComponent } from './usercards.component';

describe('UsercardsComponent', () => {
  let component: UsercardsComponent;
  let fixture: ComponentFixture<UsercardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsercardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsercardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
