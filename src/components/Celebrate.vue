<template>
  <div class="celebrate">
    <div class="description">Love Story</div>
    <h2 class="h2">First Date</h2>
    <p>
      Lorem Ipsum is simply dummy text of the printing  industry.<br />
      Lorem Ipsum is simply dummy text of the printing industry.<br />
      Lorem Ipsum is simply dummy text of the printing industry.<br />

    </p>
    <img src="~@/assets/images/goose.png" class="goose" />
    <h2 class="h2">Cute confession</h2>
    <p>
      Lorem Ipsum is simply dummy text of the printing  industry.<br />
      Lorem Ipsum is simply dummy text of the printing industry.<br />
      Lorem Ipsum is simply dummy text of the printing industry.<br />

    </p>

    <div class="gift-list">
      <div
        :class="['gift', { 'is-disable': present.isSoldout }]"
        v-for="(present, index) in presents"
        :key="present.name + index"
        data-aos="fade-up"
        data-aos-duration="800"
        :data-aos-delay="index % 2 === 0 ? 0 : 200"
        @click="handleSubmitClick(present)"
      >
        <div :class="['overlay', { 'is-disable': present.isSoldout }]"></div>
        <div class="thumbnail">
          <img :src="present.imageUrl" alt="" srcset="" />
        </div>
        <div class="contents">
          <div class="title">{{ present.title }}</div>
          <div class="action">
            <img
              :src="
                present.isSoldout
                  ? require('../assets/images/heart-black.svg')
                  : require('../assets/images/heart.svg')
              "
              alt=""
              srcset=""
            />{{ present.isSoldout ? "선물완료" : "선물하기"}}
          </div>
        </div>
      </div>
    </div>

    <img src="~@/assets/images/cat.png" class="cat" />
    <p class="black">
      How He Proposed<br />

    </p>
    <p>
      Lorem Ipsum is simply dummy text of the printing  industry.<br />
      Lorem Ipsum is simply dummy text of the printing industry.<br />
      Lorem Ipsum is simply dummy text of the printing industry.<br />

    </p>
  </div>
</template>

<script>
export default {
  name: "Celebrate",
  props: {
    presents: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    handleSubmitClick(present) {
      if (present.isSoldout) {
        const isConfirmed = confirm("이미 선물 받은 상품이에요. 혹시 구매링크가 궁금하신가요?");
        if (isConfirmed) {
          window.open(present.link);
        }
        return;
      }

      this.$emit("click", present);
    },
  },
};
</script>

<style lang="scss" scoped>
.celebrate {
  padding-top: 32px;
  padding-bottom: 50px;
  padding-left: 22px;
  padding-right: 22px;
  text-align: center;
  color: #295138;
  cursor: pointer;
  .description {
    font-size: 12px;
    letter-spacing: 6px;
    margin-bottom: 30px;
  }
  .h2 {
    font-size: 16px;
    font-weight: normal;
    margin-bottom: 24px;
  }
  p {
    line-height: 24px;
    &.black {
      color: #202121;
    }
  }
  .goose {
    width: 90px;
    margin-top: 67px;
    margin-bottom: 20px;
  }
  .cat {
    width: 85px;
    margin-top: 32px;
    margin-bottom: 16px;
  }

  .gift-list {
    width: 298px;
    margin: 32px auto;

    .gift {
      display: inline-block;
      width: calc(50% - 7px);
      box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.16);
      margin-bottom: 16px;
      cursor: pointer;
      background: white;

      &.is-disable {
        cursor: default;
      }

      &:nth-child(2n -1) {
        margin-right: 14px;
      }

      .overlay {
        background: white;
        width: 100%;
        height: 100%;
        position: absolute;
        opacity: 0;

        &.is-disable {
          display: block;
          opacity: 0.7;
        }
      }
      .thumbnail {
        width: 100%;
        height: auto;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .contents {
        padding: 8px;
        text-align: left;
        color: #202121;
        .title {
          font-size: 14px;
          line-height: 1.43;
          height: 40px;
          word-break: keep-all;
        }
        .action {
          font-size: 10px;
          margin-top: 12px;
          display: flex;
          align-items: center;

          img {
            margin-right: 4px;
          }
        }
      }
    }
  }
}
</style>
