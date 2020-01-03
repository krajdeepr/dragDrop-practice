import { Component, OnInit, DoCheck } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck{
  title = 'dragDrop-practice';
  initialAvailableHeaders:string[];
  initialColumns:string[];
  initialRows:string[];

  availableHeaders = [
    'Series & Expression Names',
    'Currency',
    'Date(Qn YYYY format)'
  ];

  columns = [
    'Start date',
    'End date',
    'Frequency',
    'Series Name',
    'Series Code'
  ];

  rows=[
    'Date (locale format)'
  ];
  ngDoCheck(){
  this.initialAvailableHeaders=[
    'Series & Expression Names',
    'Currency',
    'Date(Qn YYYY format)'
  ];
  this.initialColumns=[
    'Start date',
    'End date',
    'Frequency',
    'Series Name',
    'Series Code'
  ];
  this.initialRows=[
    'Date (locale format)'
  ];
}
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
  reset(){
    this.availableHeaders=this.initialAvailableHeaders;
    this.columns=this.initialColumns;
    this.rows=this.initialRows;
  }
}
