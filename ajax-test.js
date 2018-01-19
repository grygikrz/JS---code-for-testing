const button = document.querySelector('#button6');
const show = document.querySelector('#showajax');
const xhr = new XMLHttpRequest();

button.addEventListener('click', () => {
  testAjax2();
});

function testAjax(){

    xhr.onreadystatechange = function(){
      console.log(xhr.readyState);
      console.log(xhr);
      if (xhr.readyState == 4 && xhr.status == 200) {
        show.innerHTML = xhr.responseText;
      }
    };
    xhr.open('GET','newAjaxTest.txt', true);
    xhr.send();

}

function testAjax2(){

    xhr.onreadystatechange = function(){
      console.log(xhr.readyState);
      console.log(xhr);
      if (xhr.readyState == 4 && xhr.status == 200) {
        let data = JSON.parse(xhr.responseText);
        for (var x = 0; x < data.length; x++){
          show.innerHTML += data[x]['login']+'\n';
        }
      }
    };
    xhr.open('GET','https://api.github.com/users', true);
    xhr.send();
}
