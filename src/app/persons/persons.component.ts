import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {
  person:any={};
persons=[
  {id:1,name:'Kritika',phone:'09999993999',email:'roykritika00@gmail.com',address:'bangalore'},
  {id:2,name:'Ashish',phone:'09999993999',email:'royashish00@gmail.com',address:'bangalore'}
];
addPerson(){
  this.persons.push(this.person);
  this.person={
    id:0,
    name:'',
    email:'',
    phone:'',
    address:''
  }
}
  constructor() 
  {
     this.person={
    id:1,
    name:'Kritika',
    phone:'9999999009',
    email:'roykritika00@gmail.com',
    address:'bangalore'
  }};
  deleteAll(){
    this.persons=[];
  }
  deletePerson(id){
    var List=[];
    for(var i=0;i<this.persons.length;i++)
    {
  if(id!=(this.persons[i].id))
  {
    List.push(this.persons[i]);
  }
    }
    this.persons=List;
  }
  ngOnInit() {
  }

}
