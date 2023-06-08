<template>
	<div>
		name:
		<input
			v-bind="$attrs"
			:value="modelValue" 
			@input="inputFn"
		/>
		modelValue: {{ modelValue }}
		<div class="text">哈</div>
		<input v-model="cssVariable.color"/>
	</div>
</template>
<script lang="ts">
export default {
	inheritAttrs: false,
}
</script>
<script setup lang="ts">
import { useCssVars, reactive } from 'vue';

defineProps<{
	modelValue: string
}>();

const emit = defineEmits<{
	(e: 'update:modelValue', value: string): void
}>();

const inputFn = (e:Event) =>{
	const val = (e.target as HTMLInputElement).value;
	emit('update:modelValue', val)
}

const cssVariable = reactive({
      color: 'red',
      fontSize: '32px',
      bg: '#3db6ff',
      radius: '100px'
    })

    useCssVars(()=> cssVariable)

</script>

<style>
  .text {
    color: var(--color);
    font-size: var(--fontSize);
    width: var(--radius);
    height: var(--radius);
    border-radius: var(--radius);
    background-color: var(--bg);
	line-height: var(--radius);
	text-align: center;
  }
</style>