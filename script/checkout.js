import {navbar,cartpopUp} from "../components/navbar.js"
document.querySelector("#navbar").innerHTML=navbar()

import{footer} from "../components/footer.js"
document.getElementById("footer").innerHTML=footer()
cartpopUp()

let details=JSON.parse(localStorage.getItem("cartItem")) || []

//cartProductContainer  append here 
addItem(details)
function addItem(data){
    console.log("hello")
    let container=document.getElementById("cartProductContainer")

    data.forEach((el)=>{
        let img=document.createElement('img')
        img.src=el.Img

        let name=document.createElement("p")
        name.innerText=el.Name

        let qty=document.createElement('p')
        qty.innerText=`Qty:${el.Qty}`

        let price=document.createElement('p')
        price.innerText=`₹${el.Price}`

        let imgDiv=document.createElement('div')
        imgDiv.setAttribute("class","imgDiv")
        imgDiv.append(img)

        let desDiv=document.createElement('div')
        desDiv.setAttribute("class","desDiv")
        desDiv.append(name,qty)

        let pDiv=document.createElement('div')
        pDiv.setAttribute("class","pDiv")
        pDiv.append(price)

        let div=document.createElement('div')
        div.setAttribute("class","checkoutItemDiv")
        div.append(imgDiv,desDiv,pDiv)

        container.append(div)
    })
}