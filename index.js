const wrapper = document.querySelector(".wrapper");
qrInput = wrapper.querySelector(".form input");
generateBtn = wrapper.querySelector(".form button");
qrImage = wrapper.querySelector(".qr-code img");


generateBtn.addEventListener("click", ()=>{
    let qrValue = qrInput.value;

    if(!qrValue){
        return;
    }

    generateBtn.innerHTML ="Generating .... "

    // console.log(qrValue);
    
    qrImage.src=`https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue} `

    qrImage.addEventListener("load", ()=>{
        wrapper.classList.add("active");
        generateBtn.innerHTML ="Generate QR Code";
    });
});


qrInput.addEventListener("keyup", ()=>{
    if(!qrInput.value){
        wrapper.classList.remove("active");
    }
});