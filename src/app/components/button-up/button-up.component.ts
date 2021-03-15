import { Component, OnInit } from '@angular/core';
import './scroll-window';

@Component({
  selector: 'app-button-up',
  templateUrl: './button-up.component.html',
  styleUrls: ['./button-up.component.css']
})
export class ButtonUpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scrollUp() {
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
  }

}
