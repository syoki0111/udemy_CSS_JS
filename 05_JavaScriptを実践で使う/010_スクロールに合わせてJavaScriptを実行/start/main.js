const child = document.querySelector('.child');
const cb = function(entries,observer){
    entries.forEach(entry => {
        if(entry.isIntersecting){
            console.log("inview")
            entry.target.classList.add('inview');
        } else{
            console.log("outview")
            entry.target.classList.remove('inview');

        }
    });
    alert("intersection")
}
const options = {
    root: null,
    rootMargin:"0px",
    threshold: 1
}

const io = new IntersectionObserver(cb ,options);
io.observe(child);
