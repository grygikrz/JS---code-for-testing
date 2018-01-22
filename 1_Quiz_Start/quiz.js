function Quiz(){
  this.score = 0;
}

Quiz.prototype.updateScore = function(){

  this.score = this.score + 1;
};

Quiz.prototype.getScore = function () {
  return this.score;
};
