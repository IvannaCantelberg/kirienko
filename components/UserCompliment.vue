<template>
	<div class="flex flex-col gap-10">
		<div
			v-for="(item, index) in data"
			:key="index"
			:class="{ 'self-end': index % 2 != 0 }"
			class="flex gap-4">
			<div
				:class="{ 'bg-contrast': index % 2 === 0, 'bg-slate-100': index % 2 != 0 }"
				class="p-5 max-w-[95%] min-w-[310px] flex flex-col gap-3 comment">
				<div class="flex flex-row gap-3 items-center">
					<el-avatar
						shape="square"
						:size="50"
						:src="'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png'" />
					<div class="title">{{ item.sender }}</div>
				</div>

				<p class="text-base 2xl:text-lg" v-html="item.message"></p>
				<div class="self-end text-secondary">{{ item.time }}</div>
			</div>
		</div>
	</div>
</template>
<script lang="ts" setup>
	defineProps<{
		data: {
			sender: string
			time: string
			message: string
		}[]
	}>()
</script>

<style scoped lang="less">
	.comment {
		position: relative;
		&::before {
			content: '';
			display: inline-block;
			width: 20px;
			height: 20px;
			position: absolute;
			top: 4px;
			left: -22px;
			border-left: 12px solid transparent;
			border-right: 12px solid transparent;
			border-bottom: 12px solid var(--color-background-contrast-lighter);
			transform: rotate(270deg);
		}
	}

	.description {
		text-align: center;
		max-width: 70%;
	}

	.description:after {
		content: '';
		display: block;
		width: 40%;
		border: 1px solid;
		margin: auto;
		margin-top: 20px;
	}

	.bg-contrast {
		background-color: var(--color-background-contrast-lighter);
	}
</style>
