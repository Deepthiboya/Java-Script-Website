let km = 19.5;
let price = 0;

if (km <= 5) {
  price = 30;
} else if (km <= 110) {
  price = 30 + (km - 5) * 15;
} else {
  price = 30 + (110 - 5) * 15 + (km - 110) * 20;
}

console.log("Total Price = " + price);



let Speed = 30;
let distance = 0;
for(i=10;i<=90;i+=10){
    distance  = distance + Speed/6;
    if(Speed<120){
         Speed*=2;
    
    }
}
    distance = distance + Speed/10
    console.log(distance);


    

   let p = 1
    while(p<11){
        console.log('5*' + p + '=' + 5*p);  
        p++;
    }     
