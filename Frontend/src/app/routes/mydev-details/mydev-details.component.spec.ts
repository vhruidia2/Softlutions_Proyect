import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MydevDetailsComponent } from './mydev-details.component';

describe('MydevDetailsComponent', () => {
  let component: MydevDetailsComponent;
  let fixture: ComponentFixture<MydevDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MydevDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MydevDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
