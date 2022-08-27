

function dataObj(img,n,p) {
    this.image=img;
    this.name=n;
    this.price=p;
}
 
document.querySelector(".basket").onclick=function() {
    
let img=document.querySelector(".mainImg").src
let name=document.querySelector(".name").innerHTML;
let price=document.querySelector(".priceReal").innerHTML;
   let item=new dataObj(img,name,price)
   console.log(item)
   localStorage.setItem("cartItem",JSON.stringify(item))
   console.log("inside")
}









