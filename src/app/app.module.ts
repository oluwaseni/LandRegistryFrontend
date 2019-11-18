import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PaymentComponent } from './payment/payment.component';
import { MortgageComponent } from './mortgage/mortgage.component';
import { DeedsComponent } from './deeds/deeds.component';
import { AboutComponent } from './about/about.component';
import { MMCardComponent } from './deeds/m-mcard/m-mcard.component';
import { PrkCardComponent } from './deeds/prk-card/prk-card.component';
import { DeedsCardComponent } from './deeds/deeds-card/deeds-card.component';
import { RegisterComponent } from './Auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { QuestionsComponent } from './questions/questions.component';
import { AnswersComponent } from './answers/answers.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    PaymentComponent,
    MortgageComponent,
    DeedsComponent,
    AboutComponent,
    MMCardComponent,
    PrkCardComponent,
    DeedsCardComponent,
    RegisterComponent,
    LoginComponent,
    QuestionsComponent,
    AnswersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
