import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { TestService } from '../communication/test.service';
import { Observable, fromEvent } from 'rxjs';
import { debounceTime, flatMap } from 'rxjs/operators';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements AfterViewInit {
  filesList: string[]
  private clicks$: Observable<any>

  @ViewChild('button') button

  constructor(
    private readonly testService: TestService
  ) { }

  ngAfterViewInit() {
    this.clicks$ = fromEvent(this.button.nativeElement, 'click')

    this.clicks$
      .pipe(
        debounceTime(500),
        flatMap(() => this.testService.getTestData()))
      .subscribe(({files}) => {
        this.filesList = files
      })
  }
}
