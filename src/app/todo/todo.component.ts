

import { Component, ElementRef, OnInit, ViewChild,} from "@angular/core";
import { Itodos } from "../modules/todos";
import { MatSnackBar } from "@angular/material/snack-bar";
import { flush } from "@angular/core/testing";

@Component({
    selector:'app-todo',
    templateUrl:'./todo.component.html',
    styleUrls:['./todo.component.scss']
})

export class TodoComponent implements OnInit{
        todosArray:Array<Itodos>=[
           {
            todoItem: 'Angular',
            todoId:'1234'
           },
           {
             todoItem:'SASS',
             todoId:'543'
           }
        ]
     
        isInEditMode: boolean = false;
       
@ViewChild('todoItem') todoItemRef!:ElementRef;


constructor  (private _matSnackBar:MatSnackBar) {}

ngOnInit (): void{}
    onTodoAdd (todoItemControl:HTMLInputElement){
        if(todoItemControl.value.length > 0){
            let todoObj:Itodos={
               todoItem:todoItemControl.value,
               todoId:this.uuid()
            }
            todoItemControl.value =''
            this.todosArray .unshift(todoObj)
        }

        
    }  
      
    onTodoRemove (todoId:string){
     
        let REMOVE_ID = todoId
        console.log(REMOVE_ID)

       
        let GET_INDEX =this.todosArray.findIndex(todo => todo.todoId === REMOVE_ID)
        console.log(GET_INDEX)
       
          this.todosArray.splice(GET_INDEX,1)
          this._matSnackBar.open(
            `the todo object with id ${todoId}is removed succesfully !!!`,
            'close',
             {
                duration:3000,
                horizontalPosition:'left',
                verticalPosition:'top'
            }
        )

    }
       onTodoEdit(todoObj :Itodos){
        
          this.isInEditMode = true
        
          console.log(todoObj);
           
         
          let EDIT_ID = todoObj.todoId;
          localStorage.setItem("EDIT_ID",EDIT_ID)
          
          this.todoItemRef.nativeElement.value = todoObj.todoItem
       }

       onTodoUpdate (todoItemControl: HTMLInputElement){
        
        let UPDATE_ID =localStorage.getItem("EDIT_ID")
        localStorage.removeItem("EDIT_ID")
       
               if(UPDATE_ID){
                let UPDATED_OBJ :Itodos ={
                    todoItem : todoItemControl.value,
                    todoId: UPDATE_ID
                }
                console.log(UPDATED_OBJ);
                todoItemControl.value='';
               
       

        let GET_INDEX = this.todosArray.findIndex(todo => todo.todoId === UPDATE_ID)
        
        this.todosArray[GET_INDEX] = UPDATED_OBJ
        
        this.isInEditMode = false

        this._matSnackBar.open(
            `the todo object with id ${UPDATE_ID} is updated succesfully !!!`,
            'close',
            {
                duration:3000,
                horizontalPosition:'left',
                verticalPosition:'top'
            }
        )

      }   
     }

onCancel()
{
    this.todoItemRef.nativeElement.value='';
    this.isInEditMode = false
}

     uuid = () => {
    return (
        String('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx')
    ).replace(/[xy]/g, (character) => {
        const random = (Math.random() * 16) | 0;
        const value = character === "x" ? random : (random & 0x3) | 0x8;
        return value.toString(16);
    });
};

    }