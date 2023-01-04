import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyuserDetailsComponent } from './myuser-details.component';

describe('MyuserDetailsComponent', () => {
  let component: MyuserDetailsComponent;
  let fixture: ComponentFixture<MyuserDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyuserDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyuserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
