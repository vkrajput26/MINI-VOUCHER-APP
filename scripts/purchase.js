let data=JSON.parse(localStorage.getItem("purchase"))||[];
//console.log(data)
let mainBox=document.getElementById("purchased_vouchers")

data.forEach(function(el){
  //  console.log(el)
    
    let div=document.createElement("div")


    let image=document.createElement("img")
    image.src=el.image;

    let name=document.createElement("h3")
    name.innerText=el.name

    let price=document.createElement("h3")
    price.innerText=el.price

    div.append(image,name,price)

    mainBox.append(div)

})
let p=JSON.parse(localStorage.getItem("user"))||[]
let amountDisplay=document.getElementById("wallet_balance")
amountDisplay.innerText=p.amount
console.log(p)