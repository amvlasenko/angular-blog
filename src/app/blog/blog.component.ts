import { Component, Input, OnInit } from '@angular/core';
import { Post, PostsService } from '../posts.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})

export class BlogComponent implements OnInit {
  
  @Input() post!: Post
  
  constructor(public postService: PostsService) { }
  
  ngOnInit(): void {
  }
  
  inputTitle: string =''
  inputContent: string =''  

  addPost() {
    
    // Creating an object to add to the post service
    const obj = {title:'', content: '', id: NaN}
    obj.title = this.inputTitle;
    obj.content = this.inputContent;
    obj.id = this.postService.idCounter + 1;

    // Verification inputs
    if (obj.title && obj.content) {
      this.postService.add(obj)
      this.removeModal()
      this.inputTitle = ''
      this.inputContent = ''
    } else {
      alert('Enter values!')
    }
    
  }  
  
  showModal() {
    const modalWindow = document.getElementById('modalWindow') 
    modalWindow?.classList.add('modal-show')
  }
  
  removeModal() {
    const modalWindow = document.getElementById('modalWindow')
    modalWindow?.classList.remove('modal-show')
  }

}
