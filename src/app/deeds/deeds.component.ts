import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deeds',
  templateUrl: './deeds.component.html',
  styleUrls: ['./deeds.component.css']
})
export class DeedsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  openDeedsCard(){
    this.router.navigate(["home/deeds/deeds-card"])
  }

  openMmCard(){
    this.router.navigate(["home/deeds/mm-card"])
  }

  openPrkCard(){
    this.router.navigate(["home/deeds/park-card"])
  }
}
