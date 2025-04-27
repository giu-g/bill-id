const decreaseBtn = document.getElementById('decrease-font');
const increaseBtn = document.getElementById('increase-font');
let fontSize = 16;
const minSize = 10;
const maxSize = 24;

function updateFontSize(newSize) {
  fontSize = newSize;
  document.body.style.fontSize = fontSize + 'px';

  decreaseBtn.disabled = fontSize <= minSize;
  increaseBtn.disabled = fontSize >= maxSize;

  decreaseBtn.classList.toggle('disabled', decreaseBtn.disabled);
  increaseBtn.classList.toggle('disabled', increaseBtn.disabled);
}

decreaseBtn.addEventListener('click', () => {
  if (fontSize > minSize) updateFontSize(fontSize - 1);
});

increaseBtn.addEventListener('click', () => {
  if (fontSize < maxSize) updateFontSize(fontSize + 1);
});

updateFontSize(fontSize);

let currentLang = 'en';

const translations = {
  en: {
    title: 'Bill-ID',
    subtitle: 'Empowering the visually impaired',
    description: 'Helping blind and visually impaired Brazilians identify their banknotes with ease and independence.',

    labelfont: 'Font Size:',
    labellanguage: 'Language:',
    colorcontroll: 'Color Scheme:',

    audioDescriptionText: 'Listen to an audio description of the content below.',
    alternativetoaudio: 'Your browser does not support the audio element.',

    whyAccessibilityTitle: 'Why Is Accessibility Important?',
    whyAccessibilityContent1: '<strong>Inclusion is essential.</strong> Tools like <strong>Bill-ID</strong> make everyday tasks, like identifying cash, simple and respectful for people with visual impairments. Our site is built with an <strong>accessibility-first approach</strong> so everyone can browse with ease.',
    whyAccessibilityContent2: 'In Brazil, where <strong>over 6.5 million people</strong> live with some form of visual impairment, something as basic as recognizing money can become a barrier to independence. Although the Central Bank has introduced features like <em>different sizes</em> and <em>tactile markings</em> to distinguish banknotes, these are often <strong>too subtle, hard to remember, or wear out over time</strong>. As a result, many people with visual impairments still depend on others to identify their cash, which threatens their <strong>privacy, independence, and safety</strong>.',
    whyAccessibilityContent3: 'The issue goes beyond design—it is about <strong>equity and dignity</strong>. In a country shaped by profound social and economic disparities, <strong>accessibility is not a luxury—it is a necessity</strong>. People with disabilities, especially in underserved communities, face <strong>multiple layers of exclusion</strong>. For them, accessible tools are key to fully participating in society, <em>managing their finances independently</em>, and protecting themselves from exploitation.',
    whyAccessibilityContent4: "Brazil’s laws, including the <strong>Brazilian Inclusion Law (Lei Brasileira de Inclusão)</strong>, are designed to uphold the rights of people with disabilities, but daily life still falls short of being truly accessible. That is where inclusive technology makes a difference. Tools like <strong>Bill-ID</strong> don’t just fill a technical gap—they uphold people’s <strong>right to live with independence and dignity</strong>.",
    whyAccessibilityContent5: 'By embedding accessibility into our design from the beginning, we’re not just supporting individuals—we’re <strong>building a more equitable and inclusive society</strong>. Because when accessibility comes first, <strong>everyone gains</strong>.',

    howItWorksTitle: 'How Bill-ID Works',
    howItWorksContent: 'The device detects the value of banknotes and announces it aloud. Here’s how it works:',
    howItWorksList1: 'A <strong>sensor</strong> detects the banknote’s color and processes the data.',
    howItWorksList2: 'The <strong>microcontroller</strong> determines the bill’s value.',
    howItWorksList3: 'The <strong>audio player</strong> plays a sound announcing the value (e.g., “Five Dollars”).',
    howItWorksList4: 'The <strong>speaker</strong> outputs the sound so the user hears the bill’s value.',
    howItWorksList5: 'The system is powered by <strong>batteries</strong>, making it portable and user-friendly.',

    noteboxinfo: 'We plan to add a headphone socket in the future, allowing users to hear the audio privately.',

    instructionsTitle: 'Instructions',
    instructionsContent1: 'Press the button to turn the device on or off.',
    instructionsContent2: 'Insert the banknote into the gap between the lens and the protective wall.',
    instructionsContent3: 'Wait a few seconds for the system to recognize the value.',
    instructionsContent4: 'Listen to the announcement through the speaker.',
    instructionsContent5: 'Repeat with other banknotes if needed.',

    contactTitle: 'Contact',
    contactContent: 'Need help? Reach out:',
    email: 'Email: <a href="mailto:support@bill-id.com">support@bill-id.com</a>',
    phone: 'Phone: +55 (XX) XXXXX-XXXX',

    footertitle: 'Bill-ID | Accessible Tech for Everyone',
    footerdescription: 'Making currency recognition easier for all users.',
    footerlink1: 'About',
    footerlink2: 'How It Works',
    footerlink3: 'Contact',
    footercredits: 'Created by Giulia Schiavetto. © 2025 Bill-ID. All rights reserved.',
  },

  pt: {
    title: 'Bill-ID',
    subtitle: 'Empoderando pessoas com deficiência visual',
    description: 'Ajudando brasileiros cegos ou com baixa visão a identificar suas cédulas com facilidade e independência.',

    labelfont: 'Tamanho da fonte:',
    labellanguage: 'Language:',
    colorcontroll: 'Esquema de Cores:',

    audioDescriptionText: 'Ouça uma descrição em áudio do conteúdo abaixo.',
    alternativetoaudio: 'blalba',

    whyAccessibilityTitle: 'Por que a acessibilidade é importante?',
    whyAccessibilityContent1: '<strong>A inclusão importa.</strong> Ferramentas como a <strong>Bill-ID</strong> tornam tarefas do dia a dia, como identificar dinheiro, simples e dignas para pessoas com deficiência visual. Nosso site utiliza um <strong>design com foco em acessibilidade</strong>, permitindo que todos o naveguem com conforto.',
    whyAccessibilityContent2: 'No Brasil, onde <strong>mais de 6,5 milhões de pessoas</strong> vivem com algum tipo de deficiência visual, até mesmo reconhecer o dinheiro pode se tornar uma barreira para a independência. Embora o Banco Central tenha incluído recursos como <em>diferentes tamanhos</em> e <em>marcas táteis</em> para distinguir as cédulas, esses recursos muitas vezes são <strong>sutis demais, difíceis de memorizar ou se desgastam com o tempo</strong>. Como resultado, muitas pessoas cegas ou com baixa visão ainda dependem de outras para confirmar o valor do dinheiro, o que compromete sua <strong>privacidade, autonomia e até segurança</strong>.',
    whyAccessibilityContent3: 'A questão vai além do design—é sobre <strong>equidade e dignidade</strong>. Em um país marcado por profundas desigualdades sociais e econômicas, <strong>acessibilidade não é um luxo—é uma necessidade</strong>. Pessoas com deficiência, especialmente em comunidades com poucos recursos, enfrentam <strong>múltiplas camadas de exclusão</strong>. Para elas, ferramentas acessíveis são essenciais para participar plenamente da sociedade, <em>gerenciar suas finanças de forma independente</em> e reduzir o risco de serem exploradas.',
    whyAccessibilityContent4: 'As leis brasileiras, incluindo a <strong>Lei Brasileira de Inclusão</strong>, visam proteger os direitos das pessoas com deficiência, mas ainda há um longo caminho até que a vida cotidiana seja realmente acessível. É aí que a tecnologia inclusiva entra em cena. Ferramentas como a <strong>Bill-ID</strong> não apenas preenchem uma lacuna técnica—elas reforçam o <strong>direito das pessoas de viver com independência e respeito</strong>.',
    whyAccessibilityContent5: 'Ao incorporar a acessibilidade desde o início do nosso design, não estamos apenas ajudando indivíduos—estamos <strong>fortalecendo uma sociedade mais justa e inclusiva</strong>. Porque quando a acessibilidade é prioridade, <strong>todos se beneficiam</strong>.',

    howItWorksTitle: 'Como o Bill-ID funciona',
    howItWorksContent: 'O dispositivo detecta o valor das cédulas e o anuncia em voz alta. Veja como funciona:',
    howItWorksList1: 'Um <strong>sensor</strong> detecta a cor da cédula e processa os dados.',
    howItWorksList2: 'O <strong>microcontrolador</strong> identifica o valor da nota.',
    howItWorksList3: 'O <strong>reprodutor de áudio</strong> toca um som anunciando o valor (ex.: “Cinco Reais”).',
    howItWorksList4: 'O <strong>alto-falante</strong> reproduz o som, permitindo que o usuário ouça o valor.',
    howItWorksList5: 'O sistema funciona com <strong>baterias</strong>, o que o torna portátil e fácil de usar.',

    noteboxinfo: 'Planejamos adicionar uma entrada para fones de ouvido no futuro, permitindo que os usuários escutem o áudio de forma privada.',

    instructionsTitle: 'Instruções',
    instructionsContent1: 'Pressione o botão para ligar ou desligar o dispositivo.',
    instructionsContent2: 'Insira a cédula na abertura entre a lente e a parede protetora.',
    instructionsContent3: 'Aguarde alguns segundos para que o sistema reconheça o valor.',
    instructionsContent4: 'Ouça o anúncio pelo alto-falante.',
    instructionsContent5: 'Repita com outras cédulas, se necessário.',

    contactTitle: 'Contato',
    contactContent: 'Precisa de ajuda? Fale conosco:',
    email: 'Email: <a href="mailto:support@bill-id.com">support@bill-id.com</a>',
    phone: 'Telefone: +55 (XX) XXXXX-XXXX',

    footertitle: 'Bill-ID | Tecnologia Acessível para Todos',
    footerdescription: 'Facilitando o reconhecimento de cédulas para todos os usuários.',
    footerlink1: 'Sobre',
    footerlink2: 'Como Funciona',
    footerlink3: 'Contato',
    footercredits: 'Criado por Giulia Schiavetto. © 2025 Bill-ID. Todos os direitos reservados.',
  },


  es: {
    title: 'Bill-ID',
    subtitle: 'Empoderando a personas con discapacidad visual',
    description: 'Ayudando a brasileños ciegos o con baja visión a identificar sus billetes con facilidad e independencia.',

    labelfont: 'Tamaño de fuente:',
    labellanguage: 'Language:',
    colorcontroll: 'Esquema de colores:',

    audioDescriptionText: 'Escuche una descripción en audio del contenido a continuación.',
    alternativetoaudio: '',

    whyAccessibilityTitle: '¿Por qué es importante la accesibilidad?',
    whyAccessibilityContent1: '<strong>La inclusión importa.</strong> Herramientas como <strong>Bill-ID</strong> hacen que tareas cotidianas como identificar dinero sean simples y dignas para personas con discapacidad visual. Nuestro sitio utiliza un <strong>diseño centrado en la accesibilidad</strong> para que todos puedan navegarlo con comodidad.',
    whyAccessibilityContent2: 'En Brasil, donde <strong>más de 6,5 millones de personas</strong> viven con algún tipo de discapacidad visual, incluso reconocer el dinero puede convertirse en una barrera para la independencia. Aunque el Banco Central ha incorporado características como <em>diferentes tamaños</em> y <em>marcas táctiles</em> para distinguir los billetes, estas a menudo son <strong>demasiado sutiles, difíciles de memorizar o se desgastan con el tiempo</strong>. Como resultado, muchas personas ciegas o con baja visión aún dependen de otros para confirmar el valor de su dinero, lo que compromete su <strong>privacidad, autonomía e incluso seguridad</strong>.',
    whyAccessibilityContent3: 'El problema no es solo de diseño—se trata de <strong>equidad y dignidad</strong>. En un país marcado por profundas desigualdades sociales y económicas, <strong>la accesibilidad no es un lujo—es una necesidad</strong>. Las personas con discapacidad, especialmente en comunidades con pocos recursos, enfrentan <strong>múltiples capas de exclusión</strong>. Para ellas, las herramientas accesibles son fundamentales para participar plenamente en la sociedad, <em>gestionar sus finanzas de forma independiente</em> y reducir el riesgo de ser aprovechadas.',
    whyAccessibilityContent4: 'Las leyes de Brasil, incluida la <strong>Ley Brasileña de Inclusión (Lei Brasileira de Inclusão)</strong>, buscan proteger los derechos de las personas con discapacidad, pero aún queda mucho por hacer para que la vida diaria sea verdaderamente accesible. Es aquí donde la tecnología inclusiva juega un papel clave. Herramientas como <strong>Bill-ID</strong> no solo cierran una brecha técnica—refuerzan el <strong>derecho de las personas a vivir con independencia y respeto</strong>.',
    whyAccessibilityContent5: 'Al integrar la accesibilidad desde el principio en nuestro diseño, no solo apoyamos a individuos—estamos <strong>fortaleciendo una sociedad más justa e inclusiva</strong>. Porque cuando la accesibilidad es una prioridad, <strong>todos se benefician</strong>.',

    howItWorksTitle: 'Cómo funciona Bill-ID',
    howItWorksContent: 'El dispositivo detecta el valor del billete y lo anuncia en voz alta. Así funciona:',
    howItWorksList1: 'Un <strong>sensor</strong> detecta el color del billete y procesa la información.',
    howItWorksList2: 'El <strong>microcontrolador</strong> identifica el valor del billete.',
    howItWorksList3: 'El <strong>reproductor de audio</strong> reproduce un sonido que anuncia el valor (por ejemplo, “Cinco Dólares”).',
    howItWorksList4: 'El <strong>altavoz</strong> emite el sonido para que el usuario escuche el valor.',
    howItWorksList5: 'El sistema funciona con <strong>baterías</strong>, lo que lo hace portátil y fácil de usar.',

    noteboxinfo: 'Planeamos añadir una entrada para auriculares en el futuro, permitiendo que los usuarios escuchen el audio en privado.',

    instructionsTitle: 'Instrucciones',
    instructionsContent1: 'Presiona el botón para encender o apagar el dispositivo.',
    instructionsContent2: 'Inserta el billete en el espacio entre la lente y la pared protectora.',
    instructionsContent3: 'Espera unos segundos para que el sistema reconozca el valor.',
    instructionsContent4: 'Escucha el anuncio por el altavoz.',
    instructionsContent5: 'Repite con otros billetes si es necesario.',

    contactTitle: 'Contacto',
    contactContent: '¿Necesitas ayuda? Contáctanos:',
    email: 'Correo: <a href="mailto:support@bill-id.com">support@bill-id.com</a>',
    phone: 'Teléfono: +55 (XX) XXXXX-XXXX',

    footertitle: 'Bill-ID | Tecnología Accesible para Todos',
    footerdescription: 'Facilitando el reconocimiento de billetes para todos los usuarios.',
    footerlink1: 'Acerca de',
    footerlink2: 'Cómo Funciona',
    footerlink3: 'Contacto',
    footercredits: 'Creado por Giulia Schiavetto. © 2025 Bill-ID. Todos los derechos reservados.',
  }
};

