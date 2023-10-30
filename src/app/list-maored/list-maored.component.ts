import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-list-maored',
  templateUrl: './list-maored.component.html',
  styleUrls: ['./list-maored.component.css']
})
export class ListMaoredComponent {
  typeSettings:boolean=false;
  days!:Array<string>;

  constructor(private translate:TranslateService){
    this.translate.stream('days').subscribe(data=>{
      this.days=[];
      for(let d in data){
        this.days.push(data[d]);
      }
    })
  }
}
