import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})
export class NoticeComponent implements OnInit {

   @Input() title = ''; 
   @Input() source = ''; 
   @Input() content = ''; 
   @Input() date = ''; 
   @Input() link = ''; 

  constructor() { }

  ngOnInit(): void {
  }

}
