const carousel =document.querySelector(".carousel"),
firstImg=carousel.querySelectorAll("img")[0];
arrowIcons=document.querySelectorAll(".wrapper i");

let isDragStart=false,/*isDragging=fasle*/ prevPagesX,prevScrollLeft,positionDiff;

const showHideIcons=()=>{
    let scrollWidth =carousel.scrollWidth - carousel.clientWidth;
    arrowIcons[0].style.display=carousel.scrollLeft == 0 ? "none":"block";
    arrowIcons[1].style.display=carousel.scrollLeft == scrollWidth? "none":"block";
}
arrowIcons.forEach(icon => {
    icon.addEventListener("click",()=>{
        let firstImgWidth=firstImg.clientWidth + 14;
        carousel.scrollLeft+=icon.id =="left" ? -firstImgWidth : firstImgWidth;
        setTimeout(()=> showHideIcons(),60);
    });
}); 
const autoSlide=()=>{
    if(carousel.scrollLeft==(carousel.scrollWidth - carousel.clientWidth)) return;
    positionDiff=Math.abs(positionDiff);
    let firstImgWidth=firstImg.clientWidth+14;
    let valDifference =firstImgWidth-positionDiff;
    if(carousel.scrollLeft>prevScrollLeft){
        return carousel.scrollLeft+=positionDiff>firstImgWidth/3 ? valDifference : -positionDiff;
    }
    carousel.scrollLeft+=positionDiff>firstImgWidth/3 ? valDifference : -positionDiff;
}
const dragStart=(e)=>{
    isDragStart=true;
    prevPagesX=e.pageX || e.touched[0].pageX;
    prevScrollLeft=carousel.scrollLeft;
}

const dragging=(e) =>{
    if(!isDragStart) return;
    e.preventDefault();
    // isDragging=true;
    carousel.classList.add("dragging");
    positionDiff =(e.pageX||e.touched[0].pageX) - prevPagesX;
    carousel.scrollLeft=prevScrollLeft-positionDiff;
    showHideIcons();
}
const dragStop=()=>{
    isDragStart=false;
    carousel.classList.remove("dragging");

    // if(!isDragging)return;
    // isDragging=false;
    autoSlide(); 
}
carousel.addEventListener("mousemove",dragStart);
carousel.addEventListener("touchstrat",dragStart);
carousel.addEventListener("mousemove",dragging);
carousel.addEventListener("touchmove",dragging);
carousel.addEventListener("mouseup",dragStop);
carousel.addEventListener("mouseleave",dragStop);
carousel.addEventListener("touchend",dragStop);