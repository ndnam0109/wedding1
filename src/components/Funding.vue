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
    <Button @click="openModal">Gửi lời chúc</Button>

    <!-- Hiển thị modal khi isModalVisible là true -->
    <div v-if="isModalVisible" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <h3>Gửi lời chúc</h3>

        <!-- Form nhập tên và lời nhắn -->
        <form @submit.prevent="submitForm">
          <div class="form-field">
            <label for="name">Tên:</label>
            <input type="text" id="name" v-model="form.name" required />
          </div>

          <div class="form-field">
            <label for="message">Lời nhắn:</label>
            <textarea id="message" v-model="form.message" required></textarea>
          </div>

          <div class="modal-actions">

            <button type="button" class="btn-cancel" @click="closeModal">Đóng</button>
            <button type="submit" class="btn-submit">Gửi</button>
          </div>
        </form>
      </div>
    </div>

  </div>
</template>
<script>

import Blessing from "@/components/Blessing.vue";
import db from '../firebase';
export default {
  name: "Divider",
  components: {Blessing},

  data() {
    return {
      isModalVisible: false, // Quản lý trạng thái của modal
      form: {
        name: '', // Tên
        message: '', // Lời nhắn
      },
      messages: []
    };
  },
  methods: {
    // Mở modal
    openModal() {
      this.isModalVisible = true;
    },

    // Đóng modal
    closeModal() {
      this.isModalVisible = false;
    },

    // Xử lý khi gửi form
    async submitForm() {
      try {
        // Lưu dữ liệu vào Firestore
        await db.collection("messages").add({
          name: this.form.name,
          message: this.form.message,
          timestamp: new Date() // Thêm thời gian hiện tại
        });

        // Sau khi gửi xong, đóng modal và làm trống form
        this.closeModal();
        this.form.name = '';
        this.form.message = '';
        alert("Cảm ơn bạn đã gửi chúc phúc cho chúng tớ !");
      } catch (error) {
        console.error("Có lỗi khi gửi lời chúc: ", error);
        alert("Có lỗi xảy ra. Vui lòng thử lại.");
      }
    },

    async getMessages() {
      try {
        const querySnapshot = await db.collection("messages").get();  // Lấy dữ liệu từ collection 'messages'
        this.messages = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()  // Lấy dữ liệu của mỗi document và gán vào mảng messages
        }));
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
      }
    }
  }
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


.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  h3{
    color: #295238;
    font-size: 22px;
    margin-bottom: 20px;
  }
}

.modal-actions {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}


/* Style cho form */
input, textarea {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
textarea{
  min-height: 80px;
}

.form-field {
  margin-bottom: 15px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
  text-align: left;  /* Căn trái label */
}

/* Cải thiện style cho button */
button {
  background-color: #ffb800;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 16px;
  color: white;
  border-radius: 4px;
}

button:hover {
  background-color: #ff9900;
}
.btn-cancel{
  background-color: #888;  /* Xám */
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 16px;
  color: white;
  border-radius: 4px;

}

.btn-submit{
  background-color: #295238;  /* Xanh */
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 16px;
  color: white;
  border-radius: 4px;
}
</style>
