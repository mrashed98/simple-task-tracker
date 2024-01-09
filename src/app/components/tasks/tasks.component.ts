import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/task.service';
import { Task } from '../../Task';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TasksService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  deleteTask(task:Task):void {
    this.taskService.deleteTask(task).subscribe(
      () => (
        this.tasks = this.tasks.filter(t => t.id !== task.id)
      )
    );
    }

    toggleReminder (task :Task) {
      task.reminder = !task.reminder;
      this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(task:Task){
    this.taskService.addNewTask(task).subscribe(
      (task) => (
        this.tasks.push(task)
      )
    );
  }
}