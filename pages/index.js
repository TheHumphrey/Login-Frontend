function cadastrar(e) {
    e.preventDefault();
    var email = document.getElementById("email").value;
    var name = document.getElementById("name").value;
    var date = document.getElementById("date").value;
    var senha = document.getElementById("senha").value;

    var req = new XMLHttpRequest();

    req.open("Post", "http://localhost:5000/api/usuario");

    req.setRequestHeader("Content-Type", "application/json");

    req.onreadystatechange = () => {
        if (req.readyState == 4) {
            if (req.status == 200) {
                alert("Usuario cadastrado com sucesso!");
            } else if (req.status == 409) {
                alert("Usuário já existe!");
            } else if (req.status == 400) {
                alert("Falha ao criar usuário!");
            }
        }
    }
    usuario = verificarPreenchimento(email, name, date, senha);
    req.send(usuario);
}

function verificarPreenchimento(email, name, date, senha) {
    var usuario;
    if (email == "" || senha == "") {
        alert("Preencha os campos requeridos! (*)");
    } else if (date == "" && name == "") {
        usuario = JSON.stringify({ "email": email, "senha": senha });
        return usuario;
    } else if (date == "") {
        usuario = JSON.stringify({ "nome": name, "email": email, "senha": senha, });
        return usuario;
    } else if (name == "") {
        usuario = JSON.stringify({ "email": email, "senha": senha, "dataNascimento": date });
        return usuario;
    } else if (email && name && date && senha) {
        usuario = JSON.stringify({ "email": email, "nome": name, "senha": senha, "dataNascimento": date });
        return usuario;
    }
}



function clearEmail() {
    document.getElementById("email").placeholder = "";
}

function clearName() {
    document.getElementById("name").placeholder = "";
}

function clearDate() {
    document.getElementById("date").placeholder = "";
}

function clearSenha() {
    document.getElementById("senha").placeholder = "";
}