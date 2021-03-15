import User from './User';
import Comment from './Comment';

export default interface Article{
    id: number;
    name: string;
    createdAt: Date;
    description: string;
    content: string;
    user: User;
    contributes: [User];
    isActif: boolean;
    isValided: boolean;
    comments: [Comment];
    like: [number];
}
