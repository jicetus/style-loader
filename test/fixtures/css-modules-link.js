import './css-modules.css';

const node1 = document.createElement("DIV");
const textNode1 = document.createTextNode("Water");

node1.appendChild(textNode1);

document.body.appendChild(node1);

const node2 = document.createElement("DIV");
const textNode2 = document.createTextNode("Ground");

node2.appendChild(textNode2);

document.body.appendChild(node2);