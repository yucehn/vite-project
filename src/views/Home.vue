<script setup lang="ts">
import { reactive } from 'vue';
import Home from '../components/HelloWorld.vue';
import NameInputVue from '../components/NameInput.vue';

const state = reactive({
	name:'',
})
</script>
<template>
	<!-- msg="Vite + Vue" -->
	<Home />
	父 name: {{ state.name }}
	<NameInputVue v-model="state.name" type="text" placeholder="測試" test-attr="test"/>
</template>