import { Link } from "react-router-dom"

function Signup() {
    return (
        <>
            <main>
            <section className="login_container">
                   <div className="container">
                   <form action="/action_page.php">
                        <div>
                            <label  className="form-label">Email:</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password:</label>
                            <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Confirm Password:</label>
                            <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" />
                        </div>
                        <button type="submit" className="btn btn-primary">Signup</button>
                        <p>are you already member? <Link href="signup"><span>LogIn</span></Link></p>
                    </form>
                   </div>
                </section>
            </main>
        </>
    )
}

export default Signup
