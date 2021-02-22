import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {TodoListComponent } from '../todo-list/todo-list.component'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  bar = document.getElementById("input-text")
  emptyList = true;
  task = 0;
  taskCompleted = 0;
  taskIn = ""
  tasks: Array<string> = [];

  constructor() { }

  ngOnInit(): void {
    
  }

  addTaskNumber() {
      this.emptyList = false;
      this.tasks.push(this.taskIn);
      this.taskIn = "";
      this.task = this.tasks.length; 
      console.log(this.taskCompleted)
  }
  refreshCompleted(num: number){
    this.taskCompleted = num;
    this.task --;
    console.log("entra")
  }
  
}
