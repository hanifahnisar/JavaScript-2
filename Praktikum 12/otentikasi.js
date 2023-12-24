const username= "hanisa"
const password="77777777"

function auth(){
    // tangkap nilai yg di input user
    let userInput = document.getElementById("username").value
    let passwordInput = document.getElementById("password").value

    let form = document.getElementById("form")

    if(username == userInput && password == passwordInput){
        alert("Login Berhasil")
        form.submit()
    } else{
        alert("Login Gagal!")
    }
}
