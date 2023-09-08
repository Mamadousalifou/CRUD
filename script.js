const Abutton = document.querySelector('#Ajouter')
const Cbutton = document.getElementById('clear');
const users = document.querySelector(".userList");




Abutton.onclick = () => {
    const nom = document.querySelector('#nom').value;
    const age = document.querySelector('#age').value;

    const user ={
    nom : nom,
    age : age
   
  }
  displays();
  // const local = JSON.parse(localStorage.getItem('user'))
  // localStorage.setItem(JSON.stringify(user));

}


function displays(){

users.innerHTML = '';
//let data =[nom.value ,age.value];

for(let i=0 ; i<users.length;i++){
  
  const user = users[i];

const ListItem = document.createElement('li');
ListItem.textContent= `Nom: ${user.nom}, Age: ${user.age}`;

users.appendChild(ListItem);

}
// const ListItem = document.createElement('li');
// ListItem.textContent ='Mamadou';
// console.log(ListItem);
// users.appendChild(ListItem);



// for(let i=0;i<users.length;i++){
// const user = users[i];
// const ListItem = document.createElement('li');
// ListItem.textContent = `Nom: ${user.nom}, Age: ${user.age}`;
// }

}