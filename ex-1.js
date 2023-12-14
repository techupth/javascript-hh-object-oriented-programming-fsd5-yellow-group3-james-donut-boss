class EmailNotification { 
  constructor (notificationId,createdTime,content,receiver) {
    this.notificationId = notificationId;
    this.createdTime = createdTime;
    this.content = content;
    this.receiver = receiver;
  }
  send (email) {
    console.log(`Notification has been sent to ${email}`)
  }
}
const Notification = new EmailNotification(3,15.17,"take pill","Donut")
Notification.send("missterdonat33@gmail.com")
//
class SMSNotification { 
  constructor (notificationId,createdTime,content,receiver) {
    this.notificationId = notificationId;
    this.createdTime = createdTime;
    this.content = content;
    this.receiver = receiver;
  }
  send (phoneNumber) {
    console.log(`(Notification has been sent to ${phoneNumber})`)
  }
}
const sms = new SMSNotification(3,15.17,"take pill","Donut")
sms.send("0917978568")