function cmsetcookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        var expires = "; expires=" + date.toGMTString();
    }
    else
        var expires = "";
    document.cookie = name + " = " + value + expires + ";path=/";
}

function commentsetcookie() {
    username = document.theform.inputname.value;
    usercomment = document.theform.inputcomment.value;
    if (username === "") {
        alert("Please enter the name!")
        return;
    }

    else if (usercomment === "") {
        alert("Please comment something!")
        return;
    }
    else {
        cmsetcookie("Name", username, 2);
        cmsetcookie("Comment", usercomment, 2);
        alert("Comment has been successfully sent.");
    }
}


function showcomment(name) {
    thecookie = document.cookie.split(";");

    for (var i = 0; i < thecookie.length; i++) {
        document.getElementById("showtime").innerHTML = (decodeURIComponent(thecookie[i].split('=')[1]) + ":      " + decodeURIComponent(thecookie[i + 1].split('=')[1]));
    }

}



