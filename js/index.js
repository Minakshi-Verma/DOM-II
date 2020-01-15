// Your code goes here


//1---------"click" event and "preventdefault()"---------

const navlinks = document.querySelectorAll(".nav-link")
navlinks.forEach(link=>{
link.addEventListener("click", (event)=>{
    link.style.color = "pink"
    event.preventDefault()
    console.log("I changed color but I prevented myself from refreshing!")
    
    })

})
//2-------"dblclick" event--------

const changeImg = document.querySelector("img[src='img/fun-bus.jpg']")

changeImg.addEventListener("dblclick", ()=>{
changeImg.src ="http://meetingsandconventionspei.com/wp-content/uploads/2015/02/Tour-Bus-Header.jpg"
})



//3-------"mouseenter" event---------

const advgoImg = document.querySelector(".img-content")
advgoImg.addEventListener("mouseenter",function(){
advgoImg.style.transform ="scale(1.16)"
advgoImg.style.transition="0.3s"
console.log("I am scaled up")
})
advgoImg.addEventListener("mouseleave", ()=>{
    advgoImg.style.transform ="scale(1)"
})

//4----------"mouseover" event----

const subHeading = document.querySelector("h2");

subHeading.addEventListener("mouseover", ()=>{
    subHeading.style.color = "royalblue"
    console.log("I am blue now")
})


//5-----------"mouseleave" event----

subHeading.addEventListener("mouseleave", ()=>{
    subHeading.style.color = "red"
    console.log("I am red now")
})

//6-------"resize" event-----------


// const changeImg = document.querySelector("img[src='img/fun-bus.jpg']")
//const changeTmg is already been declared!


window.addEventListener("resize", ()=>{
    changeImg.src ="https://www.frankfurt-travel-tours.com/wp-content/uploads/2016/11/Evrobus-Slider-1140x366.jpg"
})


//7------------"keydown" event-------(works with all keys)

const bottomImg = document.querySelector(".content-destination img")
console.log("I grabbed the image")
document.addEventListener("keydown",(event)=>{
    if (event.key === "Enter"){
        // alert("Enter was pressed!")
        bottomImg.style.transform = "scale(1.2)"
        bottomImg.style.transition= "0.3s"
    }
})

// 8------------keyup---------

document.addEventListener("keyup",(event)=>{
    if (event.key === "Enter"){
        // alert("Enter was pressed!")
        bottomImg.style.transform = "scale(1)"
    }
})


//------------mousemove------------

const parag = document.querySelector(".text-content h2")
parag.addEventListener("mousemove",(event)=>{
   
        // navlinks.style.backgroundColor = "papayawhip"
        parag.style.fontSize ="8.5rem"
        parag.style.color ="orange"
})




//9--------------"load" event-----

window.addEventListener ("load", (event)=>{
    alert ("Load event is Awesome!");
    })

//10-------------"mouseenter" event------


const destinationP = document.querySelector(".destination p")
destinationP.addEventListener("mouseenter", () => {
destinationP.style.color ="orange"    
   
  });


//----event propagation-----nested elements(Parent:div-child:button)

const section = document.querySelector(".destination")
section.addEventListener("click", ()=>{
section.style.backgroundColor = "yellow"
console.log("I am the last")

const funInTheSun = document.querySelector("p")


})

// const button = document.querySelector(".btn")

// button.addEventListener("click", (event)=>{
// button.style.fontSize = "3.5rem";

// event.stopPropagation()

// })
document.querySelectorAll(".btn").forEach(item=>{
item.addEventListener("click", (event)=>{
item.style.fontSize = "3.5rem";

event.stopPropagation()

})
})






