class EmailNotification {
    constructor(notificationId, createdTime, content, reciever) {
        this.notificationId = notificationId;
        this.createdTime = createdTime;
        this.content = content;
        this.reciever = reciever;
    }

    send() {
        console.log(`Notification has been sent to ${this.reciever}`)
    }
}

class SMSNotification {
    constructor(notificationId, createdTime, content, phoneNumber) {
        this.notificationId = notificationId;
        this.createdTime = createdTime;
        this.content = content;
        this.phoneNumber = phoneNumber;
    }
    send() {
        console.log(`Notification has been sent to ${this.phoneNumber}`)
    }
}
const resultEmail = new EmailNotification("a123b456c789", 15.30, "Na-Hao", "Chong-Cheng");
resultEmail.send();
console.log(resultEmail.content);


const resultSMS = new SMSNotification("z987y654x321", 11.45, "O-Hai-Yo", "0xx-xxx-xxyz");
resultSMS.send();
