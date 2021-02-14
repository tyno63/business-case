import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewGarageComponent } from './new-garage.component';

describe('NewGarageComponent', () => {
  let component: NewGarageComponent;
  let fixture: ComponentFixture<NewGarageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewGarageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewGarageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
