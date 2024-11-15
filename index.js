//declarations
var body = document.querySelector('body');

var sharedVariable ="helloworld"; //const variables can't be shared
//dom manipulations

//body.style.backgroundColor="pink";
//adding a div in the body for stacks

var stack =document.createElement('div');

stack.style.height="100px";
stack.style.display="flex";
stack.style.backgroundImage="url('/images/chair.jfif')"
//stack.style.backgroundColor="teal";
stack.style.width="auto";
stack.style.width="100vh";
stack.style.height="auto";
stack.style.alignContent="center";
stack.style.justifyContent="center";
stack.style.flexDirection="column";

body.append(stack);

var topic =document.createElement('h2');
topic.innerText="Reverse word";
topic.style.backgroundColor="white";
topic.style.width= "200px";
topic.style.fontSize="50px";
//topic.style.marginTop="10vh";
//topic.style.marginLeft="20vh";
topic.style.background="transparent";
topic.style.color="white";
topic.style.border=" solid 2px white";
topic.style.borderRadius="7px";
topic.style.padding="10px";
topic.style.display="flex";
topic.style.flex="1";
topic.style.alignContent="center";
topic.style.justifyContent="center";
topic.style.alignSelf="center";
stack.append(topic);





//console logs

console.log("from index file");


