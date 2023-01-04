import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersregisterComponent } from './usersregister.component';

describe('UsersregisterComponent', () => {
  let component: UsersregisterComponent;
  let fixture: ComponentFixture<UsersregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersregisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
