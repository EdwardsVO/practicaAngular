import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Button } from 'protractor';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  
  @Input() taskBlock: Array<string> = [];
  @Input() emptyList: boolean  = true;
  @Input() index = 0;
  taskCompletedNumber = 0;
  @Output() taskCompleted: EventEmitter <number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    
  }
  deleteTask(note: string){
    let del = this.taskBlock.indexOf(note);   
    this.taskBlock.splice(del,1);
    this.taskCompletedNumber++;
    this.taskCompleted.emit(this.taskCompletedNumber);
  }

}



