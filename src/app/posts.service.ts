import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private http: HttpClient
    ) { }

  getAllPosts(id: number){
    console.log("este es el id", id);
    return this.http.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
  }

  getPost(idPost: number){
    console.log("este es el id del post a consultar", idPost);
    return this.http.get(`https://jsonplaceholder.typicode.com/posts?id=${idPost}`);
  }

  createPost(post: Post){
    console.log('thiss:', post);
    return this.http.post(`https://jsonplaceholder.typicode.com/posts`, post);
  }

  updatePost(){
    // return this.http.post(`https://jsonplaceholder.typicode.com/posts`, post);
  }

  deletePost(idPost: number){
    return this.http.delete(`https://jsonplaceholder.typicode.com/posts/${idPost}`);
  }
}
