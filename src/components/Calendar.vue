<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

// Set the target date for the countdown
const countDownDate = new Date("Dec 8, 2024 12:30:00").getTime();

// Reactive variables to store countdown time
const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);

// Function to update countdown
const updateCountdown = () => {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  if (distance < 0) {
    clearInterval(x); // Stop the countdown if expired
    days.value = hours.value = minutes.value = seconds.value = 0;
  } else {
    days.value = Math.floor(distance / (1000 * 60 * 60 * 24));
    hours.value = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes.value = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    seconds.value = Math.floor((distance % (1000 * 60)) / 1000);
  }
};

// Set up interval when component is mounted
let x;
onMounted(() => {
  x = setInterval(updateCountdown, 1000);
});

// Clean up interval when component is unmounted
onBeforeUnmount(() => {
  clearInterval(x);
});
</script>

<template>
  <div>
    <div class="m-auto pb-3 aos-init aos-animate" data-aos="fade-up-right">
      <div class="mini_calendar">
        <table>
          <tbody>
          <tr>
            <th abbr="Monday">Thứ 2</th>
            <th abbr="Tuesday">Thứ 3</th>
            <th abbr="Wednesday">Thứ 4</th>
            <th abbr="Thursday">Thứ 5</th>
            <th abbr="Friday">Thứ 6</th>
            <th abbr="Saturday">Thứ 7</th>
            <th abbr="Sunday">CN</th>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>

            </td>
            <td></td>
            <td></td>
            <td>1</td>
          </tr>
          <tr>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td class="today">7</td>
            <td class="today2">
              <div>8</div>
            </td>
          </tr>
          <tr>
            <td>9</td>

            <td>10</td>
            <td>11</td>
            <td >12</td>
            <td >13</td>
            <td>14</td>
            <td>15</td>
          </tr>
          <tr>

            <td>16</td>
            <td>17</td>
            <td>18</td>
            <td>19</td>
            <td>20</td>
            <td>21</td>
            <td>22</td>
          </tr>
          <tr>

            <td>23</td>
            <td>24</td>
            <td>25</td>
            <td>26</td>
            <td>27</td>
            <td>28</td>
            <td>29</td>
          </tr>
          <tr>
            <td>29</td>
            <td>30</td>
            <td>31</td>
            <td id="emptydays" colspan="5">&nbsp;</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="count" id="clock">
      <div class="box">
        <div class="time">{{ days }}</div>
        <span>Ngày</span>
      </div>
      <div class="box">
        <div class="time">{{ hours }}</div>
        <span>Giờ</span>
      </div>
      <div class="box">
        <div class="time">{{ minutes }}</div>
        <span>Phút</span>
      </div>
      <div class="box">
        <div class="time">{{ seconds }}</div>
        <span>Giây</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.m-auto {
  margin-right: auto;
  margin-left: auto;
}

.count{
  max-width: 485px;

  overflow: hidden;

  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  .box{
    width: 25%;
  }
}

.today{
  background-color: rgb(106 119 116);
  color: #fff;
  display: inline-block;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  line-height: 28px;
  padding: 5px;
  border-radius: 50%;
}
.today2{
  div{
    background-color: rgb(106 119 116);
    color: #fff;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    line-height: 38px;

    border-radius: 50%;
  }

}

.time{
  background-color: rgb(106 119 116);
  color: #fff;
  margin:  0 auto;
  margin-bottom: 12px;
  width: 45px;
  height: 45px;
  line-height: 32px;
  padding: 5px;
  border-radius: 50%;
}

.mini_calendar {
  border-bottom: 1px solid #c6c6c6;
  max-width: 420px;

  margin-right: auto !important;
  margin-left: auto !important;

  table {
    caption-side: top;
    width: 100%;

    .calendar-month {
      font-weight: bold;
      text-align: center;
      margin-bottom: 20px;

      color: #203447;
      text-transform: uppercase;
    }

    tbody, tr {
      border-color: inherit;
      border-style: solid;
      border-width: 0;
    }

    th {
      border-top: 1px solid #c6c6c6;
      border-bottom: 1px solid #c6c6c6;
      text-align: center;
      padding: 8px 0;
    }

    td {
      font-size: 0.9em;
      text-align: center;
      width: 40px !important;
      height: 40px;
      vertical-align: middle;
    }

    tr:nth-child(2) td {
      padding-top: 20px;
      height: 60px;
      font-size: 0.9em;
      text-align: center;
      width: 40px;
    }
  }
}
</style>
