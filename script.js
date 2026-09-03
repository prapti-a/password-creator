var pwd = document.getElementById("pwd");
var cpwd = document.getElementById("cpwd");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var special = document.getElementById("special");
var length = document.getElementById("length");
var create = document.getElementById("create");
var copy = document.getElementById("copy");
var message = document.getElementById("message");
var togglepwd = document.getElementById("togglepwd");
var togglecpwd = document.getElementById("togglecpwd");
pwd.onblur = function()
{
    document.querySelector(".requirements").style.display = "none";
}
pwd.onkeyup = function()
{
    if(pwd.value.length > 0)
    {
        document.querySelector(".requirements").style.display = "block";
    }
    else
    {
        document.querySelector(".requirements").style.display = "none";
    }
    //lowercase ko lagi
    var lowercase = /[a-z]/g;

    if(pwd.value.match(lowercase))
    {
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    }
    else
    {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }

    //uppercase ko lagi
    var uppercase = /[A-Z]/g;

    if(pwd.value.match(uppercase))
    {
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    }
    else
    {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }

    //number
    var numbers = /[0-9]/g;

    if(pwd.value.match(numbers))
    {
        number.classList.remove("invalid");
        number.classList.add("valid");
    }
    else
    {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }

    //special characters
    var specialchar = /[!@#$%^&*]/g;

    if(pwd.value.match(specialchar))
    {
        special.classList.remove("invalid");
        special.classList.add("valid");
    }
    else
    {
        special.classList.remove("valid");
        special.classList.add("invalid");
    }

    //length
    if(pwd.value.length >=8)
    {
        length.classList.remove("invalid");
        length.classList.add("valid");
    }
    else
    {
        length.classList.remove("valid");
        length.classList.add("invalid");
    }  
}
create.onclick = function()
{
    if(pwd.value === cpwd.value)
    {
        message.textContent = "Password created successfully!";
    }
    else{
        message.textContent = "Passwords do not match!";
    }
}
copy.onclick = function()
{
    if(pwd.value === "")
    {
        message.textContent = "Nothing to copy!";
        return;
    }

    navigator.clipboard.writeText(pwd.value);

    message.textContent = "Password copied!";
};
togglepwd.onclick = function()
{
    if(pwd.type === "password")
    {
        pwd.type = "text";
        togglepwd.textContent = "👁";
    }
    else
    {
        pwd.type = "password";
        togglepwd.textContent = "👁";
    }
}
togglecpwd.onclick = function()
{
    if(cpwd.type === "password")
    {
        cpwd.type = "text";
        togglecpwd.textContent = "👁";
    }
    else
    {
        cpwd.type = "password";
        togglecpwd.textContent = "👁";
    }
}

