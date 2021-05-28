<template>
  <div class="masterDiv">
      <div id="footer">
          <div class="box">
            <p>Email</p>
            <p>exemplo@compjunior.com.br</p>
          </div>
          <div class="box">
            <p>Telefone</p>
            <p>(35)1234-5678 fulano de tal</p>
          </div>
          <div class="box">
            <p>Redes Sociais</p>
            <div id="social-box">
              <a href="" target="_blank"> <img :src="require('../assets/social-icons/twitter.png')" alt="link do twitter"></a>
              <a href="" target="_blank"> <img :src="require('../assets/social-icons/instagram.png')" alt="link do instagram"></a>
              <a href="" target="_blank"> <img :src="require('../assets/social-icons/facebook.png')" alt="link do facebook"></a>
              <a href="" target="_blank"> <img :src="require('../assets/social-icons/whatsapp.png')" alt="link do whatsapp"></a>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
//Script padrão do import
export default {
  name: "Footer",
};
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

*{
  font-family: 'Poppins', sans-serif;
  color: black;
}
#footer{
  display: flex;
  flex-wrap: wrap;
  background-color: #CCFFFB;
  justify-content: space-around;
  align-items: center;
  min-height: 40vh;
  width: 100%;
  padding-left: 10%;
  padding-right: 10%;
}
.box{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-width: 250px;
  height: 200px;
}
.box p:first-child{
  font-weight: 500;
  font-size: 22px;
  line-height: 33px;
}
.box p:nth-child(2){
  font-size: 15px;
  font-style: normal;
  font-weight: normal;
}
#social-box{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}
#social-box a {
  margin: 7px;
}
#social-box a img{
  height: 30px;
  width: 30px;
  transition: 0.3s;
  filter: brightness(0%);
  transform: translateY(-10px);
}
#social-box a img:hover{
  filter: none;
}
@media (max-width: 945px){
  #footer{
    min-height: 30vh;
  }
  .box:last-child{
    justify-content: flex-start;
    height: 150px;
  }
}
@media (max-width: 624px){
  .box{
    height: 80px !important;
  }
  .box p:nth-child(2){
    transform: translateY(-10px);
  }
  .box:first-child{
    margin-top: 20px;
  }
  .box:last-child{
    margin-bottom: 20px;
  }
}
</style>
