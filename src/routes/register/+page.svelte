<script lang="ts">
	// import "@picocss/pico/css/pico.min.css"
import { enhance } from '$app/forms'
</script>
<main class="container">
	<div>
		<div >
			<h1 style="margin-top: 30px; margin-bottom: 10px">New Account</h1>
			<p >Create your account</p>
		</div>
		<form method="POST" action="/register" style="margin-top: 40px">
			<label >
				<span>Email</span>
				<input name="email" type="email" placeholder="example@email.com" />
			</label>
			<div style="margin-top:10px" />
			<label>
				<span>Password</span>
				<input name="password" type="password" placeholder="********" />
			</label>		
			<label>
				<span>Password Confirm</span>
				<input name="passwordConfirm" type="password" placeholder="********" />
			</label>	
					<p >have an account? <a href="/login">Login</a></p>
			<button type="submit">Create</button>
		</form>
	</div>
</main>
