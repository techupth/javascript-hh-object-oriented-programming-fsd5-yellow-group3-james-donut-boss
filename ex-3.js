//  Start coding here
class User {
  constructor (id,name,email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}

class postList {
  constructor (posts) {
    this.posts = [posts];
  }
  addPost (pushPost) {
    this.posts.push(pushPost)
  }
  sharePost (postTitle) {
    console.log (`You've shared post ${postTitle} to your friend.`)
  }
}

class Post {
  constructor (id,title,content,comment) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.comment = [comment];
  }
  addComment (pushComment) {
    this.comment.push(pushComment)
  }
}

class Comment {
  constructor (id,content,createdBy) {
    this.id = id;
    this.content = content;
    this.createdBy = createdBy;
    this.like = 0;
  }
  addLike () {
    this.like += 1
  }
}

class Facebook {
  constructor (groupList,pageList) {
    this.groupList = [groupList]
    this.pageList = [pageList]
  }
  addGroup (group) {
    this.groupList.push(group)
  }
  addPage (page) {
    this.pageList.push(page)
  }
}

class FacebookPage {
  constructor (name) {
    this.name = name;
  }
}

class FacebookGroup {
  constructor (name) {
    this.name = name;
  }
}

class Notification {
  constructor (id) {
    this.id = id;
  }
  send (resolve) {
    console.log(`Notification: ${resolve.comment[resolve.comment.length-1].createdBy} has just commented on this post—"${resolve.title}`)
  }
}
//
const resultPost = new Post(1,"Food","ASMR","Have Fun")
const resultComment = new Comment(3,"streetFood","Donut")
resultPost.addComment(resultComment)
const notificationPost = new Notification(1)
notificationPost.send(resultPost)

console.log(resultPost)
