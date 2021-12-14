//Nicholas Park GUI Homework 5 Javascript
$(document).ready(function(){
    setupBoard();
});
function setupBoard(){
    initializeGame();
    $(".tileSpe").draggable({ //tileSpe is specifically the tile images
        start: function(event, ui){ //when dragging starts
            tileHeld = true; //set this flag to true, used for if/else statement below
            tileCorrect = false; //set this flag to false, assume the tile is not correct until it is dropped in a droppable
            $(this).css('z-index', 99); //render held tile above anything else
        },
        stop: function(event, ui){
            if(tileHeld){
                if(!tileCorrect){ //if the tile is not dropped in a valid droppable
                    tileHeld = false; //no longer held
                    $(this).animate({ //make a smooth animation to send it back to the holder
                        top: "0px",
                        left: "0px",
                    })
                    $(this).css('z-index', 0); //remove rendering priority
                }
                else{
                    tileHeld = false; //otherwise the tile was dropped in a valid space and it is no longer held
                    subWord();
                }
            }
        }
    }),
    //I will only be commenting the first instance of the droppables, each of the 15 tiles has a droppable, had I planned to do the whole board I wouldve used a cleaner method
    $("#sp1").droppable({
        accept: '.tileSpe', //only accept image tiles, even though there arent any other draggables anyway
        drop: function(event, ui){ //when something is dropped into this
            $(this).droppable('option', 'accept', ui.draggable); //change it so that it will not accept any other tiles
            tileCorrect = true; //a tile has been dropped in a valid space
            var pos = ui.draggable.attr("id"); //grab the id
            var k = parseInt(pos.substring(1)); //remove the 'A' from the start of the id, now the id has been converted to what position on the rack the tile had
            console.log("Added tile: "+Rack[k].letter+" with value: " +Rack[k].value+" at Board[0]");
            Board[0] = Rack[k].value; //change the score of this space to the tile's value.
        },
        out: function(event, ui){ //when the tile is removed, incidentally this also triggers whenever a tile strafes overhead, there is no ill effect for superfluous triggers other than console log spam
            $(this).droppable('option', 'accept', '.tileSpe'); //make it so the droppable accepts any tile
            Board[0] = -1; //set the score to -1, -1 is used to determine empty spaces
            console.log("Removed tile from Board[0], value is now: "+Board[0]);
            subWord();
        } 
    }),
    $("#sp2").droppable({
        accept: '.tileSpe',
        drop: function(event, ui){
            $(this).droppable('option', 'accept', ui.draggable);
            tileCorrect = true;
            var pos = ui.draggable.attr("id");
            var k = parseInt(pos.substring(1));
            console.log("Added tile: "+Rack[k].letter+" with value: " +Rack[k].value+" at Board[1]");
            Board[1] = Rack[k].value;
        },
        out: function(event, ui){
            $(this).droppable('option', 'accept', '.tileSpe');
            Board[1] = -1;
            console.log("Removed tile from Board[1], value is now: "+Board[1]);
            subWord();
        } 
    }),
    $("#sp3").droppable({
        accept: '.tileSpe',
        drop: function(event, ui){
            $(this).droppable('option', 'accept', ui.draggable);
            tileCorrect = true;
            var pos = ui.draggable.attr("id");
            var k = parseInt(pos.substring(1));
            console.log("Added tile: "+Rack[k].letter+" with value: " +Rack[k].value+" at Board[2]");
            Board[2] = Rack[k].value;
            dbl_word_2 = true;
        },
        out: function(event, ui){
            $(this).droppable('option', 'accept', '.tileSpe');
            Board[2] = -1;
            console.log("Removed tile from Board[2], value is now: "+Board[2]);
            dbl_word_2 = false;
            subWord();
        } 
    }),
    $("#sp4").droppable({
        accept: '.tileSpe',
        drop: function(event, ui){
            $(this).droppable('option', 'accept', ui.draggable);
            tileCorrect = true;
            var pos = ui.draggable.attr("id");
            var k = parseInt(pos.substring(1));
            console.log("Added tile: "+Rack[k].letter+" with value: " +Rack[k].value+" at Board[3]");
            Board[3] = Rack[k].value;
        },
        out: function(event, ui){
            $(this).droppable('option', 'accept', '.tileSpe');
            Board[3] = -1;
            console.log("Removed tile from Board[3], value is now: "+Board[3]);
            subWord();
        } 
    }),
    $("#sp5").droppable({
        accept: '.tileSpe',
        drop: function(event, ui){
            $(this).droppable('option', 'accept', ui.draggable);
            tileCorrect = true;
            var pos = ui.draggable.attr("id");
            var k = parseInt(pos.substring(1));
            console.log("Added tile: "+Rack[k].letter+" with value: " +Rack[k].value+" at Board[4]");
            Board[4] = Rack[k].value;
        },
        out: function(event, ui){
            $(this).droppable('option', 'accept', '.tileSpe');
            Board[4] = -1;
            console.log("Removed tile from Board[4], value is now: "+Board[4]);
            subWord();
        } 
    }),
    $("#sp6").droppable({
        accept: '.tileSpe',
        drop: function(event, ui){
            $(this).droppable('option', 'accept', ui.draggable);
            tileCorrect = true;
            var pos = ui.draggable.attr("id");
            var k = parseInt(pos.substring(1));
            console.log("Added tile: "+Rack[k].letter+" with value: " +Rack[k].value+" at Board[5]");
            Board[5] = Rack[k].value;
        },
        out: function(event, ui){
            $(this).droppable('option', 'accept', '.tileSpe');
            Board[5] = -1;
            console.log("Removed tile from Board[5], value is now: "+Board[5]);
            subWord();
        } 
    }),
    $("#sp7").droppable({
        accept: '.tileSpe',
        drop: function(event, ui){
            $(this).droppable('option', 'accept', ui.draggable);
            tileCorrect = true;
            var pos = ui.draggable.attr("id");
            var k = parseInt(pos.substring(1));
            console.log("Added tile: "+Rack[k].letter+" with value: " +Rack[k].value*2+" at Board[6]");
            Board[6] = Rack[k].value*2; //double letter score
        },
        out: function(event, ui){
            $(this).droppable('option', 'accept', '.tileSpe');
            Board[6] = -1;
            console.log("Removed tile from Board[6], value is now: "+Board[6]);
            subWord();
        } 
    }),
    $("#sp8").droppable({
        accept: '.tileSpe',
        drop: function(event, ui){
            $(this).droppable('option', 'accept', ui.draggable);
            tileCorrect = true;
            var pos = ui.draggable.attr("id");
            var k = parseInt(pos.substring(1));
            console.log("Added tile: "+Rack[k].letter+" with value: " +Rack[k].value+" at Board[7]");
            Board[7] = Rack[k].value;
        },
        out: function(event, ui){
            $(this).droppable('option', 'accept', '.tileSpe');
            Board[7] = -1;
            console.log("Removed tile from Board[7], value is now: "+Board[7]);
            subWord();
        } 
    }),
    $("#sp9").droppable({
        accept: '.tileSpe',
        drop: function(event, ui){
            $(this).droppable('option', 'accept', ui.draggable);
            tileCorrect = true;
            var pos = ui.draggable.attr("id");
            var k = parseInt(pos.substring(1));
            console.log("Added tile: "+Rack[k].letter+" with value: " +Rack[k].value*2+" at Board[8]");
            Board[8] = Rack[k].value*2;//Double letter score
        },
        out: function(event, ui){
            $(this).droppable('option', 'accept', '.tileSpe');
            Board[8] = -1;
            console.log("Removed tile from Board[8], value is now: "+Board[8]);
            subWord();
        } 
    }),
    $("#sp10").droppable({
        accept: '.tileSpe',
        drop: function(event, ui){
            $(this).droppable('option', 'accept', ui.draggable);
            tileCorrect = true;
            var pos = ui.draggable.attr("id");
            var k = parseInt(pos.substring(1));
            console.log("Added tile: "+Rack[k].letter+" with value: " +Rack[k].value+" at Board[9]");
            Board[9] = Rack[k].value;
        },
        out: function(event, ui){
            $(this).droppable('option', 'accept', '.tileSpe');
            Board[9] = -1;
            console.log("Removed tile from Board[9], value is now: "+Board[9]);
            subWord();
        } 
    }),
    $("#sp11").droppable({
        accept: '.tileSpe',
        drop: function(event, ui){
            $(this).droppable('option', 'accept', ui.draggable);
            tileCorrect = true;
            var pos = ui.draggable.attr("id");
            var k = parseInt(pos.substring(1));
            console.log("Added tile: "+Rack[k].letter+" with value: " +Rack[k].value+" at Board[10]");
            Board[10] = Rack[k].value;
        },
        out: function(event, ui){
            $(this).droppable('option', 'accept', '.tileSpe');
            Board[10] = -1;
            console.log("Removed tile from Board[10], value is now: "+Board[10]);
            subWord();
        } 
    }),
    $("#sp12").droppable({
        accept: '.tileSpe',
        drop: function(event, ui){
            $(this).droppable('option', 'accept', ui.draggable);
            tileCorrect = true;
            var pos = ui.draggable.attr("id");
            var k = parseInt(pos.substring(1));
            console.log("Added tile: "+Rack[k].letter+" with value: " +Rack[k].value+" at Board[11]");
            Board[11] = Rack[k].value;
        },
        out: function(event, ui){
            $(this).droppable('option', 'accept', '.tileSpe');
            Board[11] = -1;
            console.log("Removed tile from Board[11], value is now: "+Board[11]);
            subWord();
        } 
    }),
    $("#sp13").droppable({
        accept: '.tileSpe',
        drop: function(event, ui){
            $(this).droppable('option', 'accept', ui.draggable);
            tileCorrect = true;
            var pos = ui.draggable.attr("id");
            var k = parseInt(pos.substring(1));
            console.log("Added tile: "+Rack[k].letter+" with value: " +Rack[k].value+" at Board[12]");
            Board[12] = Rack[k].value;
            dbl_word_12 = true;
        },
        out: function(event, ui){
            $(this).droppable('option', 'accept', '.tileSpe');
            Board[12] = -1;
            console.log("Removed tile from Board[12], value is now: "+Board[12]);
            dbl_word_12 = false;
            subWord();
        } 
    }),
    $("#sp14").droppable({
        accept: '.tileSpe',
        drop: function(event, ui){
            $(this).droppable('option', 'accept', ui.draggable);
            tileCorrect = true;
            var pos = ui.draggable.attr("id");
            var k = parseInt(pos.substring(1));
            console.log("Added tile: "+Rack[k].letter+" with value: " +Rack[k].value+" at Board[13]");
            Board[13] = Rack[k].value;
        },
        out: function(event, ui){
            $(this).droppable('option', 'accept', '.tileSpe');
            Board[13] = -1;
            console.log("Removed tile from Board[13], value is now: "+Board[13]);
            subWord();
        } 
    }),
    $("#sp15").droppable({
        accept: '.tileSpe',
        drop: function(event, ui){
            $(this).droppable('option', 'accept', ui.draggable);
            tileCorrect = true;
            var pos = ui.draggable.attr("id");
            var k = parseInt(pos.substring(1));
            console.log("Added tile: "+Rack[k].letter+" with value: " +Rack[k].value+" at Board[14]");
            Board[14] = Rack[k].value;
        },
        out: function(event, ui){
            $(this).droppable('option', 'accept', '.tileSpe');
            Board[14] = -1;
            console.log("Removed tile from Board[14], value is now: "+Board[14]);
            subWord();
        } 
    })
};
var dbl_word_2 = false; // used to determine if leftmost double word score is active
var dbl_word_12 = false;// used to determine if rightmost double word score is active
var wordscore = 0;      // used to calculate the word score
var boardscore = 0;     // used to calculate the cumulative score
var ScrabbleTiles = []; // template for the bag
var Bag = [];           // the actual bag that will be used
var Rack = [];          // the player's rack
var Board = [];         // the board slots
var SlotReplace = [];   // array to track which slots should be replaced. [[UNIMPLEMENTED]]
var tileHeld = false;   // global flag to determine if a tile is being held
var tileCorrect = false;// global flag to determine if a held tile was dropped in a valid space
var wordList = "";      //global list of submitted words, only resets when game is hard reset [[UNIMPLEMENTED]]

