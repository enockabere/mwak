
const LoginComponent = () => {
  return (
    <div className="row">
      <div className="col-xl-5">
        <img className="bg-img-cover bg-center" src="/assets/images/login/3.jpg" alt="loginpage" />
      </div>
      <div className="col-xl-7 p-0">
        <div className="login-card login-dark">
          <div>
            <div>
              <a className="logo text-start" href="index.html">
                <img className="img-fluid for-light" src="/assets/images/logo/logo.png" alt="loginpage" />
                <img className="img-fluid for-dark" src="/assets/images/logo/logo_dark.png" alt="loginpage" />
              </a>
            </div>
            <div className="login-main">
              <form className="theme-form">
                <h4>Sign in to account</h4>
                <p>Enter your email &amp; password to login</p>
                <div className="form-group">
                  <label className="col-form-label">Email Address</label>
                  <input className="form-control" type="email" required placeholder="test@gmail.com" />
                </div>
                <div className="form-group">
                  <label className="col-form-label">Password</label>
                  <div className="form-input position-relative">
                    <input className="form-control" type="password" name="login[password]" required placeholder="*********" />
                    <div className="show-hide">
                      <span className="show"></span>
                    </div>
                  </div>
                </div>
                <div className="form-group mb-0">
                  <button className="btn btn-primary btn-block w-100 mt-3" type="submit">Sign in</button>
                </div>
                <h6 className="text-muted mt-4 or">Or Sign in with</h6>
                <div className="social mt-4">
                  <div className="btn-showcase">
                    <a className="btn btn-light" href="https://login.microsoftonline.com" target="_blank" rel="noopener noreferrer">
                      <i className="txt-office" data-feather="office"></i> Microsoft Office
                    </a>
                  </div>
                </div>
                <p className="mt-4 mb-0 text-center">
                  Don't have account?
                  <a className="ms-2" href="sign-up.html">Create Account</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
