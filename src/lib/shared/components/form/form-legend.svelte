<script lang="ts">
	import * as FormPrimitive from "formsnap";
	import { cn } from '$lib/shared/utils';
	import type { WithoutChild } from '$lib/shared/types';

	let {
		ref = $bindable(null),
		class: className,
		...restProps
	}: WithoutChild<FormPrimitive.LegendProps> = $props();
</script>

<FormPrimitive.Legend
	bind:ref
	class={cn("data-[fs-error]:text-destructive text-sm leading-none font-medium", className)}
	{...restProps}
/>
