import {navbar,cartpopUp} from "../components/navbar.js"
document.querySelector("#navbar").innerHTML=navbar()

import{footer} from "../components/footer.js"
document.getElementById("footer").innerHTML=footer()
cartpopUp()


function dataObj(img,n,p) {
    this.image=img;
    this.name=n;
    this.price=p;
}
 
 
document.querySelector("#basket").onclick=function() {
    
let img=document.querySelector(".mainImg").src
let name=document.querySelector(".name").innerHTML;
let price=document.querySelector(".priceReal").innerHTML;
   let item=new dataObj(img,name,price)
   console.log(item)

   let data=JSON.parse(localStorage.getItem(item)) || []
   data.push(item)
   localStorage.setItem("cartItem",JSON.stringify(data))
   console.log("inside")
}


    //https://swapi.dev/api/people/?search=${query}
    let id;

    async function searchItem(query){
    try{
    
    
    const res =await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=${query}`);
    //http://makeup-api.herokuapp.com/api/v1/products.json?brand=${query}
    
    const data =await res.json();
    
    // const Item =data.brand;
    // console.log(Item)
    console.log(data)
    // appendItem(data.brand)
    return data
    }
    
    catch(err){
        console.log("err:",err);
    }
    }
    
    
    
    
    // search bar  मध्ये item append करण्यासाठी
    let array =[]
    function appendItem(data){
        let items_div = document.getElementById("results");
        items_div.innerHTML = null;
    
    
        data.forEach(function(elem){
        
        var row=document.createElement("div")
        row.setAttribute("class","row")
        row.addEventListener("click",function(){
            array.push(elem);
            newPage(elem)
            
    
        })
        //console.log(array);
        
        let p =document.createElement("p")
        p.innerText=elem.name;
        
        row.append(p)
        items_div.append(row);
    });
    }
    
    //dashbord.html page add  करण्यासाठी.
    function newPage(elem){
        var add= localStorage.setItem("description",JSON.stringify(elem));
        console.log(add)
        console.log("array:",array)
     // window.location.href="dashbord.html";
    }
    
    
    // main function करण्यासाठी.
    
    async function main(){
    let query = document.getElementById("header_search_input").value;
    let data =await searchItem(query);
    
    // if(data === undefined)
    // {
    //     return false;
    // }
    appendItem(data);
    console.log(data);
    
    }
    
    
    // debounceing function करण्यासाठी.
    document.querySelector("#header_search_input").addEventListener("input",function(){
        debounce(main,1000);
    })
    function debounce(func,delay){
    if(id)
    {
        clearTimeout(id);
    }
    id =setTimeout(function(){
        func();
    
    },delay);
    }








