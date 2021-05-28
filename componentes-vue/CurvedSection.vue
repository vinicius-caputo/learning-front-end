<template>
  <div class="masterDiv">
    <svg viewBox="0 0 1440 86" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 37.2048C538 -84.6441 956 140.818 1440 37.2048V86H0V37.2048Z" fill="url(#paint0_linear)"/>
      <defs>
      <linearGradient id="paint0_linear" x1="720" y1="6.10352e-05" x2="720" y2="86" gradientUnits="userSpaceOnUse">
      <stop stop-color="#225154"/>
      <stop offset="1" stop-color="#2B868C"/>
      </linearGradient>
      </defs>
    </svg>
    <section>
        <div class="box">
          <img :src="require('../assets/curved-section/visao.png')" alt="icone com um olho">
          <h2>Nossa Visão</h2>
          <p>Ser a maior plataforma de acessibilidade a surdos e deficientes auditivos.</p>
        </div>
        <div class="box">
          <img :src="require('../assets/curved-section/missao.png')" alt="icone com um alvo e uma flexa no meio">
          <h2>Nossa Missão</h2>
          <p>Facilitar através das libras o acesso a conteúdos educativos online.</p>
      </div>
        <div class="box">
          <img :src="require('../assets/curved-section/valores.png')" alt="icone com duas mãos segurando um coração">
          <h2>Nossos Valores</h2>
          <p>Qualidade, diversidade, inovação, superação,  e respeito a vida.</p>
        </div>
    </section>
  </div>
</template>

<script>
//Script padrão do import
export default {
  name: "CurvedSection",
};
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Rosarivo:ital@0;1&display=swap');
*{
  position: relative;
  z-index: 40;
  margin: 0px;
  padding: 0px;
  color: black;
  z-index: 10;
  background-color: transparent;
  
}

.masterDiv{
  position: flex;
  flex-direction: column;
}
svg{
  background-color: transparent;
  width: 100%;
}
section{
  transform: translateY(-5px);
  display: flex;
  flex-wrap: wrap;
  min-height: 80vh;
  width: 100%;
  padding-left: 10%;
  padding-right: 10%;
  background: linear-gradient(180deg, rgba(14, 23, 66, 0.3713) 0%, rgba(255, 255, 255, 0) 100%), #3DC7B7;
  justify-content: space-around;
  align-items: center;
}
section .box{
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 250px;
  height: 400px;
  background-color: transparent;
}
.box img{
  margin-top: 5px;
  width: 225px;
  height: 225px;
  background: transparent;

}
.box h2{
  margin-top: 12px;
  font-family: Roboto Condensed;
  font-style: normal;
  font-weight: normal;
  font-size: 21.6154px;
  line-height: 25px;
  letter-spacing: 0.05em;
  background: transparent;

}
.box p{
  margin-top: 15px;
  font-family: Rosarivo;
  font-style: normal;
  font-weight: normal;
  font-size: 19.1214px;
  line-height: 27px;
  text-align: center;
  background: transparent;

}
.box{
  margin-top: 10px;
}
</style>
