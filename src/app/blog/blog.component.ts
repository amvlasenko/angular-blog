import { Component, ElementRef, ViewChild } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent {
  @ViewChild('modal') modal: ElementRef | undefined;

  constructor(public postService: PostsService) {}

  inputTitle: string = '';
  inputContent: string = '';

  addPost() {
    // Creating an object to add to the post service
    const obj = { title: '', content: '', id: NaN };
    obj.title = this.inputTitle;
    obj.content = this.inputContent;
    obj.id = this.postService.idCounter + 1;

    // Verification inputs
    if (obj.title && obj.content) {
      this.postService.add(obj);
      this.removeModal();
      this.inputTitle = '';
      this.inputContent = '';
    } else {
      alert('Enter values!');
    }
  }

  showModal() {
    this.modal?.nativeElement.classList.add('modal-show');
  }

  removeModal() {
    this.modal?.nativeElement.classList.remove('modal-show');
  }
}
