document.addEventListener('DOMContentLoaded', ()=> {
    const form = document.querySelector('#registrar');
    const input = document.querySelector('input');
    const list = document.querySelector('#invitedList');
    const main = document.querySelector('.main');

    const div = document.createElement('div');
    const filterLabel = document.createElement('label');
    const filterCheckBox = document.createElement('input');
    filterLabel.textContent = "Hide unconfirmed";
    filterCheckBox.type = 'checkbox';
    filterLabel.appendChild(filterCheckBox);
    div.appendChild(filterLabel);
    main.appendChild(div);

    filterCheckBox.addEventListener('change',(e)=>{
      const childs = list.children;
        for(let x=0; x < childs.length; x++){
            if (e.target.checked){
              if (!childs[x].style.backgroundColor){
                childs[x].style.display = 'none';
              }
            }else{
              childs[x].style.display = 'block';
          }
      }
    });

    function appendToList(input){

      const li = document.createElement('li');
      const label = document.createElement('label');
      label.textContent = 'Confirmed';
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remove';
      const editBtn = document.createElement('button');
      editBtn.textContent = 'Edit';
      const span = document.createElement('span');
      span.textContent = input.value;
      li.appendChild(span);
      li.appendChild(label);
      label.appendChild(checkbox);
      li.appendChild(removeBtn);
      li.appendChild(editBtn);
      return li;
    }

    form.addEventListener('submit', (e)=>{
        e.preventDefault(); //prevent to refresh
        newlist = appendToList(input);
        list.appendChild(newlist);
         // Append element to the submited list name
        input.value = ''; // reset input to empty after added item
    });

    list.addEventListener('change',(e)=>{
      const parent = e.target.parentNode.parentNode;
      if (e.target.checked){
        parent.style.backgroundColor = '#e1f1e1';
      }else{
        parent.style.backgroundColor = 'inherit';
      }
    });

    list.addEventListener('click',(e) => {
      if (e.target.tagName === 'BUTTON'){
        const parent = e.target.parentNode;
        const anotherparent = parent.parentNode;

        if (e.target.textContent === 'Remove'){
          anotherparent.removeChild(parent);
        }
        else if (e.target.textContent === 'Edit'){
          const span = parent.firstElementChild;
          const input = document.createElement('input');
          input.type = 'text';
          parent.insertBefore(input, span);
          parent.removeChild(span);
          input.value = span.textContent;
          e.target.textContent = 'Save';
        }
        else if (e.target.textContent === 'Save'){
          const input = parent.firstElementChild;
          const span = document.createElement('span');
          span.textContent = input.value;
          parent.insertBefore(span, input);
          parent.removeChild(input);
          e.target.textContent = 'Edit';
        }
      }
    });
});
