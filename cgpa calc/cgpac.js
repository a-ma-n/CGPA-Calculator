console.log(1);
var button=document.getElementById('calculate');


function calc()
{
    var a=Number(document.getElementById('1').value);
    var b=Number(document.getElementById('2').value);
    var c=Number(document.getElementById('3').value);
    var d=Number(document.getElementById('4').value);
    var e=Number(document.getElementById('5').value);
    var f=Number(document.getElementById('6').value);
    var g=Number(document.getElementById('7').value);
    var h=Number(document.getElementById('8').value);

    
    var avg=(a+b+c+d+e+f+g+h)/8;
    //console.log(avg);


if(avg<=100&&avg>90)
{
    window.alert('S grade')
}
else if(avg>80)
{
    window.alert('A grade')
}
else if(avg>70)
{
    window.alert('B grade')
}
else if(avg>60)
{
    window.alert('C grade')
}
else if(avg>50)
{
    window.alert('D grade')
}
else if(avg>40)
{
    window.alert('E grade')
}
else
{
    window.alert('F grade')
}

}







//no of inputs 
//no of subjects 
//print that many input fields 
//3rd step arithmetic operations
//print the result on the screen
//var para = document.createElement("P");
//id selector ->*/