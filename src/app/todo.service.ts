import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Post } from './todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private apiUrl = `https://jsonplaceholder.typicode.com/todos`;

  constructor(private httpClient: HttpClient) {}
  getAllPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.apiUrl);
  }

  getPostsById(id: number): Observable<Post> {
    const url = `${this.apiUrl}/${id}`;
    return this.httpClient.get<Post>(url);
  }
}
