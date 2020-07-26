import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-button-create',
  templateUrl: './button-create.component.html',
  styleUrls: ['./button-create.component.css']
})
export class ButtonCreateComponent implements OnInit {
  newId: number;
  newTitle: string;
  newBody: string;
  userId = 2;

  newPost = {
    userId: this.userId,
    id: this.newId,
    title: this.newTitle,
    body: this.newBody
  };
  constructor(
    private postsService: PostsService
  ) { }

  ngOnInit(): void {
  }

  addPost(){
    this.postsService.createPost(this.newPost).subscribe(newPost => {
      console.log(newPost);
    });
    console.log(this.newPost);
  }
}
