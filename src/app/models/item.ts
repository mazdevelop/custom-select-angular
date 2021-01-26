import * as Interfaces from './interfaces/item';
export class Item implements Interfaces.Item{

  public constructor( id:string ,name:string,image:string,description:string){
    this.id = id;
    this.name = name;
    this.image =  image;
    this.description = description;

  }
  public id:string;
  public name:string;
  public image:string;
  public description:string;

}