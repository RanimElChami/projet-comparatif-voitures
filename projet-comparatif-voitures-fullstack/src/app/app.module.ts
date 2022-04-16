import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { CarAdvertisementAdminComponent } from './car-advertisement-admin/car-advertisement-admin.component';
import { ReservationRecapComponent } from './reservation-recap/reservation-recap.component';
import { ReservationConfirmationComponent } from './reservation-confirmation/reservation-confirmation.component';
import { AdvertisementsComponent } from './advertisements/advertisements.component';
import { AdvertisementComponent } from './advertisement/advertisement.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AdminHomeComponent,
    CarAdvertisementAdminComponent,
    ReservationRecapComponent,
    ReservationConfirmationComponent,
    AdvertisementsComponent,
    AdvertisementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
