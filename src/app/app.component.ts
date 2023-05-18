import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { TaskGroupLoadService } from './task-groups/task-group-load.service';
import { TestTaskGroup } from './created-tasks/test/test-task-group';
import { TestTaskGroup2 } from './created-tasks/test2/test-task-group-2';

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
    taskGroupLoadService.register(new TestTaskGroup())
    taskGroupLoadService.register(new TestTaskGroup2())
  }
}
