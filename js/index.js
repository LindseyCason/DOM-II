// Your code goes here
// .addEventListener('',(e) =>{});
// 



//1 mouseover
//turns nav text teal, stays teal
//added some nesting, works but inefficent I'm sure

const nav = document.querySelector('.nav');

nav.addEventListener('mouseover',(event) =>{

    event.target.style.color = "teal";
        nav.addEventListener('mouseover',(event)=>{
            event.target.style.color = "red";
             nav.addEventListener('mouseover',(event)=>{
                event.target.style.color = "green";
                nav.addEventListener('mouseover',(event)=>{
                    event.target.style.color = "hotpink";
                    console.log("No more colors!")
                    })
        })
    })
});


//preventing nav refresh
const navPrevent = document.querySelector('nav');
navPrevent.addEventListener('click', (event)=>{
    event.preventDefault();
    console.log("Stop it right there!");
})

//2 keydown
//when a key is pressed it changes opacity of the image to .5

const html = document.querySelector('html');
const imgClear = document.querySelector('img');
html.addEventListener('keydown', (event)=>{
    imgClear.style.opacity = ".50";
    console.log("My opacity is now 50%")
})

//3 wheel

const wheelImg = document.querySelector('.img-content');
let scale = 1; //cannot be assigned to a constant variable

wheelImg.addEventListener('wheel', (event) =>{
    event.preventDefault();
    scale += event.deltaY * -0.01;

      // Restrict scale
      scale = Math.min(Math.max(.125, scale), 4);
    
      // Apply scale transform
      wheelImg.style.transform = `scale(${scale})`;
    console.log("We have scaled!")
})


//4 drag/drop

    //this information is from 'https://javascript.info/mouse-drag-and-drop'
    // (1) start the process
    // (2) prepare to start moving: make absolute and on top by z-index
    // move it out of any current parents directly into body
    // to make it positioned relative to the body
    // ...and put that absolutely positioned pic under the cursor
    // center the pic at (pageX, pageY) coordinates
    // (3) move the pic on mousemove
    // (4) drop the pic, remove unneeded handlers

const drag = document.querySelector('.img-fluid');

drag.onmousedown = function(event) {
    drag.style.position = 'absolute';
    drag.style.zIndex = 1000;
    document.body.append(drag);
  
    moveAt(event.pageX, event.pageY);
  
    function moveAt(pageX, pageY) {
      drag.style.left = pageX - drag.offsetWidth / 2 + 'px';
      drag.style.top = pageY - drag.offsetHeight / 2 + 'px';
    }
  
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
  
    document.addEventListener('mousemove', onMouseMove);
  
    drag.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      drag.onmouseup = null;
    };
  
  };
  drag.ondragstart = function() {
      console.log("We have stopped dragging!")
    return false;
  };

//5 load
//I appended onload to the body and set a function to alert once it loaded
// const body = document.querySelector('body');
// body.append(onload=loaded());
// function loaded(){
//     alert("Welcome to Fun Bus! Click OK to continue!")
// }

//another/better way to use onload
const win = document.getElementsByTagName("window")
function load(){
    alert("WELCOME TO FUN BUS!");
}
win.onload=load();




//6 click
// clicking h2 areas changes Styles
const h2Size = document.querySelectorAll("h2");
h2Size.forEach(element =>{
    element.addEventListener('click',(e) =>{
    element.style.color="dodgerblue";
    element.style.fontWeight="bolder";
    element.style.fontSize="5rem";
    element.style.borderBottom="3px dotted pink";
    console.log("Well, ain't that cute.")
})
});

// 7 copy

const p = document.querySelectorAll('p');
p.forEach(element =>{
element.addEventListener("copy", (e)=>{
  alert("HEY! YOU COPIED ME!");
  element.style.color="green";
})
});

//8 double click

const button = document.querySelectorAll(".btn")
button.forEach(element =>{
    element.addEventListener('dblclick', (e)=>{
        element.textContent= "Pack Your Bags!"
    })
    element.addEventListener('mouseover',(e)=>{
        element.textContent="Are You Ready?"
    })
})





//9 mouseenter
//mouseleave


const big = document.querySelector(".content-destination");
big.addEventListener("mouseenter", mouseEnter);
big.addEventListener("mouseleave", mouseLeave);

function mouseEnter() {
    big.style.backgroundColor = "aqua";
    big.style.color = "black";

  }
  function mouseLeave(){
    big.style.backgroundColor = "teal";
    big.style.color = "white"
console.log("Book a trip already!")
  }


//10remove
//removes boat pic when clicked
const gone = document.querySelector('.content-destination img');
gone.addEventListener('click', ()=>{
    gone.parentNode.removeChild(gone);
    console.log("Bye Bye Boat!");
})
