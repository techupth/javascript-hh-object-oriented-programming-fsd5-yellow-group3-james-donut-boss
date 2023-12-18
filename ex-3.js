//  Start coding here
class User {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
}
/*
const user1 = new User("z123", "Chong-Cheng", "abc@hotmail.com")
console.log(user1);
*/

class PostList {
    constructor() {
        this.posts = [];
    }

    addPost(post) {
        this.posts.push({
            id: this.posts.length + 1,
            title: post.title,
            content: post.content,
            comments: post.comments
        });
    }

    sharePost(Id) {
        console.log(`You've shared post ${this.posts[Id - 1].title} to your friend.`)
    }
}
/*////
const postList1 = new PostList("abc");
console.log(postList1);
postList1.addPost("FirstPostBaby");
console.log(postList1);
postList1.sharePost();
*/////

class Post {
    constructor(id, title, content, comment) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.comment = [];
    }
    addComment(whatComment) {
        this.comment.push(whatComment);
    }
}
/*
const post1 = new Post("a123","nowhere","place");
console.log(post1);
post1.addComment("placeNo.1");
console.log(post1);
*/

class Comment {
    constructor(id, content, createdBy, like) {
        this.id = id;
        this.content = content;
        this.createdBy = createdBy;
        this.like = 0;
    }

    addLike() {
        this.like++;
    }
}
/*
const comment1 = new Comment("id1", "positiveComment", "Jackie");
console.log(comment1);
comment1.addLike();
comment1.addLike();
console.log(comment1)
*/

class Facebook {
    constructor() {
        this.groupList = [];
        this.pageList = [];
    }

    addGroup(groupPush) {
        this.groupList.push(groupPush);
    }
    
    addPage(pagePush) {
        this.pageList.push(pagePush);
    }
}
/*
const facebook1 = new Facebook();
console.log(facebook1);
facebook1.addGroup("Yellow Group");
facebook1.addPage("Yellow Page");
facebook1.addPage("Crimson Page");
console.log(facebook1);
*/

class FacebookPage {
    constructor(name) {
        this.name = name;
    }
}
/*
const facebookPage1 = new FacebookPage("YellowPaging");
console.log(facebookPage1);
*/

class FacebookGroup {
    constructor(name) {
        this.name = name;
    }
}
/*
const facebookGroup1 = new FacebookGroup("YellowGrouping");
console.log(facebookGroup1);
*/

class Notification {
    constructor(id) {
        this.id = id;
    }

    send(commentBy, postTitle) {
        console.log(`Notification: ${commentBy} has just commented on this post—${postTitle}`)
    }
}
/*
const notification1 = new Notification("No1");
console.log(notification1);
notification1.send(comment1.createdBy,addPost);
*/








