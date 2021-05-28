<template>
  <div class="masterDiv">
    <div id="carrousel"> 
      <VueSlickCarousel @beforeChange="upadateCurrent" 	 ref="carousel" :arrows="true" v-bind="settings">
        <div class="slide-item"><img :class="{active:current == 0}" :src="require(`@/assets/carrousel-images/1.jpg`)" alt=""></div>
        <div class="slide-item"><img :class="{active:current == 1}" :src="require(`@/assets/carrousel-images/2.jpg`)" alt=""></div>
        <div class="slide-item"><img :class="{active:current == 2}" :src="require(`@/assets/carrousel-images/3.jpg`)" alt=""></div>
        <div class="slide-item"><img :class="{active:current == 3}" :src="require(`@/assets/carrousel-images/4.jpg`)" alt=""></div>
         <template #prevArrow="arrowOption">
          <svg width="16" height="28" viewBox="0 0 16 28" fill="none">
             {{ arrowOption.currentSlide }}/{{ arrowOption.slideCount }}
            <path d="M14.25 26.5L1.75 14L14.25 1.5" stroke="black" stroke-width="2" />
          </svg>
        </template>
        <template #nextArrow="arrowOption">
          <svg width="16" height="28" viewBox="0 0 16 28" fill="none">
            {{ arrowOption.currentSlide }}/{{ arrowOption.slideCount }}
            <path d="M1.75 26.5L14.25 14L1.75 1.5" stroke="black" stroke-width="2" />
          </svg>
        </template>
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

//Script padrão do import
export default {
  name: "Carousel",
  components: { VueSlickCarousel },
  data() {
    return {
      settings: {
        arrows: true,
        centerMode: true,
        infinite: true,
        slidesToShow: 3,
        speed: 500,
        centerPadding: "0px",
        dots: false,
        responsive: [
          {
            breakpoint: 1070,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      },
      current: 0,
    };
  },
  methods:{
    upadateCurrent(antigo,atual){
      this.current = atual;
    }
  }
};
</script>

<style lang="scss" scoped>
.masterDiv{
    min-height: 400px;
    background: linear-gradient(180deg, rgba(14, 23, 66, 0.3318) 0%, rgba(255, 255, 255, 0) 100%), #3DC7B7;
    display: flex;
    align-items: center;
    justify-content: center;
}
#carrousel{
    align-items: center;
    justify-content: center;
    width: 72vw;    
}
.slide-item{
    display: flex !important;
    justify-content: center;
    align-items: center;
}
.slide-item img{
    margin-top: 15px;
    width: 249.63px;
    height: 170px;
    display: flex;
    align-items: center;
    border: 1px solid #ffffff5e;
    border-radius: 10px;
    filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.329));
    transition: 0.5s;
}
svg{
    box-sizing: border-box;
    transition: 0.3s;
}
svg:hover{
  path{
    stroke: white;
  }
}
.active{
  margin: 0px !important;
  width: 302px  !important;
  height: 205px !important;
  animation-iteration-count: initial;
}

@media (max-width: 1200px )
{
  .slide-item img{
    margin-top: 50px ;
    width: 200px ;
    height: 140px;
  }
  .active{
    margin: 15px !important;
  }
}

@media (max-width: 600px)
{
  .active{
    margin-top: 30px !important;
    width: 249px  !important;
    height: 170px !important;
    animation-iteration-count: initial;
  }
}

</style>
