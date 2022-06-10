const paragraph = document.createElement('p');
paragraph.textContent = "Hey I'm red!";
paragraph.style.color = 'red';

const container = document.querySelector('#container');
container.append(paragraph);

const h3 = document.createElement('h3');
h3.textContent =  "I'm a blue h3!";
h3.style.color = 'blue';