function switchLang(lang) {
  currentLang = lang;
  const t = translations[lang];
  if (!t) return;

  document.getElementById('title').textContent = t.title;
  document.getElementById('subtitle').textContent = t.subtitle;
  document.getElementById('description').textContent = t.description;
  document.getElementById('labelfont').textContent = t.labelfont;
  document.getElementById('labellanguage').textContent = t.labellanguage;
  document.getElementById('colorcontroll').textContent = t.colorcontroll;
  document.getElementById('audioDescriptionText').textContent = t.audioDescriptionText;
  document.getElementById('alternativetoaudio').textContent = t.alternativetoaudio;
  document.getElementById('whyAccessibilityTitle').textContent = t.whyAccessibilityTitle;
  document.getElementById('whyAccessibilityContent1').innerHTML = t.whyAccessibilityContent1;
  document.getElementById('whyAccessibilityContent2').innerHTML = t.whyAccessibilityContent2;
  document.getElementById('whyAccessibilityContent3').innerHTML = t.whyAccessibilityContent3;
  document.getElementById('whyAccessibilityContent4').innerHTML = t.whyAccessibilityContent4;
  document.getElementById('whyAccessibilityContent5').innerHTML = t.whyAccessibilityContent5;
  document.getElementById('howItWorksTitle').textContent = t.howItWorksTitle;
  document.getElementById('howItWorksContent').textContent = t.howItWorksContent;
  document.getElementById('howItWorksList1').innerHTML = t.howItWorksList1;
  document.getElementById('howItWorksList2').innerHTML = t.howItWorksList2;
  document.getElementById('howItWorksList3').innerHTML = t.howItWorksList3;
  document.getElementById('howItWorksList4').innerHTML = t.howItWorksList4;
  document.getElementById('howItWorksList5').innerHTML = t.howItWorksList5;
  document.getElementById('noteboxinfo').textContent = t.noteboxinfo;
  document.getElementById('instructionsTitle').textContent = t.instructionsTitle;
  document.getElementById('instructionsContent1').innerHTML = t.instructionsContent1;
  document.getElementById('instructionsContent2').innerHTML = t.instructionsContent2;
  document.getElementById('instructionsContent3').innerHTML = t.instructionsContent3;
  document.getElementById('instructionsContent4').innerHTML = t.instructionsContent4;
  document.getElementById('instructionsContent5').innerHTML = t.instructionsContent5;
  document.getElementById('contactTitle').textContent = t.contactTitle;
  document.getElementById('contactContent').textContent = t.contactContent;
  document.getElementById('email').innerHTML = t.email;
  document.getElementById('phone').textContent = t.phone;
  document.getElementById('footertitle').textContent = t.footertitle;
  document.getElementById('footerdescription').textContent = t.footerdescription;
  document.getElementById('footerlink1').textContent = t.footerlink1;
  document.getElementById('footerlink2').textContent = t.footerlink2;
  document.getElementById('footerlink3').textContent = t.footerlink3;
  document.getElementById('footercredits').textContent = t.footercredits;

}

