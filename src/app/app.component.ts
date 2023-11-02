import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
  title = 'TO DO APP';
  taskList:string[] = []


  ngOnInit(): void {
    const storedTaskList = localStorage.getItem("my-task");
  
    if (storedTaskList) {
      this.taskList = JSON.parse(storedTaskList);
    }
  }
}


