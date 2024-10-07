/** @format */

import "../../core.css"
import "../../theme-default.css"
import "./login.css"
import LoginForm from "../../components/authentication/LoginForm"

function Login() {
  return (
    <div className='container-xxl '>
      <div className='authentication-wrapper authentication-basic container-p-y'>
        <div className='authentication-inner'>
          <div className='card shadow-lg rounded-lg'>
            <div className='card-body'>
              <div className='app-brand justify-content-center'>
                <a href='/' className='app-brand-link gap-2 flex items-center'>
                  <span className='app-brand-logo demo'>
                    <img
                      src='/mwa_logo_color.png'
                      alt='MWA Logo'
                      className='h-20 w-auto'
                    />
                  </span>
                </a>
              </div>
              <h4 className='mb-2'>Welcome to Millennium Water Alliance! 👋</h4>
              <p className='mb-4'>
                Please sign-in to your employee self service portal and start
                the adventure
              </p>
              <LoginForm />
              <p className='text-center mt-4'>
                <span className='text-gray-600'>Login with your </span>
                <a
                  href='auth-register-basic.html'
                  className='text-blue-500 hover:text-blue-700 font-semibold transition duration-300'
                >
                  <span>Microsoft account?</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
