import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-button-unit.component.html',
  styleUrl: './input-button-unit.component.scss'
})

export class InputButtonUnitComponent {
  title = 'Hello World';      
  
  constructor() { }                     

  ngOnInit(): void {
  }
  
  changeTitle(newTitle: string): void {
    this.title = newTitle;
  }

  getInputValue(event : Event): string {

    return (event.target as HTMLInputElement).value;
  }

}
