
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NgModule } from '@angular/core';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';
import { CrudlistService } from '../crudlist.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 /* displayedColumns:string[]=['position','value'];
values:string[]=[];
newValue:string='';
constructor(private dataService:DataService){
  this.values=dataService.getValues();
}
addValue():void{
if(this.newValue.trim()!==''){
  this.dataService.addValue(this.newValue);
  this.newValue='';
  this.values=this.dataService.getValues();
}
}

}
*/


values: any[] = [];
  newValue: string = '';
  editId: number | null = null;
  updatedValue: string = '';

  displayedColumns: string[] = ['name', 'actions']; // Add this line


  constructor(private crudListService: CrudlistService,private router:Router) {}

  ngOnInit(): void {
    this.fetchValues();
  }

  fetchValues() {
    this.crudListService.getValues().subscribe((data: any[]) => {
      this.values = data;
      });
    
  }

  addValue() {
    if (this.newValue.trim() !== '') {
      this.crudListService.addValue(this.newValue).subscribe((response: any) => {
        this.values.push(response); // Update the values array with the response
        this.newValue = ''; // Clear the newValue field
        this.fetchValues();
      });
    }
  }
  

  editValue(id: number) {
    this.editId = id;
    const valueToEdit = this.values.find(value => value.id === id);
    this.updatedValue = valueToEdit ? valueToEdit.name : '';
  }

  updateValue(id: number) {
    const valueToUpdate = this.values.find(value => value.id === id);
    if (valueToUpdate && this.updatedValue.trim() !== '') {
      valueToUpdate.name = this.updatedValue;
      this.crudListService.updateValue(id.toString(), valueToUpdate.name).subscribe(() => {
        this.editId = null;
      });
    }
  }
  
  deleteValue(id: number) {
    this.crudListService.deleteValue(id.toString()).subscribe(() => {
      this.values = this.values.filter(value => value.id !== id);
    });
  }
}