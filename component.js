document.addEventListener('DOMContentLoaded', 

             
function () {
    const addButton = document.querySelector('#addButton');
    addButton.addEventListener('click',
                               
                               function () {
     
        const textInput = document.querySelector('#itemText');
        const itemText  = textInput.value;

        if (itemText) {
            const ul = document.querySelector('ul');
            const li = document.createElement('li');

          
         const checkbox = document.createElement('input');
 checkbox.type = "checkbox";
checkbox.id="checkbox"
           checkbox.value = 1;
            checkbox.name = "todo[]";
                    
li.addEventListener('click', function (e) {
                e.target.parentNode.removeChild(e.target);


          

  
            });

            li.textContent = itemText;
          ul.appendChild(li);
            textInput.value = '';
          li.name = "todo[]";
           li.appendChild(checkbox);
          checkbox.onclick = updateItem.bind(checkbox);
  

  function updateItem() {
    if (this.checked) {
      this.parentNode.style.textDecoration = "line-through";
    } else {
      this.parentNode.style.textDecoration = "none";
    }
  }
          
          
        }

    });
   
             

});
