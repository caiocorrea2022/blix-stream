import lol from '../../assets/yoga-logo.jpg';
import valorant from '../../assets/foto2.jpg';
import csgo from '../../assets/foto1.jpg';
import fortnite from '../../assets/yoga-logo.jpg';
import fallguys from '../../assets/foto2.jpg';
import apex from '../../assets/foto1.jpg';

export default [
  { name: 'League of Legends', source: lol },
  { name: 'VALORANT', source: valorant },
  { name: 'Counter-Strike: Global Offensive', source: csgo },
  { name: 'Fortnite', source: fortnite },
  { name: 'Fall Guys', source: fallguys },
  { name: 'Apex Legends', source: apex },
];

export const planFrequency = [
  { id: "1", frequency: 'Mensal'},
  { id: "2", frequency: 'Trimestral'},
  { id: "3", frequency: 'Semestral'},
  { id: "4", frequency: 'Anual'},
];

export const planPrices = [["R$200,00/mês", "R$220,00/mês", "R$250,00/mês"],["R$400,00/trimestre", "R$420,00/trimestre", "R$450,00/trimestre"],["R$800,00/semestre", "R$820,00/semestre", "R$850,00/semestre"],["R$1200,00/ano", "R$1220,00/ano", "R$1250,00/ano"]];
export const upsellPrices = [["", "", ""],["ou R$150/mês por 3 meses", "ou R$160/mês por 3 meses", "ou R$170/mês por 3 meses"],["ou R$150/mês por 6 meses", "ou R$160/mês por 6 meses", "ou R$170/mês por 6 meses"],["ou R$150/mês por 12 meses", "ou R$160/mês por 12 meses", "ou R$170/mês por 12 meses"]];

export const planInfos = [
  {
    planType: "PLANO A",
    info: ["✔ Meditações guiadas.Meditações guiadas.Meditações guiadas.Meditações guiadas", "✔ +50 Aulas gravadas"]
  },
  {
    planType: "PLANO GANESHA",
    info: ["✔ Tudo do Plano A", "✔ Acesso a aulas ao vivo", "✔ Acesso a +100 Aulas gravadas"]
  },
  {
    planType: "PLANO SHIVA",
    info: ["✔ Tudo do Plano B", "✔ Acesso a aulas ao vivo e Lives", "✔ Acesso à Jornada do Yogi", "✔ Acesso a todos os conteúdos"]
  },
];



