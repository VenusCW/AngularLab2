import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

interface Reddit{
title: string;
image: string;
link: string;
}

@Injectable({
  providedIn: 'root'
})
export class RedditAppService {
  https://www.reddit.com/r/aww/.json
  posts: RedditResult[] = [
    children
    title:

  ];

  constructor(private http: HttpClient) { }
}

const url = "https://www.reddit.com/r/aww/.json";
this.http.get(url).subscribe(
//   (resp: any) => {
//     const posts = resp.data.children;

//     for (let post of posts) {
//       const redditPost : RedditPost = {
//         title: post.data.title,
//         link: "https://reddit.com" + post.data.permalink,
//         image: post.data.thumbnail
//       };

//       this.posts.push(redditPost);

//     }

//     console.log(this.posts);

//   }, // this is what happens on success
//   (error) => {
//     console.log(error);
//   } // this is what happens if I get an error from the API
// );
// // array of posts exists in response.data.children
// // loop through array
// // for each post
// // data lives in post.data
// }
// }
