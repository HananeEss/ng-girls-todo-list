import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputButtonUnitComponent } from './input-button-unit/input-button-unit.component';
import { TodoItemComponent } from './todo-item/todo-item.component';


//le décorateur : on passe un objet avec plusieurs propriétés : 
@Component({

  //selector: le nom de la balise que nous utiliserons dans un modèle pour appeler le composant.
  selector: 'app-root',

  //standalone : indique à Angular que le composant ne fait pas partie d'un module Angular - NgModule
  standalone: true,

  //imports : utilisé pour indiquer les éléments d'Angular qui sont nécessaires dans ce composant.
  imports: [CommonModule, RouterOutlet, InputButtonUnitComponent, TodoItemComponent],

  //templateUrl : indique à Angular où aller chercher le fichier qui contient le modèle attaché au composant.
  templateUrl: './app.component.html',

  //styleUrl : indique à Angular où chercher le fichier de style qui définit le style du composant.
  styleUrl: './app.component.scss'
  
})

export class AppComponent {
  title = 'todo-list';

  todoList = [
    {title: 'install NodeJS'},
    {title: 'install Angular CLI'},
    {title: 'create new app'},
    {title: 'serve app'},
    {title: 'develop app'},
    {title: 'deploy app'},
  ];

}
