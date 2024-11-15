// function push pop peek and length
console.log(" from stacks file");
//stacks using an array

//getting tghe word from the user

var form = document.createElement("form");
btn= document.createElement("button");
var input =document.createElement("input");



//-------style------
btn.style.width="auto";
btn.style.alignSelf="center";
btn.style.padding="5px";
btn.innerText="reverse";



input.setAttribute('placeholder', ' enter text' );
input.setAttribute('type', 'text');
//input.setAttribute('value' , 'jackson');

btn.addEventListener("click",function(e){
    e.preventDefault();
    var word1 = input.value;
    console.log(word1);

    var word = word1;

    


//var inputText = "";
var letters =[]; //stack

var word = input.value;
//word = input.innerText;

var rword ="";


//button


btn.addEventListener("click",()=>{
    
    
});


//putting letters of word in stack

for(var i = 0; i < word.length; i++){
    letters.push(word[i]);
    console.log(letters);    
}

for(var i =0; i < word.length; i++){
    rword += letters.pop();
    console.log(rword);
}

if(rword === word){
    console.log(word + " is a palindrome.");
}else{
    console.log(word + " is not a palindrome");
}





// words.append(text);
// words.append(text1);
text.innerText = word;
text1.innerText = rword;

input.value = '';


})

//console.log(sharedVariable);
//console.log(topic);

//DOM MANIPULATION 
//const body = document.querySelector('body');

const text = document.createElement('p');
const text1 = document.createElement('p');
const words =document.createElement('div');
//styles
//------form-----
form.style.alignContent="center";
form.style.display="flex";
form.style.flex="1";
form.style.alignSelf="center";

//-----inputs------
input.style.width="200px";
input.style.alignSelf="center";
input.style.padding="10px"
input.style.fontSize="20px"
input.style.fontFamily="'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif";
//------words--------

words.style.fontSize="20px";
words.style.display="flex";
words.style.border="solid 2px white";
words.style.justifyContent="center";
words.style.alignContent="center";
words.style.background="transparent";
words.style.backgroundImage="url(/images/estein.jfif)"
//words.style.flexDirection="column";
//--------p--------
text.style.color="white";
text.style.backgroundColor= "black";
text.style.padding="20px"
text.style.fontFamily=" 'Courier New', Courier, monospace";
text1.style.color=" black";
text1.style.backgroundColor= "white";
text1.style.padding="20px"
text1.style.fontFamily=" 'Courier New', Courier, monospace";


//------adding html elements-------

form.append(input);
form.append(btn);
stack.append(form);
stack.append(words);

 words.append(text);
 words.append(text1);
// text.innerText = word;
// text1.innerText = rword;
