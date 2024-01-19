let fruits = ['Olma','Anor','Behi','Nok','Xurmo','Uzum','Olcha'];
const wrapper = document.getElementById('wrapper') 

localStorage.setItem("Name", JSON.stringify(fruits));
localStorage.setItem("Father", "Smit");

sessionStorage.setItem("user", JSON.stringify([{name:"ali",username:"adminus",age:34}]));
sessionStorage.setItem("Lastname", "Doe");

document.cookie = "Email=test@gmail.com";
document.cookie = "cookie=cookie@gmail.com";


indexedDB.open('Hello world',1)
indexedDB.open('Bye ',1)

function createItem(el){
    let li = document.createElement('li');
    li.innerHTML = el;
    return li;
}
 
const frag = document.createDocumentFragment();
 
fruits.forEach(el => {
    let li  = createItem(el);
    frag.appendChild(li);
})
// console.log(frag);
wrapper.appendChild(frag)


