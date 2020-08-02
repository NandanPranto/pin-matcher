
//pin code generate 
const pinGenerateBtn = document.getElementById("generateBtn");
pinGenerateBtn.addEventListener("click",function(){
    
        var randomNum=Math.round(1000 + Math.random() * 9000);//to take the random number of four numbers
        document.getElementById("generateBtnDisplay").value = randomNum;
        
});



//number pad 
function onClickNumberPad(val){

    document.getElementById("numberBtnDisplay").value += val; //number key te click korle value j number e click kora hoiche seta bosbe + jotobar click kora hobe display value er sathe add hotei thakbe
    onlyFourKey();
   
      
  }
  
  function onClickNumberPadClear(){
      document.getElementById("numberBtnDisplay").value = '';
     
      
      
  }
  
  function onClickNumberPadBackspace(){
      var val = document.getElementById("numberBtnDisplay").value;
      document.getElementById("numberBtnDisplay").value = val.substr(0, val.length - 1); //prottekbar vale er length theke 1 kore komabe
  
      
  }
  
  function onlyFourKey(){
      var val = document.getElementById("numberBtnDisplay").value;
      document.getElementById("numberBtnDisplay").value = val.substr(0, 4);//char ta number nibe
  }
  
  const submitBtn = document.getElementById("submit-btn");
  submitBtn.addEventListener("click",function(){
    if(generateBtnDisplay.value == '' && numberBtnDisplay.value == ''){
       document.getElementById("notifyZero").style.display = "inline" ;
    }else{
        matchTheGeneratedPinAndClickedPin(generateBtnDisplay);
       
        tryleft()
    }
   

    
   
  });


//to match
function matchTheGeneratedPinAndClickedPin(id){
    if(id.value == numberBtnDisplay.value){
    
        // document.getElementById("notifySuccess").style.display = "inline" ;
        toDisplaySuccess()
    }
    else{
        
    //   document.getElementById("notifyFail").style.display = "inline" ;
    toDisplayFail()
       
    }
}

function tryleft(){
    var three = document.getElementById("action-left").innerHTML;
    var threeC = parseFloat(three);
    if((threeC - 1) != -1){
        document.getElementById("action-left").innerHTML= (threeC - 1);
    }
   
}

function toDisplaySuccess(){
    document.getElementById("notifySuccess").style.display = "inline" ;
}
function toDisplayFail(){
    document.getElementById("notifyFail").style.display = "inline" ;
}

// function notToDisplay(){
//     document.getElementById("notify").style.display = "none" ;
// }


