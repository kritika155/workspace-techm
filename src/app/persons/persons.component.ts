import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {
persons=[{name:'Kritika',email:'roykritika00@gmail.com',address:'bangalore'},
{name:'Ashish',email:'royashish00@gmail.com',address:'bangalore'}];
buttonClick(){
  alert("Hello to angular world!");
}
  constructor() { }

  ngOnInit() {
  }

}
