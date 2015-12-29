document.write("How inheritance work yo<br/><br/>");

//prototype is a object inside of object
//inheritance ===> prototype=animal

function Animal(){
    this.name="Animal";
    this.toString=function(){
        return "My Name is "+this.name;
    }
}

function Canine(){
    this.name="Canine";
}

function Wolf(){
    this.name="Wolf";
}

//override the prototype object
Canine.prototype=new Animal();
Wolf.prototype=new Canine();

Canine.prototype.constructor = Canine;
Wolf.prototype.constructor = Wolf;

var wolf1= new Wolf();
document.write(wolf1.toString()+"<br/>");

//example of polymorphism

document.write("wolf instance of animal: "+(wolf1 instanceof Animal)+"<br/>");

//adding all animal objects a sound property
Animal.prototype.sound ="Grrrrr";
Animal.prototype.getSound = function(){
    return this.name +" sounds "+ this.sound;
}


Canine.prototype.sound="woof";
Wolf.prototype.sound="Grrrr Woof";


document.write(wolf1.getSound()+"<br/>");

//speed up the look up process
function Rodent()
{
    this.name="Rodent";
}

function Rat(){
    this.name="Rat";
}

Rodent.prototype=new Animal();
Rat.prototype=Rodent.prototype;

Rodent.prototype.constructor = Rodent;
Rat.prototype.constructor =Rat;

var rat1 = new Rat();

document.write(rat1.toString()+"<br/>");
