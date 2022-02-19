const images = document.querySelectorAll("img[data-src]");
const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 50px 0px"
};

const imgObservor = new IntersectionObserver((entries, imgObservor) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting)
        {
            return;
        }
        else 
        {
            preloadImage(entry.target);
            imgObservor.unobserve(entry.target);
        }
    })
}, imgOptions);


images.forEach (image => {
    imgObservor.observe(image);
});

function preloadImage(img) {
    console.log("Called function");
    const src = img.getAttribute("data-src");
    if (!src) 
    {
        return;
    }

    img.src = src;
}