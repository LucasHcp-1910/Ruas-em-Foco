// CARROSSEL SP //
var contadorsp = 1;
var imgsp1 ="./src/assets/img_beco_do_batman.jpg";
var imgsp2 ="./src/assets/img_rua_do_carmo.jpg";
var imgsp3 ="./src/assets/img_catedral_da_se.jpg";
var imgsp4 ="./src/assets/img_avenida_paulista.jpg";
var imgsp5 ="./src/assets/img_masp.jpg";
var imgsp6 ="./src/assets/img_marginal_pinheiros.jpg";
var titulossp1 ="Beco do Batman";
var titulossp2 ="Rua do Carmo";
var titulossp3 ="Catedral da Sé";
var titulossp4 ="Avenida Paulista";
var titulossp5 ="MASP";
var titulossp6 ="Marginal Pinheiros";
var legendassp1 ="O Beco do Batman é um dos pontos mais emblemáticos de arte urbana em São Paulo, localizado no coração do bairro boêmio da Vila Madalena. O local é conhecido por suas vielas estreitas, como as ruas Gonçalo Afonso e Medeiros de Albuquerque, completamente cobertas por grafites vibrantes e murais que se renovam constantemente.";
var legendassp2 ="A Rua do Carmo é uma das vias mais antigas e históricas do centro de São Paulo. Localizada próxima à Catedral da Sé, possui casarões antigos e é cercada por ruas de paralelepípedo, que remetem à época da colonização. É um ponto de interesse para quem deseja conhecer o passado da cidade.";
var legendassp3 ="A Catedral Metropolitana de São Paulo, conhecida como Catedral da Sé, é um dos principais cartões-postais da cidade. Seu estilo neogótico impressiona, com vitrais coloridos e torres altas. Localizada na Praça da Sé, é um dos maiores templos religiosos do Brasil e símbolo da história e da religiosidade paulistana.";
var legendassp4 ="A Avenida Paulista é uma das vias mais famosas e importantes de São Paulo, sendo símbolo da diversidade cultural e econômica da cidade. Abriga grandes empresas, centros culturais, museus e instituições financeiras. É também palco de manifestações e festividades culturais.";
var legendassp5 ="O MASP (Museu de Arte de São Paulo Assis Chateaubriand) é um dos mais importantes museus da América Latina. Localizado na Avenida Paulista, seu edifício icônico, projetado por Lina Bo Bardi, abriga um acervo riquíssimo, com obras de artistas brasileiros e internacionais. É um ponto de parada obrigatório para os apreciadores de arte.";
var legendassp6 ="A Marginal Pinheiros é uma das principais vias expressas da cidade de São Paulo, acompanhando o curso do Rio Pinheiros. É rodeada por centros empresariais, edifícios modernos e áreas verdes. A via é essencial para a mobilidade urbana e faz parte do dia a dia de milhares de motoristas da metrópole.";
var temposp=2000;
var iniciarsp=setInterval(iniciandosp, temposp)

function iniciandosp()
{
  if (!document.images)
    return
  else
    {
      document.getElementById("imgsp").src = eval("imgsp" + contadorsp);
      document.getElementById("titulossp").textContent=eval("titulossp" +contadorsp);
      document.getElementById("legendassp").textContent=eval("legendassp" +contadorsp);
      
      contadorsp++
      if (contadorsp>6) contadorsp=1
    }
  }

  function anteriorsp()
  {
    clearInterval(iniciarsp);
    contadorsp = contadorsp -1;
    if (contadorsp <1) 
      {
        contadorsp = 6
      }
    document.getElementById("imgsp").src = eval("imgsp" + contadorsp);
    document.getElementById("titulossp").textContent=eval("titulossp" +contadorsp);
    document.getElementById("legendassp").textContent=eval("legendassp" +contadorsp);

    iniciarsp =setInterval(iniciandosp,temposp);
}

function proximosp()
{
  clearInterval(iniciarsp);
  contadorsp ++;
  if (contadorsp > 6) contadorsp = 1;

  document.getElementById("imgsp").src = eval("imgsp" + contadorsp);
  document.getElementById("titulossp").textContent=eval("titulossp" +contadorsp);
  document.getElementById("legendassp").textContent=eval("legendassp" +contadorsp);

  iniciarsp = setInterval(iniciandosp, temposp);
}



//CARROSSEL RJ//

