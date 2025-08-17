let categories = document.getElementById("portfolio-category");
let children = Array.from(categories.children);
let pics = document.getElementById("pics");
let picsList = Array.from(pics.children);



children.forEach(function(ele) {
    ele.addEventListener("focus", function() {
        if (ele.classList[1] != 'active') {
            let active = document.querySelector(".active")
            active.classList.remove("active");
            ele.classList.add("active");
            ele.style.transition = "0.3s";
            picsList.forEach(function(pic) {
                let data = pic.children[0].getAttribute("data-work");
                if (active.textContent == "All") {
                    pic.style.display = "block";
                } else if (active.textContent == "Design") {
                    if (data != "Design") {
                        pic.style.display = "none"
                        pic.style.transition = "0.3s"
                    }
                }; 
            })
        } else {
            null;
        }
    })
})