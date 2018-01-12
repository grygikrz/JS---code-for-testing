
function print(message) {
  document.write(message);
}

var questions = [['1. How many is 3+5',8],['2. How many is 3+5',8],['3. How many is 3+5',8],['4. How many is 3+5',8]];
var ans = [[0],[0],[0],[0]];
var score = 0;
var userans = ''
for(var x=0; x < questions.length; x++){
    userans = prompt(questions[x][0]);
    if(parseInt(userans) === questions[x][1]){
        ans[x][0] = userans;
        score += 1;
        alert('Great thats correct answer!');
    }else{
      ans[x][0] = userans;
      alert('Unfortunetly the answers is wrong!');
    }
}
print('<h2>Your total score is: '+score+'</h2><br>');
for(var y=0; y < questions.length; y++){
  print('<b>Question: '+questions[y][0] + '</b>  -- Correct answer is : '+questions[y][1]);
  print(' -- Your answer: '+ans[y][0]+ '<br>');
}
