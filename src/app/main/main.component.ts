import { Component, OnInit } from '@angular/core';
import { TestService } from '../communication/test.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(
    private readonly testService: TestService
  ) { }

  ngOnInit() {
    this.testService.getTestData()
      .subscribe(data => {
        console.log(data, (<any>data).prop1, (<any>data).prop2)
      })
  }

}
