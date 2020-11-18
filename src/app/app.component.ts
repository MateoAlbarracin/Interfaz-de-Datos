import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'dlr-proyect';

  data = [
    {endpoint:"Null", metodo:"Null", seguridad:"Null", tabla:"Null"}
  ];

  model:any = {};
  model2:any = {};
  hideUpdate:boolean = true;

  addData():void{
    this.data.push(this.model);
    this.model = {};

  };

  deleteData(i):void{
    this.data.splice(i, 1);
  };

  myValue;
  editData(i):void{
    this.hideUpdate = false;
    this.model2.endpoint = this.data[i].endpoint;
    this.model2.metodo = this.data[i].metodo;
    this.model2.seguridad = this.data[i].seguridad;
    this.model2.tabla = this.data[i].tabla;
    this.myValue = 0
  };

  updateData():void{
    let i = this.myValue;
    for(let j = 0; j < this.data.length; j++){
      if(i == j){
        this.data[i] = this.model2;
        this.model2 = {}
      }
    }
    this.hideUpdate = true;
  }
}
