var buttomlove = document.getElementById('loveimg');

function showimg(){
  document.getElementById("loveimg").style.display="block";
}

function redred(){
    if(buttomlove.style.color == "red"){
        buttomlove.style.color ="grey"

    }
    else{
        buttomlove.style.color = "red"
    }
}