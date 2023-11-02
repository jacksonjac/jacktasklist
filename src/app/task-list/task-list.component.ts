import { Component,OnInit, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  @Input() tasks: string[] = []
   
  constructor(private toastr: ToastrService) {}

  ngOnInit(): void {
    // You can access 'tasks1' in your component logic here.
  }

  removetask(index:number){
    this.tasks.splice(index,1)
    localStorage.setItem("my-task",JSON.stringify(this.tasks))
    this.toastr.info('Task Deleted');
    
  }

  finishtask(index:number){
    this.tasks.splice(index,1,"finish")
  }
}




