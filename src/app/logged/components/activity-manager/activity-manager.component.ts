import { Component, Input, OnInit } from '@angular/core';
import { Activity } from 'src/app/mock/activities/activity';
import { Project } from 'src/app/mock/project/project';

@Component({
  selector: 'activity-manager',
  templateUrl: './activity-manager.component.html',
  styleUrls: ['./activity-manager.component.scss']
})
export class ActivityManagerComponent implements OnInit {

  @Input() project: Project = new Project();
  @Input() activities: Activity[] = [];

  // * ACTIVITIES
  
  todoes: Activity[] = [];
  progresses: Activity[] = [];
  completes: Activity[] = [];
  refuses: Activity[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log(this.project);
    this.checkStatus();
    console.log(this.activities, this.todoes, this.progresses, this.completes, this.refuses);
  }

  // * STATUS
  // check if activity is Todo, in progress, completed or refused
  checkStatus(): void {
    this.activities.forEach(act => {
      this.sortingStatus(act);
    });
  }

  // check the status of "item" and push it in the correct column
  sortingStatus(item: Activity): void {
    switch(item.status){
      case ('todo'):
        this.todoes.push(item);
      break;
      case('progress'):
        this.progresses.push(item);
      break;
      case('completed'):
        this.completes.push(item);
      break;
      case('refused'):
        this.refuses.push(item);
      break;
    }
  }

}
