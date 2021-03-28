import { Component, OnInit } from '@angular/core';
import hf from "./header-fixed.js";
import { TranslocoService } from "@ngneat/transloco";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private translocoService: TranslocoService) {}

  ngOnInit() {
    hf({ locale: this.translocoService.getActiveLang() });
  }

  changeLocale({ event: { target }, locale }) {
    this.translocoService.setActiveLang(locale);
    [...target.parentElement.children].forEach(e => e.classList.remove("active"));
    target.classList.add("active");
  }
}
