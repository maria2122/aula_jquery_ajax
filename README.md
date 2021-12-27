# aula_jquery_ajax
Introdução ao JQuery e Ajax
# $.ajax já é uma função do jquery, onde realiza uma requisição na url passada com tipo GET
 e se tudo der certo ele mostra(traz o dicionário) de dados no console do navegador.
 $.ajax({
        url:"https://viacep.com.br/ws/37890000/json/",
        type: "GET",
        success : function(response){
           console.log(response.localidade); 
           alert(response.uf)
        }
    })