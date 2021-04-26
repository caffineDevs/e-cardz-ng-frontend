import { Component, OnInit } from '@angular/core';
import * as htmlToImage from 'html-to-image';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  productSampleDownload(){
    const node = document.querySelector('.lhs') as HTMLElement;

    htmlToImage.toJpeg(node, { quality: 1 })
      .then(function (dataUrl) {
        const link = document.createElement('a');
        link.download = 'e-card-product-sample';
        link.href = dataUrl;
        link.click();
      });
  }
}