function subWord(){
    wordscore = 0;
    for(var i = 0; i < Board.length; i++){   
        if(Board[i] != -1){ //check if the board slot is empty
            wordscore += Board[i]; //if it isnt, add the score of that space to the wordscore
        }
    }
    if(dbl_word_2){ //if double word score is active, double the score
        wordscore = wordscore * 2;
    }
    if(dbl_word_12){ //if double word score is active, double the score
        wordscore = wordscore * 2;
    }
    document.getElementById("scoreHeader").innerHTML ="Word Score = "+wordscore+"     ||      Total Score = "+boardscore;
}
function tallyWord(){
    subWord();
    boardscore += wordscore; //add wordscore to cumulative boardscore
    document.getElementById("scoreHeader").innerHTML ="Word Score = "+wordscore+"     ||      Total Score = "+boardscore;
    softResetGame(); //soft reset the game, keeping boardscore
}

function ScrabTiles(){
    console.log("setting template");
    ScrabbleTiles = [ //courtesy of "Ramon Meza", pulled from Json included with homework zip
        {"letter":"A", "value":1, "amount":9},
        {"letter":"B", "value":3, "amount":2},
        {"letter":"C", "value":3, "amount":2},
        {"letter":"D", "value":2, "amount":4},
        {"letter":"E", "value":1, "amount":12},
        {"letter":"F", "value":4, "amount":2},
        {"letter":"G", "value":2, "amount":3},
        {"letter":"H", "value":4, "amount":2},
        {"letter":"I", "value":1, "amount":9},
        {"letter":"J", "value":8, "amount":1},
        {"letter":"K", "value":5, "amount":1},
        {"letter":"L", "value":1, "amount":4},
        {"letter":"M", "value":3, "amount":2},
        {"letter":"N", "value":1, "amount":6}, // supposed to be 6, not 5, corrected
        {"letter":"O", "value":1, "amount":8},
        {"letter":"P", "value":3, "amount":2},
        {"letter":"Q", "value":10, "amount":1},
        {"letter":"R", "value":1, "amount":6},
        {"letter":"S", "value":1, "amount":4},
        {"letter":"T", "value":1, "amount":6},
        {"letter":"U", "value":1, "amount":4},
        {"letter":"V", "value":4, "amount":2},
        {"letter":"W", "value":4, "amount":2},
        {"letter":"X", "value":8, "amount":1},
        {"letter":"Y", "value":4, "amount":2},
        {"letter":"Z", "value":10, "amount":1},
        {"letter":"_", "value":0, "amount":2}
    ];
    console.log("template :: items : " + ScrabbleTiles.length)
}
function hardResetGame(){ //right now the only difference between soft and hard reset is that hard reset wipes the cumulative score
    document.getElementById("rack").innerHTML ="";
    dbl_word_2 = false;
    dbl_word_12 = false;
    wordscore = 0;      // used to calculate the word score
    boardscore = 0;     // used to calculate the cumulative score
    ScrabbleTiles = []; // template for the bag
    Bag = [];           // the actual bag that will be used
    Rack = [];          // the player's rack
    Board = [];         // the board slots
    SlotReplace = [];   // array to track which slots should be replaced. [[UNIMPLEMENTED]]
    tileHeld = false;   // global flag to determine if a tile is being held
    tileCorrect = false;
    document.getElementById("scoreHeader").innerHTML ="Word Score = "+wordscore+"     ||      Total Score = "+boardscore;
    setupBoard();
}

