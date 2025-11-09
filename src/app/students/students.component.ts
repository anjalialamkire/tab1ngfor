import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Istudents } from '../modules/students';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
    

    uuid = () => {
    return (
        String('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx')
    ).replace(/[xy]/g, (character) => {
        const random = (Math.random() * 16) | 0;
        const value = character === "x" ? random : (random & 0x3) | 0x8;
        return value.toString(16);
    });
};
  studentsArr:Array<Istudents> =[
    {
      fname:"jhon",
      lname:"doe",
      email:"jd@gmail.com",
      contact:23456789,
      stdId:'1234'
    },

    {
      fname:"vaishanvi",
      lname:"patil",
      email:"vp@gmail.com",
      contact:543267898,
      stdId:'321'
    },
     {
      fname:"may",
      lname:"doe",
      email:"md@gmail.com",
      contact:543267898,
      stdId:'23455'
    }
  ]


@ViewChild('fname') fnameRef !: ElementRef;
@ViewChild('lname') lnameRef!: ElementRef;
@ViewChild('email') emailRef !: ElementRef;
@ViewChild('contact')contactRef !: ElementRef;

test !: string

  constructor(
    private _matSnackBar : MatSnackBar 
  ) { }

  ngOnInit(): void {
    
  }
        isInEditMode: boolean = false;
        //formMode :"ADD" | "EDIT" :

onStdAdd(){
  //newStudent object 
  let newStdObj : Istudents ={
       fname : this.fnameRef.nativeElement.value,
       lname : this.lnameRef.nativeElement.value,
       email : this.emailRef.nativeElement.value,
       contact : this.contactRef.nativeElement.value,
       stdId : this.uuid()
  }
  console.log(newStdObj)

  this.fnameRef.nativeElement.value =''
  this.lnameRef.nativeElement.value=''
  this.emailRef.nativeElement.value=''
  this.contactRef.nativeElement.value =''
   // add/push in array
   this.studentsArr.unshift(newStdObj)

   this._matSnackBar.open(`The new student ${newStdObj.fname} ${newStdObj.lname} is added succesfully !!!`,'Close',{
    duration: 3000,
    horizontalPosition:'left',
    verticalPosition:'top'

   })
}
       
onStdEdit(std:Istudents){
  this.isInEditMode = true
  let EDIT_ID = std.stdId
  localStorage.setItem('EDIT_ID',EDIT_ID)
  this.fnameRef.nativeElement.value = std.fname
  this.lnameRef.nativeElement.value = std.lname
  this.emailRef.nativeElement.value = std.email
  this.contactRef.nativeElement.value = std.contact
}

 onStdUpdate(){
  //STD_ID

   let STD_ID = localStorage.getItem('EDIT_ID')
   localStorage.getItem('EDIT_ID')
   //UPDATED_OBJ
    if(STD_ID){
      let UPDATED_OBJ : Istudents ={
       fname:  this.fnameRef.nativeElement.value, 
       lname: this.lnameRef.nativeElement.value, 
       email:this.emailRef.nativeElement.value,
       contact: this.contactRef.nativeElement.value,
       stdId : STD_ID
      }
      console.log(UPDATED_OBJ)
      let GET_INDEX =this.studentsArr.findIndex(std => std.stdId === STD_ID)

      this.studentsArr [GET_INDEX] = UPDATED_OBJ
       this.fnameRef.nativeElement.value=''
       this.lnameRef.nativeElement.value =''
       this.emailRef.nativeElement.value=''
       this.contactRef.nativeElement.value=''
       this.isInEditMode =false
    }
    // update /replace in array

    this._matSnackBar.open(`the new student ${STD_ID} is updated sucessfully !!!`,'close')
 }
  
 onStdRemove(removeId:string){
  let getconfirm = confirm('Are you sure,you want to remove this Student?')
     if(getconfirm){
      //index find karenge object ka
      let GET_INDEX = this.studentsArr.findIndex(std => std.stdId === removeId)

      //remove that object from array >> splice

      this.studentsArr.splice(GET_INDEX,1)
     }

     this._matSnackBar.open(`the new student ${removeId} is removed sucesfully !!!`,'close',{
      duration:3000,
      horizontalPosition:'left',
      verticalPosition:'top'
     })
 }
}
