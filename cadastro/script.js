function checkCnpj(cnpj){
    $.ajax({
        'url':'https://www.receitaws.com.br/v1/cnpj/' + cnpj.replace(/[^0-9]/g, ''),
        'type': "GET",
        'dataType': 'jsonp',
        'success': function(data){
            if (data.nome == undefined){
                alert(data.status + ' ' + data.message)//mudar esse alerta para um texto vermelho
            } else {
                document.getElementById('razaosocial').value = data.nome
                document.getElementById('razaosocial').innerText = data.nome
                document.getElementById('logradouro').value = data.logradouro
                document.getElementById('numero').value = data.numero
                document.getElementById('email').value = data.email
                document.getElementById('municipio').value = data.municipio
                document.getElementById('bairro').value = data.bairro
                document.getElementById('uf').value = data.uf
                document.getElementById('capital_social').value = data.capital_social
                document.getElementById('telefone').value = data.telefone
                document.getElementById('complemento').value = data.complemento
                document.getElementById('cep').value = data.cep
                document.getElementById('atividade_principal').value = data.atividade_principal[0][0[1]]

                console.log(data.atividade_principal[0])
                console.table(data.atividade_principal)
                console.table(data.atividade_principal['text'])
            }
        }
    })
}