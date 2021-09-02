import { Injectable } from '@angular/core';

export interface Post {
  title: string;
  content: string;
  id: number;
}

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  posts: Post[] = [
    { title: 'Title', content: 'CONTENT', id: 1 },
    { title: "Oshen' big title", content: 'CONTENT', id: 2 },
    { title: 'Title', content: 'CONTENT', id: 3 },
    { title: 'Title', content: 'CONTENT', id: 4 },
    { title: 'Title', content: 'CONTENT', id: 5 },
    {
      title:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      id: 6,
    },
  ];

  // This counter needs for save posts id in case of all post deleted
  idCounter: number = 6;

  add(post: any) {
    this.posts.push(post);
    this.idCounter++;
  }

  patch(userTitle: string, userContent: string, postIndex: number) {
    this.posts[postIndex].title = userTitle;
    this.posts[postIndex].content = userContent;
  }

  remove(id: number) {
    this.posts.splice(id, 1);
  }
}
