<template>
 <section>
      <div class="box">
        <img :src="require('../assets/curved-section/sobre.jpg')" alt="">
      </div>
      <div class="box">
        <div class="subBox">
          <h2>Sobre nós</h2>
          <p>A plataforma foi criada em maio de 2021, com o objetivo de unir serviços de qualidade e valores acessíveis em um ambiente acolhedor e confortável, acessível a todos. Visamos o acolhimento das pessoas, através de valores éticos, transparência, inclusão das diferenças, respeito às individualidades e responsabilidade para com cada indivíduo e seu potencial.</p>
        </div>
      </div>
    </section>
</template>

<script>
//Script padrão do import
export default {
  name: "AboutSection",
};
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Rhodium+Libre&display=swap');
*{
  position: relative;
  z-index: 0;
  transform: translateY(10px);
}
section{
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
  width: auto;
}
.box{
  width: 50%;
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ECF9F8;
}

.box img{
  width: 100%;
  min-height: 90vh;
  position: relative;
  z-index: -1;
}
.subBox{
  margin-top:50px ;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 450px;
  height: 450px;
}
h2{
  text-align: start;
  font-family: Rhodium Libre;
  font-style: normal;
  font-weight: normal;
  font-size: 34.67px;
  line-height: 59px;
  letter-spacing: 0.15em;
}
p{
  font-family: Rhodium Libre;
  font-style: normal;
  font-weight: normal;
  font-size: 19px;
  line-height: 35px;
  letter-spacing: 0.15em;
  text-align: start;
  
}
@media(max-width: 1200px ){
    p{
    font-size: 17px;
  }
}
@media(max-width: 1000px ){
  section{
    flex-direction: column;
  }
  .box{
    width: 100%;
  }
  .subBox{
    margin-top: 0px;
    margin-bottom: 20px;
  }
}
@media(max-width: 802px ){
  h2{
    font-size: 28.67px;
  }
  p{
    font-size: 14px;
  }
  .box{
    min-height: 50vh !important;

  }
  .subBox{
    
    margin:25px !important;
    margin-top:0px !important;
    margin-bottom: 55px !important;
  }
  .box img{
    min-height: 50vh !important;
  }
}
@media(max-width: 600px){
  p{
    line-height: 25px;
  }
}
</style>
