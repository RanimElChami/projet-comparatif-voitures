import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReservationRecapComponent } from './reservation-recap/reservation-recap.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { HomeComponent } from './home/home.component';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { AdvertisementsComponent } from './advertisements/advertisements.component';
import { ReservationConfirmationComponent } from './reservation-confirmation/reservation-confirmation.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'adminhome',component:AdminHomeComponent},
  {path:'advertisement/:id',component:AdvertisementComponent},
  {path:'advertisements',component:AdvertisementsComponent},
  {path:'reservationrecap',component:ReservationRecapComponent},
  {path:'reservationconf',component:ReservationConfirmationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
