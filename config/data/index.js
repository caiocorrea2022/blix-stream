export const clientName = "Yogalaya";
export const substitleAbout = "Seja bem-vindo ao seu novo aplicativo para praticar Yōga.";
export const clientNameFooter = "YOGALAYA";
export const titleMain = "Yogalaya";
export const subtitleMain = "Yoga para muito além das posturas.";
export const aboutText = "Professor de yoga da linhagem de Krishnamacharya, o sistematizador do Ashtanga Vinyasa Yoga. Caio baseia seu ensino e estudo nos textos clássicos, como Yogasūtra de Patañjali, Haṭhayoga Pradīpikā e Bhagavad Gītā. Também é formado em Swásthya Yoga. Hoje é o idealizador e professor do Yogalaya - A Escola de Yoga do Vida Veda.";
export const aboutTitle = "QUEM EU ESTOU";
export const aboutTitleCategory = "O QUE VOCÊ VAI ENCONTRAR NO APLICATIVO";
export const aboutTitleCourses = "CURSOS DISPONÍVEIS";
export const pricingTitle = "ESCOLHA SEU PLANO";
export const subtitlePlan = "Teste grátis por 7 dias! Planos com renovação automática com opções de pagamento no boleto ou no cartão de crédito, para praticar onde você desejar!";
export const returnUrlCustomerPortal = 'http://localhost:19006/EditProfile';
export const returnDomainZoom = 'http://localhost:19006';

export const faleComigoUrl = 'https://api.whatsapp.com/send?phone=5521995503234';

export const aspectRatioLogoAbout = '4'; // width/height
export const aspectRatioLogoMain = '1.5'; // width/height

export const text_Light = 'Texto-Light.ttf';
export const text_Regular = 'Texto-Regular.ttf';
export const text_Medium = 'Texto-Medium.ttf';
export const text_Bold = 'Texto-Bold.ttf';
export const title_About = 'FontePrincipal.ttf';

export const borderRadiusButtons = '5px'; 

export const planFrequency = [
  { id: "1", frequency: "Mensal" },
  { id: "2", frequency: "Trimestral" },
  { id: "3", frequency: "Semestral" },
  { id: "4", frequency: "Anual" },
];

export const planPrices = [
  //Plano A mensal
  [{price: "R$197,00/mês", priceId: "price_1LCSeDCqHOHg9sSbFrQuJ1WQ"},
  //Plano B mensal
  {price: "R$347,00/mês", priceId: "price_1LCRI1CqHOHg9sSb0dwodBmR"},
  //Plano C mensal
  // {price: "R$/mês", priceId: ""}
],

  //Plano A trimestral à vista (mensal)
  [{price: "R$547,00/trimestre", priceId: "price_1LGTC8CqHOHg9sSbXplunbD4"},
  //Plano B trimestral à vista (mensal)
  {price: "R$947,00/trimestre", priceId: "price_1LGSu7CqHOHg9sSbWw1smBa2"},
  //Plano C trimestral à vista (mensal)
  // {price: "R$/trimestre", priceId: ""}
],

  //Plano A semestral à vista (mensal)
  [{price: "R$1.097,00/semestre", priceId: "price_1LGTEjCqHOHg9sSbf4adVyEv"}, 
  //Plano B semestral à vista (mensal)
  {price: "R$1.897,00/semestre", priceId: "price_1LGSx9CqHOHg9sSbaFCSd2AA"},
  //Plano C semestral à vista (mensal)
  // {price: "R$/semestre", priceId: ""}
],

  //Plano A anual à vista (mensal)
  [{price: "R$1.979,00/ano", priceId: "price_1LGTGZCqHOHg9sSbHCfrXesK"}, 
  //Plano B anual à vista (mensal)
  {price: "R$3.497,00/ano", priceId: "price_1LGSzCCqHOHg9sSbaqiTvIaO"},
  //Plano C anual à vista (mensal)
  // {price: "R$/ano", priceId: ""}
],
];

export const upsellPrices = [
  ["", "", ""],
  [
    //Plano A trimestral parcelado (mensal)
    "ou 3x de R$193/mês",
    //Plano B trimestral parcelado (mensal)
    "ou 3x de R$329,66/mês",
    //Plano C trimestral parcelado (mensal)
    // "ou R$/mês por 3 meses",
  ],
  [
    //Plano A semestral parcelado (mensal)
    "ou 6x de R$189,83/mês",
    //Plano B semestral parcelado (mensal)
    "ou 6x R$329,83/mês",
    //Plano C semestral parcelado (mensal)
    // "ou R$/mês por 6 meses",
  ],
  [
    //Plano A anual parcelado (mensal)
    "ou 12x de R$166,41/mês",
    //Plano B anual parcelado (mensal)
    "ou 12x de R$299,91/mês",
    //Plano C anual parcelado (mensal)
    // "ou R$/mês por 12 meses",
  ],
];

