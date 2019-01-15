import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Practice app';

  displayData: any;
  // private dataUrl = 'https://jsonplaceholder.typicode.com/posts'; //Working
  // private dataUrl = 'https://jsonplaceholder.typicode.com/posts/1'
  // private dataUrl = 'https://jsonplaceholder.typicode.com/posts?userId=1';
  // private dataUrl = 'https://reqres.in/api/users?page=2'; //Working
  private dataUrl = 'https://reqres.in/api/unknown'; //Working
  // private dataUrl = 'https://reqres.in/api/unknown/2';
  // private dataUrl = 'https://reqres.in/api/users';
  

  // constructor(private http: Http) {}
  constructor(private http: HttpClient, private appService: AppService){}

  // getData(){
  //   this.http.get(this.dataUrl).subscribe(response => {
  //     this.displayData = response;
  //   })
  // }

  ngOnInit(){
    this.getData();
  }
  //Observable Data
  getData(): void{
    this.appService.getData().subscribe(data => this.displayData = data);
  }

}
