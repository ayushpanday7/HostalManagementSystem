window.addEventListener('load', function () {
    const preloader = document.querySelector('.preloader');
    preloader.classList.add('hide');
});

function verify()
{
    var uname = document.getElementById("uname").value;
    var Password = document.getElementById("Password").value;
    if(uname === "t" && Password === "1")
    {
        window.location.href = 'https://google.com/';
    }
    else{
        document.querySelector(".alertBox").style = "display:flex;"
        
    }
}
function okbtn()
{
    document.querySelector(".alertBox").style = "display:none;"
}