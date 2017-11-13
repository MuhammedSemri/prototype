import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {
  logo = '../assets/g4782.png';
  profile = '../assets/profile.jpg';
  
  constructor() { }

  ngOnInit() {
  }

}
