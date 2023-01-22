function verify()
{
    let uname = document.getElementById('uname').value
    let pass = document.getElementById('pass').value
    let email = document.getElementById('email').value
    let errorMsg = []

    if(uname === "")
    {
        errorMsg.push("Username required")
    }

    else
    {

        if(uname.length < 8)
        {
            errorMsg.push("Username has to be at least 8 characters")
        }
    }

    if(pass === "")
    {
        errorMsg.push("Password required")
    }
    
    if(email === "")
    {
        errorMsg.push("Email required")
    }

    else
    {
        if(email.indexOf("@") < 1 || email.indexOf("@") === email.length-1)
        {
            errorMsg.push("Invalid email")
        }

        else if(email.indexOf(".") < 1 || email.indexOf(".") === email.length-1)
        {
            errorMsg.push("Invalid email")
        }
    }

    let agree = document.getElementById('agree')

    if(!agree.checked)
    {
        errorMsg.push("You have to check agreements")
    }

    if(errorMsg.length < 1)
    {
        alert("Success!")
    }

    else
    {
        alert(errorMsg)
    }
    

    console.log(uname)
    console.log(pass)
    console.log(email)
    console.log(agree)

    uname = "test"
}