export const planInfos = [
  {
    id: 1,
    planType: "PLANO BÁSICO",
    info: [
      "- +Aulas Práticas nível Básico\n\n- Aulas de Cultura e Mitologia Hindu\n\n- Aulas de Respiração e Alongamento"
    ],
  },
  {
    id: 2,
    planType: "PLANO COMPLETO",
    info: [
      "- Aulas Práticas nível Básico\n\n- Aulas Práticas nível Intermediário\n\n- Aulas Práticas nível Avançado\n\n- Aulas de Cultura e Mitologia Hindu\n\n- Aulas sobre os Livros Clássicos do Yoga\n\n- Aulas de Meditação\n\n- Aulas de Respiração e Alongamento"
    ],
  },
  // {
  //   id:3,
  //   planType: "",
  //   info: [
  //     "",
  //   ],
  // },
];

const nomeFornecedor = "Blix";

const clausula5_4 = "5.4. O Fornecedor do Serviço e o Cliente poderão ajustar valores e qualidades de fornecimento, com adesão a Planos (exemplificativamente) anuais, trimestrais ou mensais.";
const clausula5_5 = "5.5. O pagamento será realizado pelo cliente, por meio de link ou Boleto disponibilizado pelo Fornecedor do Serviço.";
const clausula5_6 = "5.6. O não pagamento da primeira parcela ajustada será entendido como cancelamento automático da contratação e restabelecerá as partes ao seu status original;";
const clausula5_7 = "5.7. O não pagamento de parcelas previamente ajustadas, após a contratação, constituirá o inadimplente, imediatamente em mora e acarretará no cancelamento imediato do serviço;";
const clausula5_8 = "5.8. O Cliente declara estar ciente de que, em nenhuma hipótese, haverá devolução do valor pago antecipadamente.";
const clausula5_9_1 = "5.9.1 O Fornecedor se resguarda, em caso de inadimplemento pelo Cliente, ao direito de suspender, interromper, cancelar ou inviabilizar, de qualquer forma, a utilização do serviço.";
const clausula5_9_2 = "5.9.2 Os valores inadimplidos serão atualizados, até seu pagamento mediante correção monetária e incidência de juros legais.";

