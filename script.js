

const pinGenerateBtn = document.getElementById("generateBtn");
pinGenerateBtn.addEventListener("click",function(){

    var randomNum=Math.round(1000 + Math.random() * 9000);
    document.getElementById("generateBtnDisplay").value = randomNum;
    
});

function matchTheGeneratedPinAndClickedPin(id){
    if(id.value == numberBtnDisplay.value){
        const message = document.getElementById("notifySuccess");
        message.style.display = "inline" ;
    }else{
        const message = document.getElementById("notifyFail");
        message.style.display = "inline" ;
    }
}



function onClickNumberPad(val){

  document.getElementById("numberBtnDisplay").value += val;
  onlyFourKey();
    
}

function onClickNumberPadClear(){
    document.getElementById("numberBtnDisplay").value = '';
}

function onClickNumberPadBackspace(){
    var val = document.getElementById("numberBtnDisplay").value;
    document.getElementById("numberBtnDisplay").value = val.substr(0, val.length - 1);
}

function onlyFourKey(){
    var val = document.getElementById("numberBtnDisplay").value;
    document.getElementById("numberBtnDisplay").value = val.substr(0, 4);
}

const submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click",function(){

    matchTheGeneratedPinAndClickedPin(generateBtnDisplay);
});

