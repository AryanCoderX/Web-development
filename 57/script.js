let obj=
{
    "harry":98,
    "Aryan":90,
    "kunal":92,
    "prem":89,
    "rishav":88
}



for (const a in obj)    
    {
        const element = obj[a];
        console.log(a ,":", element);    
    }

    function check(num)
    {
        let keys= Object.keys(obj);
        if(num>=0 && num<=4) 
            console.log("value of the",num,"you wanted to know is :",obj[keys[num]]);
           
        else
            console.log("try again"); 
    }
    
    let num=2;
    check(num);

    function mean(a,b,c,d,e)
    {
        return (a+b+c+d+e)/5;
    }
    console.log("Mean of 5 numbers:"+mean(5,6,7,8,9,3));