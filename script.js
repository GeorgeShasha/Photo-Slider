const scrollContainer = document.querySelector('.gallery');
// const backBTN = document.getElementById("backBTN");
// const nextBTN = document.getElementById("nextBTN");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior = "auto";
});

const backBTN = document.getElementById("backBTN").addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 900;
});
const nextBTN = document.getElementById("nextBTN").addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 900;
});