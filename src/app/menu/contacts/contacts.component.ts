import { Component, OnInit } from '@angular/core';
import maps from "./maps";
import "./accordition.js";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    maps();
  }

  showCurrentContact(ev) : void {
    var index = Array.from(ev.target.parentElement.children).indexOf(ev.target);
    var contacts = document.getElementsByClassName("contact");
    for (var i = 0; i < contacts.length; i++) {
      contacts[i].classList.add("hidden");
    }
    contacts[index].classList.remove("hidden");
  }
}
