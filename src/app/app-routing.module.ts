import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MortgageComponent } from './mortgage/mortgage.component';
import { PaymentComponent } from './payment/payment.component';
import { DeedsComponent } from './deeds/deeds.component';
import { AboutComponent } from './about/about.component';
import { DeedsCardComponent } from './deeds/deeds-card/deeds-card.component';
import { MMCardComponent } from './deeds/m-mcard/m-mcard.component';
import { PrkCardComponent } from './deeds/prk-card/prk-card.component';
import { QuestionsComponent } from './questions/questions.component';


const routes: Routes = [
  {path: '', redirectTo: 'home/dashboard', pathMatch: 'full'},
  {path:'home/deeds', redirectTo: 'home/deeds/deeds-card', pathMatch: 'full'},
  {path: 'home', component: HomeComponent,
  children: [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'mortgage', component: MortgageComponent},
    {path: 'payment', component: PaymentComponent},
    {path: 'questions', component: QuestionsComponent},
    {path: 'deeds', component: DeedsComponent,
    children:[
      
      {path: 'deeds-card', component: DeedsCardComponent},
      {path: 'mm-card', component: MMCardComponent},
      {path: 'park-card', component: PrkCardComponent},
    ]
  },
    {path: 'about', component: AboutComponent}
  ]
}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
