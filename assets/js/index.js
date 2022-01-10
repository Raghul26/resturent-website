function myfunction() {
    var box1 = document.getElementById("username").value;
    var box2 = document.getElementById("mobilenumber").value;
    var box3 = document.getElementById("message").value;


    var regx = /^[a-zA-Z]{a-zA-Z}\w$/;
    if (box1.trim() == "") {
        document.getElementById("inputname").innerHTML = "Please enter your Name*";
        document.getElementById("inputname").style.visibility = "visible";
        document.getElementById("inputname").style.color = "red";
        document.getElementById("username").style.border = "2px solid red";
        return false;
    }
    else {
        if (regx.test(box1)) {
            document.getElementById("inputname").innerHTML = "";
            document.getElementById("inputname").style.visibility = "hidden";
            document.getElementById("inputname").style.color = "green";
            document.getElementById("username").style.border = "2px solid green";
            return false;
        }
        else {
            document.getElementById("inputname").innerHTML = "Please enter valid username*";
            document.getElementById("inputname").style.visibility = "visible";
            document.getElementById("inputname").style.color = "red";
            document.getElementById("username").style.border = "2px solid red";
        }
        if (box1.length < 5 || box1.length > 19) {
            document.getElementById("inputname").innerHTML = "It's Invalid username";
            document.getElementById("inputname").style.visibility = "visible";
            document.getElementById("inputname").style.color = "red";
            document.getElementById("username").style.border = "2px solid red";
            return false;
        }
        else {
            document.getElementById("inputname").innerHTML = "";
            document.getElementById("inputname").style.visibility = "hidden";
            document.getElementById("username").style.border = "2px solid green";
        }
    }

    var regx2 = /^[7-9]{9}\d$/;
    if (box2.trim() == "") {
        document.getElementById("inputmobilenumber").innerHTML = "Please enter your Number*";
        document.getElementById("inputmobilenumber").style.visibility = "visible";
        document.getElementById("inputmobilenumber").style.color = "red";
        document.getElementById("mobilenumber").style.border = "2px solid red";
        return false;
    }
    else {
        if (!regx2.test(box2)) {
            document.getElementById("inputmobilenumber").innerHTML = "It's Invalid";
            document.getElementById("inputmobilenumber").style.visibility = "visible";
            document.getElementById("inputmobilenumber").style.color = "red";
            document.getElementById("mobilenumber").style.border = "2px solid red";
            return false;
        }
        else {
            document.getElementById("inputmobilenumber").innerHTML = "";
            document.getElementById("inputmobilenumber").style.visibility = "hidden";
            document.getElementById("mobilenumber").style.border = "2px solid green";
        }
    }
    if (box3.trim() == "") {
            document.getElementById("message").style.border = "2px solid red";
            return false;
        }
        else {
            document.getElementById("input-messagebox").innerHTML = "";
            document.getElementById("input-messagebox").style.visibility = "hidden";
            document.getElementById("message").style.border = "2px solid green";
        }
        var msg = "Hello "+ box1 + "! Your Delicious food, " + box3 + " was order. Enjoy the Day...";
        document.getElementById("success-message").innerHTML = msg;
}
function btn()
{
   var showmsg = document.getElementById("successmsg");
   showmsg.classList.add('show-order_message');
   var cancelBtn = document.getElementById("cancel-btn");
   cancelBtn.style.display = "block";
}
function cancelbtn(){
   var cancelBtn = document.getElementById("successmsg");
   cancelBtn.style.display = "none";
}


const scrollButton = document.querySelector(".top-btn");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        scrollButton.classList.add("active");
    }
    else {
        scrollButton.classList.remove("active");
    }
})