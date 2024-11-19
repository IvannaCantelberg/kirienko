<template>
	<svg xmlns="http://www.w3.org/2000/svg" class="frame" width="100" height="100">
		<line
			x1="30"
			y1="0"
			x2="30"
			y2="100"
			stroke="inherit"
			stroke-width="2"
			class="line-vertical"></line>
		<line
			x1="0"
			y1="30"
			x2="100"
			y2="30"
			stroke="inherit"
			stroke-width="2"
			class="line-horizontal"></line>
	</svg>
</template>
<style scoped>
	.frame {
		stroke: var(--color-border-accent-2);
		position: absolute;
		top: -50px;
		left: -50px;
		transform: rotate(0);
		transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
	}

	.frame.reversed {
		position: absolute;
		right: -50px;
		bottom: -50px;
		top: initial;
		left: inherit;
		transform: rotate(180deg);
	}
</style>
