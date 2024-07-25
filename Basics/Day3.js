//Activity 1
//task 1
let a=0

if(a==0){
    console.log(`${a} is zero`)
}
if(a>0){
    console.log(`${a} is positive`)
}
else{
   console.log(`${a} is negative`)
}

//task 2

let age=18
if(age>=18){
    console.log('Eligible to vote')
}

//Activity 2

//task 3

let n1=3
let n2=7
let n3=4

if(n1>n3){
    if(n1>n2){
        console.log(`${n1} is the largest`)
    } 
    else{
        console.log(`${n2} is the largest`)
    }
}else{
 if(n2>n3){
    console.log(`${n2} is the largest`)
 }else{
    console.log(`${n3} is the largest`)
 }  

}

//Activity 4

//task 4

let sw=4

switch(sw){
    case 1:console.log("Monday")
    break
    case 2:console.log("Tuesday")
    break
    case 3:console.log("Wednesday")
    break
    case 4:console.log("Thursday")
    break
    case 5:console.log("Friday")
    break
    case 6:console.log("Saturday")
    break
    case 7:console.log("Sunday")
    break
    default : console.log("Wrong input")
}

//task 5

let scr=95

switch(scr){
    case 95:console.log("A Grade")
    break
    case 85:console.log("B Grade")
    break
    case 70:console.log("C Grade")
    break
    case 55:console.log("D Grade")
    break
    case 45:console.log("F Grade")
    break
}

//Activity 5

//task 6

let num =3;

(num %2 ==0)?console.log(`${num} is even`):console.log(`${num} is odd`)

//Activity 6

let nmr=2019

if(( (nmr%4==0) && (nmr%100!=0) || nmr%400==0) ){
    console.log(`${nmr} is a leap year`)

}else{
    console.log(`${nmr} is not a leap year`)
}
