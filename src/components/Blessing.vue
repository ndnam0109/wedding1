<script>
import db from '@/firebase';  // Import Firebase Firestore
import moment from 'moment';
export default {
  data() {
    return {
      messages: []  // Mảng để lưu các tin nhắn từ Firestore
    };
  },
  created() {
    this.getMessages();  // Gọi hàm để lấy dữ liệu khi component được tạo
  },
  methods: {
    getMessages() {
      db.collection("messages")
          .orderBy("timestamp") // Sắp xếp theo ngày (nếu bạn có trường createdAt)
          .onSnapshot(snapshot => {
            const messages = snapshot.docs.map(doc => ({
              id: doc.id,
              ...doc.data(),  // Lấy dữ liệu của từng document
            }));
            this.messages = messages;  // Cập nhật dữ liệu vào state
          }, error => {
            console.error("Lỗi khi lắng nghe dữ liệu Firestore:", error);
          });
    },
    formatTimestamp(timestamp) {
      // Kiểm tra nếu timestamp là đối tượng Firestore Timestamp

        timestamp = timestamp.toDate();


      // Sử dụng Moment.js để định dạng timestamp
      return moment(timestamp).format('DD/MM/YYYY HH:mm');
    }
  }
};
</script>


<template>
<div class="sketchy">
  <main v-for="message in messages" :key="message.timestamp" class="l-card">
    <section class="l-card__user">
      <div class="l-card__userInfo">
        <span>{{ message.name }} </span>
        <span>{{ formatTimestamp(message.timestamp) }} </span>
      </div>
    </section>
    <section class="l-card__text">
      <p>
        {{ message.message }}
      </p>
    </section>

  </main>

</div>
</template>

<style scoped lang="scss">
.l-card {
  width: auto;
  min-width: 360px;
  max-width: 480px;
  height: auto;
  background: transparent;
  color: #272727;
  padding: 16px;
  border-bottom: 1px solid;
}

.l-card__text p {
  font-size: 14px;
  color: #3f3f55;
  text-align: left;
}

.l-card__text p::after {
  content: "\201D";
  display: inline;
  color: #999;
}

.l-card__text p::before {
  content: "\201C";
  display: inline;
  color: #999;
}


.l-card__userInfo {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 16px;
}

.l-card__userInfo span:nth-child(1) {
  font-weight: bold;
  font-family: sans-serif;
  font-size: 14px;
  color: #3f3f55;
}
.l-card__userInfo span:nth-child(2) {
  color: #adada6;
  font-family: sans-serif;
  font-size: 12px;
}

.sketchy {

  display: inline-block;
  border: 2px solid #333333;
  border-radius: 2% 6% 5% 4% / 1% 1% 2% 4%;
  position: relative;

  &::before {
    content: '';
    border: 1px solid #353535;
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0) scale(1.015) rotate(0.5deg);
    border-radius: 1% 1% 2% 4% / 2% 6% 5% 4%;
  }
}

</style>