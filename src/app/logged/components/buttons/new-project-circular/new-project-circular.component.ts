import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/logged/services/modal.service';
import { ProjectService } from 'src/app/logged/services/project.service';
import { Project } from 'src/app/mock/project/project';
import { PROJECTS } from 'src/app/mock/project/project-mock';

@Component({
  selector: 'new-project-circular',
  templateUrl: './new-project-circular.component.html',
  styleUrls: ['./new-project-circular.component.scss']
})
export class NewProjectCircularComponent implements OnInit {

  project: Project[] = this.projectService.projects;

  constructor(
    private modalService: ModalService,
    private projectService: ProjectService
  ) { }

  ngOnInit(): void {
  }

  // open modal
  openModal(id: string):void {
    this.modalService.open(id);
  }

}
