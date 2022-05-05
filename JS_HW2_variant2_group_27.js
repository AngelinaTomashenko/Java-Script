// 1. Скрипт должен на вход принимать строку.
//  2. После проверки строки выводить в консоль сообщение где будет конкретно написано, что не так в ведённой строке.
//  3. Минимум 5 символов в строке
//  4. Максимум 64 символа в строке
//  5. В строке должны быть буквы
//  6. Должна быть хотя бы одна буква в верхнем регистре
//  7. Должна быть хотя бы одна цифра
//  8. Должна быть хотя бы одна @
//  9. Строка не должна быть пустой


function validateform(){

    let errors = [];
  
    let somestring = prompt("Please, enter a string");
 
    if (somestring.length === 0){
        alert("the string is empty");
        return;
    }

    if (somestring.length < 5  || somestring.length> 64){
        alert("The string is less then 5 or more then 64 characters");
        return;
    }

    if(!somestring.includes("@")){
     //alert("the string does not contain '@'");
     errors.push("the string does not contain '@'");
    }
 
    if (!/\d/.test(somestring)){
     //alert("the string does not contain number"); 
     errors.push("the string does not contain number");   
    }
 
    if (!/[A-Z]/.test(somestring)){
     //alert("the string does not contain upper register char"); 
     errors.push("the string does not contain upper register char");  
    }
    
    if (!/[A-Za-z]/.test(somestring)){
    // alert("the string does not contain characters");  
    errors.push("the string does not contain characters");
    }

    if (errors.length == 0){
        alert("No mistakes in the string");
    }
    
    else{
        alert(errors);
    }

 }
validateform();