var contadorrj = 1;
var imgrj1 ="./src/assets/img_praia_do_forte.jpg";
var imgrj2 ="./src/assets/img_ponte_rio_niteroi.jpg";
var imgrj3 ="./src/assets/img_maracana.jpg";
var imgrj4 ="./src/assets/img_favela_da_rocinha.jpg";
var imgrj5 ="./src/assets/img_copacabana.jpg";
var imgrj6 ="./src/assets/img_pao_de_acucar.jpg";
var tituloimgrj1 ="Praia do Forte";
var tituloimgrj2 ="Ponte Rio-Niterói";
var tituloimgrj3 ="Estádio Maracanã";
var tituloimgrj4 ="Rocinha";
var tituloimgrj5 ="Copacabana";
var tituloimgrj6 ="Pão de Açúcar";
var legendaimgrj1 ="Localizada em Cabo Frio, no estado do Rio de Janeiro, é famosa por suas praias de areias finas e águas transparentes. Considerada por muitos turistas uma das praias mais bonitas do litoral fluminense, oferece excelente infraestrutura, diversas opções de lazer e um ambiente propício para relaxar.";
var legendaimgrj2 ="A Ponte Rio-Niterói, oficialmente Ponte Presidente Costa e Silva, é uma das principais ligações entre as cidades do Rio de Janeiro e Niterói. Com uma extensão de mais de 13 km, ela é uma das maiores pontes do Brasil, atravessando a Baía de Guanabara.";
var legendaimgrj3 ="O Estádio Jornalista Mário Filho, popularmente conhecido como Maracanã, é um dos estádios mais emblemáticos do mundo. Localizado no Rio de Janeiro, foi inaugurado em 1950 e já sediou duas finais de Copa do Mundo. O estádio é um símbolo do futebol brasileiro, com capacidade para mais de 78 mil pessoas.";
var legendaimgrj4 ="A Rocinha é a maior favela do Brasil, localizada na zona sul do Rio de Janeiro, entre os bairros de São Conrado e Gávea. Segundo o Censo de 2022 do IBGE, ela abriga cerca de 75 mil habitantes. A Rocinha é conhecida por sua vibrante cena cultural, com projetos sociais, espaços para eventos e um comércio popular que movimenta a economia local.";
var legendaimgrj5 ="Copacabana é um dos bairros mais famosos e turísticos do Rio de Janeiro, conhecido por sua bela praia de mesmo nome e pelo famoso calçadão em padrão de ondas. Localizado na zona sul da cidade, é um destino popular entre turistas e cariocas, com uma vasta oferta de hotéis, restaurantes e vida noturna.";
var legendaimgrj6 ="O Pão de Açúcar é um dos principais cartões-postais do Rio de Janeiro, situado na entrada da Baía de Guanabara. É formado por dois morros ligados por um teleférico: o Morro da Urca e o Morro do Pão de Açúcar. A vista do topo é deslumbrante, proporcionando uma perspectiva incrível da cidade, incluindo o Cristo Redentor e o mar.";
var temporj=2000;
var iniciarrj=setInterval(iniciandorj, temporj)

function iniciandorj()
{
  if (!document.images)
    return
  else
    {
      document.getElementById("imgrj").src = eval("imgrj" + contadorrj);
      document.getElementById("tituloimgrj").textContent=eval("tituloimgrj" +contadorrj);
      document.getElementById("legendaimgrj").textContent=eval("legendaimgrj" +contadorrj);
      
      contadorrj++
      if (contadorrj>6) contadorrj=1
    }
  }

  function anteriorrj()
  {
    clearInterval(iniciarrj);
    contadorrj = contadorrj -1;
    if (contadorrj <1) 
      {
        contadorrj = 6
      }
    document.getElementById("imgrj").src = eval("imgrj" + contadorrj);
    document.getElementById("tituloimgrj").textContent=eval("tituloimgrj" +contadorrj);
    document.getElementById("legendaimgrj").textContent=eval("legendaimgrj" +contadorrj);

    iniciarrj =setInterval(iniciandorj,temporj);
}

function proximorj()
{
  clearInterval(iniciarrj);
  contadorrj ++;
  if (contadorrj > 6) contadorrj = 1;

  document.getElementById("imgrj").src = eval("imgrj" + contadorrj);
  document.getElementById("tituloimgrj").textContent=eval("tituloimgrj" +contadorrj);
  document.getElementById("legendaimgrj").textContent=eval("legendaimgrj" +contadorrj);

  iniciarrj = setInterval(iniciandorj, temporj);
}

