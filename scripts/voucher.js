let url="https://masai-vouchers-api.herokuapp.com/api/vouchers"
fetch(url).then(function(res){
   return res.json();
})
.then(function(res){
  //  console.log(res)
    let data=res
  //  console.log(data)
    append(data)
})
.catch(function(err){
    console.log(err)
})


let display=document.getElementById("voucher_list")
function append(data)
{
  data.forEach(function(el){
    //  console.log(el.vouchers)
      el.vouchers.forEach(function(al){
       //  console.log(al)

          let box=document.createElement("div")
          box.setAttribute("class","voucher")

          let img=document.createElement("img")
          img.src=al.image
          
          let name=document.createElement("h3")
          name.innerText=al.name

          let price=document.createElement("h3")
          price.innerText=al.price

          let btn=document.createElement("button")
          btn.innerText="BUY"
        btn.setAttribute("class","buy_voucher")
        btn.addEventListener("click",function(){
            additem(al)
        })

          box.append(img,name,price,btn)

        display.append(box)
        })
  })
}
let arr1=JSON.parse(localStorage.getItem("purchase"))||[]
function additem(al){
    console.log(al)
    arr1.push(al)
    localStorage.setItem("purchase",JSON.stringify(arr1))
console.log(al.price)

console.log(paise)
let total=paise.amount-al.price
console.log(total)
let wallet=document.getElementById("wallet_balance")
wallet.innerText=total

if(total>al.price)
{
    alert( "Hurray! purchase successful")
}
else{
    alert("Sorry! insufficient balance")
}



}



//wallet
let paise=JSON.parse(localStorage.getItem("user"))||[]
//console.log(paise.amount)

let wallet=document.getElementById("wallet_balance")
wallet.innerText=paise.amount