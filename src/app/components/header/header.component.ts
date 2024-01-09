import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})

export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker';
  showAddTask: boolean = false;
  subscribtion: Subscription;

  constructor (private uiService:UiService, private router:Router){
    this.subscribtion = this.uiService.onToggle().subscribe(
      (showTask) => (this.showAddTask = showTask)
    );
  }

  ngOnInit(): void {}

  toggleAddTask() {
    this.uiService.toggleAddTask();
  }

  hasRoute(route:string){
    return this.router.url === route
  }
  
}