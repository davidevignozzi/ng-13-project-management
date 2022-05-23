import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/mock/project/project';
import { ProjectService } from '../../services/project.service';

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  projects: Project[] = this.projectService.projects;

  constructor(
    private projectService: ProjectService
  ) { }

  ngOnInit(): void {
    this.orderByDate();
  }

  // to order projects by date
  orderByDate(): void {
    this.projects = this.projects.sort(
      (a, b) =>
      Date.parse(b.lastEdit.toString()) - Date.parse(a.lastEdit.toString())
    );  
  }

}
