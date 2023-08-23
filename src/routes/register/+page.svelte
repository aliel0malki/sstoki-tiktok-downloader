
<main class="container">
	<div>
		<div >
			<h1 style="margin-top: 30px; margin-bottom: 10px; font-size:30px">New Account</h1>
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
					<p style="margin-bottom:10px">have an account? <a class="text-primary" href="/login">Login</a></p>
			<button class="w-full flex gap-2 text-white justify-center p-3 uppercase bg-primary" type="submit">Create</button>
		</form>
	</div>
</main>
