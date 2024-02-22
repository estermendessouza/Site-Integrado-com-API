function carregaPesquisa(){
  var pesquisa = document.getElementById("txtPesquisa").value;
  
  fetch("https://api.github.com/users/"+pesquisa)
  .then((result) => result.json())
  .then((resultado) => {
    alert("Link do perfil de: "+pesquisa+": https://github.com/"+pesquisa);
    /*document.getElementById("resultadoPesquisa").innerHTML = `
    <div class="row" "resultadoPesquisa" id="resultadoPesquisa">
        <div class="col-12 col-sm-12 col-md-6 col-lg-6">
          <h1 class="title">Resultado da Pesquisa</h1>
        </div>
      </div> 
      <div class="card" style="width: 18rem;">
        <img src="${resultado.avatar_url}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${resultado.name}</h5>
          <p class="card-text">${resultado.bio}</p>
          <a href="${resultado.html_url}" class="btn btn-primary">Ir para o Perfil</a>
        </div>
      </div>
  `; */
  });
}
document.getElementById('btnGroupAddon').addEventListener('click', carregaPesquisa);
function carregarRepositorios(){
  let xhr2 = new XMLHttpRequest ();

  xhr2.onload = function (){
    //alert('Seja bem vindo à Home-Page da(o)'+ this.responseText);
    let dataRepos = JSON.parse(this.responseText);
    let repositorio = `<div class="row">
                            <div class="col-3 col-sm-3 col-md-6 col-lg-1">
                              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-archive" viewBox="0 0 16 16">
                                <path
                                  d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1V2zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5H2zm13-3H1v2h14V2zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                              </svg>
                            </div>
                            <div class="col-9 col-sm-9 col-md-6 col-lg-3">
                              <a href = "https://github.com/estermendessouza/portf-lio"target="_blank"><h5 class="title">${dataRepos.name}</h5></a>
                              <p class="text">${dataRepos.description}</p>
                              <h6 class="subtitle mb-2 text-muted">Atualizado: ${dataRepos.updated_at}</h6>
                          </div>
    `;
    document.getElementById('repositorios').innerHTML = repositorio;
  }

  xhr2.open('GET','https://api.github.com/repos/estermendessouza/portf-lio');
  xhr2.send();
}
function carregarInfoPessoais(){
  let xhr = new XMLHttpRequest ();

  xhr.onload = function () {
    //alert('Seja bem vindo à Home-Page da(o)'+ this.responseText);
    let data = JSON.parse(this.responseText);
    let perfil = ` <div class="row">
                      <div class="col-12 col-sm-12 col-md-4 col-lg-4 avatar">
                        <a href = "https://github.com/estermendessouza" target="_blank">
                          <img src="${data.avatar_url}" id="img-fluid" class="img-fluid" alt="post">
                        </a>
                      </div>
                      <div class="col-12 col-sm-12 col-md-8 col-lg-8">
                        <h1 class="title">Perfil</h1>
                        <h3>Biografia</h3>
                        <p> ${data.bio}
                        </p>
                        <h3>Username</h3>
                        <p>${data.login}</p>
                        
                      </div>
                  </div>
    `;
    document.getElementById('informacaoPessoal').innerHTML = perfil;
  }

  xhr.onerror = function(){
    alert('Ocorreu um erro na requisição');
  }

  xhr.open('GET','https://api.github.com/users/estermendessouza');
  xhr.send();
}
