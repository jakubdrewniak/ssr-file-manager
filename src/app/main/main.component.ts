import { Component, OnInit, ViewChild } from '@angular/core';
import { TestService, TextFile } from '../communication/test.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  filesList: string[]
  selectedFile: TextFile

  constructor(
    private readonly testService: TestService
  ) { }

  ngOnInit() {
    this.testService.getFilesList().subscribe(({ files }) => {
      this.filesList = files
    })
  }

  selectFile(fileName: string) {
    this.testService.getFileByName(fileName).subscribe(file => {
      this.selectedFile = file
    })
  }
}
