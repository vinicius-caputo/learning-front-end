<template>
  <div class="masterDiv">
     <img :src="require('../assets/HeaderSection/capa.png')" alt="Foto com 3 pessoas" class="pictureHeader">
     <section>
         <div class="box">
             <div id="textBox">
                 <h3>Quer saber como ajudar?</h3>
                 <p>Caso tenha se interessado em ajudar nesta causa também, responda o formulário abaixo com seu nome, seu email e seu nível de experiência em libras, nossa equipe irá analisar seu formulário e entrará em contato com você. Ficaremos muito felizes em ter você conosco.</p>
             </div>
         </div>
         <div class="box">
             <img :src="require(`@/assets/HeaderSection/${image}`)" alt="Foto de capa">
         </div>
    </section> 
  </div>
</template>

<script>
//Script padrão do import
export default {
  name: "HeaderSection",
  props:{
      image: {
      type: String,
      require: true,
    },
  }
};
</script>

<style scoped>
*{
    color: black;
    background: #ECF9F8;
}

.pictureHeader{
    position: relative;
    z-index: 50;
    margin: 0;
    padding: 0;
    top: 50px;
    width: 100%;
    box-sizing: border-box;
    background: transparent;
}

section{
    transform: translateY(-30px);
     background: #ECF9F8;
    display: flex;
    flex-direction: row;
    width: 100%;
    min-height: 100vh;
    
}
.box{
    width: 50%;
    min-height: 100%;
    display: flex;
    text-align: center;
    justify-content: center;
    box-sizing: border-box;
}
#textBox{
    box-sizing: border-box;
    margin-top: 170px !important;
    margin: 15px;
    display: flex;
    text-align: start;
    justify-content: flex-end;
    flex-direction: column;
    height: 400px;
    width: 400px;
    align-content: center;
}
#textBox p{
    margin-top: 20px;
    font-family: Rhodium Libre;
    font-style: normal;
    font-weight: normal;
    font-size: 18.5435px;
    line-height: 35px;
    letter-spacing: 0.15em;
}
#textBox #botao{
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18.5168px;
    line-height: 30px;
    display: inline-flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    border: 1px solid black;
    width: 130px;
    height: 37.84px;
    transition: 0.5s;
    color: black;
    background: transparent;
}
#textBox #botao:hover{
    background-color: #3DC7B7;
}
.box img{
    width: 100%;
    height: 100%;
    z-index: 3;
}
h3{
    font-family: Rhodium Libre;
    font-style: normal;
    font-weight: normal;
    font-size: 25.67px;
    line-height: 39px;
    letter-spacing: 0.15em;
}
@media(max-width: 800px  ){
    
    section{
        flex-direction: column-reverse;
        transform: translateY(-10px) !important;
    }
    .box{
        width: 100vw;
    }
    #textBox{
        margin-top: 20px!important ;
        margin-bottom: 50px;
    }
    #textBox p{
        font-size: 15.5168px;
        line-height: 30px;
    }
}


</style>
