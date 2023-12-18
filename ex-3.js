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
            comment: post.comment
        });
    }

    sharePost(id) {
        console.log(`You've shared post ${this.posts[id - 1].title} to your friend.`)
    }
}

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
const post1 = new Post(1,"nowhere","place");
console.log(post1);
post1.addComment("placeNo.1");
console.log(post1);
*/

/*//execute จาก postList
const postList1 = new PostList();
console.log(postList1);
postList1.addPost(post1);
console.log(postList1);
postList1.sharePost(1);
*/ //execute จาก postList

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








