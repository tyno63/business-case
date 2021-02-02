import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarageModifyComponent } from './garage-modify.component';

describe('GarageModifyComponent', () => {
  let component: GarageModifyComponent;
  let fixture: ComponentFixture<GarageModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GarageModifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GarageModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
