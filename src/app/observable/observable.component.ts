import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Config } from 'protractor';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {
  dataGet: any;


  constructor(private http:HttpClient) { }

  public url="https://jsonplaceholder.typicode.com/posts";
  public con: Config;
  

  ngOnInit(): void {
  }

  showData(){
    return this.http.get<Config>(this.url).subscribe((data:Config) => this.dataGet=data);
  }

}
