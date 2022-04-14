import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarAdvertisementAdminComponent } from './car-advertisement-admin.component';

describe('CarAdvertisementAdminComponent', () => {
  let component: CarAdvertisementAdminComponent;
  let fixture: ComponentFixture<CarAdvertisementAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarAdvertisementAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarAdvertisementAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
