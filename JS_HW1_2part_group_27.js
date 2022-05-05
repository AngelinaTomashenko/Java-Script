//1*Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
// Пример: const checkAge = function(age) {
// Ваши преобразования}
// Вывести в консоль результат работы функции с возрастами 17, 18, 61

age_2 = 18;
age_3 = 60;
 function checkAge(age){
if(age < age_2)
     {console.log('You dont have access cause your age is ' + age + " It's less then " + age_2)} 
else if(age >= age_2 && age < age_3)
     {console.log("Welcome!")}
else if(age > age_3)
      {console.log('Keep calm and watch Culture channel')}
else
      {console.log('Technical work')}
    };
checkAge(17);
checkAge(18);
checkAge(61);


//2*Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка

 function checkAge(age){
     age_2 = 18;
     age_3 = 60;
if (typeof (age) !== "number") 
     {console.log('Error! Not a number')}    
else if(age < age_2)
     {console.log('You dont have access cause your age is ' + age +  "It's less then"  + age_2)} 
else if(age >= age_2 && age < age_3)
     {console.log("Welcome!")}
else if(age > age_3)
      {console.log('Keep calm and watch Culture channel')}
else
      {console.log('Technical work')}
    };
checkAge("61");

// //3** Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number

 function checkAge(age){
     age_2 = 18;
     age_3 = 60;
     age = +age;
if (typeof (age) !== "number")
      {console.log('Error! Not a number')}  
else if(age < age_2)
     {console.log('You dont have access cause your age is ' + age + " It's less then " + age_2)} 
else if(age >= age_2 && age < age_3)
     {console.log("Welcome!")}
else if(age > age_3)
      {console.log('Keep calm and watch Culture channel')}
else
      {console.log('Technical work')}
    };
checkAge('2');

// // 4***:Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке
 function checkAge(age){
     age_2 = 18;
     age_3 = 60;
     age = +age;
if (typeof (age) !== "number")
      {console.log('Error! Not a number')}  
else if(age < age_2)
     {console.log('You dont have access cause your age is ' + age + " It's less then " + age_2)} 
else if(age >= age_2 && age < age_3)
     {console.log("Welcome!")}
else if(age > age_3)
      {console.log('Keep calm and watch Culture channel')}
else
      {console.log('Technical work')}
    };

    let age = prompt ('Enter user age')
checkAge(age)
