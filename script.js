
//pin code generate 
const pinGenerateBtn = document.getElementById("generateBtn");
pinGenerateBtn.addEventListener("click",function(){
    
        var randomNum=Math.round(1000 + Math.random() * 9000);//to take the random number of four numbers
        document.getElementById("generateBtnDisplay").value = randomNum;

        
        document.getElementById("generateBtn").disabled = true;
        
});



//number pad 
function onClickNumberPad(val){

    document.getElementById("numberBtnDisplay").value += val; //number key te click korle value j number e click kora hoiche seta bosbe + jotobar click kora hobe display value er sathe add hotei thakbe
    onlyFourKey();
   
  }
  
  function onClickNumberPadClear(){
      document.getElementById("numberBtnDisplay").value = '';
      notToDisplay()
      
      
  }
  
  function onClickNumberPadBackspace(){
      var val = document.getElementById("numberBtnDisplay").value;
      document.getElementById("numberBtnDisplay").value = val.substr(0, val.length - 1); //prottekbar vale er length theke 1 kore komabe
      notToDisplay()
      
  }
  
  function onlyFourKey(){
      var val = document.getElementById("numberBtnDisplay").value;
      document.getElementById("numberBtnDisplay").value = val.substr(0, 4);//char ta number nibe
  }
  
  const submitBtn = document.getElementById("submit-btn");
  submitBtn.addEventListener("click",function(){
    if(generateBtnDisplay.value == '' && numberBtnDisplay.value == ''){
       document.getElementById("notifyZero").style.display = "inline" ;
       
    }
    else if(generateBtnDisplay.value != numberBtnDisplay.value){
        toDisplayFail()
        tryleft();
    }
    else if(generateBtnDisplay.value == numberBtnDisplay.value){
        toDisplaySuccess()
        document.getElementById("submit-btn").disabled = true;
    }
   
  });



function tryleft(){
    if(generateBtnDisplay.value != numberBtnDisplay.value){
        var three = document.getElementById("action-left").innerHTML;
        var threeC = parseFloat(three);
        if((threeC - 1) != -1){
            document.getElementById("action-left").innerHTML= (threeC - 1);
        }else{
            document.getElementById("submit-btn").disabled = true;
        }

        if((threeC - 1) == 0){
            document.getElementById("notifySorry").style.display = "inline" ;
        }
    }
   
}

function toDisplaySuccess(){
    document.getElementById("notifySuccess").style.display = "inline" ;
}
function toDisplayFail(){
    document.getElementById("notifyFail").style.display = "inline" ;
}

function notToDisplay(){
    document.getElementById("notifyFail").style.display = "none" ;
    document.getElementById("notifyZero").style.display = "none" ;

}


