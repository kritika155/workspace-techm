import { Component, OnInit } from '@angular/core';
import { Person} from '../person';
@Component({
  selector: 'person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
person:Person;
persons;
  constructor() { }
  resetPerson()
  {
    this.person={
      id:0,
      name:'',
      phone:'',
      email:'',
      address:''
    }
  }
  addPerson(){
    this.persons.push(this.person);
    this.resetPerson();
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
  deleteAll(){
    this.persons=[];
  }
  ngOnInit() {
    this.resetPerson();
   this.persons=[
    {id:1,name:'Kritika',phone:'09999993999',email:'roykritika00@gmail.com',address:'bangalore'},
    {id:2,name:'Ashish',phone:'09999993999',email:'royashish00@gmail.com',address:'bangalore'}
  ];
  }

}
