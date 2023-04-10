import './Login.css'
import Boy from './Learning-cuate.png'

function Login(){
    return(
        <div className="bg">
            <div className="outer-box">
                <div className="left-box">
                    <img src={Boy} alt = "Boy Studying" className="boy" />
                </div>
                <div className="right-box">
                    <h2><span className='login'>Login</span> your account</h2>
                    <form className='login-form'>
                        <div className='username'>
                            <label htmlFor="Username">Username</label><br />
                            <input type="text" name='Username' /><br />
                        </div>
                        <div className='password'>
                            <label htmlFor="Password">Password</label><br />
                            <input type="text" name='Password' />
                        </div>
                        <div>
                            <button>Log In</button>
                            <h3>forgot password?</h3>
                        </div>
                        <div className='sign-up'>
                            <h2>Create Account</h2>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login