document.addEventListener("DOMContentLoaded", function () {
  const colorPaletteBtn = document.getElementById("color-palette-btn");
  const colorPalette = document.getElementById("color-palette");
  const colorCircles = document.querySelectorAll(".color-circle");

  function setMode(mode) {
    const footer = document.querySelector("footer");

    switch (mode) {
      case "normal":
        document.body.style.filter = "none";
        document.body.style.backgroundColor = "#f9f9f7";
        document.body.style.color = "#111";
        footer.style.backgroundColor = "#eee";
        resetCircles();
        break;
      case "sepia":
        document.body.style.filter = "sepia(1)";
        document.body.style.backgroundColor = "#f4ecd8";
        document.body.style.color = "#5c4f39";
        footer.style.backgroundColor = "#d0b79e";
        resetCircles();
        break;
      case "grayscale":
        document.body.style.filter = "grayscale(1)";
        document.body.style.backgroundColor = "#f9f9f7";
        document.body.style.color = "#111";
        footer.style.backgroundColor = "#c4c4c4";
        resetCircles();
        break;
      case "invert":
        document.body.style.filter = "invert(1) hue-rotate(180deg)";
        document.body.style.backgroundColor = "#111";
        document.body.style.color = "black";
        footer.style.backgroundColor = "gray";
        invertCircles();
        break;
    }

    colorPalette.style.filter = "none";
  }

  function resetCircles() {
    document.getElementById("normal").querySelector(".color-circle").style.backgroundColor = "white";
    document.getElementById("sepia").querySelector(".color-circle").style.background = "linear-gradient(to right, #f4ecd8, #d0b79e)";
    document.getElementById("grayscale").querySelector(".color-circle").style.background = "linear-gradient(to right, #f9f9f7, #c4c4c4)";
    document.getElementById("invert").querySelector(".color-circle").style.background = "linear-gradient(to right, #fff, #000, #ffb6c1, #add8e6)";
  }

  function invertCircles() {
    document.getElementById("normal").querySelector(".color-circle").style.backgroundColor = "black";
    document.getElementById("sepia").querySelector(".color-circle").style.background = "linear-gradient(to right,rgb(101, 101, 42),rgb(250, 226, 160))";
    document.getElementById("grayscale").querySelector(".color-circle").style.background = "linear-gradient(to right,rgb(70, 70, 70),rgb(130, 130, 130))";
    document.getElementById("invert").querySelector(".color-circle").style.background = "to right, #fff, #000, #ffb6c1, #add8e6)";
  }

  colorPaletteBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    const isVisible = colorPalette.style.display === "block";
    colorPalette.style.display = isVisible ? "none" : "block";
  });

  document.addEventListener("click", function () {
    colorPalette.style.display = "none";
  });

  document.getElementById("normal").addEventListener("click", function (e) {
    e.stopPropagation();
    setMode("normal");
    colorPalette.style.display = "none";
  });

  document.getElementById("sepia").addEventListener("click", function (e) {
    e.stopPropagation();
    setMode("sepia");
    colorPalette.style.display = "none";
  });

  document.getElementById("grayscale").addEventListener("click", function (e) {
    e.stopPropagation();
    setMode("grayscale");
    colorPalette.style.display = "none";
  });

  document.getElementById("invert").addEventListener("click", function (e) {
    e.stopPropagation();
    setMode("invert");
    colorPalette.style.display = "none";
  });
});





































function changeAudio(lang) {
  var audio = document.getElementById('audio');
  var track = document.getElementById('track');

  if (lang === 'pt') {
    track.src = './audio/PortugueseVoiceOver.mp3';
  } else if (lang === 'en') {
    track.src = './audio/EnglishVoiceOver.mp3';
  } else if (lang === 'es') {
    track.src = './audio/SpanishVoiceOver.mp3';
  }

  audio.load(); // Reload the audio element with the new source
}
