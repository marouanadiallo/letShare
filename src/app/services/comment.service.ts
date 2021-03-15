import { Injectable } from '@angular/core';
import Comment from '../interfaces/Comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private comments: Comment[] = [
    {
      id: 1,
      name: 'Marwane',
      content: 'un commentaire de Marwane !'
    },
    {
      id: 2,
      name: 'Brahim',
      content: 'un commentaire de Brahim !'
    },
    {
      id: 3,
      name: 'Achraf',
      content: 'un commentaire d Achraf!'
    },
    {
      id: 4,
      name: 'Mohamed',
      content: 'un commentaire de chameck !'
    },
    {
      id: 5,
      name: 'Bodié',
      content: 'un commentaire de bodié!'
    }
  ];
  constructor() { }

  public addcomment(comment: Comment): void{
    this.comments.push(comment);
  }

  public deleteComment(id: number): void{
    this.comments = this.comments.filter(comment => comment.id !== id);
  }

  public getComments(): Comment[]{
    return this.comments;
  }
}
