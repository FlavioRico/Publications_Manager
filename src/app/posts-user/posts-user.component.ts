import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts-user',
  templateUrl: './posts-user.component.html',
  styleUrls: ['./posts-user.component.css']
})
export class PostsUserComponent implements OnInit {
  posts;
  post;
  id: number;

  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      // this.id = params.idPost;
      this.id = 2;
      console.log("Debug en posts user: ", params.idPost);
    }
    );
    this.fetchPosts();
  }
  fetchPosts(){
    this.postsService.getAllPosts(this.id).subscribe(posts => {
      this.posts = posts;
      console.log(this.posts);
    });
  }

  getPost(idPost: number){
    this.postsService.getPost(idPost).subscribe(post => {
      this.post = post;
      console.log(this.post[0].body);
    });
  }

  deletePostUser(idPost: number){
    console.log(idPost);
    this.postsService.deletePost(idPost).subscribe(rta => {
      console.log(rta);
    });
    alert('Deleted post');
  }

}
