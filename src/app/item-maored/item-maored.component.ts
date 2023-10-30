import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-maored',
  templateUrl: './item-maored.component.html',
  styleUrls: ['./item-maored.component.css']
})

export class ItemMaoredComponent {
  @Input() day!:string;
  
  active:boolean=false;
  startTimeH:any;
  endTimeH:any;
  startTimeM=0;
  endTimeM=0;
  chooseStTime:boolean=false;
  chooseEndTime:boolean=false;
  constructor(){

  }
}