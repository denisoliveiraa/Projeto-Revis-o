var meuServidor = [

// 1 - Novo
// 2 - pendente
/// 3  - excluido


    {
        id: 0,
        title: "Pteridófitas conteudo 1",
        conteudo: "As pteridófitas são muito legais",
        ativo: true,
        categoria: 2
        
    },

    {
        id: 1,
        title: "Gminosperma conteudo 2",
        conteudo: "As gmonosperma são muito legais",
        ativo: true,
        categoria: 1
        
    },
    {
        id: 2,
        title: "o que falaram de mim",
        conteudo: "As pteridófitas são muito legais",
        ativo: true,
        categoria: 2
        
    },

    {
        id: 3,
        title: "grecia antiga",
        conteudo: "As gmonosperma são muito legais",
        ativo: true,
        categoria: 1
        
    },
    {
        id: 4,
        title: "empreendedorismo",
        conteudo: "As pteridófitas são muito legais",
        ativo: true,
        categoria: 2
        
    },
    {
        id: 5,
        title: "Angulos unifomes",
        conteudo: "As gmonosperma são muito legais",
        ativo: true,
        categoria: 1
        
    }

]



function inserirDados(){


    meuServidor.forEach(item => {
    
 
            if(item.categoria === 1 && item.ativo === true){
        
                const el = document.createElement("button");
                el.classList = 'di-criada'
                const texto = document.createTextNode(item.title);
                el.appendChild(texto);
                var divAtual = document.querySelector(".historicoAtual");
                divAtual.appendChild(el);
                console.log(el);

            }
         
            if (item.categoria === 2 && item.ativo === true){
       
                const el = document.createElement("button");
                el.classList = 'di-criada'
                const texto = document.createTextNode(item.title);
                el.appendChild(texto);
                var divAtual = document.querySelector(".historicoAtrasado");
                divAtual.appendChild(el);
                console.log(el);
            }
           
         
    
        
        
    })
    
}




    var conteudoTitulo = document.querySelector('#send')
    conteudoTitulo.addEventListener("click", function(e) {
        e.preventDefault();

        const nameTitulo = document.querySelector("#tituloNovoConteudo")
        const nameConteudo = document.querySelector("#textoConteudo")


        const valueTitulo = nameTitulo.value;
        const valueConteudo = nameConteudo.value;

        var ultimoId = meuServidor[meuServidor.length - 1].id

        meuServidor.push({

            id: ultimoId + 1,
            title: valueTitulo,
            conteudo: valueConteudo,
            ativo: true,
            categoria: 2
            
        })

        console.log(meuServidor)

    })







//Incrementar o ultimo valor do ID
//Criar com valor ativo = true
//Adicionar titulo -> função 01
//Adicionar conteudo -> função 02