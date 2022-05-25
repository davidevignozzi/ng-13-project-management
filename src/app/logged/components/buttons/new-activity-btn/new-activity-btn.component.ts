import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ModalService } from 'src/app/logged/services/modal.service';
import { Activity } from 'src/app/mock/activities/activity';

@Component({
  selector: 'new-activity-btn',
  templateUrl: './new-activity-btn.component.html',
  styleUrls: ['./new-activity-btn.component.scss']
})
export class NewActivityBtnComponent implements OnInit {

  @Output() sendActivity = new EventEmitter<Activity>();
  
  constructor(
    private modalService: ModalService
  ) { }

  ngOnInit(): void {
  }

  // open modal
  openModal(id: string):void {
    this.modalService.open(id);
  }

  recieveAndSend(event: Activity){
    this.sendActivity.emit(event);
  }
}
