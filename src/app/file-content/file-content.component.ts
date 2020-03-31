import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'file-content',
  templateUrl: './file-content.component.html',
  styleUrls: ['./file-content.component.scss']
})
export class FileContentComponent implements OnInit {

  @Input() content: string

  constructor(
  ) { }

  ngOnInit() {
  }
}
