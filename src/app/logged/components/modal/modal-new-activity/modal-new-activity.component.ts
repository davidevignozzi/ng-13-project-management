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
      'colorTag': ['#ffffff']
    });
  }

  project: Project = new Project();
  activities: Activity[] = [];
  tags: any = [];
  tagNames: string[] = [];
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

    // GET TAGS
    this.getTags();
    this.getTagNames();
  }

  ngOnDestroy(): void {
    this.modalService.remove(this.id);
    this.element.remove();
  }

  // tags
  getTags(): void {
    let arr: any[] = [];
    this.activities.forEach(a => {
      arr.push(a.tag);
    });
    let names = arr.map(t => t.name);
    this.tags = arr.filter(({name}, index) => !names.includes(name, index + 1));
  }

  getTagNames(): void {
    this.tags.forEach((tag: {name: string, color: any}) => {
      this.tagNames.push(tag.name);
    });
  }

  // check if tag user is typing already exist
  checkTagInput(): void {
    let group = this.newActivityForm.controls;
    let futureTag = group['tag'].value;
    let futureTagColor = group['colorTag'];

    // if tag already exist the color will be the same
    this.tags.forEach((tag: { name: string; color: any; }) => {
      if(futureTag.toLowerCase() === tag.name.toLowerCase()){
        futureTagColor.setValue(tag.color);
      }
      if(futureTagColor.value === tag.color){
        futureTag = tag.name
      }
    });
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

  // event to be pushed
  pushActivity(){
    let future = this.newActivityForm.controls;

    // define new activity that will be pushed in project.component
    let futureActivity = 
    {
      name: future['name'].value,
      description: future['description'].value,
      status: future['status'].value,
      expanded: false,
      tag:{
        name: future['tag'].value, //future['tag'].value
        color: future['colorTag'].value,
      }
    }

    // check if activty name already exists
    for (let i = 0; i < this.activities.length; i++) {
      const element = this.activities[i];

      if(future['name'].value === element.name){
        this.notValid = true;
        return
      }
    }

    // check validity of the form
    if (this.newActivityForm.valid) {

      // send the activity that will be pushed
      this.sendActivity.emit(futureActivity);

      // Reset Form
      this.newActivityForm.reset();

      // Close Modal
      this.close();  
      
    } else {
      this.notValid = true;
    }
    
  }
}
