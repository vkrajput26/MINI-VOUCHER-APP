

function object(name,email,address,amount)
{
    this.name=name;
    this.email=email;
    this.address=address;
    this.amount=amount
}

function myfun(){
    event.preventDefault()
    console.log("vk")

let name=document.getElementById("name").value;
let email=document.getElementById("email").value;
let address=document.getElementById("address").value;
let amount=document.getElementById("amount").value;

let x=new object(name,email,address,amount)
console.log(x)
let arr=JSON.parse(localStorage.getItem("user"))||[]
arr.push(x)
console.log(arr)
localStorage.setItem("user",JSON.stringify(x))
window.location.reload()
}