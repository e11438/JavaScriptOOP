document.write("private properties<br/><br/>");

function SecretCode(){
    var secretNumber=78;
    
    this.guessNum = function(num){
        if(num>secretNumber){
            return"Lower";
        }
        else if(num<secretNumber){
            return "Greater";
        }else{
            return "You guessed it";
        }
    }
}

var secret1 = new SecretCode();
document.write("value of secret number "+secret1.secretNumber+"<br/>");

document.write("Is 70 the number : "+secret1.guessNum(70)+"<br/>");

//cant access protected properties even with prototype functions

SecretCode.prototype.getSecretCode= function(){
    return this.secretNumber;    
}

document.write("Secret number is "+secret1.getSecretCode()+"<br/>");