
//Nicholas Park Inclass 5
appendUnorderedEnd();
prependUnorderedStart();
coolUnordered();
addNumberHeader();
// ADD NEW ITEM TO END OF LIST
function appendUnorderedEnd(){
    let ul = document.getElementsByTagName("ul")[0]; //get the first UL
    let li = document.createElement("li"); //create an LI
    li.appendChild(document.createTextNode("cream")); // create a text node and append it to the created LI
    ul.appendChild(li); //append the created LI to the first UL
    console.log("append Done"); 
}

// ADD NEW ITEM START OF LIST
function prependUnorderedStart(){
    let ul = document.getElementsByTagName("ul")[0]; //get the first UL
    let li = document.createElement("li"); //create an LI
    li.appendChild(document.createTextNode("kale")); // create a text node and append it to the created LI
    ul.prepend(li); // place the LI at the start of the UL, prepend should work on all non-IE browsers
    console.log("prepend Done");
}

// ADD A CLASS OF COOL TO ALL LIST ITEMS
function coolUnordered(){
    document.getElementsByTagName("ul")[0].className = "cool"; //change the class name of the UL
    childList = document.getElementsByTagName("ul")[0].childNodes //get a list of the child nodes of the UL
    for (let i = 0; i < childList.length; i++){ //change each child
            childList[i].className = "cool"; //set each child's class to cool
        }
    console.log("cool Done");
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
function addNumberHeader(){
    var num = document.getElementsByTagName("ul")[0].childElementCount; //get the number of items in the first UL
    var h2 = document.getElementsByTagName("h2")[0]; //get the first H2
    h2.innerHTML = h2.innerHTML + "<span>" + num + "</span>"; //change the contents of H2 to include the span with the number of items in the first UL
    console.log("number Done");
}