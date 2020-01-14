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


//3-------"mouseover" event---------

const advgoImg = document.querySelector(".img-content")
advgoImg.addEventListener("mouseenter",function(){
advgoImg.style.transform ="scale(1.5)"
console.log("I am scaled up")
})

//4----------"mouseenter" event----

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
    changeImg.src ="https://kids.scholastic.com/content/dam/scholastic/kids/header/the-magic-school-bus/msb_header2.jpg"
})


//7------------"keydown" event-------


document.addEventListener("keydown",(event)=>{
    if (event.key === "Enter"){
        alert("Enter was pressed!")
    }
})

//8-------------"keyup" event------
// const footer = document.querySelector(".footer")

document.addEventListener("keyup", (event)=>{
    
})









//9--------------



//10-------------



//----event propagation-----nested elements(Parent:div-child:button)

const section = document.querySelector(".destination")
section.addEventListener("click", ()=>{
    section.style.backgroundColor = "yellow"
    console.log("I am the last")

    const funInTheSun = document.querySelector("p")


})

const button = document.querySelector(".btn")

button.addEventListener("click", (event)=>{
button.style.fontSize = "3.5rem";

event.stopPropagation()

})

//------prevent default-----

