//Task1: Function Declaration

function userprofile(profile){
    console.log(`"Hello, ${profile}"`);   
}
userprofile("Abishek")

//Task2: Arrow Function
double = (value)=> {
    let num = value * 2;
    return num;
}
console.log(double(10));

//Task3: Anonymous Function
setTimeout(function (){
    console.log(`"This message is delayed by 2 seconds"`);
}, 2000);

//Task 4: Callback function

function getUserData (callback){
    //simulate fetching data after 3 seconds
    setTimeout(function(){
        callback("CallbackFunction");
    },3000);
}
//Call get Userdata and use a callback function
getUserData(function(message){
    console.log(message);
    
})