
<template>
	<n-grid x-gap="12" :cols="4">
		<n-gi>
			<Bar :data="data" :options="options" />
		</n-gi>
		<n-gi>
			<Doughnut :data="dataDoughnut" :options="options" />
		</n-gi>
		<n-gi>
			<div class="light-green" />
		</n-gi>
		<n-gi>
			<div class="green" />
		</n-gi>
	</n-grid>
  <div class="container">
    <n-grid gutter="12" :x-gap="12">
      <n-grid-item :span="6">
        <n-card title="带封面的卡片">
          <template #cover>
            <img src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg">
          </template>
          卡片内容
        </n-card>
      </n-grid-item>
      <n-grid-item :span="6">
        <n-card title="带封面的卡片">
          <template #cover>
            <img src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg">
          </template>
          卡片内容
        </n-card>
      </n-grid-item>
      <n-grid-item :span="6">
        <n-card title="带封面的卡片">
          <template #cover>
            <img src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg">
          </template>
          卡片内容
        </n-card>
      </n-grid-item>
      <n-grid-item :span="6">
        <n-card title="带封面的卡片">
          <template #cover>
            <img src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg">
          </template>
          卡片内容
        </n-card>
      </n-grid-item>
    </n-grid>
  </div>
</template>


<script lang="ts">
import { ref } from 'vue';
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
    ArcElement
} from 'chart.js';
import { Bar, Doughnut } from 'vue-chartjs'


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement)

export default {
  components: {Bar, Doughnut},
  setup() {
    const data = ref({
        labels: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
        ],
        datasets: [
            {
                label: 'Data One',
                data: [40, 20, 12, 60, 70, 25],
            }
        ],
        backgroundColor: '#f87979',
    });
    const options= ref({
        responsive: true
    });
    const dataDoughnut = ref({
        labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
        datasets: [
            {
            backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
            data: [40, 20, 80, 10]
            }
        ]
    })

    return {
      data,
      options,
      dataDoughnut
    }
  }
}
</script>


<style scoped>
.light-green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.12);
}
.green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.24);
}
</style>