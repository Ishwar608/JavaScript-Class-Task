function Login()
{
    let myData = {

        "email" : document.getElementById("email").value,
        "password" : document.getElementById("password").value

    }

    fetch("http://localhost:4000/accounts/authenticate", {
method: 'POST',
body: JSON.stringify(myData),
headers: {
'Content-Type': 'application/json'
}
} ).then(y=> y.json())
.then(y=> {

localStorage.setItem("token",JSON.stringify(y))
console.log(y);
})


}