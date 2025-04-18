let age=11;
if(age>10 && age<20)
    console.log("age lies between 10 and 20");

else
    console.log("age does not lies between 10 and 20");

    switch(age%10)
    {
        case 1: console.log("age lies between 10 and 20");
        break
        default:
            console.log("just trying");
    }

let num=8;
if(num%2==0 && num%3==0)
        console.log("Number is divisible");
    
    else
        console.log("number is not divisible");

        let num2=8;
        if(num2%2==0 || num2%3==0)
                console.log("Number is divisible");
            
            else
                console.log("number is not divisible");


let new_age=19;

new_age>18?console.log("You are eligible"):console.log("You are not eligible");