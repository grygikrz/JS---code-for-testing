function Question(){
  this.allNum = 0;
  this.questions = {};
  this.answers = [];
}

Question.prototype.addAns = function (nr,ans,status) {

    this.answers.push([nr,ans,status]);
};

Question.prototype.addQuest = function (nr,quest) {

    this.questions[nr] = quest;
};

Question.prototype.getAnswers = function(nr) {
    a = [];
    for( var x=0; x < this.answers.length; x++){
      if (this.answers[x][0] === nr){
        a.push(this.answers[x]);
      }
    }
    return a;

};
Question.prototype.getQuest = function(nr){

    return this.questions[nr];
};

Question.prototype.getQuestionsNr = function() {

      var count = 0;
      for(var prop in this.questions) {
          if(this.questions.hasOwnProperty(prop))
              ++count;
      }

  return count;
};

Question.prototype.addNum = function () {

    return this.allNum + 1;
};
