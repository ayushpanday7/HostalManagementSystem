window.addEventListener('load', function () {
    const preloader = document.querySelector('.preloader');
    preloader.classList.add('hide');
});

function verify()
{
    var uname = document.getElementById("uname").value;
    var Password = document.getElementById("Password").value;
    if(uname === "Ayush" && Password === "12345")
    {
        window.location.href = 'HostelData\\Hostel.html';
    }
    else{
        document.querySelector(".alertBox").style = "display:flex;"
        
    }
}
function okbtn()
{
    document.querySelector(".alertBox").style = "display:none;"
}