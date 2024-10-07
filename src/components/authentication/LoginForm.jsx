/** @format */
import {Link} from "react-router-dom"
// LoginForm.jsx
function LoginForm() {
  return (
    <form
      id='formAuthentication'
      className='mb-3'
      action='index.html'
      method='POST'
    >
      <div className='mb-3'>
        <label htmlFor='email' className='form-label'>
          Email
        </label>
        <input
          type='text'
          className='form-control'
          id='email'
          name='email-username'
          placeholder='Enter your email or username'
          autoFocus
        />
      </div>
      <div className='mb-3 form-password-toggle'>
        <div className='d-flex justify-content-between'>
          <label className='form-label' htmlFor='password'>
            Password
          </label>
          <a href='auth-forgot-password-basic.html'>
            <small>Forgot Password?</small>
          </a>
        </div>
        <div className='input-group input-group-merge'>
          <input
            type='password'
            id='password'
            className='form-control'
            name='password'
            placeholder='&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;'
            aria-describedby='password'
          />
          <span className='input-group-text cursor-pointer'>
            <i className='bx bx-hide'></i>
          </span>
        </div>
      </div>
      <div className='mb-3'>
        <div className='form-check'>
          <input
            className='form-check-input'
            type='checkbox'
            id='remember-me'
          />
          <label className='form-check-label' htmlFor='remember-me'>
            Remember Me
          </label>
        </div>
      </div>
      <div className='mb-3'>
        <Link
          to='/dashboard'
          className='btn btn-primary d-grid w-100 shadow-md hover:shadow-lg transition-shadow duration-300'
        >
          Sign in
        </Link>
      </div>
    </form>
  )
}

export default LoginForm
