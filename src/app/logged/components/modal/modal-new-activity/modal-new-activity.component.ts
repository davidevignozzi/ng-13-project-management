import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalService } from 'src/app/logged/services/modal.service';
import { ProjectService } from 'src/app/logged/services/project.service';
import { Activity } from 'src/app/mock/activities/activity';
import { Project } from 'src/app/mock/project/project';

@Component({
  selector: 'modal-new-activity',
  templateUrl: './modal-new-activity.component.html',
  styleUrls: ['./modal-new-activity.component.scss']
})
export class ModalNewActivityComponent implements OnInit, OnDestroy {

  @Input() id = '';
  @Input() tags = [];

  private element;

  @Output() sendActivity = new EventEmitter<Activity>();

  constructor(
    private modalService: ModalService,
    private el: ElementRef,
    private route: ActivatedRoute,
    private router: Router,
    private projectService: ProjectService,
    private fb: FormBuilder
  ) {
    this.element = el.nativeElement;

    // FORM
    this.newActivityForm = this.fb.group({
      'name': ['', Validators.required],
      'description' : [''],
      'status': this.status,
      'tag': [''],
      'colorTag': ['']
    });
  }

  project: Project = new Project();
  activities: Activity[] = [];
  newActivityForm: FormGroup;
  status: FormControl = new FormControl();
  notValid = false;

  ngOnInit(): void {
    let modal = this;
    // ensure id attribute exists
    if (!this.id) {
      console.error('modal must have an id');
      return;
    }

    // move element to bottom of page (just before </body>) so it can be displayed above everything else
    // document.querySelector('app-body').appendChild(this.element);

    // close modal on background click
    this.element.addEventListener('click', function (e: any) {
      if (e.target.className === 'modal') {
        modal.close();
      }
    });

    // add self (this modal instance) to the modal service so it's accessible from controllers
    this.modalService.add(this);

    // GET PROJECT
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
      this.activities = this.project.activities;
    });
  }

  ngOnDestroy(): void {
    this.modalService.remove(this.id);
    this.element.remove();
  }

  // open modal
  open(): void {
    this.element.style.display = 'block';
    // document.body.classList.add('modal-open');
  } 

  // close modal
  close(): void {
    this.element.style.display = 'none';
    // document.body.classList.remove('modal-open');
  }

}
