const ulLi = document.querySelectorAll("ul li");


for(let i=0; i<ulLi.length; i++){
    ulLi[i].addEventListener("click", function() {
        const link = ulLi[i].getAttribute("data-link");
        
        // Open the URL in a new tab
        window.open(link, "_blank");
    });
}