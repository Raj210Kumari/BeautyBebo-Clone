let cartItem=[{
    "Img":"https://www.beautybebo.com/pub/media/catalog/product/cache/c9615af5e5a6f27d0b9239c1928d8610/1/-/1-wbg_1_1024x1024.jpg",
    "Name":"    PLUM SQUALANE & VITAMIN E FACE OIL",
    "Price":"₹550.00",
    "Qty":"1",
    "Subtotal":"₹550",
    "id":24
},{
    "Img":"https://www.beautybebo.com/pub/media/catalog/product/cache/c9615af5e5a6f27d0b9239c1928d8610/g/v/gvhjgvyjhv.jpg",
    "Name":"    PLUM SQUALANE & VITAMIN E FACE OIL",
    "Price":"₹550.00",
    "Qty":"1",
    "Subtotal":"₹310",
    "id":17
},{
    "Img":"https://www.beautybebo.com/pub/media/catalog/product/cache/c9615af5e5a6f27d0b9239c1928d8610/7/5/75e7324plumx00000244a_2.jpg",
    "Name":"   VASELINE BODY LOTION 400ML ",
    "Price":"₹434.00",
    "Qty":"1",
    "Subtotal":"₹433",
    "id":9
}]

let leftContainerData=document.querySelector('#leftContainerData');
cartItem.forEach((el,index)=>{
    let leftFirstRow=document.createElement("div");
    leftFirstRow.setAttribute("class","leftFirstRow")
    leftFirstRow.setAttribute("class","leftFirstRow")

    let leftFirstRowDiv1=document.createElement("div");
    leftFirstRowDiv1.setAttribute("class","leftFirstRowDiv1")
    leftFirstRowDiv1.setAttribute("class","leftFirstRowDiv1")

    let leftFirstRowDiv2=document.createElement("div");
    leftFirstRowDiv2.setAttribute("class","leftFirstRowDiv2")
    leftFirstRowDiv2.setAttribute("class","leftFirstRowDiv2")

    let leftFirstRowDiv3=document.createElement("div");
    leftFirstRowDiv3.setAttribute("class","leftFirstRowDiv3")
    leftFirstRowDiv3.setAttribute("class","leftFirstRowDiv3")

    let leftSecondRow=document.createElement("div");
    leftSecondRow.setAttribute("class","leftSecondRow")

        let img1=document.createElement("img")
        img1.src=el.Img;

    leftFirstRowDiv1.append(img1)

        let name=document.createElement("p");
        name.innerText=el.Name;

    leftFirstRowDiv2.append(name)

        let price=document.createElement('p')
        price.innerText=el.Price

        let qty=document.createElement('p')
        qty.innerText=el.Qty

        let subtotal=document.createElement('p')
        subtotal.innerText=el.Subtotal

    leftFirstRowDiv3.append(price,qty,subtotal)

    leftFirstRow.append(leftFirstRowDiv1,leftFirstRowDiv2,leftFirstRowDiv3)

    let editBtn=document.createElement('button')
    editBtn.innerText="Edit"
    editBtn.setAttribute("class","editBtn")
    editBtn.addEventListener("click",function (){
        window.location.href="../index.html"           //add home page link here
    })

    let removeBtn=document.createElement('button')
    removeBtn.innerText="Remove"
    removeBtn.setAttribute("class","removeBtn")
    removeBtn.addEventListener("click",function (){
        remove(el,index)
        
    })

    let wishlistbtn=document.createElement('button')
    wishlistbtn.innerText="Wishlist"
    wishlistbtn.setAttribute("class","wishlistbtn")
    editBtn.addEventListener("click",function(){
        cartItem.push(el)
        localStorage.setItem("carttem",JSON.stringify(cartItem))
        window.location.reload()
    })

    leftSecondRow.append(editBtn,removeBtn,wishlistbtn)

    // mybagitemright.append(name,price,qty,subtotal,btndiv)

    // myBagItem.append(mybagitemleft,mybagitemright)
    leftContainerData.append(leftFirstRow,leftSecondRow)
})
function remove(el,index){
    cartItem.splice(index,1)
        localStorage.setItem("cartItem",JSON.stringify(cartItem))
        window.location.reload()
}