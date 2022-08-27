import{navbar} from "../components/navbar.js"
document.getElementById("navbar").innerHTML=navbar()

import{footer} from "../components/footer.js"
document.getElementById("footer").innerHTML=footer()


let cartItem=[{
    "Img":"https://www.beautybebo.com/pub/media/catalog/product/cache/c9615af5e5a6f27d0b9239c1928d8610/1/-/1-wbg_1_1024x1024.jpg",
    "Name":"    PLUM SQUALANE & VITAMIN E FACE OIL",
    "Price":550.00,
    "Qty":1,
    "Subtotal":550,
    "id":24
}
,{
    "Img":"https://www.beautybebo.com/pub/media/catalog/product/cache/c9615af5e5a6f27d0b9239c1928d8610/g/v/gvhjgvyjhv.jpg",
    "Name":"    VASELINE BODY LOTION 400ML ",
    "Price":310,
    "Qty":1,
    "Subtotal":310,
    "id":17
},{
    "Img":"https://www.beautybebo.com/pub/media/catalog/product/cache/c9615af5e5a6f27d0b9239c1928d8610/7/5/75e7324plumx00000244a_2.jpg",
    "Name":"  PLUM SQUALANE & VITAMIN E FACE OIL ",
    "Price":434.00,
    "Qty":1,
    "Subtotal":433,
    "id":9
}]

// write local storage code here and in place of empty array put cartITEM
let details=JSON.parse(localStorage.getItem("cartItem")) || []

localStorage.setItem("Item",JSON.stringify(details))
let wishlistdetails=JSON.parse(localStorage.getItem("wishlistItem")) || []
let amount=0
let updatedSubtotal=0



let leftContainerData=document.querySelector('#leftContainerData');
let subtotalAmount=document.querySelector("#subtotalAmount")
let total=document.querySelector("#total")
function appendCartData(cartItem){
cartItem.forEach((el,index)=>{
    let leftFirstRow=document.createElement("div");
    leftFirstRow.setAttribute("class","leftFirstRow")
    

    let leftFirstRowDiv1=document.createElement("div");
    leftFirstRowDiv1.setAttribute("class","leftFirstRowDiv1")
    

    let leftFirstRowDiv2=document.createElement("div");
    leftFirstRowDiv2.setAttribute("class","leftFirstRowDiv2")
    

    let leftFirstRowDiv3=document.createElement("div");
    leftFirstRowDiv3.setAttribute("class","leftFirstRowDiv3")
    

    let leftFirstRowDiv3Child1=document.createElement('div')
    leftFirstRowDiv3Child1.setAttribute("class","leftFirstRowDiv3Child1")

    let leftFirstRowDiv3Child2=document.createElement('div')
    leftFirstRowDiv3Child2.setAttribute("class","leftFirstRowDiv3Child2")

    let leftFirstRowDiv3Child3=document.createElement('div')
    leftFirstRowDiv3Child3.setAttribute("class","leftFirstRowDiv3Child3")

    let leftSecondRow=document.createElement("div");
    leftSecondRow.setAttribute("class","leftSecondRow")

        let img1=document.createElement("img")
        img1.src=el.Img;

    leftFirstRowDiv1.append(img1)

        let name=document.createElement("p");
        name.innerText=el.Name;

    leftFirstRowDiv2.append(name)

        let price=document.createElement('p')
        price.innerText=`₹${el.Price}`



        leftFirstRowDiv3Child1.append(price)
        

        let qty=document.createElement("INPUT");
        qty.setAttribute("type", "text");
        qty.setAttribute("value", 1);
        qty.setAttribute("id","qtyValue")
        qty.innerText=el.Qty
       
        leftFirstRowDiv3Child2.append(qty)

        let subtotal=document.createElement('p')
        subtotal.innerText=`₹${el.Subtotal}`

        // console.log(updatedQTY)
        updatedSubtotal=el.Subtotal
        // console.log(updatedSubtotal)

        leftFirstRowDiv3Child3.append(subtotal)

        

    leftFirstRowDiv3.append(leftFirstRowDiv3Child1,leftFirstRowDiv3Child2,leftFirstRowDiv3Child3)

    leftFirstRow.append(leftFirstRowDiv1,leftFirstRowDiv2,leftFirstRowDiv3)

    let editBtn=document.createElement('button')
    editBtn.innerText="Edit"
    editBtn.setAttribute("class","editBtn")
    editBtn.addEventListener("click",function (){
        window.location.href=""  
        console.log("hello")         //add home page link here
    })

    let removeBtn=document.createElement('button')
    removeBtn.innerText="Remove"
    removeBtn.setAttribute("class","removeBtn")
    removeBtn.addEventListener("click",function (del){
        // console.log(cartItem)
        // cartItem.splice(index,1)
        // console.log(cartItem)
        //     localStorage.setItem("cartItem",JSON.stringify(details))
        // del.target.parentNode.remove(el)
        // cartItem.splice(index,1)
        // localStorage.setItem("cartItem",JSON.stringify(cartItem))
        remove(del,el,index)
    })

    let wishlistbtn=document.createElement('button')
    wishlistbtn.innerText="Wishlist"
    wishlistbtn.setAttribute("class","wishlistbtn")
    wishlistbtn.addEventListener("click",function(del2){
        
        //alert("hi")
        // details.push(el)
        // localStorage.setItem("cartItem",JSON.stringify(details))
        remove2(del2,el,index)
        wishlistdetails.push(el)
        localStorage.setItem("wishlistItem",JSON.stringify(wishlistdetails))
        // window.location.reload()
    })

    // leftSecondRow.append(editBtn,removeBtn,wishlistbtn)

    // mybagitemright.append(name,price,qty,subtotal,btndiv)

    // myBagItem.append(mybagitemleft,mybagitemright)
    let div=document.createElement('div')
    div.append(leftFirstRow,editBtn,removeBtn,wishlistbtn)
    leftContainerData.append(div)

    amount+=el.Subtotal
        //console.log(amount)
//         subtotalAmount.append(amount)
// total.append(amount)
        
})
}
appendCartData(cartItem)

// console.log(amount)
subtotalAmount.append(amount)
total.append(amount)




function remove(del,el,index){
    del.target.parentNode.remove(el)
        cartItem.splice(index,1)
        localStorage.setItem("cartItem",JSON.stringify(cartItem))
}
function remove2(del2,el,index){
    //alert("hi")
    

    del2.target.parentNode.remove(el)
    
        cartItem.splice(index,1)
       
        localStorage.setItem("cartItem",JSON.stringify(cartItem))
}




