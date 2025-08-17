let categories = document.getElementById("portfolio-category");
let children = Array.from(categories.children);
let picsList = Array.from(document.querySelectorAll('#pics .pic'));



children.forEach(function(ele) {
    ele.addEventListener("click", function() {
        children.forEach(child => child.classList.remove('active'))
        ele.classList.add('active')
        if (ele.classList.contains('active')) {
            picsList.forEach(pic => pic.style.display = 'none')
            if(ele.textContent == 'All') {
                picsList.forEach(pic => pic.style.display = 'block')
            } else if (ele.textContent == 'Design') {
                picsList.forEach(pic => {
                    pic.getAttribute('data-work') == 'Design' ? pic.style.display = 'block' : null;
                })
            } else if (ele.textContent == 'Photo') {
                picsList.forEach(pic => {
                    pic.getAttribute('data-work') == 'Photo' ? pic.style.display = 'block' : null;
                })
            } else if (ele.textContent == 'Code') {
                picsList.forEach(pic => {
                    pic.getAttribute('data-work') == 'Code' ? pic.style.display = 'block' : null;
                })
            } else if (ele.textContent == 'App') {
                picsList.forEach(pic => {
                    pic.getAttribute('data-work') == 'Application' ? pic.style.display = 'block' : null;
                })
            }
        }
    });
})