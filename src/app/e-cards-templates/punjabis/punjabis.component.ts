import { Component, OnInit } from '@angular/core';
import * as htmlToImage from 'html-to-image';

@Component({
  selector: 'app-punjabis',
  templateUrl: './punjabis.component.html',
  styleUrls: ['./punjabis.component.scss']
})
export class PunjabisComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  downloadProduct() {
    const node = document.querySelector('.template-container') as HTMLElement;

    htmlToImage.toJpeg(node, { quality: 1 })
      .then(function (dataUrl) {
        const link = document.createElement('a');
        link.download = 'e-card-product';
        link.href = dataUrl;
        link.click();
      });
  }

  DonateProduct() {

  }
}
