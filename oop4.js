document.write("Create getters and setters<br/><br/>");


var address={
  street:"No street",
    city:"No city",
    state:"No state",
    
    get getAddress(){
        return this.street +", "+this.city+", "+this.state;
    },
    set setAddress(theAddress){
        var parts=theAddress.toString().split(", ");
        this.street=parts[0] || "";
        this.city=parts[1] || "";
        this.state=parts[2] || "";
    }
};

address.setAddress="123 main street, kandy, srilanka";
//here we dont use paranthesis for normal functions 
document.write("Address : "+address.getAddress +"<br/>");

document.write("City : "+address.city +"<br/>");


//================================================================================
//a depricated way

function Coordinates(){
    this.latitude=0;
    this.longitude=0;    
}

Object.__defineGetter__.call(Coordinates.prototype,"getCoords",function(){
    return "Lat : "+this.latitude+" Long : "+this.longitude;
});

Object.__defineSetter__.call(Coordinates.prototype,"setCoords",function(coords){
   var parts=coords.toString().split(", ");
        this.latitude=parts[0] || "";
        this.longitude=parts[1] || "";        
});

var testCoords = new Coordinates();

testCoords.setCoords="20.3, 54.87";

//here also no paranthesis
document.write("Coordinates : "+testCoords.getCoords+"<br/>");

//getters and setters using defined property=================================

function Point(){
    this.xPos=0;
    this.yPos=0;
}

Object.defineProperty(Point.prototype,"position",{
    get: function(){
        return "X : "+this.xPos+" Y: "+this.yPos;
    },
    set: function(thePoint){
        var parts=thePoint.toString().split(", ");
        this.xPos = parts[0] || "";
        this.yPos = parts[1] || "";
    }
});

var point1 = new Point();

point1.position="2, 4";
document.write("Point position : "+point1.position+"<br/>");

//most uptodate version===========================================================

var Circle= function(radius){
    this._radius=radius;   
}
Circle.prototype={
    set radius(radius){this._radius=radius;},
    get radius(){return this._radius;},
    get area(){return Math.PI*(this._radius*this._radius);}
};

var circle1=new Circle(7);
circle1.radius=circle1.radius*2;
function Point(){
  this.xPos = 0;
  this.yPos = 0;
}
 
// Use defineProperty to set getters and setters
// Pass the prototype to attach to along with the property name
// and define the functions to associate with get and set
Object.defineProperty(Point.prototype, "pointPos", {
  get: function(){
    return "X: " + this.xPos + " Y: " + this.yPos;
  },
  set: function(thePoint){
    var parts = thePoint.toString().split(", ");
    this.xPos = parts[0] || '';
    this.yPos = parts[1] || '';
  }
});
 
var aPoint = new Point();
 
aPoint.pointPos = "100, 200";
 
document.write("A circle with radius : "+circle1._radius+" area : "+circle1.area.toFixed(3)+ "<br />");




