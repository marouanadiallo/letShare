import { Component, OnInit } from '@angular/core';
import {CommentService} from '../services/comment.service'
import Comment from '../interfaces/Comment'
@Component({
  selector: 'app-containerapp',
  templateUrl: './containerapp.component.html',
  styleUrls: ['./containerapp.component.scss']
})
export class ContainerappComponent implements OnInit {

  public comments: Comment[];
  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
    this.comments = this.commentService.getComments();
    //console.log(this.comments);
  }

}
