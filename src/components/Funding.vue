<template>
  <div class="funding">
    <img src="~@/assets/images/flower.png" class="flower" />
    <h2 class="h2">
     Lời chúc phúc
    </h2>
    <p>
      Cảm ơn bạn rất nhiều vì đã gửi những lời chúc mừng<br />
      tốt đẹp nhất đến đám cưới của chúng tôi!

    </p>
    <Button @click="funding">기부금 전달하기</Button>

    <a
      href="https://www.kfhi.or.kr/apps/campaign/2020_stophunger_domestic_2.asp?id=540&mcode=658&utm_medium=display_ad&utm_source=youtube&utm_campaign=2020_stophunger_domestic_2&gclid=Cj0KCQiA5bz-BRD-ARIsABjT4nieWe1teUo7KT5HSTinY-IG9KFVj7BRfzI7I_YYAqapQ4jQFsqEqYIaAvqqEALw_wcB"
      target="_blank"
      class="link"
      >기부처 확인하기</a
    >
  </div>
</template>

<script>
export default {
  name: "Divider",
  methods: {
    funding() {
      window.open("https://qr.kakaopay.com/281006011189386490008935");
    },
  },
};
</script>

<style lang="scss" scoped>
.funding {
  padding-top: 48px;
  padding-bottom: 72px;
  padding-left: 22px;
  padding-right: 22px;
  text-align: center;

  .flower {
    width: 70px;
    margin-bottom: 26px;
  }
  .h2 {
    font-size: 16px;
    font-weight: normal;
    margin-bottom: 24px;
    color: #295138;
  }
  p {
    margin-bottom: 32px;
    line-height: 24px;
    color: #202121;
  }
  .link {
    display: inline-block;
    margin-top: 24px;
    color: #295238;
  }
}
</style>