function softResetGame(){ //right now the only difference between soft and hard reset is that soft reset keeps the cumulative score
    document.getElementById("rack").innerHTML =""; //in future would not do this for a soft reset
    dbl_word_2 = false;
    dbl_word_12 = false;
    wordscore = 0;      // used to calculate the word score
    ScrabbleTiles = []; // template for the bag
    Bag = [];           // the actual bag that will be used
    Rack = [];          // the player's rack
    Board = [];         // the board slots
    SlotReplace = [];   // array to track which slots should be replaced. [[UNIMPLEMENTED]]
    tileHeld = false;   // global flag to determine if a tile is being held
    tileCorrect = false;
    document.getElementById("scoreHeader").innerHTML ="Word Score = "+wordscore+"     ||      Total Score = "+boardscore;
    setupBoard();
}

function initializeGame(){
    ScrabTiles();
    console.log("template done");
    createBag();
    console.log("bag created");
    populateRack();
    Board = [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]; //set all spaces to have a score value of -1, this is used to determine empty spaces
}

function createBag(){
    console.log("creating bag");
    var i = 0; //iterator
    var fBag = []; //temporary bag
    //create the bag
    for( i = 0; i < ScrabbleTiles.length; i++){ //for the length of the array
        while(ScrabbleTiles[i].amount != 0){ //while each spot in the array has a non-zero value (i.e. spot 0, A, has 9 tiles or a value of 9 for this purpose)
            fBag.push(ScrabbleTiles[i]); //place a copy of whatever is at this spot in the array into the temporary bag
            ScrabbleTiles[i].amount--; //reduce the number of tiles in this space, i.e. reduce the value of the spot
        }
    }
    console.log("temp bag filled :: items : " + fBag.length);
    //shuffle the bag
    while(fBag.length > 0){ //while the temporary bag isnt empty
        var tile = Math.floor(fBag.length * Math.random()); //select a random tile
        Bag.push(fBag[tile]); //put a copy of the random tile into the real bag
        fBag.splice(tile, 1); //remove the random tile from its spot in the fake bag, so it cant be pulled again
    }
    console.log("bag shuffled :: items : " + Bag.length);
}
function checkTile(tile){
    console.log("checking for image for tile :: " + tile.letter);
    var img = "images/Scrabble_Tile_"; //start building the link to the image
    switch(tile.letter){    //switch statement is used for building the link to the image, i.e. if the tile's letter is A, then A will be added to the link
        case "A":
            img+= "A";
            break;
        case "B":
            img+= "B";
            break;
        case "C":
            img+= "C";
            break;
        case "D":
            img+= "D";
            break;
        case "E":
            img+= "E";
            break;
        case "F":
            img+= "F";
            break;
        case "G":
            img+= "G";
            break;
        case "H":
            img+= "H";
            break;
        case "I":
            img+= "I";
            break;
        case "J":
            img+= "J";
            break;
        case "K":
            img+= "K";
            break;
        case "L":
            img+= "L";
            break;
        case "M":
            img+= "M";
            break;
        case "N":
            img+= "N";
            break;
        case "O":
            img+= "O";
            break;
        case "P":
            img+= "P";
            break;
        case "Q":
            img+= "Q";
            break;
        case "R":
            img+= "R";
            break;
        case "S":
            img+= "S";
            break;
        case "T":
            img+= "T";
            break;
        case "U":
            img+= "U";
            break;
        case "V":
            img+= "V";
            break;
        case "W":
            img+= "W";
            break;
        case "X":
            img+= "X";
            break;
        case "Y":
            img+= "Y";
            break;
        case "Z":
            img+= "Z";
            break;
        case "_":
            img+= "Blank";
            break;
    }
    img += ".jpg"; //add the file extension to the end of the image link
    console.log("reading tile image :: " + img);
    return img; //return the image link
}
function populateRack(){
    Rack = []; //empty the rack
    console.log("populating rack");
    for(i = Rack.length; i < 7; i++){ //for each spot in the rack
        if (Bag.length > 0){ //if the bag isnt empty
            Rack.push(Bag[0]); //put the next piece in the bag into the rack
            Bag.shift(); //remove said piece from the bag
            console.log("sending tile check");
            var img = checkTile(Rack[i]); //get the link to the tile's image
            console.log("returned tile img = "+img);
            var appender = "<div class='tile'><img class = 'tileSpe' id=A"+i+" src = "+img+"></div>"; //build the html to append to the tile rack
            $("#rack").append(appender); //append the html to the tile rack
        }
    }
    console.log("done populating rack");}