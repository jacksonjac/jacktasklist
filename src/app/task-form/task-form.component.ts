import { Component, Input,OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  @Input() tasklist: string[] = [];
  newtask: string ="";

  constructor(private toastr: ToastrService) {}

  ngOnInit(): void {
      
  }

  addtask() {
   let task = this.newtask.trim()

   if(task === ""){
   

   }else{
    const uppercaseTask = this.newtask.toUpperCase(); // Convert the new task to uppercase
    this.tasklist.push(uppercaseTask);
    localStorage.setItem("my-task",JSON.stringify(this.tasklist))
    this.toastr.success('Task added Successfully');
    this.newtask = ''; // Clear 
   }
     
   
    
  }



  

}
