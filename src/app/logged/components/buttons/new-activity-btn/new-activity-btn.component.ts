import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/logged/services/modal.service';

@Component({
  selector: 'new-activity-btn',
  templateUrl: './new-activity-btn.component.html',
  styleUrls: ['./new-activity-btn.component.scss']
})
export class NewActivityBtnComponent implements OnInit {

  constructor(
    private modalService: ModalService
  ) { }

  ngOnInit(): void {
  }

  // open modal
  openModal(id: string):void {
    this.modalService.open(id);
  }

}
