import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  public subscription: Subscription;
  constructor(
    public postService: PostsService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.subscription = route.params.subscribe(
      (params) => (this.urlId = params['id'])
    );
  }

  urlId: number = NaN;
  title: string = '';
  inputTitle: string = '';
  inputContent: string = '';
  postIndex: number = NaN;

  ngOnInit(): void {
    this.getPost();
    this.title = this.postService.posts[this.postIndex].title;
    this.inputTitle = this.postService.posts[this.postIndex].title;
    this.inputContent = this.postService.posts[this.postIndex].content;
  }

  // This method find post by id from url in posts array
  getPost() {
    this.urlId = this.route.snapshot.params['id'];
    this.postIndex = this.postService.posts.findIndex(
      (item) => item.id == this.urlId
    );
  }

  savePost() {
    this.postService.patch(this.inputTitle, this.inputContent, this.postIndex);
    this.title = this.inputTitle;
  }

  removePost() {
    const result = confirm('удалить?');
    if (result) {
      this.router.navigate(['']);
      this.postService.remove(this.postIndex);
    }
  }
}
