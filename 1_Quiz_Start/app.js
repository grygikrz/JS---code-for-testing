var quiz = new Quiz();
var question = new Question();
question.addQuest(0,'How many is 2+2 ?');
question.addAns(0,'One',false);
question.addAns(0,'Two',true);

question.addQuest(1,'How many is 4+4 ?');
question.addAns(1,'One',false);
question.addAns(1,'Two',true);


var guess0 = document.querySelector('#guess0');
var guess1 = document.querySelector('#guess1');
var guessHolder = [guess0,guess1];
var score = document.querySelector('#score');
var quest = document.querySelector('#question');
var progress = document.querySelector('#progress');

function showQuestion(questionNumber, answers){
      var quiz_ui = new Quiz_ui(question.currentNum()[0],question.currentNum()[1]);
      score.innerHTML = quiz.getScore();
      quest.innerHTML = question.getQuest(questionNumber);
      progress.innerHTML = quiz_ui.progressInfo();
      console.log(answers[1]);
      for (var x=0; x < answers.length; x++){
        if(answers[x][0] === questionNumber) {
          guessHolder[x].innerHTML = answers[x][1];
            if(answers[x][2]) {
                guessHolder[x].addEventListener('click',function (){
                      quiz.updateScore();
                      score.innerHTML = quiz.getScore();
                      if (question.getAnswers(questionNumber++)){
                        showQuestion(questionNumber++, answers)
                      }else{
                        return console.log('koniec');
                      }

                });
              };
          };
        };
}

var answers = question.getAnswers();
showQuestion(0, answers)
