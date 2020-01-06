import { Component, OnInit } from "@angular/core";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from "@angular/cdk/drag-drop";
import data from "./data";

interface KeyValuePair {
  Name: string;
  disabled: boolean;
}
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "dragDrop-practice";
  availableHeaders: KeyValuePair[] = [];
  columns: KeyValuePair[] = [];
  rows: KeyValuePair[] = [];
  ngOnInit() {
    this.data();
  }
  data() {
    data.forEach(item => {
      switch (item.Group_Id) {
        case "1":
          this.availableHeaders.push({
            Name: item.Name,
            disabled: item.disabled
          });
          break;
        case "2":
          this.columns.push({
            Name: item.Name,
            disabled: item.disabled
          });
          break;
        case "3":
          this.rows.push({
            Name: item.Name,
            disabled: item.disabled
          });
          break;
      }
    });
  }
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
  reset() {
    this.availableHeaders = [];
    this.columns = [];
    this.rows = [];
    this.data();
  }
}
