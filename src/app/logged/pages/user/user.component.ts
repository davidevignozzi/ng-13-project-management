import { Component, OnInit } from '@angular/core';
import { MockUser } from 'src/app/mock/user/user-mock';

@Component({
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user = MockUser;

  constructor() { }

  ngOnInit(): void {
    this.capitalizeFirstLetter(this.user.name)
  }

  capitalizeFirstLetter(word: string): void {
    word.charAt(0).toUpperCase() + word.slice(1);
    console.log(word);
  }

}
