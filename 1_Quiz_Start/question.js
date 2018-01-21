function Question(){
  this.allNum = 0;
  this.questions = [];
  this.answers = [];
}

Question.prototype.addAns = function (nr,ans,status) {
    this.answers.push([nr,ans,status]);
};

Question.prototype.addQuest = function (nr,ans) {
    this.questions.push([nr,ans]);
};

Question.prototype.getAnswers = function (nr) {

    return this.answers;

};
Question.prototype.getQuest = function(nr){

    return this.questions[nr][1];
};

Question.prototype.currentNum = function(){
  return [this.nr,this.addNum()];
};

Question.prototype.addNum = function () {
    return this.allNum++;
};
