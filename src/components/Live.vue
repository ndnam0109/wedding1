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
        Ngày 07 tháng 12 năm 2024<br />
        16:30<br />
      </p>
      <Calendar />
<!--      <p>-->
<!--        작은 가족식이기에 여러분의 얼굴을 보고 <br />-->
<!--        직접 감사와 축하를 나누지는 못하지만,<br />-->
<!--        대신 전세계가 참여할 수 있는<br />-->
<!--        YouTube Live방송으로 함께 하려고 합니다.<br />-->
<!--        여러분이 저희와 함께 있다고 느낄 수 있도록<br />-->
<!--        온라인으로 참석해서 채팅으로 축하해주세요.-->
<!--      </p>-->

    </div>
    <Button @click="attendance">Lễ thành hôn</Button>
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
</style>
