import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Project } from 'src/app/mock/project/project';
import { PROJECTS } from 'src/app/mock/project/project-mock';
import { animate, style, transition, trigger } from '@angular/animations';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProjectService } from '../../services/project.service';
import { ModalService } from '../../services/modal.service';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],

  // animation
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({opacity: 0}),
        animate('0.1s',
          style({opacity: 1})
        )
      ]),
      transition(':leave', [
        style({opacity: 1}),
        animate('0.1s',
          style({opacity: 0})
        )
      ])
    ])
  ]
})
export class SidebarComponent implements OnInit {

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();

  // when is false sidenav is collapsed
  // when is true sidenav is expanded
  collapsed = false;
  screenWidth = 0;

  projects: Project[] = this.projectService.projects;

  searchingForm: FormGroup;
  isSearching = false;
  query = '';

  constructor(
    private projectService: ProjectService,
    private fb: FormBuilder,
    private modalService: ModalService
  ) { 
    this.searchingForm = fb.group({
      'search': ['']
    });
  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }

  // click to expand nav
  expandeNav():void {
    this.collapsed = true;
    this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  // click to collapse nav
  closeNav():void {
    this.collapsed = false;
    this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth});

    // When Sidebar will collapsed the search will be restarted
    this.isSearching = false;
    this.query = '';
    this.searchingForm.reset();
    this.projects = PROJECTS;
  }

  // open modal
  openModal(id: string):void {
    this.modalService.open(id);
  }

  // Search
  // EXPAND
  toggleSearch(){
    this.isSearching = true;
  }
  // SEARCH
  searching(): void {
    this.query = this.searchingForm.controls['search'].value;
    this.projectService
    .search(this.query) // query => input value
    .subscribe(projects => (this.projects = projects));
  }
}
