

function condition(n1,n2){
    var n1=window.prompt("Enter the values");
    var n2=window.prompt("Enter the values:");
    if(n1>n2){
        document.getElementById("result").innerHTML=n1;
    }
    else{
        document.getElementById("result").innerHTML=n2;
    }

}