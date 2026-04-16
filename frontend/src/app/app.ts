import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ToDo } from '../services/todo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('My To-Do-List');

  todos: any[] = [];

  constructor(private todo: ToDo) {}

  ngOnInit() {
    this.todo.getToDos().subscribe(data => {
      this.todos = data;
    });
  }
}