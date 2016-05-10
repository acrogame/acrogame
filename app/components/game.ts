import {Component, Input, OnInit} from 'angular2/core';
import {FirebaseService}  from './../services/services.firebase';
import {TaskModel, TASK_TYPE} from './../models/models.task';

@Component({
  selector: 'game',
  templateUrl: 'app/templates/templates.game.html',
  providers: [FirebaseService],
  inputs: ['id']
})

export class Game implements OnInit {
  
  @Input() id: string;
  
  currentGame: any;
  currentRound: any;
  currentLetters: any;
  currentValidator: any;
  currentCategory: any;
  
  playing: boolean;
  
  $taskRef: any;
  $roundRef: any;
  
  countdownPercent: string;
  
  constructor(private firebaseService: FirebaseService) {
    this.playing = false;
  }
  
  ngOnInit() {
    var roundPath = `/games/${this.id}/round`;
    var taskPath = '/queue/tasks';
    
    this.$roundRef = this.firebaseService.getRef(roundPath);
    this.$taskRef = this.firebaseService.getRef(taskPath);
    
    /**
     * Watch for changes here!
     */
    
    this.$roundRef.on('value', ($snap) => {
      
      var value = $snap.val();
      
      if (!value) return;
      
      this.currentRound = value;
      this.currentLetters = (value.letters) ? value.letters.chars : ['A', 'B', 'C', 'D'];
      this.currentValidator = (value.letters) ? value.letters.validator : null;
      this.currentCategory = (value.category) ? value.category : null;
      this.playing = value.playing;
      
      var percent = Math.floor((value.countdown / value.countdownStart) * 100);
      this.countdownPercent = `${percent}%`;
    });
  }
  
  join() {
    // todo, get player info and pass it along
    this.newGame();
  }
  
  newGame() {
    // Todo: in the future we should watch rooms on the server 
    // rather than relying on the client to add the Task
    this.$taskRef.push(new TaskModel(TASK_TYPE.NEW_GAME, {roomId: this.id}))
  }
  
  private watchGame() {

    this.$roundRef.on('child_changed', ($snap) => {
      
      this.currentGame = $snap.val();
      
      var percent = (
        this.currentGame.currentRound.countdown / 
        this.currentGame.currentRound.countdownStart
      );
      
      this.countdownPercent = `${percent}%`;
    });
  }
}