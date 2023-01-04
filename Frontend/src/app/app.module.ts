import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './routes/home/home.component';
import { Page404Component } from './routes/page404/page404.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';
import { CarrouselBannerComponent } from './components/carrousel-banner/carrousel-banner.component';
import { PersonalCardComponent } from './components/personal-card/personal-card.component';
import { PersonalcardRightComponent } from './components/personalcard-right/personalcard-right.component';
import { AnimatedbuttonsComponent } from './components/animatedbuttons/animatedbuttons.component';
import { LoginComponent } from './routes/login/login.component';
import { SignupComponent } from './routes/signup/signup.component';
import { DevsFrontComponent } from './routes/devs-front/devs-front.component';
import { DevsBackComponent } from './routes/devs-back/devs-back.component';
import { AsesoriasComponent } from './routes/asesorias/asesorias.component';
import { FormsModule } from '@angular/forms';
import { DevsregisterComponent } from './routes/devsregister/devsregister.component';
import { UsersregisterComponent } from './routes/usersregister/usersregister.component';
import { AlldevsComponent } from './routes/alldevs/alldevs.component';
import { AllusersComponent } from './routes/allusers/allusers.component';
import { UsercardsComponent } from './components/usercards/usercards.component';
import { UsersDetailComponent } from './routes/users-detail/users-detail.component';
import { DevsDetailComponent } from './routes/devs-detail/devs-detail.component';
import { CookieService } from 'ngx-cookie-service';
import { DevsLoginComponent } from './routes/devs-login/devs-login.component';
import { UsersLoginComponent } from './routes/users-login/users-login.component';
import { DevcardComponent } from './components/devcard/devcard.component';
import { UserslistComponent } from './routes/userslist/userslist.component';
import { DevslistComponent } from './routes/devslist/devslist.component';
import { MydevDetailsComponent } from './routes/mydev-details/mydev-details.component';
import { MyuserDetailsComponent } from './routes/myuser-details/myuser-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Page404Component,
    NavbarComponent,
    CardComponent,
    CarrouselBannerComponent,
    PersonalCardComponent,
    PersonalcardRightComponent,
    AnimatedbuttonsComponent,
    LoginComponent,
    SignupComponent,
    DevsFrontComponent,
    DevsBackComponent,
    AsesoriasComponent,
    DevsregisterComponent,
    UsersregisterComponent,
    AlldevsComponent,
    AllusersComponent,
    UsercardsComponent,
    UsersDetailComponent,
    DevsDetailComponent,
    DevsLoginComponent,
    UsersLoginComponent,
    DevcardComponent,
    UserslistComponent,
    DevslistComponent,
    MydevDetailsComponent,
    MyuserDetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
