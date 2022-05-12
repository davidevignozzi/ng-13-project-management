import { Component, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Project } from 'src/app/mock/project/project';
import { ModalService } from 'src/app/logged/services/modal.service';
import { ProjectService } from 'src/app/logged/services/project.service';

@Component({
  selector: 'modal-new-project',
  templateUrl: './modal-new-project.component.html',
  styleUrls: ['./modal-new-project.component.scss']
})
export class ModalNewProjectComponent implements OnInit, OnDestroy {

  projects: Project[] = this.projectService.projects;

  @Input() id = '';
  private element;
  newProjectForm: FormGroup;
  notValid = false;

  constructor(
    private modalService: ModalService,
    private projectService: ProjectService,
    private el: ElementRef,
    private fb: FormBuilder,
    private router: Router
  ) { 
    this.element = el.nativeElement;

    // FORM
    this.newProjectForm = this.fb.group({
      'name' : ['', Validators.required],
      'description' : ['']
    });
  }

  ngOnInit(): void {
    // MODAL
    let modal = this;

    // ensure id attribute exists
    if (!this.id) {
      console.error('modal must have an id');
      return;
    }

    // move element to bottom of page (just before </body>) so it can be displayed above everything else
    // document.querySelector('body').appendChild(this.element);

    // close modal on background click
    this.element.addEventListener('click', function (e: any) {
      if (e.target.className === 'modal') {
        modal.close();
      }
    });

    // add self (this modal instance) to the modal service so it's accessible from controllers
    this.modalService.add(this);
  }

  // remove self from modal service when directive is destroyed
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

  // on click Confirm 
  pushProject(): void {
    let future = this.newProjectForm.controls;
    let last = this.projects.length; //? it will be the last because user will add a new project.

    if(this.newProjectForm.valid){
      // push new project
      this.projects.push(
        {
          id: this.projects.length + 1,
          key: future['name'].value,
          description: future['description'].value,
          lastEdit: 'ora',
          activities: []
        }
      );
  
      // Reset Form
      this.newProjectForm.reset();
  
      // Close Modal
      this.close();
      
      //Navigate to new Project Page
      this.router.navigate([this.projects[last].key]);
      
    } else { // if form not valid
      this.notValid = true;
    }
  }

}
