import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevslistComponent } from './devslist.component';

describe('DevslistComponent', () => {
  let component: DevslistComponent;
  let fixture: ComponentFixture<DevslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevslistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
