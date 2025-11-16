import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentsComponent } from './students/students.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { TabComponent } from './tab/tab.component';
import { TabNgForComponent } from './tab-ng-for/tab-ng-for.component';


@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    StudentsComponent,
    TabComponent,
    TabNgForComponent,
    
  ],
  imports: [
    BrowserModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule

],
  providers: [],
  bootstrap: [AppComponent]
})
export  class AppModule { }