import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoService } from './todo.service';
import { Post } from './todo.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  posts: Post[] = [];

  constructor(private toDoService: TodoService) {}

  ngOnInit(): void {
    this.toDoService.getAllPosts().subscribe((posts) => {
      this.posts = posts;
      console.log(this.posts);
    });
  }
  title = 'my-angular-app';
}
