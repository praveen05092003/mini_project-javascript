const Qr=document.querySelector(".Qr"),
qrInput=Qr.querySelector(".form input"),
generateBtn=Qr.querySelector(".form button"),
qrImg=Qr.querySelector(".qr-code img")
generateBtn.addEventListener("click",()=>{
    let qrValue=qrInput.value;
    if(!qrValue) return;
    generateBtn.innerText="Generating QR Code...";
    qrImg.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example=${qrValue}`;
    qrImg.addEventListener("load",()=>{
        Qr.classList.add("active");
        generateBtn.innerText="Generate QR Code...";

    });
});
qrInput.addEventListener("keyup",()=>{
    if(!qrInput.value){
        Qr.classList.remove("active");
    }
})