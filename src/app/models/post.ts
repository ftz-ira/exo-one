export class Post {
    title: string;
    content: string;
    like: number;
    created_at: Date

    constructor(){
        this.like = 0;
        this.created_at = new Date();
    }

}