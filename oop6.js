document.write("Create a function for extend<br/><br/>");

function extend(Child,Parent){
    var Temp = function(){};
    
    Temp.prototype=Parent.prototype;
    
    Child.prototype= new Temp();
    Child.prototype.constructor=Child;
}