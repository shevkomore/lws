import { Component, OnInit, ViewChild } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { TaskGroupLoadService } from '../task-groups/task-group-load.service';
import { TaskGroupComponent } from '../task-groups/task-group/task-group.component';
import { IndexedInfoLabel } from '../task-groups/indexed-info-label';
import { CommonModule } from '@angular/common';
import { TaskGroupsModule } from '../task-groups/task-groups.module';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, TaskGroupsModule],
})
export class HomePage implements OnInit{
  @ViewChild("groupView", {read: TaskGroupComponent})
  groupView!: TaskGroupComponent
  taskList : IndexedInfoLabel[] = [];
  showHint: boolean = true

  constructor(
    public tasks : TaskGroupLoadService
    
  ) {}
  ngOnInit(): void {
    this.taskList = this.tasks.Labels
  }

  callTasks(who: IndexedInfoLabel){
    this.showHint = false
    this.tasks.load(this.groupView, who)
  }
}
