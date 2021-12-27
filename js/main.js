function consultaCEP(){
    $(".barra-progresso").show(); 
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/"+cep+"/json/";
    console.log(url);
    $.ajax({
        url:url,
        type: "GET",
        
        success : function(response){
           console.log(response); 
           $("#localidade").html(response.localidade);
           $("#uf").html(response.uf);
           $("#ibge").html(response.ibge);
           $("#ddd").html(response.ddd);
           $("#titulocep").html("CEP "+ response.cep);
           //show exibe a informação nesse exato momento(ao pesquisar o cep).
           $(".cep").show();
           $(".barra-progresso").hide(); 
        }
    })
}

$(function(){
  //hide esconde a informação nesse exato momento(ao abrir a página)
  $(".cep").hide(); 
  $(".barra-progresso").hide(); 
});
