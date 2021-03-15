import Article from './Article';

export default interface User{
    id: number;
    name: string;
    pseudo: string;
    profession: string;
    articles: [Article];
}
