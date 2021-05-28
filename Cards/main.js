Vue.component('card',{
    props:{
        title: {
            type: String,
            require: true,
        },
        image:{
            type: String,
            require: true,
        },
    },
    template:`
    <div class="container">
        <div class="card">
            <div class="box">
                <div class="conteudo">
                    <img :src="image" >
                    <h3>{{title}}</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam enim, quis nam quibusdam quas quia explicabo facere repellendus odit. Delectus eligendi aliquam, itaque velit assumenda sit illo odio harum eveniet.</p>
                    <a href="#">Read More</a>
                </div>
            </div>
        </div>
    </div>
`,
})
var app = new Vue({
    el: '#app'
})