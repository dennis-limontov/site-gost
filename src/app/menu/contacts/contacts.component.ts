import { Component, OnInit } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';
import maps from './maps';
import './accordition.js';

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

  showCurrentContact(ev): void {
    const index = Array.from(ev.target.parentElement.children).indexOf(ev.target);
    const contacts = document.getElementsByClassName('contact');
    const contactNames = document.getElementsByClassName('contact-name');
    const buttons = document.querySelectorAll('.buttons button');
    const contactList = document.getElementsByClassName('contact-list');
    const contactInfoList = document.getElementsByClassName('contact-info');
    const summaries = document.getElementsByTagName('summary');

    for (let i = 0; i < contacts.length; i++) {
      contacts[i].classList.add('hidden');
      contactNames[i].classList.add('hidden');
      buttons[i].classList.remove('current');
      contactList[i].classList.add('hidden');
      // contactInfoList[i].style.opacity = "0";
    }

    contacts[index].classList.remove('hidden');
    contactNames[index].classList.remove('hidden');
    contactList[index].classList.remove('hidden');

    anime({
      targets: summaries[index],
      rotateZ: [0, 720],
      duration: 500,
      easing: 'easeInOutQuad'
    });

    anime({
      targets: contactInfoList[index],
      opacity: [0, 1],
      duration: 500,
      easing: 'easeInQuad'
    });

    ev.target.classList.add('current');
  }

  scrollToTable({ target }): void {
    if (target.open) {
      const table = target.getElementsByTagName('table');

      if (table && table[0]) {
        // table[0].scrollIntoView({ block: "start", behavior: "smooth" });
        const topOffset = table[0].getBoundingClientRect().top + window.scrollY;
        console.log(topOffset);
        window.scrollTo({ left: 0, top: topOffset - 100, behavior: 'smooth' });
      }
    }
  }
}
