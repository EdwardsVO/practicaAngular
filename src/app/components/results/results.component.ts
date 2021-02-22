import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  @Input() taskToDo: number = 0;
  @Input() taskCompleted: number = 0;
  
  constructor() { }

  ngOnInit(): void {
  }

  refreshCompleted(){
    this.taskCompleted++;
  }


}
