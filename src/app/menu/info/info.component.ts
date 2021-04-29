import $ from 'jquery';
import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import sm from './sendmessage.js';
import smlp from './sendmessage-lp.js';
import { letProto } from 'rxjs-compat/operator/let';

let spoilerSet = false;
let filePickerSet = false;

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit, AfterViewChecked {
  constructor() { }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 400,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true,
    margin: 25,
    autoplay: true,
    autoplayTimeout: 2500
  };

  ngOnInit() {
    sm();
    smlp();
  }

  ngAfterViewChecked() {
    if ($('.spoiler').length > 0 && !spoilerSet) {
      $('.spoiler .details').each((i, e) => {
        $(e).click(({ target }) => {
          if (target.nodeName === 'SUMMARY' || $(target).hasClass('details')) {
            $(e).toggleClass('spoiler-closed');
          }
        });
      });
      spoilerSet = true;
    }

    if ($('.file-picker').length > 0 && !filePickerSet) {
      $('.input-file').each((i, e) => {
        $(e).on('change', () => {
          const node = $(`#file-count-${e.id.slice(-1)}`);
          if (e.files.length < 3) {
            node.get(0).innerText = [...e.files].map(({name}) => name).join(', ');
          } else {
            node.get(0).innerText = `${e.files.length} files`;
          }
        });
      });
      filePickerSet = true;
    }
  }
}
