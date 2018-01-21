function Question(nr,question,answers){
  this.nr = nr;
  this.question = question;
  this.answers = answers;
}

Question.prototype.AddAns = function () {
    this.answers.push();
};

Question.prototype.GetAns = function () {

    return this.answers;

};
Question.prototype.GetQuest = function(){

  return this.question;
};
