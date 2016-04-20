import {Component, Input, OnInit} from 'angular2/core';
import {FirebaseEventPipe}        from './../pipes/pipes.firebaseevent';
import {FirebaseService}          from './../services/services.firebase';
import {Config}                   from './../config/config.acro';
import {IChat, ChatModel}         from './../models/models.chat';

@Component({
  selector: 'chat',
  pipes: [FirebaseEventPipe],
  inputs: ['id'],
  templateUrl: 'app/templates/templates.chat.html'
})

export class Chat implements OnInit {
  
  @Input() id;
  
  $chatRef: any;
  chatUrl: string;
  firebase: any;
  
  constructor(private config: Config, firebase: FirebaseService) {
    var fbUrl = config.get('firebaseUrl');
    this.chatUrl = `${fbUrl}/chats/`;
    this.firebase = firebase;
  }
  
  ngOnInit() {
    this.$chatRef = this.firebase.getRef(`/chats/${this.id}`);
    this.$chatRef.on('child_added', this.scrollToBottom);
  }
  
  private addMessage(msg: string) {
    var $newMsg = this.$chatRef.push(new ChatModel('me', msg));
  }
  
  private scrollToBottom() {
    setTimeout(function () {
      var chatWindow = document.getElementById('scroll-bottom');
      chatWindow.scrollTop = chatWindow.scrollHeight;  
    }, 10);
  }
  
  saySomething($event: any, msg: any) {
    // If they pressed Enter....
    if ($event.keyCode === 13 && msg.value) {
      this.addMessage(msg.value);
      msg.value = '';
    }
  }
}