<template>
  <div class="master">
    <img
      src="@/assets/background-image.png"
      alt="Foto de capa"
      class="pictureHeader"
    />
    <div id="titleBox">
      <div class="Box2">
        <h1>Inspire-se</h1>
        <p>
          “Lembre-se de que você mesmo é o melhor secretário de sua tarefa, o
          mais eficiente propagandista de seus ideais, a mais clara demonstração
          de seus princípios, o mais alto padrão do ensino superior que seu
          espírito abraça e a mensagem viva das elevadas noções que você
          transmite aos outros”
        </p>
      </div>
    </div>

    <svg viewBox="0 0 1314 2" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 1H1314" stroke="black" stroke-width="2" />
    </svg>
    <section>
      <div class="box">
        <h2>Samantha da Silva</h2>
        <p>
          Meu nome é Samantha tenho 27 anos e nasci surda. Passei no colegial na
          escola normal, não tinha intérprete, sentava na frente perto dos
          professores, para poder entender com a leitura labial. Hoje sou
          oralizada, e tenho Português como minha segunda língua. Libras é muito
          bom para todos nós, para comunicação principalmente. Hoje trabalho em
          uma empresa grande e tenho um cargo muito bom, consigo me comunicar
          com as pessoas e sou muito feliz aqui.
        </p>
      </div>
      <div class="box">
        <img :src="require('../assets/inspire-se/1.png')" alt="" />
      </div>
    </section>

    <svg viewBox="0 0 1314 2" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 1H1314" stroke="black" stroke-width="2" />
    </svg>
    <section class="reverse">
      <div class="box">
        <h2>Wellerson Santiago</h2>
        <p>
          Eu sou o Wellerson, tenho 23 anos e perdi a audição aos 16 anos. No
          início foi muito difícil para mim, não conseguia aceitar o fato de não
          poder mais ouvir. Fiz implante mas não resolveu meu problema, era
          irreversível. Hoje estou na faculdade, aprendi libras em escola
          especial, mas tinha muita dificuldade em encontrar materiais como
          vídeo aulas online para estudar, pois não tinham legendas. Hoje
          consigo me comunicar bem, estou me graduando em administração. Não
          deixei que minha deficiência me impedisse de evoluir. Hoje eu sou
          muito mais feliz.
        </p>
      </div>
      <div class="box">
        <img :src="require('../assets/inspire-se/2.png')" alt="" />
      </div>
    </section>

    <svg viewBox="0 0 1314 2" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 1H1314" stroke="black" stroke-width="2" />
    </svg>
    <section>
      <div class="box">
        <h2>Alex Sales</h2>
        <p>
          Oi eu sou a Alex, tenho 25 anos e nasci surda. Tenho libras como
          primeira língua e Português como segunda língua. Estudei em colégios
          especiais quando criança, mas na minha adolescência estudei em
          colégios normais. Hoje estou no último período da faculdade, e
          trabalho em uma empresa grande da minha cidade. Minha família toda
          sabe libras, mas eu consigo me comunicar bem com as pessoas. Sou uma
          pessoa realizada, e desejo o mesmo para toda a comunidade surda.
        </p>
      </div>
      <div class="box">
        <img :src="require('../assets/inspire-se/3.png')" alt="" />
      </div>
    </section>

    <svg viewBox="0 0 1314 2" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 1H1314" stroke="black" stroke-width="2" />
    </svg>
    <section class="reverse">
      <div class="box">
        <h2>Saphira de Souza</h2>
        <p>
          Meu nome é Saphira e sou mãe da Bia. Aos 3 meses de vida ela teve uma
          parada respiratória e acreditamos que esse pode ter sido o motivo da
          perda dela. A Ana Beatriz tem perda auditiva mista bilateral. Foi
          difícil no começo, mas hoje lidamos super bem com tudo isso. Hoje ela
          está na terceira série, sabe ler e escrever; estamos nos saindo muito
          bem na parte de alfabetização. Ela é super falante, é difícil entender
          mas nós tentamos!
        </p>
      </div>
      <div class="box">
        <img :src="require('../assets/inspire-se/4.png')" alt="" />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
* {
  background: #f6f4f4;
}
.pictureHeader {
  margin: 0;
  transform: translateY(40px);
  padding: 0;
  width: 100%;
  box-sizing: border-box;
}
#titleBox {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
h1 {
  font-family: Rhodium Libre;
  font-style: normal;
  font-weight: normal;
  font-size: 50.67px;
  line-height: 87px;

  /* identical to box height */
  letter-spacing: 0.15em;
}
#titleBox p {
  font-family: Rhodium Libre;
  font-style: normal;
  font-weight: normal;
  font-size: 23.54px;
  line-height: 40px;
  text-align: center;
  letter-spacing: 0.15em;
}
.Box2 {
  margin-top: 80px;
  width: 1000px;
  height: 400px;
}
svg {
  width: 80%;
  height: 3px;
}
section {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
  width: 100%;
}
.box {
  width: 500px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
h2 {
  font-family: Rhodium Libre;
  font-style: normal;
  font-weight: normal;
  font-size: 24.54px;
  line-height: 42px;

  /* identical to box height */
  letter-spacing: 0.15em;
}
.box p {
  margin-top: 20px;
  font-family: Rhodium Libre;
  font-style: normal;
  font-weight: normal;
  font-size: 17.6787px;
  line-height: 30px;
  text-align: center;
  letter-spacing: 0.15em;
}
img {
  width: 400px;
  height: 400px;
}
.reverse {
  flex-direction: row-reverse;
}


</style>
