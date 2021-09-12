class System{

    constructor(){}
    authenticate(actualCode,enteredCode){
        textsize(50);
        fill("black");
        text(code,300,300)
        // Add code to authenticate the given code and the access codes.

        if(actualCode===enteredCode.toUpperCase()){
            return true
        }else{
            return false
        }
   
    }
}