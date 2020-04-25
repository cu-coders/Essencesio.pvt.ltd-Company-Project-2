import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  constructor(public router: Router) {
    if (window.innerWidth  <= 991 ) {
      this.router.navigate(['mobile/feed']);
    }
   }

  blogBody = 'If you guys have been following me for a while, you know jeans are one of my favorite things to wear. I’m always on the search for the perfect-fitting pair of jeans, and I’ve got a few go-to trust-worthy brands. Additional Text to be truncated. If you guys have been following me for a while, you know jeans are one of my favorite things to wear. I’m always on the search for the perfect-fitting pair of jeans, and I’ve got a few go-to trust-worthy brands. Additional Text to be truncated'

  ngOnInit() {
  }

}
