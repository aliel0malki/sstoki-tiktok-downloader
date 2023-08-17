<script lang="ts">
	// import "@picocss/pico/css/pico.min.css"
</script>
<main class="container">
	<div>
		<div >
			<h1 style="margin-top: 30px; margin-bottom: 10px">Login Account</h1>
			<p >Login with your account</p>
		</div>
		<form method="POST" action="?/login" style="margin-top: 40px">
			<label >
				<span>Email</span>
				<input name="email" type="email" placeholder="example@email.com" />
			</label>
			<div style="margin-top:10px" />
			<label>
				<span>Password</span>
				<input name="password" type="password" placeholder="********" />
			</label>		<div style="margin-top:10px" />
					<p >Don't have an account? <a class="font-bold text-white" href="/register">Create</a></p>
			<div/>
			<button type="submit">Login</button>
		</form>
	</div>
</main>
