class Notification { 
  constructor(notificationId,createdTime,content,receiver) {
    this.notificationId = notificationId;
    this.createdTime = createdTime;
    this.content = content;
    this.receiver = receiver;
  }
  send (receiver) {
    console.log(`Notification has been sent to ${receiver}`)
  }
}
//
class EmailNotification extends Notification {
  constructor(notificationId,createdTime,content,receiver) {
    super(notificationId,createdTime,content,receiver)
  }
}

class SMSNotification extends Notification { 
  constructor(notificationId,createdTime,content,receiver) {
    super(notificationId,createdTime,content,receiver)
  }
} 
//
const email = new EmailNotification(3,15.17,"take pill","Donut")
email.send("Donut")
const sms = new SMSNotification(3,15.17,"take pill","Donuru")
sms.send("Donuru")
