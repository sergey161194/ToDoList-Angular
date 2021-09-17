import { Component, OnInit } from '@angular/core';
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(public dataService: DataService) { }

  ngOnInit(): void {

  }

  delete(event) {

  let index: number = this.dataService.data.findIndex((item)=> {
      if (item === event) {
        return true;
      } else {
        return false;
      }

    });
  this.dataService.data.splice(index, 1)
  }
}
