const images = document.querySelectorAll("img[data-src]");

const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px -100px 0px"
};

function preloadImage(img) {
    const src = img.getAttribute("data-src");
    if (!src) 
    {
        return;
    }
    
    img.src = src;
    img.removeAttribute('data-src');
}

const imgObservor = new IntersectionObserver((entries, imgObservor) => {
    entries.forEach((entry) => {
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

images.forEach ((im) => {
    imgObservor.observe(im);
});