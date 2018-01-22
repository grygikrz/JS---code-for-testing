var quiz = new Quiz();
var quiz_ui = new Quiz_ui();
var question = new Question();


var quest = 'How many is 2+2 ?';
question.addQuest(0,quest);
question.addAns(0,'One',false,quest);
question.addAns(0,'Four',true,quest);

var quest2 = 'How many is 4+4 ?';
question.addQuest(1,quest2);
question.addAns(1,'Two',false,quest2);
question.addAns(1,'Eight',true,quest2);

var quest3 = 'How many is 8+8 ?';
question.addQuest(2,quest3);
question.addAns(2,'Eight',false,quest3);
question.addAns(2,'Sixteen',true,quest3);


var choice0 = document.querySelector('#choice0');
var choice1 = document.querySelector('#choice1');
var choiceHolder = [choice0,choice1];
var guess0 = document.querySelector('#guess0');
var guess1 = document.querySelector('#guess1');
var guessHolder = [guess0,guess1];
var score = document.querySelector('#score');
var quest = document.querySelector('#question');
var progress = document.querySelector('#progress');
score.innerHTML = 'Your score: ' + quiz.getScore();

function showQuestion(questionNumber, answers){

      quest.innerHTML = question.getQuest(questionNumber);
      quiz_ui.setInfo(question.getQuestionsNr(),questionNumber);
      progress.innerHTML = quiz_ui.progressInfo();
      setGuessHolder(questionNumber, answers);
}

function setGuessHolder(questionNumber,answers){
    for (var x=0; x < answers.length; x++){
        choiceHolder[x].innerHTML = answers[x][1];
        if (answers[x][2]) {
            guessHolder[x].addEventListener('click',function (){
              quiz.updateScore();
              score.innerHTML = 'Your score: ' + quiz.getScore();
              score.style.color = 'green';
              var newn = questionNumber + 1;
                if (question.getQuest(newn)){
                    showQuestion(newn, question.getAnswers(newn));
                }else{
                    progress.innerHTML = 'Over! Awsome score!';
                    progress.style.color = 'red';
                    progress.style.fontWeight = 700;
                    progress.style.fontSize = '30px';
                    quest.innerHTML = '';
                    allButton = document.querySelectorAll('button');
                    for (var y=0; y < allButton.length; y++){
                        allButton[y].style.display = 'none';
                        choiceHolder[y].style.display = 'none';
                      };
                  }
              });
          }
      }
  }


showQuestion(0, question.getAnswers(0));
