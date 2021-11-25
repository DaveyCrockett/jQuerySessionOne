console.log("User Register");
//create constructor
class User {
    constructor(email, password, fname, lname, age, address, phone, payment, color){
        this.email = email;
        this.password = password;
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.address = address;
        this.phone = phone;
        this.payment = payment;
        this.color = color;
    }
}
function registerUser(){
    let email = $("#txtEmail").val();
    let password = $("#txtPassword").val();
    let fname = $("#fname").val();
    let lname = $("#lname").val();
    let age = $("#age").val();
    let address = $("#address").val();
    let phone = $("#phone").val();
    let payment = $("#payment").val();
    let color = $("#color").val();
    let user = new User(email, password, fname, lname,age, address, phone, payment, color);
    console.log(user);
}

function init(){
    console.log("Init function");
}

window.onload=init;