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
  currentCountdown: any;
  currentRoundType: any;
  currentLetters: any;
  currentValidator: any;
  currentCategory: any;
  
  playing: boolean;
  answerSubmitted: boolean;
  answerValid: boolean;
  
  $taskRef: any;
  $roundRef: any;
  
  countdownPercent: string;
  
  constructor(private firebaseService: FirebaseService) {
    this.playing = false;
    this.answerSubmitted = false;
    this.answerValid = false;
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
      
      // If this is not a playing round, reset the Round
      if (value.type && value.type !== 1) {
        this.reset();
      }
      
      this.currentRound = value;
      this.currentRoundType = (value.type) ? value.type : null;
      this.currentCountdown = (value.countdown) ? value.countdown : 0;
      this.currentLetters = (value.letters) ? value.letters.chars : null;
      this.currentValidator = (value.letters) ? new RegExp(value.letters.validator, 'gi') : null;
      this.currentCategory = (value.category) ? value.category : null;
      this.playing = value.playing;
      
      var percent = Math.floor((value.countdown / value.countdownStart) * 100);
      this.countdownPercent = `${percent}%`;
    });
  }
  
  private reset() {
    this.answerSubmitted = false;
    this.answerValid = false;
  }
  
  private validateAnswer(answer: string): boolean {
    this.answerSubmitted = true;
    this.answerValid = (this.currentValidator) ? this.currentValidator.test(answer) : false;
    return this.answerValid;
  }
  
  onKeyUp($event: any, answer: any) {
    // If they pressed Enter....
    if ($event.keyCode === 13 && answer.value) {  
      // And the answer is valid....
      if (this.validateAnswer(answer.value)) {
        // todo: abc123 represents a user
        this.$roundRef.child('answers/' + 'abc123').set({
          'name': 'me',
          'answer': answer.value
        });
      }
    }
  }
  
  join() {
    // todo, get player info and pass it along
    this.newGame();
  }
  
  private newGame() {
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
      
      this.countdownPercent = `${Math.floor(percent)}%`;
    });
  }
}