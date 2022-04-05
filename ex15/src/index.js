function switchCase(letter){
switch (letter){
case "a":
    console.log("antelope");
    break;
case "b":
    console.log("bird");    
    break;
case "c":
    console.log("cat");
    break;
default :
    console.log("stuff");
    break;

}
    
}

switchCase("a");
switchCase("b");
switchCase("c");
switchCase("d");
switchCase("4");

module.exports = switchCase;



