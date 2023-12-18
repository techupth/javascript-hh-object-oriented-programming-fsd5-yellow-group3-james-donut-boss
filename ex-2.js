class Notification {
    constructor(notificatedId, createdTime, content, reciever) {
        this.notificatedId = notificatedId;
        this.createdTime = createdTime;
        this.content = content;
        this.reciever = reciever;
    }

    send() {
        console.log(`Notification has been sent to ${this.reciever}`)
    }
}

class EmailNotification extends Notification {
    constructor(notificatedId, createdTime, content, reciever) {
        super(notificatedId, createdTime, content, reciever);
    }
}

class SMSNotification extends Notification {
    constructor(notificatedId,createdTime, content, reciever) {
        super(notificatedId, createdTime, content, reciever)
    }
}

const resultEmail = new EmailNotification("0a123b456c789", 12.30, "Na-Hao-Ma", "Chong-Cheng Jr.");
resultEmail.send();
const resultSMS = new SMSNotification("0z987y654x321", 8.45, "O-Hai-YoYo", "0ww-www-wxyz");
resultSMS.send();