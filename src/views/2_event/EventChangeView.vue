<template>
  <!-- HTML -->
  <div>
    <select name="" id="" @change="changeCity($event)" v-model="seletedCity">
      <!-- @change / v-on:change 도 사용 가능, change 중에 함수를 전달할 경우 ($ㄷㅍ둣) -->
      <option value="">===도시선택===</option>
      <option
        :value="city.cityCode"
        :key="city.cityCode"
        v-for="city in cityList"
      >
        {{ city.title }}
      </option>
    </select>
    <select name="" id="">
      <option
        :value="dong.dongCode"
        :key="dong.dongCode"
        v-for="dong in selectedDongList"
      >
        <!-- 양방향 데이터 바인딩으로 선택된 도시의 동만 노출되도록 구현 가능 -->
        {{ dong.dongTitle }}
      </option>
    </select>
    <select name="" id="">
      <option
        :value="dong.dongCode"
        :key="dong.dongCode"
        v-for="dong in dongList.filter(
          (dong) => dong.cityCode === selectedCity
        )"
      >
        <!-- selectedDongList 쪽에 바로 함수를 넣는 방법도 사용 가능 : 가독성 x-->
        {{ dong.dongTitle }}
      </option>
    </select>
  </div>
</template>
<script>
// JS
export default {
  data() {
    return {
      selectedCity:'',
      cityList: [
        { cityCode: '02', title: 'seoul' },
        { cityCode: '051', title: 'busan' },
        { cityCode: '064', title: 'jeju' },
      ],
      dongList: [
        { cityCode: '02', dongCode: '1', dongTitle: '서울1동' },
        { cityCode: '02', dongCode: '2', dongTitle: '서울2동' },
        { cityCode: '02', dongCode: '3', dongTitle: '서울3동' },
        { cityCode: '02', dongCode: '4', dongTitle: '서울4동' },
        { cityCode: '051', dongCode: '1', dongTitle: '부산1동' },
        { cityCode: '051', dongCode: '2', dongTitle: '부산2동' },
        { cityCode: '051', dongCode: '3', dongTitle: '부산3동' },
        { cityCode: '064', dongCode: '1', dongTitle: '제주1동' },
        { cityCode: '064', dongCode: '2', dongTitle: '제주2동' },
      ],
      selectedDongList: [].
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    changeCity(event) {
      //change를 하면서 event를 보내는 방법~~
      console.log(event.target.tagName)
      this.selectedDongList = this.dongList.filter(
        (dong) => dong.cityCode === selectedCity
      )
    },
  },
};
</script>
<style scoped>
/* CSS 이 화면에만 적용해야할 때만 scoped 를 기재해줌 */
</style>