export const privacyData = [
  {
    subtitle: "1. OBJETO (ESCOPO DO SERVIÇO)",
    paragraphs: [
      {
        text: `1.1. Os presentes Termos e Condições de Uso são aplicáveis a todos os Usuários (Clientes) dos serviços de mídia on-line e distribuição de conteúdo fornecido por ${nomeFornecedor}, por meio de APP mobile, web site e streaming voltado para a prática de Yoga.`,
      },
      {
        text: "1.2. Trata-se de um acordo legal entre o Fornecedor do Serviço e seus clientes, que vincula as partes e tem, para todos os fins, força de contrato. Assim, nos termos aqui delineados, estabelecem-se os direitos e deveres que devem ser observados antes, durante e após a relação comercial;",
      },
      {
        text: "1.3. Para que possa utilizar quaisquer dos serviços disponibilizados, o Cliente declara expressamente ter lido, compreendido e anuído com todos os termos e condições aqui estabelecidos.",
      },
      {
        text: "1.4. É importante considerar, também, que o conteúdo dos presentes termos pode ser modificado periodicamente, visando ao aperfeiçoamento do serviço. Caberá, assim, ao Cliente revisar as politicas de forma regular, as quais serão, em todos os casos, sempre publicitadas da forma usual.",
      },
    ],
  },
  {
    subtitle:
      "2. UTILIZAÇÃO DO SERVIÇO",
    paragraphs: [
      {
        text: "2.1. Os Clientes que utilizarem de qualquer forma os serviços devem ter, pelo menos, 18 (dezoito) anos de idade.",
      },
      {
        text: "2.2. O Fornecedor do Serviço não exige que os acessos, pelos Clientes, sejam realizados em qualquer local específico. Ao acessar os Serviços, o Cliente é o único responsável pelo cumprimento das leis e regulamentos do local de sua jurisdição.",
      },
      {
        text: "2.3. Os Serviços podem e devem ser utilizados unicamente para fins legais, relacionados ao streaming e compartilhamento de conteúdo didático da prática de Yoga. É expressamente vedado qualquer uso do material compartilhado, para quaisquer outros fins que não aqueles formalizados nos presentes Termos de Uso.",
      },
      {
        text: "2.4. Será concedida ao Cliente, pelo Fornecedor, uma licença limitada e não exclusiva para acessar e utilizar os serviços ou o conteúdo digital para seus próprios fins pessoais e, nunca, comerciais. Nisso está incluído o direito de visualizar o conteúdo disponibilizado no web site ou no APP.",
      },
      {
        text: "2.5. O Cliente é o único responsável por decidir se os serviços oferecidos são adequados para seus próprios fins, se atendem às suas necessidades e por, eventualmente, solicitar o cancelamento, desde que respeitados os ajustes de preço e obrigações estabelecidas com o Fornecedor.",
      },
      {
        text: "2.6. O Cliente não pode violar ou tentar violar a segurança do Serviço, incluindo, de forma exemplificativa, sem limitação, (i) acessar dados a ele não destinados ou logar em servidor ou conta não autorizada; (ii) verificar ou testar a vulnerabilidade do sistema ou rede ou, de qualquer forma, violar medidas de segurança ou autenticação; (iii) utilizar-se de robôs, tentar ou prejudicar o serviço por disseminação de vírus, sobrecarga, “inundação”, “spam”, “mailbombing” ou “travamento” ou qualquer prática similar.",
      },
      {
        text: "2.7. Eventuais violações da segurança ou conduta inadequada poderão resultar em responsabilização civil ou criminal.",
      },
    ],
  },
  {
    subtitle:
      "3. DADOS PESSOAIS E POLÍTICAS DE PRIVACIDADE",
    paragraphs: [
      {
        text: "3.1. O Cliente é o responsável pelas informações pessoais inseridas ou utilizadas para a contratação dos serviços. Com a disponibilização destas informações, será outorgado, automaticamente, o consentimento expresso para o tratamento de seus dados pelo fornecedor dos serviços e seus parceiros, desde que dentro do escopo e finalidades formalizadas nos presentes Termos de Uso.",
      },
      {
        text: "3.2. O Fornecedor do Serviço se reserva ao direito de decidir se as informações inseridas pelos Clientes são apropriadas/adequadas e estão em conformidade com os Termos de Uso, suas políticas, as políticas do desenvolvedor, leis e regulamentos aplicáveis.",
      },
      {
        text: "3.3. Ao Cliente será exigido forneça certas informações, como (exemplificativamente) nome, data de nascimento e endereço de e-mail válido. Essas informações necessitam ser fidedignas	 e mantidas atualizadas.",
      },
      {
        text: "3.4. O Cliente é responsável por manter a confidencialidade de seus dados de acesso, incluindo nome de usuário e senha.",
      },
      {
        text: "3.5. O cliente se responsabiliza, integralmente, pelo uso indevido de seus dados de acesso decorrente de desídia, fornecimento (consciente ou não) ou qualquer forma de não atendimento à cláusula anterior.",
      },
      {
        text: "3.6. Se ocorrer qualquer suspeita de que outra pessoa está utilizando indevidamente a sua conta, o Cliente deve, imediatamente, buscar reestabelecer uma senha segura ou, sendo o caso, comunicar o Fornecedor dos serviços, para as medidas necessárias.",
      },
      {
        text: "3.7. O Cliente consente em receber comunicações eletrônicas do Fornecedor, incluindo e-mails, mensagens por aplicativos de conversa, telefone, marketing, transações e outras informações relacionadas aos Serviços e à sua conta.",
      },
    ],
  },
  {
    subtitle:
      "4. RESPONSABILIDADES DE FORNECIMENTO (responsabilidades do Fornecedor)",
    paragraphs: [
      {
        text: "4.1. O Fornecedor do serviço deverá disponibilizar o acesso ao ambiente virtual das aulas online de Yoga por meio de login e senha, gerados após confirmação do cumprimento dos pré-requisitos por parte do Cliente.",
      },
      {
        text: "4.2. O acesso ao Serviço funcionará normalmente 24 horas por dia e 07 dias por semana.  Podem ocorrer pequenas interrupções de forma temporária para ajustes, manutenção, alteração de servidores, falhas operacionais ou em razão de força maior.",
      },
      {
        text: "4.3. O Fornecedor realizará os melhores esforços e iniciativas para manter os serviços em operação sem interrupções, nos termos acima referidos. Não obstante, nenhuma hipótese garante a disponibilidade e continuidade permanente do serviço. Eventuais indisponibilidades ou a descontinuação permanente do Serviço não geram qualquer direito de indenização ao Cliente, salvo aquelas relacionadas a valores pagos de forma antecipada, nos termos ajustados entre os contratantes.",
      },
      {
        text: "4.3. O Fornecedor realizará os melhores esforços e iniciativas para manter os serviços em operação sem interrupções, nos termos acima referidos. Não obstante, nenhuma hipótese garante a disponibilidade e continuidade permanente do serviço. Eventuais indisponibilidades ou a descontinuação permanente do Serviço não geram qualquer direito de indenização ao Cliente, salvo aquelas relacionadas a valores pagos de forma antecipada, nos termos ajustados entre os contratantes.",
      },
      {
        text: "4.4. Considerando a existência de variáveis​​, como velocidade de conexão e download, localização, etc., o Fornecedor não garante a resolução e qualidade do conteúdo digital durante qualquer transmissão.",
      },
    ],
  },
  {
    subtitle: "5. ASSINATURAS, CANCELAMENTOS, PAGAMENTOS E COBRANÇAS",
    paragraphs: [
      {
        text: "5.1. Ao adquirir um plano de pagamento ou serviço, o Cliente concorda expressamente em relação à cobrança em conformidade com o plano selecionado e modo/tempo de pagamento designado.",
      },
      {
        text: "5.2. Os recibos serão enviados assim que a cobrança for bem-sucedida na conta de e-mail registrada. A assinatura continuará em vigor, a menos que o Cliente a cancele, encerre sua conta ou se torne inadimplente.",
      },
      {
        text: "5.3. Cabe ao Cliente cancelar, formalmente, sua assinatura, antes da próxima cobrança para evitar o faturamento.",
      },
      {
        text: `${clausula5_4}`,
      },
      {
        text: `${clausula5_5}`,
      },
      {
        text: `${clausula5_6}`,
      },
      {
        text: `${clausula5_7}`,
      },
      {
        text: `${clausula5_8}`,
      },
      {
        text: `${clausula5_9_1}`,
      },
      {
        text: `${clausula5_9_2}`,
      },
    ],
  },
  {
    subtitle: "6. DECLARAÇÃO DE CIÊNCIA E RESPONSABILIDADES EXPRESSAS DO CLIENTE",
    paragraphs: [
      {
        text: "6.1. Para realização de qualquer atividade física, incluindo aquelas que são escopo do presente Serviço (prática de Yoga), é necessário que o Cliente realize as devidas consultas médicas com antecedência, para verificar se está apto ou não para a execução das atividades;",
      },
      {
        text: "6.2. Tal precaução é necessária a TODOS OS CLIENTES, mas, em especial, àqueles com deficiências de qualquer natureza (físicas, motoras ou mentais) ou, ainda, com histórico de doenças preexistentes ou lesões de qualquer natureza.",
      },
      {
        text: "6.3. Ao aderir aos presentes Termos de uso, o Cliente atesta, reconhece e declara que está física e mentalmente apto à prática de exercícios físicos, isentando o Fornecedor de qualquer responsabilidade relacionada a lesões ou danos de toda espécie ocorridos pela pratica de atividade de Yoga.",
      },
      {
        text: "6.4. O cliente deverá informar ao Fornecedor do Serviço, de forma prévia, a existência de qualquer problema de saúde ou contraindicação médica.",
      },
      {
        text: "6.5. Antes de iniciar a prática da Yoga ou contratar o Serviço oferecido pelo Fornecedor, o Cliente deve, além da consulta médica, ter ciência e respeitar suas limitações de qualquer natureza, assim como, de suas condições pessoais, relacionadas a peso, altura, estilo de vida, sedentarismo e hábitos de qualquer espécie",
      },
      {
        text: "6.6. Também é necessário ao cliente que pesquise previamente quanto aos diferentes métodos existentes relacionados à prática de Yoga e qual melhor se aplica a si, que avalie conscientemente a expectativa do que almeja e é possível ser buscado como resultado.",
      },
      {
        text: "6.7. Os serviços oferecidos não se destinam ou confundem, de forma alguma, como aconselhamento médico ou como substituto de tratamento médico.",
      },
      {
        text: "6.8. O Fornecedor do Serviço não será responsável, de forma alguma, por qualquer resultado não atingido pelo Cliente. A responsabilidade do Fornecedor consiste, unicamente, na prestação de informações, aulas, instruções e orientações de seu método, de forma online.",
      },
      {
        text: "6.9. O Cliente é responsável em relação aos equipamentos e software necessários para utilização do serviço, seguindo os requisitos exigidos e com acesso à internet. Também é responsável por todo o equipamento necessário, incluindo roupas, tapete, etc. e pela segurança e adequação do ambiente físico no qual realizará a prática;",
      },
    ],
  },
  {
    subtitle: "7. PROPRIEDADE INTELECTUAL",
    paragraphs: [
      {
        text: `7.1. A ${nomeFornecedor} e quaisquer outras marcas ou nomes comerciais e quaisquer variações dos mesmos, são e devem permanecer como propriedades exclusivas do Fornecedor, sendo proibido qualquer uso não autorizado.`,
      },
      {
        text: "7.2. O Cliente não pode vender ou modificar o conteúdo dos Serviços ou mídia/material didático disponibilizado, sendo também vedada a reprodução, execução e exibição pública, assim como a distribuição ou utilização dos Serviços de qualquer forma ou para qualquer finalidade, que não aquela estabelecida nos presentes termos de Uso.",
      },
      {
        text: "7.3. O Cliente concorda, expressamente, que o Fornecedor possui, detém e retém todos os direitos sobre os Serviços oferecidos, sendo o conteúdo de propriedade e controle exclusivo do fornecedor.",
      },
      {
        text: "7.4. Todo o material disponibilizado é protegido por direitos autorais, marcas comerciais e outras propriedades intelectuais comuns e estatutárias e legais.",
      },
    ],
  },
  {
    subtitle:
      "8. ISENÇÕES DE RESPONSABILIDADE DA EMPRESA DESENVOLVEDORA",
    paragraphs: [
      {
        text: "8.1. O serviço será viabilizado, pelo Fornecedor, pela sua contratação própria e sem transferência de obrigações ao Cliente, do software/plataforma adequadas, perante a empresa Desenvolvedora.",
      },
      {
        text: "8.2. Em relação ao presente serviço, a desenvolvedora do software é a BLIX SOLUÇÕES EM TECNOLOGIA, inscrita no CNPJ/MF sob o n° 43.589.960/0001-41.",
      },
      {
        text: "8.3. A relação estabelecida entre o Fornecedor do serviço e a empresa Desenvolvedora é simplesmente comercial, de contratação de serviços com Termos de Uso específicos. Não são, entre si, empregados, associados, subcontratados representantes, fiadores, seguradores ou garantidores uma da outra.",
      },
      {
        text: "8.4. A empresa Desenvolvedora não será, em qualquer hipótese, responsável pelo relacionamento comercial ou de prestação de serviços mantido entre Fornecedores dos serviços e seus Clientes. Apenas o Fornecedor e nunca a Desenvolvedora será responsável por cumprir as obrigações inerentes à relação comercial mantida com seus clientes, incluindo sem limitação, todos os danos, prejuízos, acidentes e ocorrências na prestação dos serviços.",
      },
      {
        text: "8.5. A empresa Desenvolvedora não é prestadora dos serviços de aulas online ou disponibilizar qualquer conteúdo didático. Tais serviços são prestados pelos Fornecedores de forma independente e autônoma. Nesses termos, a desenvolvedora não garante nem se responsabiliza quanto à qualidade da prestação dos serviços prestados pelo Fornecedor aos seus Clientes, do material divulgado ou problemas oriundos de demora ou de má prestação.",
      },
    ],
  },
  {
    subtitle: "9. CONDIÇÕES GERAIS",
    paragraphs: [
      {
        text: "9.1. Os serviços serão fornecidos “tal como estão”, sem garantia de qualquer tipo.",
      },
      {
        text: "9.2 Fornecedor e Consumidor isentam-se quanto a quaisquer garantias e condições relativas aos serviços, expressas ou implícitas, incluindo condições de comercialização, de qualidade satisfatória ou adequação a um propósito específico;",
      },
      {
        text: "9.3. O Fornecedor do serviço não garante que estes atenderão aos requisitos do Cliente ou serão benéficos, que a prestação dos serviços será ininterrupta ou sem erros.",
      },
      {
        text: "9.4. A transmissão de dados ou informações pela internet ou em outras redes publicamente acessíveis nunca pode ser considerada 100% segura e está sujeita a perdas, intercepção, alterações ou divulgações indevidas. Assim, o fornecedor não assume qualquer responsabilidade por quaisquer danos que os Clientes possam sofrer em decorrência de qualquer transmissão na internet ou rede publicamente acessível.",
      },
      {
        text: "Como condição de participação e contratação do serviço, o Cliente declara que leu e compreendeu os presentes TERMOS na íntegra, assumindo responsabilidade exclusiva pela prática on-line das aulas e demais disposições ajustadas.",
      },
    ],
  },
];


