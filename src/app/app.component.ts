import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { TaskGroupLoadService } from './task-groups/task-group-load.service';
import { TestTaskGroup } from './created-tasks/test/test-task-group';
import { TestTaskGroup2 } from './created-tasks/test2/test-task-group-2';
import { Labwork1 } from './created-tasks/lw1/labwork1';
import { Labwork2 } from './created-tasks/lw2/labwork2';
import { ExamTaskGroup } from './created-tasks/exam/exam-task-group';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class AppComponent{
  constructor(
    taskGroupLoadService: TaskGroupLoadService
  ) {
    // taskGroupLoadService.register(new TestTaskGroup())
    // taskGroupLoadService.register(new TestTaskGroup2())
    taskGroupLoadService.register(new Labwork1())
    taskGroupLoadService.register(new Labwork2())
    taskGroupLoadService.register(new ExamTaskGroup())
  }
}
