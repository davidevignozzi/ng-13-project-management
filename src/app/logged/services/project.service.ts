import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from 'src/app/mock/project/project';
import { PROJECTS } from 'src/app/mock/project/project-mock';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projects: Project[] = PROJECTS;

  constructor() { }

  // get all projects
  getProjects(): Observable<Project[]> {
    return of(this.projects);
  }

  // search
  search(query: string): Observable<Project[]> {
    const filteredProjects: Project[] = PROJECTS.filter(a => a.key.toUpperCase().includes(query.toUpperCase()));
    return of(filteredProjects);
  }

  // get single project with determinated key
  getProject(key: string): Observable<Project> {
    const projects: Project[] = PROJECTS.filter(a => a.key === key);
    return of(projects[0]);
  }
  
}