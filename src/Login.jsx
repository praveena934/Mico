import { Link } from "react-router-dom"

function Login() {
    return (
        <>
            <main>
                <section className="login_container">
                   <div className="container">
                   <form action="/action_page.php">
                        <div>
                            <label for="email" className="form-label">Email:</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
                        </div>
                        <div className="mb-3">
                            <label for="pwd" className="form-label">Password:</label>
                            <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" />
                        </div>
                        <div class="form-check mb-3">
                            <label className="form-check-label">
                                <input className="form-check-input" type="checkbox" name="remember" /> Remember me
                            </label>
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>
                        <p>Not a member?<Link href="signup"><span> SignUP now</span></Link></p>
                    </form>
                   </div>
                </section>
            </main>

        </>
    )
}

export default Login
