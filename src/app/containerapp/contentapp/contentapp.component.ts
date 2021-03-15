import { Component, Input, OnInit } from '@angular/core';
import Comment from '../../../interfaces/Comment';
@Component({
  selector: 'app-contentapp',
  templateUrl: './contentapp.component.html',
  styleUrls: ['./contentapp.component.scss']
})
export class ContentappComponent implements OnInit {
  @Input() public comment: Comment;
  
  constructor() { }

  ngOnInit(): void {
  }

}
