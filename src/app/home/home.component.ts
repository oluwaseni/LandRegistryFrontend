import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  /* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "8px";
}


openDashboard(){
  this.router.navigate(["home/dashboard"])
}


openDeeds(){
  this.router.navigate(["home/deeds"])
}

openMortgage(){
  this.router.navigate(["home/mortgage"])
}

openPayment(){
  this.router.navigate(["home/payment"])
}

openAbout(){
  this.router.navigate(["home/about"])
}

}