export const categoriesInfo = [
  {
    title: "Fundamentos e Dicas",
    infos: "Nessa área você encontra os fundamentos para entender como aplicar técnicas simples que trarão maior qualidade de vida e consciência física, mental e emocional.",
    image: require("./../../assets/FotoCategoria1.jpg"),
  },
  {
    title: "Aulas Práticas",
    infos: "As aulas práticas são o momento de experimentar o que o conhecimento do yoga nos oferece. Por meio de técnicas milenares como āsanas (técnicas corporais), prāṇāyāmas (técnicas de respiração) e meditação.",
    image: require("./../../assets/FotoCategoria2.jpg"),
  },
  {
    title: "Aulas Teóricas",
    infos: "A teoria é fundamental para que consigamos levar a prática para níveis muito mais profundos. Aqui estudamos a cultura em que surgiu o Yoga e os livros clássicos que baseiam todo esse conhecimento transformador.",
    image: require("./../../assets/FotoCategoria3.jpg"),
  },
  {
    title: "Respiração e Alongamento",
    infos: "Nessa área você encontra práticas rápidas para utilizar em qualquer lugar e momento do seu dia. Uma pausa revigorante na sua rotina de trabalho, um instante para cuidar do seu corpo, um momento para trazer mais estabilidade para os seus pensamentos.",
    image: require("./../../assets/FotoCategoria4.jpg"),
  },
  {
    title: "Meditação",
    infos: "A meditação é uma prática milenar incrível para aumentar o foco, a concentração e a atenção. Além disso tem a potência de nos levar para estados mais expandidos de consciência e nos trazer mais autoconhecimento.",
    image: require("./../../assets/FotoCategoria5.jpg"),
  },
  // {
  //   title: "Jornadas",
  //   infos: "Lorem ipsum dolor sit amet. Qui harum quos est illum quasi et itaque veritatis et error repellat sit quam cumque. Aut numquam corporis non iste!",
  //   image: require("./../../assets/FotoCategoria6.jpg"),
  // },
  // {
  //   title: "Hath Yoga",
  //   infos: "Lorem ipsum dolor sit amet. Qui harum quos est illum quasi et itaque veritatis et error repellat sit quam cumque. Aut numquam corporis non iste assumenda aut impedit deserunt in officia libero eos.",
  //   image: require("./../../assets/FotoCategoria1.jpg"),
  // },
  // {
  //   title: "Meditações",
  //   infos: "lit repudiandae et atque praesentium.",
  //   image: require("./../../assets/FotoCategoria2.jpg"),
  // },
  // {
  //   title: "Aulas ao Vivo",
  //   infos: "Lorem ipsum dolor sit amet. Qui harum quos est illum quasi et itaque veritatis et error repellat sit quam cumque. Aut numquam corporis non iste assumenda aut impedit!",
  //   image: require("./../../assets/FotoCategoria3.jpg"),
  // },
  // {
  //   title: "Tutoriais",
  //   infos: "Lorem ipsum dolor sit amet. Qui harum quos est illum quasi et itaque veritatis et error repellat sit quam cumque. Aut numquam corporis non iste assumend.",
  //   image: require("./../../assets/FotoCategoria4.jpg"),
  // },
  // {
  //   title: "Relaxamento",
  //   infos: "lit repudiandae et atque praesentium.",
  //   image: require("./../../assets/FotoCategoria5.jpg"),
  // },
  // {
  //   title: "Jornadas",
  //   infos: "Lorem ipsum dolor sit amet. Qui harum quos est illum quasi et itaque veritatis et error repellat sit quam cumque. Aut numquam corporis non iste!",
  //   image: require("./../../assets/FotoCategoria6.jpg"),
  // },
];

export const footerSocialData = [
  {
    type: "material-community",
    name: "instagram",
    link: "https://www.instagram.com/vidaveda.yoga/",
  },
  // {
  //   type: "material-community",
  //   name: "youtube",
  //   link: "https://www.youtube.com",
  // },

   {
     type: "material-community",
     name: "whatsapp",
     link: "https://api.whatsapp.com/send?phone=5521995503234",
   },
];