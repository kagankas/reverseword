//declarations
var body = document.querySelector('#body');

var sharedVariable ="helloworld"; //const variables can't be shared
//dom manipulations

//body.style.backgroundColor="pink";
//adding a div in the body for stacks

var stack =document.createElement('div');

body.style.display="flex";
body.style.flex="1";
body.style.justifyContent="center";
body.style.alignContent="center";
//body.style.paddingTop="150px";

//stack.style.marginTop="50vh";
stack.style.height="100px";
stack.style.display="flex";
stack.style.backgroundImage="url('/images/chair.jfif')"
//stack.style.backgroundColor="teal";
stack.style.backgroundAttachment="fixed";
// stack.style.backgroundRepeat="no-repeat";
// stack.style.backgroundSize="cover";
// stack.style.backgroundPosition="center center";
stack.style.width="auto";
stack.style.width="100vh";
stack.style.height="auto";
stack.style.borderRadius="50px";
stack.style.padding="20px";
stack.style.marginTop=" 100px"
stack.style.alignContent="center";
stack.style.justifyContent="center";
stack.style.flexDirection="column";

body.append(stack);

var topic =document.createElement('h2');
topic.innerText="Reverse word";
topic.style.backgroundColor="white";
topic.style.width= "auto";
topic.style.fontSize="50px";
//topic.style.marginTop="10vh";
//topic.style.marginLeft="20vh";
topic.style.background="transparent";
topic.style.color="white";
topic.style.margin="20px"
topic.style.border=" solid 5px white";
topic.style.borderRadius="20px";
topic.style.padding="10px";
topic.style.display="flex";
topic.style.flex="1";
topic.style.alignContent="center";
topic.style.justifyContent="center";
topic.style.alignSelf="center";
stack.append(topic);





//console logs

console.log("from index file");


