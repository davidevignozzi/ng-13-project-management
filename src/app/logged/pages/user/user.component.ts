import { TitleCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MockUser } from 'src/app/mock/user/user-mock';

@Component({
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers: [TitleCasePipe]
})
export class UserComponent implements OnInit {

  user = MockUser;

  constructor(
    private titlecasePipe: TitleCasePipe
  ) { }

  ngOnInit(): void {
   
  }

}
