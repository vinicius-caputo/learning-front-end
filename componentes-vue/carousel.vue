<template>
  <section>
    <div class="box">
      <div id="carrousel">
        <img class="titulo1"
          :src="require(`@/assets/carousel-images/${images_props[actual].image}`)"
        />
        <a v-on:click="changeImage('left')" href="#" id="left">&#60;</a> 
        <a v-on:click="changeImage('rigth')" href="#" id="rigth">&#62;</a> 
      </div>
      <div id="dots"> 
        <span id="1dot">. </span> 
        <span id="2dot">. </span> 
        <span id="3dot">. </span> 
        <span id="4dot">. </span>
        <span id="5dot">. </span> 
        <span id="6dot">. </span> 
      </div>
    </div>
    <div class="box">
        <h1 v-show="show[1]" class="titulo">{{ images_props[1].title }}</h1>
        <h1 v-show="show[2]" class="titulo">{{ images_props[2].title }}</h1>
        <h1 v-show="show[3]" class="titulo">{{ images_props[3].title }}</h1>
        <h1 v-show="show[4]" class="titulo">{{ images_props[4].title }}</h1>
        <h1 v-show="show[5]" class="titulo">{{ images_props[5].title }}</h1>
        <h1 v-show="show[6]" class="titulo">{{ images_props[6].title }}</h1>
        <p v-show="show[1]" class="titulo"> {{lore}}</p>
        <p v-show="show[2]" class="titulo"> {{lore}}</p>
        <p v-show="show[3]" class="titulo"> {{lore}}</p>
        <p v-show="show[4]" class="titulo"> {{lore}}</p>
        <p v-show="show[5]" class="titulo"> {{lore}}</p>
        <p v-show="show[6]" class="titulo"> {{lore}}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "carousel",
  data() {
    return {
      lore:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quaerat alias natus illum nulla, quidem minus! Earum rerum nisi aspernatur architecto laborum sint cum corporis eos facilis qui, labore repellendus?",
      show: [false,true,false,false,false,false,false],
      actual: 1,
      images_props: [
        {
          title: "titulo 1",
          image: "1.jpg",
          id: "1dot",
        },
        {
          title: "titulo 1",
          image: "1.jpg",
          id: "1dot",
        },
        {
          title: "titulo 2",
          image: "2.jpg",
          id: "2dot",
        },
        {
          title: "titulo 3",
          image: "3.jpg",
          id: "3dot",
        },
        {
          title: "titulo 4",
          image: "4.jpg",
          id: "4dot",
        },
        {
          title: "titulo 5",
          image: "5.jpg",
          id: "5dot",
        },
        {
          title: "titulo 6",
          image: "6.jpg",
          id: "6dot",
          
        },
      ],
    };
  },
  methods: {
    changeImage(direction) {
      this.changeToWhite(this.images_props[this.actual].id);
      if (direction == "rigth") {
        this.actual += 1;
        if (this.actual == 7) {
          this.actual = 1; 
        }

      } else {
        this.actual -= 1;
        if (this.actual == 0) {
          this.actual = 6; 
        }
      }
      this.changeToPurple(this.images_props[this.actual].id)
    },
    changeToWhite(id){
      this.show[this.actual]= false;
      document.getElementById(id).style.color = 'white';
    },
    changeToPurple(id){
      this.show[this.actual]= true;
      document.getElementById(id).style.color = 'purple';
    }
  },
};
</script>
<style lang="scss" scoped>
section {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  min-height: 100vh;
  background: linear-gradient(0deg, #232527, #2a0042);
}

.box {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 550px;
  height: 500px;
  //box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.2),
  //  -5px -5px 15px rgba(255, 255, 255, 0.2), 5px 5px 15px rgba(0, 0, 0, 0.3),
  //  5px 5px 15px rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  margin: 30px;
  box-sizing: border-box;
}

.box #carrousel {
  display: flex;
  width: 550px;
  height: 450px;
  border-radius: 15px;
  box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.2),
    -5px -5px 15px rgba(255, 255, 255, 0.2), 5px 5px 15px rgba(0, 0, 0, 0.3),
    5px 5px 15px rgba(255, 255, 255, 0.2);
  box-sizing: border-box;
}

.box #carrousel a {
  -webkit-text-stroke-width: 1px; /* largura da borda */
  -webkit-text-stroke-color: rgba(0, 0, 0, 0.4);
  color: rgba(255, 255, 255, 0.4);
  font-size: 3em;
  transition: 0.3s;
}
.box #carrousel a:hover {
  -webkit-text-stroke-color: rgb(0, 0, 0);
  transform: translateY(-3px);
  color: white;
  font-size: 3.3em;
  text-decoration: none;
}

.box #carrousel #left {
  position: absolute;
  left: 5px;
  top: 190px;
}
.box #carrousel #rigth {
  position: absolute;
  right: 5px;
  top: 190px;
}
.box #carrousel img {
  border-radius: 15px;
  width: 550px;
  height: 450px;
}
.box #dots {
  width: 550px;
  height: 50px;
  font-size: 30px;
  color: whitesmoke;
}
.box:nth-child(2) {
  display: flex;
  align-items: center;
  justify-content: center;
  color: whitesmoke;
}
.box h1 {
  flex: 0.4;
  font-size: 50px;
  margin-top: 70px;
}
.box p {
  flex: 1;
  font-size: 20px;
}

.titulo{
    animation: fadein1 2s;
    animation-iteration-count: initial;
}
@keyframes fadein1{
    from {opacity: 0;}
    to {opacity: 1;}
}

.titulo{
    animation: fadein1 2s;
    animation-iteration-count: initial;
}
@keyframes fadein1{
    from {opacity: 0;}
    to {opacity: 1;}
}



</style>
