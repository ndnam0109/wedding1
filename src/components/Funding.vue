<template>
  <div class="funding">
    <img src="~@/assets/images/flower.png" class="flower" />
    <h2 class="h2">
     Lời chúc phúc
    </h2>
    <p>
      Cảm ơn bạn rất nhiều vì đã gửi những lời chúc mừng<br />
      tốt đẹp nhất đến đám cưới của chúng mình!

      <Blessing />

    </p>
    <Button @click="funding">Gửi lời chúc</Button>


  </div>
</template>

<script>
import Blessing from "@/components/Blessing.vue";

export default {
  name: "Divider",
  components: {Blessing},
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
