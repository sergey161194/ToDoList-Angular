import { Component, OnInit } from '@angular/core';
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  text = '';

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  addItem() {
    this.dataService.data.push(this.text);
    this.text = '';
  }

}
