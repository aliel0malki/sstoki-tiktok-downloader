<main class="container">
	<div>
		<div >
			<h1 style="margin-top: 30px; margin-bottom: 10px;font-size:30px">Login Account</h1>
			<p >Login with your account</p>
		</div>
		<form method="POST" action="?" style="margin-top: 40px">
			<label >
				<span>Email</span>
				<input name="email" type="email" placeholder="example@email.com" />
			</label>
			<div style="margin-top:10px" />
			<label>
				<span>Password</span>
				<input name="password" type="password" placeholder="********" />
			</label>		<div style="margin-top:10px" />
					<p style="margin-bottom:10px">Don't have an account? <a class="font-bold text-primary" href="/register">Create</a></p>
			<div/>
			<button class="w-full flex gap-2 text-white justify-center p-3 uppercase bg-primary" type="submit">Login</button>
		</form>
	</div>
</main>
