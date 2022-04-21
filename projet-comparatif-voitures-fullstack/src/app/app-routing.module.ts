import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReservationRecapComponent } from './reservation-recap/reservation-recap.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AddAdvertisementComponent } from './add-advertisement/add-advertisement.component';
import { EditAdvertisementComponent } from './edit-advertisement/edit-advertisement.component';
import { HomeComponent } from './home/home.component';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { AdvertisementsComponent } from './advertisements/advertisements.component';
import { ReservationConfirmationComponent } from './reservation-confirmation/reservation-confirmation.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'adminHome',component:AdminHomeComponent},
  {path:'addNewAdvertisement',component:AddAdvertisementComponent},
  {path:'editAdvertisement',component:EditAdvertisementComponent},
  {path:'advertisement',component:AdvertisementComponent},
  {path:'advertisement/:id',component:AdvertisementComponent},
  {path:'advertisements',component:AdvertisementsComponent},
  {path:'reservationRecap',component:ReservationRecapComponent},
  {path:'reservationConfirmation',component:ReservationConfirmationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
