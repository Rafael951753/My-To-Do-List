const myForm = document.querySelector('#my-form');
const newItemInput = document.querySelector('#new-item-input');
const myList = document.querySelector('#my-list');





     
  

myForm.addEventListener('submit', (event) => {

  event.preventDefault(); // prevent form submission



  const newItemText = newItemInput.value;
  if (newItemText) { // only add non-empty items
    const newItem = document.createElement('li');

    newItem.innerText = newItemText;

    const donebutton = document.createElement('span');
    donebutton.innerText = 'Done';
    const notButton = document.createElement('span');
    notButton.innerText = 'Not Done';
    const deleteButton = document.createElement('span');
    deleteButton.innerHTML= '<i id="delete" class="material-icons">delete</i>';
    


   notButton.style.visibility='hidden';


   
     
   donebutton.classList.add('done-notdone');
   donebutton.addEventListener('click', () => {
   newItem.style.backgroundColor = '#03A89E';
       donebutton.style.visibility='hidden';
       notButton.style.visibility='visible';
       donebutton.classList.add('done');
     });

     notButton.classList.add('done-notdone');
     notButton.addEventListener('click', () => {
           newItem.style.backgroundColor = ' #4443a1 ';
       donebutton.style.visibility='visible';
       notButton.style.visibility='hidden';
     });


    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('click', () => {
      myList.removeChild(newItem);
    });


    
    newItem.appendChild(donebutton);
    newItem.appendChild(notButton);
    newItem.appendChild(deleteButton);


    
    
    myList.appendChild(newItem);
    newItemInput.value = ''; // clear input
  }
});




