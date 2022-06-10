const paragraph = document.createElement('p');
paragraph.textContent = "Hey I'm red!";
paragraph.style.color = 'red';

const container = document.querySelector('#container');
container.append(paragraph);

const h3 = document.createElement('h3');
h3.textContent =  "I'm a blue h3!";
h3.style.color = 'blue';

container.append(h3);

const divInContainer = document.createElement('div');
divInContainer.style.borderColor = 'black';
divInContainer.style.borderStyle = 'solid';
divInContainer.style.borderWidth = '2px';
divInContainer.style.backgroundColor = 'pink';

const h1InDiv = document.createElement('h1');
h1InDiv.textContent = "I'm in a div";


const paraInDiv = document.createElement('p');
paraInDiv.textContent = "ME TOO!";

divInContainer.append(h1InDiv);
divInContainer.append(paraInDiv);

container.append(divInContainer);


