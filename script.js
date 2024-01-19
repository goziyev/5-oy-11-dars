localStorage.setItem("Name", "John");
localStorage.setItem("Father", "Smit");

sessionStorage.setItem("user", JSON.stringify([{name:"ali",username:"adminus",age:34}]));
sessionStorage.setItem("Lastname", "Doe");

document.cookie = "Email=test@gmail.com";
document.cookie = "cookie=cookie@gmail.com";


indexedDB.open('Hello world',1)
indexedDB.open('Bye ',1)

