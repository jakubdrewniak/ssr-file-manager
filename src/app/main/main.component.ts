import { Component, OnInit, ViewChild } from '@angular/core';
import { TestService } from '../communication/test.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  filesList: string[]

  constructor(
    private readonly testService: TestService
  ) { }

  ngOnInit() {
    this.testService.getTestData().subscribe(({ files }) => {
      this.filesList = files
    })
  }
}
