<template>
  <div class="live">
    <p class = "desc">
<!--      Một chút đáng yêu cùng chúng tớ!-->
    </p>
    <img src="~@/assets/images/hands.png" class="hands" />
    <div>
      <p class = "header">
        "Chúng ta sẽ cùng nắm tay nhau ❤️"<br />
      </p>
      <p>
        Chúng ta, những người đã sống cuộc đời mình một cách chăm chỉ và bình yên,
        Bây giờ chúng ta sẽ nắm tay và bước đi cạnh nhau..<br />

        Và hôm nay là đám cưới của chúng ta  <br />
        Một đám cưới bình yên và hạnh phúc<br />

      </p>
      <p class = "header">
        Ngày 08 tháng 12 năm 2024<br />
        12:30<br />
      </p>
      <Calendar />

    </div>
    <Button>Lễ thành hôn</Button>
    <div class="celebrate">
      <h2 class="h2"> Bữa cơm thân mật </h2>
      <figure class="fir-image-figure">


        <img class="fir-author-image fir-clickcircle" src="~@/assets/images/chong.png" alt="David East - Author">



        <figcaption>
          <div class="fig-author-figure-title1">Nhà trai</div>
         <div class="flex">
           <div class="fig-author-figure-title"> 🏠 </div>
           <div class="fig-author-figure-title" style="margin-left: 6px">  Số 12 - Xóm Ngoại 1 - Hương Ngải - Thạch Thất - Hà Nội</div>
         </div>
          <div class="fig-author-figure-title"> 🕟 Vào hồi 16:30, ngày 07/12/2024</div>
        </figcaption>
      </figure>
      <figure class="fir-image-figure">


        <img class="fir-author-image fir-clickcircle" src="~@/assets/images/vo.png" alt="David East - Author">



        <figcaption>
          <div class="fig-author-figure-title1">Nhà gái </div>
          <div class="flex">
            <div class="fig-author-figure-title"> 🏠 </div>
            <div class="fig-author-figure-title" style="margin-left: 6px">  Số 10 - Ngách 247/35 - Thôn 4 - Hương Ngải - Thạch Thất - Hà Nội</div>
          </div>

          <div class="fig-author-figure-title"> 🕟 Vào hồi 16:30, ngày 07/12/2024</div>
        </figcaption>
      </figure>
      <h2 class="h2">Lễ thành hôn</h2>
      <figure class="fir-image-figure">


        <img class="fir-author-image fir-clickcircle" src="~@/assets/images/doi.png" alt="David East - Author">



        <figcaption>
          <div class="fig-author-figure-title1">Nhà trai </div>
          <div class="flex">
            <div class="fig-author-figure-title"> 🏠 </div>
            <div class="fig-author-figure-title" style="margin-left: 6px">  Số 12 - Xóm Ngoại 1 - Hương Ngải - Thạch Thất - Hà Nội</div>
          </div>

          <div class="fig-author-figure-title"> 🕟 Vào hồi 12:30, ngày 08/12/2024</div>
        </figcaption>
      </figure>

      <div class="fig-author-figure-title1">Thật vui vì được gặp và đón tiếp các bạn trong một dịp đặc biệt như đám cưới của chúng mình.<br/> Chúng mình muốn gửi đến bạn những lời cảm ơn sâu sắc nhất và để bạn biết chúng mình rất hạnh phúc khi thấy bạn ở đó</div>
    </div>
  </div>
</template>

<script>
import Calendar from "@/components/Calendar.vue";

export default {
  name: "Divider",
  components: {Calendar},
  methods: {
    attendance() {
      window.open("https://youtu.be/yU9UULnBt0w");
    },
  },
};
</script>

<style lang="scss" scoped>
.live {
  padding-top: 4px;
  padding-bottom: 68px;
  padding-left: 22px;
  padding-right: 22px;
  text-align: center;
  .hands {
    width: 75px;
    margin-bottom: 16px;
  }
  p {
    margin-bottom: 16px;
    line-height: 24px;
    &.desc {
      color: #295238;
      font-size: 10px;
      opacity: 0.6;
      margin-bottom: 36px;
    }
    &.header {
      color: #295238;
      font-size: 22px;
    }
    &:last-child {
      margin-bottom: 40px;
    }
  }
}
.flex {
  display: flex;
}
.celebrate {
  padding-top: 32px;

  width: 100%;
  text-align: center;
  color: #295138;
  cursor: pointer;

  .description {
    font-size: 12px;
    letter-spacing: 6px;
    margin-bottom: 30px;
  }

  .h2 {
    font-size: 20px;
    font-weight: normal;
    margin-bottom: 24px;
    text-align: left;
  }
}
.fir-clickcircle {
  height: 80px;
  width: 80px;
  border-radius: 100px;
  cursor: pointer;
}
figcaption{
  text-align: left;
}

.fir-image-figure {
  margin: 0;
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  position: relative;
  text-decoration: none;
}

.fir-image-figure .caption, .fir-image-figure figcaption {
  padding-left: 15px;
}

html.wf-active .fir-image-figure .fig-author-figure-title {
  font-family: var(--fir-font-header);
  font-size: 16px;
}

.fir-image-figure .fig-author-figure-title {
  color: var(--fir-color-grey);
  font-weight: 400;
  font-size: 15px;
  margin-top: 8px;
}
.fig-author-figure-title1{
  font-size: 18px;
}

.fir-imageover {
  position: relative;
  display: flex;
}

.fir-imageover-color {
  height: 80px;
  width: 80px;
  position: absolute;
  background: var(--fir-blue-twitter-alpha);
  background-image: none;
  border-radius: 100px;
  cursor: pointer;
  transition: background .3s ease-in-out;
  animation: fadeInFadeOut 2s infinite;
  top: 0;
  left: 0;
}

.fir-imageover-image {
  position: absolute;
  top: 0;
  left: 0;

}
</style>
