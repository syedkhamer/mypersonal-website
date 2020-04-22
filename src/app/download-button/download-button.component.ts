import { Component, OnInit } from '@angular/core';

declare var require: any
const FileSaver = require('file-saver');

@Component({
  selector: 'app-download-button',
  templateUrl: './download-button.component.html',
  styleUrls: ['./download-button.component.css']
})
export class DownloadButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  downloadPdf() {
    const pdfUrl = './assets/sample.pdf';
    const pdfName = 'Syed-Khamer-Ahamed-resume';
    FileSaver.saveAs(pdfUrl, pdfName);
  }
  openDoc( ) {
    const pdfUrl = './assets/sample.pdf';
    const pdfName = 'Syed-Khamer-Ahamed-resume';
    window.open(pdfUrl , '_blank', '', true);
  }
}
