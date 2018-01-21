function Quiz(score){
  this.score = 0;
}

Quiz.prototype.updateScore = function(){

  this.score++;
};

Quiz.prototype.getScore = function () {
  return this.score;
};
