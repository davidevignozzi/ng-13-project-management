import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'card-xl',
  templateUrl: './card-xl.component.html',
  styleUrls: ['./card-xl.component.scss']
})
export class CardXlComponent implements OnInit {

  @Input() title:string = '';
  @Input() subtitle:string = '';
  @Input() paragraph:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
