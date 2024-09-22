function edit(){
    window.location.href = "edit.html";
}

function datenow(){
    var now = new Date();
    var date = now.toLocaleDateString(); 
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds(); 
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    document.getElementById("dt").innerHTML = "Date: " + date + " | Time: " + hours + ":" + minutes + ":" + seconds;
    setInterval(datenow, 60);
}

function alphanum(ch){
    i=0;
    while((i<ch.length) && ((ch[i]>='A') && (ch[i]<='Z') || ((ch[i]>='a') && (ch[i]<='z')) || (ch[i]>='0') && (ch[i]<='9')) || ch[i]=='.'){
        i++
    }
    return i==ch.length
}

function lettre(ch){
    ch1=ch.toUpperCase();
    i=0;
    while((i<ch1.length) && (ch1[i]>='A') && (ch1[i]<='Z')){
        i++;
    }
    return i==(ch1.length);
}

function verifedit(){
    nm = document.getElementById('nm').value;
    if(nm ==''){
        alert('Please write your name');
        return false;
    }

    age = document.getElementById('age').value;
    if(Number(age)<=0){
        alert('Check your age');
        return false;
    }

    r1 = document.getElementById('r1').checked;
    r2 = document.getElementById('r2').checked;
    r3 = document.getElementById('r3').checked;
    if(!r1 && !r2 && !r3){
        alert('Please select a gender');
        return false;
    }

    ch = document.getElementById('mail').value;
    pat = ch.indexOf('@');
    ppt = ch.lastIndexOf('.');
    if( pat==-1 || ppt==-1){
        alert('Email error : Please add "." or "@" to your email');
        return false;
    }
    if ( ppt<pat){
        alert("Email error : Position of '.' should be superior to position of '@'");
        return false;
    }
    if(pat==0 || ppt==(ch.length-1) || (ppt-pat)==1 || (pat-ppt)==1){
        alert('Email error : You should start your email by a caracter from "A" to "Z"');
        return false;
    }
    ch1 = ch.substr(0,pat);
    ch2 = ch.substr(pat+1,(ppt-pat)-1);
    ch3 = ch.substr(ppt+1);
    if(!alphanum(ch1) || !lettre(ch2) || !lettre(ch3)){
        alert('Email error : email form is wrong or email is field');
        return false;
    }

    bac = document.getElementById('bac').selectedIndex;
    if(bac<=0){
        alert('Please choose a section');
        return false;
    }

    state = document.getElementById('state').value;
    if(state==''){
        alert('Please select a state');
        return false;
    }
}