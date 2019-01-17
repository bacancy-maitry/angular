import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppService } from 'src/app/app.service';
import { AppInterface } from './app-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Practice app';

  public displayData: Array<AppInterface[]> = [];
  public postData:any;

  constructor(private http: HttpClient, private appService: AppService){}

  ngOnInit(){
    this.getData();
  }
  // Observable Data
  getData(): void{
    console.log(this.displayData);
    this.appService.getData().subscribe(response => { 
      if(response){
      this.displayData.push(response); 
        console.log(response);
      }
    });
  }

  addData(name: string): void{
    this.appService.addData({name} as AppInterface).subscribe(name => {
      this.postData = (name);
    });
  }

}
