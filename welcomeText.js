var aText = new Array(
    "Welcome to my website! I'm Silas Nevstad, a student at Northeastern University studying Computer Science.",
    "Feel free to explore the different pages on my site and don't hesitate to reach out me to if you have any questions or just want to say hi.",
    );

var iSpeed = 70; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines
    
var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row
    
function typewriter() {

    sContents =  ' ';
    iRow = Math.max(0, iIndex-iScrollAt);
    var destination = document.getElementById("typedtext");
    
    while ( iRow < iIndex ) {
        sContents += aText[iRow++] + '<br />';
    }
    destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
    if ( iTextPos++ == iArrLength ) {
        iTextPos = 0;
        iIndex++;
    if ( iIndex != aText.length ) {
        iArrLength = aText[iIndex].length;
        setTimeout("typewriter()", 500);
    } else {
        // animation has finished
        iIndex = 0;
        setTimeout("typewriter()", 2000);
    }
    } else {
        setTimeout("typewriter()", iSpeed);
    }
}


typewriter();