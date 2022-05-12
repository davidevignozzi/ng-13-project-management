import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/mock/project/project';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  projects: Project[] = this.projectService.projects;

  constructor(
    private projectService: ProjectService
  ) { }

  ngOnInit(): void {

  }

}
