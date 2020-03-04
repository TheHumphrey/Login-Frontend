function login() {
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    // let div = document.getElementById("containers");

    var req = new XMLHttpRequest();

    req.open('POST', "http://localhost:5000/api/auth");

    req.setRequestHeader("Content-Type", "application/json");

    req.onreadystatechange = () => {
        if (req.readyState == 4) {
            if (req.status == 200) {
                alert("Logado com sucesso!");
            } else if (req.status == 404) {
                alert("Usuario não encontrado!");
            } else if (req.status == 401) {
                alert("Senha incorreta!");
            } else {
                alert("Falha ao realizar a verificação, por favor tente novamente mais tarde!")
            }
        }
    }

    if (email != "" && senha != "") {
        var temp = JSON.stringify({ "username": email, "password": senha });
        return req.send(temp);

    } else {
        alert("Preencha os campos de login!!");
    }
}

function clearEmail() {
    document.getElementById("email").placeholder = "";
}

function clearSenha() {
    document.getElementById("senha").placeholder = "";
}

// if (email == "fernandob.delima@outlook.com" && senha == "123456"){
//     div.innerHTML = "<span>Logado com Sucesso!<span>";
// } else if (email == "fernando" && senha == "123456"){
//     div.innerHTML = "<span>Logado com Sucesso!<span>";
// } else {
//     alert("Email ou senha Incorreta!");
//     document.getElementById("senha").value = "";
// }

