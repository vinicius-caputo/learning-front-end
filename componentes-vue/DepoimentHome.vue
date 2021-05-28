<template>
  <div class="masterDiv">
     <section>
         <div class="box">
           <img :src="require('../assets/DepoimentHome/taisa.jpg')" alt="taisa uma mulher deficiente auditiva">
         </div>
         <div class="box">
           <div id="textBox">
                 <p>Sou Taísa, nasci normal mas tive meningite quando criança e fiquei surda. Formei em gestão financeira. Estudei em uma escola especial para surdos, depois estudei em colégio normal onde tive intérpretes. Tive muita dificuldade na minha educação, mas hoje sou formada, tenho um emprego que eu amo, minha casa e minha família. Minha deficiência não me torna menos que ninguém, sou capaz como qualquer um e hoje sou muito realizada.</p>
                 <b-button id="botao" router-link to="/inspire-se"> Veja mais depoimentos como esse</b-button>
             </div>
         </div>
    </section> 
  </div>
</template>

<script>
//Script padrão do import
export default {
  name: "Depoiment",
};
</script>

<style scoped lang="scss">
*{
  color: black;
}
.masterDiv{
  margin: 50px ;
}
section{
    display: flex;
    flex-direction: row;
    width: 100%;
    min-height: 0vh;
    margin-right: 50px ;
}
section .box:first-child{
    width: 43%;
    min-height: 100%;
    display: flex;
    text-align: center;
    justify-content: flex-end;
    align-items: center;
    box-sizing: border-box;
}
section .box:last-child{
    width: 57%;
    min-height: 100%;
    display: flex;
    text-align: center;
    justify-content: center;
    box-sizing: border-box;
    background: #ECF9F8;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
#textBox{
    box-sizing: border-box;
    margin: 50px;
    margin-left: 70px !important;
    display: flex;
    text-align: start;
    justify-content:center;
    flex-direction: column;
    height: 400px;
    width: 500px;
    align-content: center;
}
#textBox p{
    font-family: Rhodium Libre;
    font-style: normal;
    font-weight: normal;
    font-size: 16.5435px;
    line-height: 27px;
    letter-spacing: 0.15em;
}
#textBox #botao{
    margin-top: 20px;
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
    width: 330px;
    height: 37.84px;
    transition: 0.5s;
    color: black;
    background: transparent;
}
#textBox #botao:hover{
    background-color: #3DC7B7;
}
.box img{
  transform: translateX(25px);
  margin-bottom: 30px;
  width: 300px;
  height: 300px;
  border: 1px solid black;
}
@media(max-width: 850px){
  *{
    font-size: 12px  !important;
    line-height: 20px !important;
  }
  .box{
    min-height: 30px;
  }
  #textBox{
     text-align: start;
    height: 300px;
    width: 300px;
  }
  #botao{
    width: 250px  !important;
  }
}
@media(max-width: 550px){
  section{
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
     margin-right: 0px  !important;
  }
  .box{
    margin-top: 10px ;
    width: 100% !important;
    min-height: 300px;
  }
  #textBox{
    margin: 50px  !important;
    height: 300px;
    width: 100vw !important;
  }
  #botao{
    margin-top: 0px !important;
  }
  img{
    transform: translateX(0px) !important;
    margin-bottom: 0px  !important;
  }
  section .box:first-child{
    justify-content:  center !important;

  }
}
</style>
