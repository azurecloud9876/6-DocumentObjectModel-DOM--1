/* creating below HTML AS-IS to Html body with javascript DOM

 <div class = "div1">
     <p> This is from Div.... </p>
      <h1 id="id1">      
        <p>The Blog <i> belongs to ID1</i>!!</p>
        <p style="display: none;"> Test difference between InnerText and TextContent</p>
      </h1>   
    </div>
 */


const body = document.body;
console.log("Printing body:",body);


const createDivEle = document.createElement("div");
createDivEle.setAttribute("id","div1");
console.log("Printing createDivEle:",createDivEle);

const pEle = document.createElement("p");
pEle.innerHTML = "This is from Div....";
console.log("Printing pEle:",pEle);

const h1Ele = document.createElement("h1");
h1Ele.setAttribute("id","id1");

const p1h1Ele = document.createElement("p");
p1h1Ele.innerHTML = "The Blog <i> belongs to ID1</i>!!"; // Since we have html element inside string it make sense to use InnerHTML

p1h1Ele.style.color = "red";

console.log("Get the color of p1h1Ele: ",p1h1Ele.style)

const p2h1Ele = document.createElement("p");
p2h1Ele.innerText ="Test difference between InnerText and TextContent";
p2h1Ele.setAttribute("style","display: none;");
console.log("Printing p2h1Ele:",p2h1Ele);

h1Ele.append(p1h1Ele,p2h1Ele);
createDivEle.append(pEle,h1Ele);

console.log("Printing h1Ele:",h1Ele);

console.log("Printing createDivEle after appending:",createDivEle);

body.append(createDivEle);
