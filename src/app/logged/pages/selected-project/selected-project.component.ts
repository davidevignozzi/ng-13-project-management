import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { Project } from 'src/app/mock/project/project';
// mock
import { Activity } from 'src/app/mock/activities/activity';

@Component({
  templateUrl: './selected-project.component.html',
  styleUrls: ['./selected-project.component.scss']
})
export class SelectedProjectComponent implements OnInit {

  project: Project = new Project();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectService: ProjectService
  ) { }

  ngOnInit(): void {
    //Get Project
    this.route.params.subscribe(params => {
      const key = params['key'];
      this.projectService.getProject(key).subscribe(
        project => {
          // 404 page not found
          if(project === undefined){
            this.router.navigateByUrl('404');
            return;
          }
          
          this.project = project;
        } 
      );
    });
  }

}
