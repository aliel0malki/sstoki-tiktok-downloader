<script lang="ts">
	export let data
</script>
<div class="container">
	
<center>
	
<h1>Welcome {data.user.username}</h1>

<form method="POST" action="/profile">
	<button type="submit">LOGOUT</button>
	
</form>
</center>
</div>