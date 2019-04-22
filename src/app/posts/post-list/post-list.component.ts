import { Component } from "@angular/core";

@Component({
 selector: 'app-post-list',
 templateUrl: './post-list.component.html',
 styleUrls: ['./post-list.component.css']
})

export class PostListComponent {
  posts = [
    {title: 'FirstPost', content: 'this is the first post content '},
    {title: 'SecondPost', content: 'this is the second post content '},
    {title: 'ThirdPost', content: 'this is the third post content '},
    {title: 'FourthPost', content: 'this is the fourth post content '},
    {title: 'FifthPost', content: 'this is the fifth post content '}
  ]
}
