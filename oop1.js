
//creating a basic object
var customer={
    name:"Isuru Sankalpa",
    speak: function(){
        return "My name is "+this.name;
    },
    //onother object inside an object
    address:{
        street: '123 Main St',
        city:"Kandy"        
    }
};

//refer properties of a object
document.write(customer.speak()+"<br/>");

//refer object inside of object
document.write(customer.name+" lives at "+customer.address.city+"<br/>");

//add properties to a object
customer.address.country="Sri Lanka";

document.write(customer.address.country+"<br/>");

//create multiple different objects of same type

//constructor function

function Person(name,city){
    this.name=name;
    this.city=city;
    
    this.infostring=function(){
        return this.name+" lives in "+this.city+"<br/>";
    }
}


//creating a object with a constructor function
var person1 = new Person("Kasun Dananjaya","Nuwaraeliya");

document.write(person1.infostring()+"<br/>");

//check the type of a object
document.write("person 1 is of type "+typeof(person1)+"<br/>");
document.write("person 1 is of 'Person' type - "+(person1 instanceof Person)+"<br/>");

//pass an object to a function and change its values
function changeName(person){
    person.name = "Isuru Sankalpa";
}
//use change function
document.write(person1.name+" became ");
changeName(person1);
document.write(person1.name+"<br/>");

//equalance of objects 
//objects are equal only if they reference exact same object


var person2 = new Person("Mark","USA");
var person3 = new Person("Mark","USA");
var person4=person1;
//== mean equaling without the type
//=== mean equaling with the type
//in here it doesn't matter
document.write("person1===person4 => "+(person1===person4)+"<br/>");
document.write("person2===person3 => "+(person2===person3)+"<br/>");


