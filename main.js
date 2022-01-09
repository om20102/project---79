nameofpizza=[];
function submit (){
    var n1=document.getElementById("p1").value;
    var n2=document.getElementById("p2").value;
    var n3=document.getElementById("p3").value;
    var n4=document.getElementById("p4").value;

    nameofpizza.push(n1);
    nameofpizza.push(n2);
    nameofpizza.push(n3);
    nameofpizza.push(n4);

    document.getElementById("display_name").innerHTML = nameofstudent;
    document.getElementById("b1").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";
}

function sorting (){
    nameofpizza.sort();
     console.log(nameofpizza);
      document.getElementById("display_name").innerHTML = nameofpizza;
}