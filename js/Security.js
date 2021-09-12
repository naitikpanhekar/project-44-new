class Security {

    constructor(){
        
        this.access1 = createInput("code1")
        this.access1.position(100,90);
        this.access1.style('background','white');

        this.button1 = createInput("Check")
        this.button1.position(100,120);
        this.button1.style('background','ligthgrey');

        this.access2 = createInput("code1")
        this.access2.position(700,190);
        this.access2.style('background','white');

        this.button2 = createInput("Check")
        this.button2.position(700,220);
        this.button2.style('background','lightgrey');

        // Add code to create the input and button elements
        
        this.access3 = createInput("code1")
        this.access3.position(100,350);
        this.access3.style('background','white');

        this.button3 = createInput("Check")
        this.button3.position(100,380);
        this.button3.style('background','lightgrey')
      
    }

    display(){

        this.button1.mousePressed(() => {
            if(system.authenticate(acecessCode1,this.access1.value())){
                this.button1.hide();
                this.access1.hide();
                score++;
            }
        });

        
        this.button2.mousePressed(() => {
            if(system.authenticate(acecessCode2,this.access2.value())){
                this.button2.hide();
                this.access2.hide();
                score++;
            }
        });

// Add code to make the buttons function as expected

this.button3.mousePressed(() => {
    if(system.authenticate(acecessCode3,this.access3.value())){
        this.button3.hide();
        this.access3.hide();
        score++;
    }
});
    }
}