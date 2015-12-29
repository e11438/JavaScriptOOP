//prototypes
document.write("prototypes------------<br/><br/>");

function getSum(num1,num2){
    return num1+num2;
}

document.write("Num of arguments "+getSum.length+"<br/>");

//add properties and methods to an object using prototypes

function Mammal(name){
    this.name=name;
    this.getinfo=function(){
        return "This mammal is "+this.name;
    }
}
//adding an additional property
Mammal.prototype.sound="Grrrr";

//adding a n additional function
Mammal.prototype.makeSound=function(){
    return this.name + " sounds "+this.sound;
}

var grover = new Mammal("Grover");
document.write(grover.makeSound()+"<br/>");


//list all properties of a object

for(var prop in grover){
    document.write(prop+" : "+grover[prop]+"<br/>");
}

//verify property belong to ptototype part or object itself

document.write("name property of grover : "+grover.hasOwnProperty("name")+"<br/>");

document.write("sound is a property of grover : "+grover.hasOwnProperty("sound")+"<br/>");

//add methods and properties to built in JS objects
Array.prototype.inArray=function inArray(value){
    for(i=0;i<this.length;i++){
        if(this[i]===value){
            return true;
        }
    }
    return false;
}

var testArr=[1,2,3,4,5];
document.write("3 is in array?? : "+testArr.inArray(3)+"<br/>");

