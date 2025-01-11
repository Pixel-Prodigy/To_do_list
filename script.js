const button = document.querySelector("button");
const app = document.querySelector(".app");
const input = document.querySelector("#text");
let clickCount = 0;
let clickCount1 = 0;
button.addEventListener("click", () => {
    clickCount++;
    const newBox = document.createElement("div");
    const string = input.value;
    if (input.value.length > 0) {
        app.appendChild(newBox);
        newBox.innerHTML = (' <div class="new_box_right"> <span class="hide_svg"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg></span>    <p class="new_box_p"></p></div><button class="cross"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-6">  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" /></svg></button>');
        const p = newBox.querySelector(".new_box_p")
        newBox.classList.add("new_box");
        p.innerText = string;
        input.value = null;
          
      
        if (clickCount % 2 !== 0) {  
            
            newBox.style.backgroundColor = "#eeeeee";
            newBox.addEventListener("mouseenter", () => {
                newBox.style.backgroundColor = "rgb(172, 172, 172)"
            })
            newBox.addEventListener("mouseleave", () => {
                newBox.style.backgroundColor = "#eeeeee"
            })

        } else {
            newBox.style.backgroundColor = "rgb(209, 208, 208)";
            newBox.addEventListener("mouseenter", () => {
                newBox.style.backgroundColor = "rgb(172, 172, 172)"
            })
            newBox.addEventListener("mouseleave", () => {
                newBox.style.backgroundColor = "rgb(209, 208, 208)"
            })
        }
    } else {
        alert("Thats not a valid input 'stupid'");
    }
    let clickCount1 = 0;  // Ensure this is defined outside

    newBox.addEventListener("click", () => {
        clickCount1++;
        if (clickCount1 % 2 !== 0) {
           
            newBox.style.backgroundColor = "rgb(100, 100, 100)";
            newBox.addEventListener("mouseleave", () => {
                newBox.style.backgroundColor = "rgb(100, 100, 100)";
            });
            const p = newBox.querySelector(".new_box_p");
            p.style.textDecoration = "line-through";
            p.style.color = "white"
            const hideSvg = newBox.querySelector("span");
            hideSvg.classList.add("show_svg");
        } else {
            
            if (clickCount1 % 2 === 0) {
                newBox.style.backgroundColor = "#eeeeee";
                newBox.addEventListener("mouseenter", () => {
                    newBox.style.backgroundColor = "rgb(172, 172, 172)";
                });
                newBox.addEventListener("mouseleave", () => {
                    newBox.style.backgroundColor = "#eeeeee";
                });
            } else {
                newBox.style.backgroundColor = "rgb(209, 208, 208)";
                newBox.addEventListener("mouseenter", () => {
                    newBox.style.backgroundColor = "rgb(172, 172, 172)";
                });
                newBox.addEventListener("mouseleave", () => {
                    newBox.style.backgroundColor = "rgb(209, 208, 208)";
                });
            }
            const p = newBox.querySelector(".new_box_p");
            p.style.textDecoration = "none";
            p.style.color = "black"

            const hideSvg = newBox.querySelector("span");
            hideSvg.classList.remove("show_svg");
        }
    });
    
  
    const cross = newBox.querySelector(".cross")
cross.addEventListener("click", () => {
    app.removeChild(newBox)
})

});
