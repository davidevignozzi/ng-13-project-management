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
  }

}
