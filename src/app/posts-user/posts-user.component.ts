import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { ActivatedRoute, Params} from '@angular/router';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts-user',
  templateUrl: './posts-user.component.html',
  styleUrls: ['./posts-user.component.css']
})
export class PostsUserComponent implements OnInit {
  posts;
  id: number;

  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      console.log(id);
      this.fetchPosts(id);
    }
    );
  }
  fetchPosts(id: number){
    this.postsService.getAllPosts(id).subscribe(posts => {
      this.posts = posts;
      console.log(this.posts);
    });
  }

}

// posts: Post[] = [
//   {
//     id: 1,
//     title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
//     body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
//   },
//   {
//     id: 2,
//     title: 'eum et est occaecati',
//     body: 'ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit'
//   },
//   {
//     id: 3,
//     title: 'eum et est occaecati',
//     body: 'ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit'
//   }
// ];