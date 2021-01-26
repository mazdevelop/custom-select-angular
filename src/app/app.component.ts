import { Component } from '@angular/core';
import * as Interfaces from './interfaces/item';
import * as Models from './models/item';


@Component({
  selector: '#app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  public constructor(){
    this.collection =[
      new Models.Item('1','New Mexico','https://images.unsplash.com/photo-1552323543-4cffa4ffffe3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80','Taken at dusk in the badlands of Northern New Mexico'),
      new Models.Item('2','Missouri','https://images.unsplash.com/photo-1574121007661-a3344b1834c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80','Calm and Inspired | Trees in fall colors along a lake shoreline'),
      new Models.Item('3','Texas','https://images.unsplash.com/photo-1531218150217-54595bc2b934?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80','In photographing the best looks of a burgeoning city I captured a photo of the Austin skyline'),

    ];
    for(let index:number = 1 ; index <= this.collection.length -1;index++){
      
      let currentItem : Interfaces.Item = this.collection[index];
      
      if(currentItem.id === '2'){

        this.selectedItem = currentItem;
        break;

      }

    }
  }
  public collection : Interfaces.Item[];
  public selectedItem :Models.Item;
}
