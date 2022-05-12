import { Component, OnInit } from '@angular/core';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'webapp',
  templateUrl: './webapp.component.html',
  styleUrls: ['./webapp.component.scss']
})
export class WebappComponent implements OnInit {

  title = 'prj-management';
  isSideNavCollapsed = false;
  screenWidth = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onToggleSideNav(data: SideNavToggle): void{
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }

}
