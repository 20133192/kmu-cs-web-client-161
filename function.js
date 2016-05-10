//Question 1
console.log("Q1: hello Homework3");

//Question 2
function stringToInt(input){
  return parseInt(input);
}

//Question 3
function maskNumber(input){
  var mask_number="";
  for(var i=0;i<11;i++){
    if(i>=7){
      mask_number+="*";
    }
    else{
      mask_number+=input[i];
    }
  }
  return mask_number;
}

//Question 4
function getAverage(input_array){
  var avg=0,len;
  len=input_array.length;
  for(var i=0;i<len;i++){
    avg+=input_array[i];
  }
  avg=parseFloat(avg/len);
  return avg;
}

//Question 5
function isMultipleSeven(input){
  if(input%7==0){
    return true;
  }
  else{
    return false;
  }
}

//Question 6
function operation(operator, var1, var2){
  switch(operator){
  case "add":
    return var1+var2;
    break;
  case "substract":
    return var1-var2;
    break;
  case "multiply":
    return var1*var2;
    break;
  case "divide":
    return var1/var2;
    break;
  default:
    return "Not Supported";
  }
}

//Question 7
function triangleMtn(input){
  var output="";
  for(var i=0;i<input;i++){
    for(var j=0;j<=i;j++){
      output+='*';
    }
    console.log(output);
    output="";
  }
}
