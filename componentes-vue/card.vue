<template>
  <div class="card">
    <div class="box">
      <div class="conteudo">
        <img :src="require(`@/assets/image/${image}`)" />
        <h3>{{ title }}</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam enim,
          quis nam quibusdam quas quia explicabo facere repellendus odit.
          Delectus eligendi aliquam, itaque velit assumenda sit illo odio harum
          eveniet.
        </p>
        <a href="#">Read More</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "card",
  props: {
    title: {
      type: String,
      require: true,
    },
    image: {
      type: String,
      require: true,
    },
  },
};
</script>

<style lang="scss" scoped>

.card {
  position: relative;
  min-width: 320px;
  height: 440px;
  box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.2),
    inset -5px -5px 15px rgba(255, 255, 255, 0.2),
    5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  margin: 30px;
  background: #232527;
}
.card .box {
  position: absolute;
  top: 20px;
  bottom: 20px;
  left: 20px;
  right: 20px;
  background: #2a2b2f;
  border-radius: 15px;
  border: 2px solid #1e1f23;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
}
.card .box:hover {
  transform: translateY(-30px);
  box-shadow: 0 40px 70px rgba(0, 0, 0, 0.5);
}
.card .box .conteudo {
  padding: 20px;
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
}
.card .box .conteudo img {
  height: 50px;
  width: 50px;
  position: absolute;
  top: 30px;
  right: 30px;
  font-size: 8em;
  color: rgba(255, 255, 255, 0.05);
}
.card .box .conteudo h3 {
  font-size: 1.8em;
  z-index: 1;
  transition: 0.5s;
}
.card .box .conteudo p {
  font-size: 14px;
  font-weight: 300;
  z-index: 1;
  transition: 0.5s;
}
.card .box .conteudo a {
  position: relative;
  display: inline-block;
  background: rgba(0, 0, 0, 0.502);
  padding: 8px 20px;
  margin-top: 15px;
  border-radius: 20px;
  text-decoration: none;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.315);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  transition: 0.5s;
}
.card .box .conteudo a:hover {
  background-color: rgba(255, 255, 255, 1);
  color: rgba(0, 0, 0, 1);
}
.card .box .conteudo:hover {
  color: rgba(255, 255, 255, 1);
}
</style>
