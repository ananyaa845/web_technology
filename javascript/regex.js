let text="We love Music!"
let pattern=/music/gi; //i makes it case-insensetive,g makes its scope global
let found= text.search(pattern);
console.log(found);    //if not found, returns -1

text="We love Music! Music makes everything better.";
let newtext= text.replaceAll(pattern,"Art");//replace and replaceAll method.
console.log(newtext);
  
//Regex Pattern
//https://regex101.com
let t ="Life";
let r= /e$/.exec(t); //dollar sign, searching at the end
console.log(r);
r=/L$/.exec("Life");
console.log(r);

r=/^L/.exec("Life");
console.log(r);
r=/^Life$/.exec("Life");
console.log(r);

//Digits
r=/[0-9]{4}/.exec("1623");//{4} means there must be 4 digits.
console.log(r);
r=/^[0-5]{6,}$/.exec("123413423341313125");//{6,} means must be atleast 6 numbers and can be any more that that. [0-5] digits must be within 0-5
console.log(r);
 //to check the phone number is nepali or not.
 r=/^[9][87][/d]{8}$/.exec("9862298576");

 