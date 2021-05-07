function limparCampo(){

    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("cpf").value = "";
    document.getElementById("telefone").value = "";
    document.getElementById("cep").value = "";
    document.getElementById("bairro").value = "";
    document.getElementById("logradouro").value = "";
    document.getElementById("numero").value = "";
    document.getElementById("cidade").value = "";
    document.getElementById("estado").value = "";
    
}

function Cadastrar(){

    var line = document.createElement("tr")
    var register = document.createElement("td")
    register.innerHTML = document.getElementById("nome").value
    line.appendChild(register)
    var register = document.createElement("td")
    register.innerHTML = document.getElementById("email").value
    line.appendChild(register)
    var register = document.createElement("td")
    register.innerHTML = document.getElementById("cpf").value
    register.id = "chave"
    line.appendChild(register)
    var register = document.createElement("td")
    register.innerHTML = document.getElementById("telefone").value
    line.appendChild(register)
    var register = document.createElement("td")
    register.innerHTML = document.getElementById("cep").value
    line.appendChild(register)
    var register = document.createElement("td")
    register.innerHTML = document.getElementById("bairro").value
    line.appendChild(register)
    var register = document.createElement("td")
    register.innerHTML = document.getElementById("logradouro").value
    line.appendChild(register)
    var register = document.createElement("td")
    register.innerHTML = document.getElementById("numero").value
    line.appendChild(register)
    var register = document.createElement("td")
    register.innerHTML = document.getElementById("cidade").value
    line.appendChild(register)
    var register = document.createElement("td")
    register.innerHTML = document.getElementById("estado").value
    line.appendChild(register)
    var register = document.createElement("td")
    var button = document.createElement("button")
    button.innerHTML = "Excluir"
    button.onclick = () => {
        line.classList.add("apagar")
    }
    register.appendChild(button)
    line.appendChild(register)
  
    document.getElementById("tabela").appendChild(line);
    limparCampo()
}



