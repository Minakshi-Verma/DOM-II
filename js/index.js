// Your code goes here
// [ ] `mouseover`
// * [ ] `keydown`
// * [ ] `wheel`
// * [ ] `drag / drop`
// * [ ] `load`
// * [ ] `focus`
// * [ ] `resize`
// * [ ] `scroll`
// * [ ] `select`
// * [ ] `dblclick`

//1---------click----------

const navlinks = document.querySelectorAll(".nav-link")
navlinks.forEach(link=>{
link.addEventListener("click", ()=>{
    link.style.color = "pink"
    
    })
})
//2-------dblclick--------

const changeImg = document.querySelector("img[src='img/fun-bus.jpg']")

changeImg.addEventListener("dblclick", ()=>{
    changeImg.src ="http://meetingsandconventionspei.com/wp-content/uploads/2015/02/Tour-Bus-Header.jpg"
})


//3-------mouseover---------

const advgoImg = document.querySelector(".img-content")
advgoImg.addEventListener("mouseenter",function(){
advgoImg.style.transform ="scale(1.5)"
console.log("I am scaled up")
})

//4----------mouseenter----

const subHeading = document.querySelector("h2");

subHeading.addEventListener("mouseover", ()=>{
    subHeading.style.color = "royalblue"
    console.log("I am blue now")
})


//5-----------mouseleave----

subHeading.addEventListener("mouseleave", ()=>{
    subHeading.style.color = "red"
    console.log("I am red now")
})

//6-------resize-----------


// const changeImg = document.querySelector("img[src='img/fun-bus.jpg']")
//const changeTmg is already been declared


window.addEventListener("resize", ()=>{
    changeImg.src ="https://kids.scholastic.com/content/dam/scholastic/kids/header/the-magic-school-bus/msb_header2.jpg"
})



//7------------





//8-------------





//9--------------



//10-------------



//----event propagation-----nested element




//------prevent default-----