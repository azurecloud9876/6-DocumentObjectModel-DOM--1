//console.log("Debugging Document object in browser",document);
//console.log("Debugging Document body",document.body);
//console.log("Debugging Document nodes",document.childNodes); // <DOCTYPE> and <HTML> - NodeList(2) [<!DOCTYPE html>, html]
//console.log("Debugging Document Elements",document.children); // HTMLCollection [html]


/* 
Everything is a node in Document and not Everything is an element in document.

How many child elements inside HTML? - 2 they are head and body
How many child nodes inside HTML ? - 3 they are head,text(newline or space between head and body is considered as text node), body

Difference between InnerHTml and InnerText?

Difference between InnerHTml and OuterHtml?

Difference between OuterHTml and OuterText?

*/

/* 
Getter :  innerText
In vanilla JavaScript, innerText grabs just the rendered text of an HTML element. In essence, the text that is visible in the browser is what innerText grabs.

Getter :  textContent
This will return the text content with spacing (similar to innerHTML), but without any inner element tags.

Getter : innerHTML
This will actually get or set the inner content of an HTML element.

Setter: innerText vs textContent - Both will update string As-is between the tags, any html element is also considered as string.

Setter : innerHTML -  HTML element in string is rendered as output in the browser

*/

const id1_GetElement = document.getElementById("id1"); //HTMLElement 

const id1_QSelector = document.querySelector("p");


console.log("Getting InnerText:",id1_QSelector.innerText);//getter

//id1_QSelector.innerText="<p id=“example”>This is an <span> example </span>.</p>"

console.log("Getting textContent:",id1_QSelector.textContent); //Getter

//id1_QSelector.textContent = "<p id=“example”>This is an <span> example </span>.</p>"

console.log("Getting InnerHTML:",id1_QSelector.innerHTML); //Getter

//id1_QSelector.innerHTML = "<p id=“example”>This is an <span> example </span>.</p>" 






