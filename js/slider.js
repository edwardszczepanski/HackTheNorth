$(function() {
    one   = 50;
    two   = 50;
    three = 50;
    four  = 50;
    five  = 50;

    var slide1 = document.getElementById('slide1');
    var slide2 = document.getElementById('slide2');
    var slide3 = document.getElementById('slide3');
    var slide4 = document.getElementById('slide4');
    var slide5 = document.getElementById('slide5');

    slide1.oninput = function(){
        one = this.value;
    }  
    slide2.oninput = function(){
        two = this.value;
    }  
    slide3.oninput = function(){
        three = this.value;
    }  
    slide4.oninput = function(){
        four = this.value;
    }  
    slide5.oninput = function(){
        five = this.value;
    }  

});