//CARROSSEL SC//

var contadorsc = 1;
var imgsc1 ="./src/assets/img_centro_balneario.jpg";
var imgsc2 ="./src/assets/img_teleferico_balneario.jpg";
var imgsc3 ="./src/assets/img_beto_carrero.jpg";
var imgsc4 ="./src/assets/img_blumenau.jpg";
var imgsc5 ="./src/assets/img_roda_gigante_balneario.jpg";
var imgsc6 ="./src/assets/img_oceanic_aquarium.jpg";
var tituloimgsc1 ="Centro Balneário";
var tituloimgsc2 ="Teleférico";
var tituloimgsc3 ="Beto Carrero";
var tituloimgsc4 ="Blumenau";
var tituloimgsc5 ="Roda Gigante";
var tituloimgsc6 ="Oceanic Aquarium";
var legendaimgsc1 ="O centro de Balneário Camboriú é um dos locais mais movimentados da cidade, com diversas opções de comércio, gastronomia e entretenimento. A região central atrai moradores e turistas durante o dia e a noite, sendo um ponto estratégico para quem deseja aproveitar ao máximo tudo o que a cidade oferece.";
var legendaimgsc2 ="O Teleférico de Balneário Camboriú é uma das atrações turísticas mais conhecidas da cidade. Ele liga a Praia Central ao Parque Unipraias, proporcionando uma vista panorâmica incrível do oceano e da Mata Atlântica. É uma experiência imperdível para quem visita Santa Catarina e a região das praias catarinenses.";
var legendaimgsc3 ="O Beto Carrero World é o maior parque temático da América Latina, localizado na cidade de Penha, em Santa Catarina. Possui atrações para todas as idades, incluindo brinquedos radicais, zoológico, shows temáticos e áreas temáticas inspiradas em personagens infantis. É um destino muito procurado por famílias.  ";
var legendaimgsc4 ="Blumenau, localizada no Vale do Itajaí em Santa Catarina, é uma cidade com forte influência da colonização alemã. Seu centro histórico apresenta construções em estilo enxaimel e a cidade é famosa por sediar a Oktoberfest, a segunda maior festa da cerveja do mundo. Um destino encantador com muitas festividades culturais.";
var legendaimgsc5 ="A Big Wheel, localizada na Barra Norte de Balneário Camboriú, é uma das maiores rodas-gigantes da América do Sul. Com cabines fechadas e climatizadas, ela oferece uma vista panorâmica espetacular da orla da cidade e da Mata Atlântica. Um passeio imperdível tanto de dia quanto à noite.";
var legendaimgsc6 ="O Oceanic Aquarium, localizado em Balneário Camboriú, abriga mais de 100 espécies de animais marinhos e de água doce. Com tanques de grande porte e ambientes temáticos, é uma atração educativa e divertida para toda a família. Ideal para dias de chuva na cidade.";
var temposc=2000;
var iniciarsc=setInterval(iniciandosc, temposc)

function iniciandosc()
{
  if (!document.images)
    return
  else
    {
      document.getElementById("imgsc").src = eval("imgsc" + contadorsc);
      document.getElementById("tituloimgsc").textContent=eval("tituloimgsc" +contadorsc);
      document.getElementById("legendaimgsc").textContent=eval("legendaimgsc" +contadorsc);
      
      contadorsc++
      if (contadorsc>6) contadorsc=1
    }
  }

  function anteriorsc()
  {
    clearInterval(iniciarsc);
    contadorsc = contadorsc -1;
    if (contadorsc <1) 
      {
        contadorsc = 6
      }
    document.getElementById("imgsc").src = eval("imgsc" + contadorsc);
    document.getElementById("tituloimgsc").textContent=eval("tituloimgsc" +contadorsc);
    document.getElementById("legendaimgsc").textContent=eval("legendaimgsc" +contadorsc);

    iniciarsc =setInterval(iniciandosc,temposc);
}

function proximosc()
{
  clearInterval(iniciarsc);
  contadorsc ++;
  if (contadorsc > 6) contadorsc = 1;

  document.getElementById("imgsc").src = eval("imgsc" + contadorsc);
  document.getElementById("tituloimgsc").textContent=eval("tituloimgsc" +contadorsc);
  document.getElementById("legendaimgsc").textContent=eval("legendaimgsc" +contadorsc);

  iniciarsc = setInterval(iniciandosc, temposc);
}