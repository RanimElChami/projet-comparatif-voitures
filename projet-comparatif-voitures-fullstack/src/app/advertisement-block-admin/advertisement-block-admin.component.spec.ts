import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisementBlockAdminComponent } from './advertisement-block-admin.component';

describe('AdvertisementBlockAdminComponent', () => {
  let component: AdvertisementBlockAdminComponent;
  let fixture: ComponentFixture<AdvertisementBlockAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvertisementBlockAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisementBlockAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
