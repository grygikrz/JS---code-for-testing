var quiz = new Quiz();
var question = new Question();

var guess0 = document.querySelector('#guess0');
var guess1 = document.querySelector('#guess1');
var guessHolder = [guess0,guess1]
var score = document.querySelector('#score');
var quest = document.querySelector('#question');


question(1,'How many is 2+2 ?');
question.AddAns = ('One');
question.AddAns = ('Two');


score.innerHTML = quiz.score;
quest.innerHTML = question.GetQuest;
answers = questions.GetAns;
for (var x=0; x < answers.length; x++){
  guessHolder[x].innerHTML = answers[x];
}
