import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data: string[] = ['Angular', 'JavaScript', 'RxJs'];

  constructor() { }
}
