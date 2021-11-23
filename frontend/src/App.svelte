<svelte:head>
  <link rel="stylesheet" href="https://unpkg.com/carbon-components-svelte/css/white.css"/>
</svelte:head>

<script>
	import {
		DataTable,
		Toolbar,
		ToolbarContent,
		ToolbarSearch,
		ToolbarMenu,
		ToolbarMenuItem,
		Button,
		} from "carbon-components-svelte";

	let rows = [
		{ id: 'a', name: 'Load Balancer 3', protocol: 'HTTP', port: 3000, rule: 'Round robin' }, 
		{ id: 'b', name: 'Load Balancer 1', protocol: 'HTTP', port: 443, rule: 'Round robin' }, 
		{ id: 'c', name: 'Load Balancer 2', protocol: 'HTTP', port: 80, rule: 'DNS delegation' }, 
		{ id: 'd', name: 'Load Balancer 6', protocol: 'HTTP', port: 3000, rule: 'Round robin' }, 
		{ id: 'e', name: 'Load Balancer 4', protocol: 'HTTP', port: 443, rule: 'Round robin' }, 
		{ id: 'f', name: 'Load Balancer 5', protocol: 'HTTP', port: 80, rule: 'DNS delegation' }
	];
		
	let search_text = "";

	let filtered_rows = [];

</script>


<DataTable sortable selectable expandable
  headers={[{ key: 'name', value: 'Name' }, { key: 'protocol', value: 'Protocol' }, { key: 'port', value: 'Port' }, { key: 'rule', value: 'Rule' }]}
  rows={rows}>
	<Toolbar>
			<ToolbarSearch bind:value={search_text} on:input={()=>{
				filtered_rows = [];
				rows.forEach((row,index)=>{
					for (let [key, value] of Object.entries(row)) {
						if (String(value).includes(search_text)) {
							filtered_rows.push(row);
							break;
						}
					};
				})
				rows = filtered_rows;
				console.log(filtered_rows);
				}} />
	</Toolbar>
	<div slot="expanded-row" let:row>
		<pre>
		Data
		</pre>
	</div>
</DataTable>


<button on:click={
  ()=>{
    rows = [];
  }
}>Update</button>