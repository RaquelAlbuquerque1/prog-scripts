let slideIndex = 0;

var selectMovie = {
  [0]: {
    name: "Contrato Perigoso",
    src: "https://www.youtube.com/embed/szJqoqWOxy0",
    direction: "<span>Direção: </span> Tarik Saleh",
    cast: "<span>Elenco: </span> Chris Pine,Ben Foster,Gillian Jacobs,Eddie Marsan, dentre outros.",
    roadmapBy: "<span>Roteiro: </span> J. P. Davis",
    genre: "<span>Gênero: </span> Ação",
    description:
      "James se junta a uma organização paramilitar a fim de continuar sustentando a família após a dispensa dos fuzileiros navais. Ele precisa liderar uma equipe tática na Europa, onde há indícios de uma perigosa ameaça.",
  },
  [1]: {
    name: "Vingança Fatal",
    src: "https://www.youtube.com/embed/uHawg9bCV4Q",
    direction: "<span>Direção: </span> Jared Cohn",
    cast: "<span>Elenco: </span> Theo Rossi,Bruce Willis,Mike Tyson,Clive Standen, dentre outros.",
    roadmapBy: "<span>Roteiro: </span> Jared Cohn",
    genre: "<span>Gênero: </span> Ação",
    description:
      "Em um dos últimos filmes estrelados por Bruce Willis antes do anúncio de sua aposentadoria das telas, 'Vingança Fatal' é uma ação de máfia cheia de tiro, porrada e bomba, mas que também traz a emocionante história de um pai contra um sistema que falhou com sua filha. O drama familiar oferece importantes camadas de conexão com a história do protagonista e você também terá sede de vingança. Destaque para a presença de Mike Tyson em um papel que não é como ele mesmo, nem em uma comédia (como foi em ‘Se Beber, Não Case’). ",
  },
  [2]: {
    name: "Os Especialistas",
    src: "https://www.youtube.com/embed/dNOK6KygfSA",
    direction: "<span>Direção: </span> Gary McKendry",
    cast: "<span>Elenco: </span> Jason Statham, Clive Owen, Robert De Niro, dentre outros.",
    roadmapBy: "<span>Roteiro: </span> Ranulph Fiennes",
    genre: "<span>Gênero: </span> Ação",
    description:
      "O agente especial Danny (Jason Statham), embora quisesse desistir de seu profissionalismo na arte de matar, foi forçado a fazer um último serviço para garantir a sobrevivência de seu antigo parceiro de missões secretas Hunter (Robet De Niro). Para isso, ele deverá vingar um poderoso xeque do petróleo que teve seu três filhos assassinados por três agentes das forças especiais britânicas SAS. Contudo, Spike (Clive Owen), um poderoso ex-membro do grupo, está disposto a defender seus antigos parceiros e não medirá esforços para eliminar seu novo oponente.",
  },
  [3]: {
    name: "Três Ladrões e um Bebê",
    src: "https://www.youtube.com/embed/WsCrZ5Njt70",
    direction: "<span>Direção: </span> Benny Chan",
    cast: "<span>Elenco: </span> Jackie Chan, Michael Hui, Louis Koo, dentre outros.",
    roadmapBy: "<span>Roteiro: </span> Jackie Chan",
    genre: "<span>Gênero: </span> Ação",
    description:
      "Slipper (Jackie Chan) era um jogador compulsivo e suas dívidas não paravam de aumentar. Mal sabia ele que o plano de sequestrar o neto de uma das milionárias das cidade transformaria sua vida num verdadeiro caos. O motivo: junto com a criança vieram o choro, as fraldas, a mamadeira e, o pior, o crime organizado que também estava de olho no bebê. Agora, de criminoso para herói, ele vai ter que se virar para evitar que o pequenino caia nas garras dos bandidos.",
  },
  [4]: {
    name: "Operação Zodíaco",
    src: "https://www.youtube.com/embed/JOEPjQNERCE",
    direction: "<span>Direção: </span> Jackie Chan",
    cast: "<span>Elenco: </span> Jackie Chan, Oliver Platt, Shu Qi, dentre outros.",
    roadmapBy: "<span>Roteiro: </span> Jackie Chan",
    genre: "<span>Gênero: </span> Ação",
    description:
      "Asian Hawk (Jackie Chan) parte em busca de doze artefatos mágicos desaparecidos desde o século XIX: doze cabeças de animais em bronze que representam os signos do horóscopo chinês. Auxiliado por um estudante chinês e uma bela francesa, ele não desistirá fácil de seu complicado objetivo, mesmo que para isto tenha que cruzar o mundo.",
  },
  [5]: {
    name: "Ainda estou aqui",
    src: "https://www.youtube.com/embed/VggTzF0HT7M",
    direction: "<span>Direção: </span> Arie Posin",
    cast: "<span>Elenco: </span> Joey King, Kyle Allen, Kim Dickens, dentre outros.",
    roadmapBy: "<span>Roteiro: </span> Marc Klein",
    genre: "<span>Gênero: </span> Romance",
    description:
      "Ainda Estou Aqui acompanha a jovem Tessa (Joey King), que passou sua infância entre abrigos para menores, e não acredita que pode viver um amor verdadeiro. Tudo muda quando ela conhece e começa a namorar Skylar (Kyle Allen), um morador da cidade vizinha bem romântico. Juntos, eles passam por um acidente de carro que tira a vida de Skylar. Depois da morte do amado, a jovem passa a acreditar que ele está tentando se comunicar com ela do outro mundo. A história de amor sobrenatural é baseada em um livro e conta com a presença de Joey King (A Barraca do Beijo) e Kyle Allen (O Mapa das Pequenas Coisas Perfeitas).",
  },
  [6]: {
    name: "A Culpa é das Estrelas",
    src: "https://www.youtube.com/embed/8PDn3dJPQX0",
    direction: "<span>Direção: </span> Josh Boone",
    cast: "<span>Elenco: </span> Shailene Woodley, Ansel Elgort, Nat Wolff, dentre outros.",
    roadmapBy: "<span>Roteiro: </span> Scott Neustadter, John Green",
    genre: "<span>Gênero: </span> Romance",
    description:
      "Diagnosticada com câncer, a adolescente Hazel Grace Lancaster (Shailene Woodley) se mantém viva graças a uma droga experimental. Após passar anos lutando com a doença, ela é forçada pelos pais a participar de um grupo de apoio cristão. Lá, conhece Augustus Waters (Ansel Elgort), um rapaz que também sofre com câncer. Os dois possuem visões muito diferentes de suas doenças: Hazel preocupa-se apenas com a dor que poderá causar aos outros, já Augustus sonha em deixar a sua própria marca no mundo. Apesar das diferenças, eles se apaixonam. Juntos, atravessam os principais conflitos da adolescência e do primeiro amor, enquanto lutam para se manter otimistas e fortes um para o outro.",
  },
  [7]: {
    name: "Antes que eu vá",
    src: "https://www.youtube.com/embed/I0-xVnvRvkM",
    direction: "<span>Direção: </span> Ry Russo-Young",
    cast: "<span>Elenco: </span> Zoey Deutch, Halston Sage, Elena Kampouris, dentre outros.",
    roadmapBy: "<span>Roteiro: </span> Maria Maggenti, Lauren Oliver",
    genre: "<span>Gênero: </span> Romance",
    description:
      "Em Antes que Eu Vá, Samantha Kingston (Zoey Deutch) é uma adolescente que tem tudo o que uma jovem pode desejar na sua idade. Contudo, essa vida perfeita chega a um final abrupto no dia 12 de fevereiro, dia de sua morte. Segundos antes de realmente morrer, ela terá a oportunidade de mudar a sua última semana e, talvez, o seu destino.",
  },
  [8]: {
    name: "Querido John",
    src: "https://www.youtube.com/embed/DXYIsWAoObY",
    direction: "<span>Direção: </span> Lasse Hallström",
    cast: "<span>Elenco: </span> Channing Tatum, Amanda Seyfried, Richard Jenkins, dentre outros.",
    roadmapBy: "<span>Roteiro: </span> Nicholas Sparks, Jamie Linden",
    genre: "<span>Gênero: </span> Romance",
    description:
      "John Tyree (Channing Tatum) é um jovem soldado que está em casa, licenciado. Um dia ele conhece Savannah Curtis (Amanda Seyfried), uma universitária idealista em férias, por quem se apaixona. Eles iniciam um relacionamento, só que logo John precisará retornar ao trabalho. Dentro de um ano ele terminará o serviço militar, quando poderão enfim ficar juntos. Neste período eles trocam diversas cartas, onde cada um conta o que lhe acontece a cada dia.",
  },
  [9]: {
    name: "A Minha Garota Para Sempre",
    src: "https://www.youtube.com/embed/r8UbkFGWvmA",
    direction: "<span>Direção: </span> Bethany Ashton Wolf",
    cast: "<span>Elenco: </span> Alex Roe, Jessica Rothe, Abby Ryder Fortson, dentre outros.",
    roadmapBy: "<span>Roteiro: </span> Bethany Ashton Wolf",
    genre: "<span>Gênero: </span> Romance",
    description:
      "Astro do futebol americano, o quarterback Liam (Alex Roe) estava pronto para se casar com Josie (Jessica Rothe), sua namorada da escola, mas acabou deixando-a no altar para seguir carreira de cantor country. Depois de muitos anos, ele retorna à cidade como um cantor famoso.",
  },
  [10]: {
    name: "Z - A cidade perdida",
    src: "https://www.youtube.com/embed/QHFAn-dIOx4",
    direction: "<span>Direção: </span> James Gray",
    cast: "<span>Elenco: </span> Charlie Hunnam, Sienna Miller, Tom Holland, dentre outros.",
    roadmapBy: "<span>Roteiro: </span> James Gray, David Grann",
    genre: "<span>Gênero: </span> Aventura",
    description:
      "A incrível história real do explorador britânico Percy Fawcett (Charlie Hunnam), que viaja para a Amazônia no século XX e descobre evidências de uma civilização avançada desconhecida que pode ter habitado a região. Depois de ter sido ridicularizado pelo corpo científico que considera as populações indígenas como 'selvagens', Fawcett está determinado a retornar à sua amada selva e provar seu caso.",
  },
  [11]: {
    name: "A Filha Do Rei",
    src: "https://www.youtube.com/embed/PeCEigzOfsc",
    direction: "<span>Direção: </span> Sean McNamara",
    cast: "<span>Elenco: </span> Pierce Brosnan, Kaya Scodelario, William Hurt, dentre outros.",
    roadmapBy: "<span>Roteiro: </span> Vonda McIntyre, James Schamus",
    genre: "<span>Gênero: </span> Aventura",
    description:
      "O rei Luis XIV (Pierce Brosnan) segue obcecado em conseguir sua imortalidade. Para isso, ele manda capturar uma sereia, para roubar sua vida. Mas as coisas se complicam quando a filha ilegítima do rei descobre seus planos e acaba por líderar uma rebelião para salvar a criatura.",
  },
  [12]: {
    name: "Jungle - Protegendo a Selva",
    src: "https://www.youtube.com/embed/7qQ7x_ddNK8",
    direction: "<span>Direção: </span> Chuck Russell",
    cast: "<span>Elenco: </span> Vidyut Jammwal, Lars Kjeldsen, Asha Bhat, Vishwanath Chatterjee, Makrand Deshpande, dentre outros.",
    roadmapBy: "<span>Roteiro: </span> Adam Prince, Chuck Russell,Ritesh Shah",
    genre: "<span>Gênero: </span> Aventura",
    description:
      "Nair administra um santuário de elefantes. Ele terá a ajuda do filho veterinário, que vem passar uns dias no local, para combater os caçadores que querem abater os animais em busca de marfim.",
  },
  [13]: {
    name: "Uma Viagem Extraordinária",
    src: "https://www.youtube.com/embed/0Gaw2MbzbO0",
    direction: "<span>Direção: </span> Jean-Pierre Jeunet",
    cast: "<span>Elenco: </span> Helena Bonham Carter, Robert Maillet, Callum Keith Rennie, dentre outros.",
    roadmapBy: "<span>Roteiro: </span> Reif Larsen, Guillaume Laurant",
    genre: "<span>Gênero: </span> Aventura",
    description:
      "Aos doze anos de idade, T.S. Spivet é um garoto superdotado, apaixonado por cartografia. Quando ele ganha um prêmio científico prestigioso, o garoto decide abandonar sua família em Montana para atravessar sozinho aos Estados Unidos, até chegar a Washington. O único problema é que o júri não sabe que o vencedor ainda é uma criança.",
  },
  [14]: {
    name: "Passagem para Marte",
    src: "https://www.youtube.com/embed/CBJ3IH4ehk8",
    direction: "<span>Direção: </span> Jean-Christophe Jeauffre",
    cast: "<span>Elenco: </span>  Zachary Quinto, Charlotte Rampling, Buzz Aldrin, dentre outros.",
    roadmapBy: "<span>Roteiro: </span> Jean-Christophe Jeauffre",
    genre: "<span>Gênero: </span> Aventura",
    description:
      "Uma expedição da NASA ao Ártico projetada para ser a primeira viagem marciana na Terra torna-se um período de dois anos em uma odisseia épica de aventura humana e sobrevivência.",
  },
};

showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 3000);
}

window.onscroll = function () {
  changeSlides();
};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function changeSlides() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

function openAndCloseModal(number) {
  var modalVisibility = document.getElementById("modal");
  if (number != undefined) {
    document.getElementById("name").innerHTML = selectMovie[number].name;
    document.getElementById("direction").innerHTML =
      selectMovie[number].direction;
    document.getElementById("cast").innerHTML = selectMovie[number].cast;
    document.getElementById("genre").innerHTML = selectMovie[number].genre;
    document.getElementById("movie").src = selectMovie[number].src;
    document.getElementById("description").innerHTML =
      selectMovie[number].description;
    document.getElementById("roadmapBy").innerHTML =
      selectMovie[number].roadmapBy;
  }

  if (modalVisibility.style.display != "block") {
    setTimeout(function () {
      modalVisibility.style.display = "block";
    }, 700);
  } else {
    modalVisibility.style.display = "none";
  }
}
