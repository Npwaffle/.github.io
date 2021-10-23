//Nicholas Park GUI Homework 3 Javascript
document.getElementById("submit").onclick = function(){runTable()}; //When the submit button is clicked, run the code

function runTable(){ //This is essentially the main/driver function for the multiplication table generator
    var debugDiv = document.getElementById('debugger'); //fetch the debug log div
    debugDiv.innerHTML =""; //clear the debug log div
    debugLog = "<h2>Debug Log:</h2><br>"; // create the debug log and populate it with the initial header
    let hStart = document.getElementById("hStart").valueAsNumber; //get input field value as a number
    if (isNaN(hStart)){  //if number is nan (i.e. field is not filled out OR something like 'e' was entered)
        hStart = -12; //default
        debugLog = debugLog + "<br>" + "Error: invalid input for Minimum Number [Row]"; //add error to debug log
    }
    else{
        hStart = Math.trunc(hStart); //if number has a decimal value, get rid of the decimal
    }

    let hEnd = document.getElementById("hEnd").valueAsNumber; //get input field value as a number
    if (isNaN(hEnd)){  //if number is nan (i.e. field is not filled out OR something like 'e' was entered)
        hEnd = 12; //default
        debugLog = debugLog + "<br>" + "Error: invalid input for Maximum Number [Row]"; //add error to debug log
    }
    else{
        hEnd = Math.trunc(hEnd); //if number has a decimal value, get rid of the decimal
    }

    let vStart = document.getElementById("vStart").valueAsNumber; //get input field value as a number
    if (isNaN(vStart)){  //if number is nan (i.e. field is not filled out OR something like 'e' was entered)
        vStart = -12; //default
        debugLog = debugLog + "<br>" + "Error: invalid input for Minimum Number [Column]"; //add error to debug log
    }
    else{
        vStart = Math.trunc(vStart); //if number has a decimal value, get rid of the decimal
    }

    let vEnd = document.getElementById("vEnd").valueAsNumber; //get input field value as a number
    if (isNaN(vEnd)){  //if number is nan (i.e. field is not filled out OR something like 'e' was entered)
        vEnd = 12; //default
        debugLog = debugLog + "<br>" + "Error: invalid input for Maximum Number [Column]"; //add error to debug log
    }
    else{
        vEnd = Math.trunc(vEnd); //if number has a decimal value, get rid of the decimal
    }

    if (vStart > vEnd){ // swap the start and end values in the event the start value is larger; whatever value is start should be the smaller/minimum value
        console.log("swapping vStart and vEnd");
        debugLog = debugLog + "<br>" + "Notice: Minimum Value for [Column] greater than Maximum Value"; //add error to debug log
        let x = vStart;
        vStart = vEnd;
        vEnd = x;
    }

    if (hStart > hEnd){ // swap the start and end values in the event the start value is larger; whatever value is start should be the smaller/minimum value
        console.log("swapping hStart and hEnd");
        debugLog = debugLog + "<br>" + "Notice: Minimum Value for [Row] greater than Maximum Value"; //add error to debug log
        let x = hStart;
        hStart = hEnd;
        hEnd = x;
    }
    //Print the values in console for debug purposes
    console.log(hStart);
    console.log(hEnd);
    console.log(vStart);
    console.log(vEnd);
    debugDiv.innerHTML = debugLog; //set the debug div's contents to the debug log
    
    var tableDiv = document.getElementById('tableContainer'); //get the div for the table
    tableDiv.innerHTML = ""; //empty the table's div
    var output = "<table border='1' cellspacing='0'cellpadding='10'>" //create the soon to be table's output with some rudimentary css stuff
    output = output + "<tr>" + "<td>" + "</td>"; //open the top row and create an empty cell
    for(k = vStart; k < vEnd+1; k++){
        output = output + "<td>" + k + "</td>"; //create the top row
    }
    output = output + "</tr>";  //close the top row

    for(i = hStart; i < hEnd+1; i++){
        output = output + "<tr>" + "<td>" + i + "</td>"; //create the column header per row
        for(k = vStart; k < vEnd+1; k++){
            output = output + "<td>" + i * k + "</td>"; //do multiplication and add result to cell
        }
        output = output + "</tr>"; //close the row
    }
    output = output + "</table>"; //close the table
    tableDiv.innerHTML = output; //place the table in the tabel div
}