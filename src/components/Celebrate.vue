<template>
  <div class="celebrate">
    <div class="description">Love Story</div>

    <h2 class="h2">First Date</h2>
    <p>
      Lần đầu hẹn hò, anh hồi hộp đến mức kiểm tra giờ liên tục, sợ mình đến muộn.<br />  Anh chọn một quán cà phê nhỏ, ấm cúng, nơi ánh đèn vàng dịu nhẹ bao phủ mọi góc. Em bước vào với nụ cười rạng rỡ, làm tim anh loạn nhịp. <br /> Chúng mình trò chuyện, chia sẻ những câu chuyện nhỏ bé nhưng chân thành. Buổi tối thật tuyệt vời với một lời hẹn lần sau, đầy hy vọng..<br />


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

    <h2 class="h2">Cute confession</h2>
    <div class="image">
      <img src="~@/assets/images/story1.png" />
    </div>
    <p>
      Trong một buổi chiều hoàng hôn, khi ánh nắng cuối ngày nhuộm vàng cả bầu trời, anh dẫn em đến một cánh đồng hoa dại nở rộ.<br /> Gió nhẹ nhàng thổi qua, mang theo hương thơm dịu dàng của cỏ cây. Anh đứng trước cô, tay run nhẹ vì hồi hộp, nhưng ánh mắt anh đầy sự chân thành.<br /> Anh nói: "Em có biết không, mỗi ngày em làm tim anh rộn ràng như ánh mặt trời chiếu sáng cả thế giới. Hãy để anh được bên em, chăm sóc và yêu thương em mãi mãi."<br /> Em mỉm cười, và cái gật đầu dịu dàng của cô làm trái tim anh như ngừng đập.<br />

    </p>


    <img src="~@/assets/images/cat.png" class="cat" />
    <h2 class="h2">
      The moment of proposal

    </h2>
    <p>
      3 năm bên nhau không phải là quãng thời gian quá dài, nhưng đủ cho chúng ta nhận ra được rất nhiều điều.<br /> Yêu nhau, vun vén hạnh phúc và cùng nỗ lực vượt qua những khó khăn trong cuộc sống. Chúng ta từ 2 con người xa lạ mà bước vào cuộc đời nhau.<br /> Và giờ đây chúng ta tiếp tục cùng nhau sang trang mới. Giây phút anh ngỏ lời “Làm vợ anh nhé!”, em đã nguyện ý đời này, đi đâu cũng được, miễn là cùng anh.<br />


    </p>
    <div class="image">
      <img src="~@/assets/images/story2.gif" />
    </div>
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
    font-size: 20px;
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
