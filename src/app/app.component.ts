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
  heading = 'Practice app';

  public displayData: Array<AppInterface> = [];

  constructor(private http: HttpClient, private appService: AppService){}

  ngOnInit(){
    this.getData();
  }
  // Observable Data
  getData(): void{
    console.log(this.displayData);
    this.appService.getData().subscribe(response => { 
      // if(response){
      this.displayData = response.slice(0,10); 
        console.log(response);
      // }
    });
  }

  addData(title: string): void{
    this.appService.addData({title} as AppInterface).subscribe(response => {
      this.displayData.push(response);
      console.log(response);
    });
  }

  deleteData(id: AppInterface): void{
    this.displayData = this.displayData.filter(i => i !== id);
    this.appService.deleteData(id).subscribe();
  }

  updateData(v): void{
    this.appService.updateData(v).subscribe();
  }

}
