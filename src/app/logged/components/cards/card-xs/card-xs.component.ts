import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'card-xs',
  templateUrl: './card-xs.component.html',
  styleUrls: ['./card-xs.component.scss']
})
export class CardXsComponent implements OnInit {

  @Input() title = '';
  @Input() subtitle = '';

  constructor() { }

  ngOnInit(): void {
  }

}
