/** @format */

import React, {useState} from "react"
import "./leave.css"

const LeavePlannerForm = () => {
  // State to track the current step
  const [currentStep, setCurrentStep] = useState(1)

  // Function to navigate to the next step
  const nextStep = () => {
    setCurrentStep(currentStep + 1)
  }

  // Function to navigate to the previous step
  const prevStep = () => {
    setCurrentStep(currentStep - 1)
  }

  // Function for creating a new plan (for step 1 button click)
  const onNewApp = (e) => {
    e.preventDefault()
    nextStep() // Move to step 2 when round button is clicked
  }

  return (
    <div className='wizard-container bg-[#292929] rounded-lg'>
      {/* Step Navigation */}
      <div className='wizard-nav'>
        <div className='step-wrapper'>
          <div className={`step ${currentStep >= 1 ? "completed" : ""}`}>
            <span
              className={`step-number ${currentStep >= 1 ? "completed" : ""}`}
            >
              1
            </span>
            New Plan
          </div>
          <div
            className={`progress-line ${currentStep > 1 ? "completed" : ""}`}
          ></div>
        </div>
        <div className='step-wrapper'>
          <div className={`step ${currentStep >= 2 ? "completed" : ""}`}>
            <span
              className={`step-number ${currentStep >= 2 ? "completed" : ""}`}
            >
              2
            </span>
            Primary Contact
          </div>
          <div
            className={`progress-line ${currentStep > 2 ? "completed" : ""}`}
          ></div>
        </div>
        <div className='step-wrapper'>
          <div className={`step ${currentStep >= 3 ? "completed" : ""}`}>
            <span
              className={`step-number ${currentStep >= 3 ? "completed" : ""}`}
            >
              3
            </span>
            Company Administrator
          </div>
          <div
            className={`progress-line ${currentStep > 3 ? "completed" : ""}`}
          ></div>
        </div>
        <div className='step-wrapper'>
          <div className={`step ${currentStep >= 4 ? "completed" : ""}`}>
            <span
              className={`step-number ${currentStep >= 4 ? "completed" : ""}`}
            >
              4
            </span>
            Billing Details
          </div>
        </div>
      </div>

      {/* Form Body */}
      <div className='form-body'>
        {currentStep === 1 && (
          <div className='custom-step-content flex flex-col items-center justify-center'>
            {/* Round button for creating a new plan */}
            <div className='custom-btn-wrapper flex flex-col items-center'>
              <a
                href='/new-application'
                className='custom-round-btn'
                onClick={onNewApp}
              >
                <span className='custom-btn-icon'>+</span>
              </a>
              {/* Text below button */}
              <span className='custom-btn-text'>Create New Plan</span>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className='step-content'>
            <h3>Primary Contact</h3>
            {/* Add form fields for Primary Contact */}
          </div>
        )}

        {currentStep === 3 && (
          <div className='step-content'>
            <h3>Company Administrator</h3>
            {/* Add form fields for Company Administrator */}
          </div>
        )}

        {currentStep === 4 && (
          <div className='step-content'>
            <h3>Billing Details</h3>
            {/* Add form fields for Billing Details */}
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className='wizard-footer'>
        {currentStep > 1 && <button onClick={prevStep}>Back</button>}
        {currentStep > 1 && currentStep < 4 && (
          <button onClick={nextStep}>Next</button>
        )}
        {currentStep === 4 && <button type='submit'>Submit</button>}
      </div>
    </div>
  )
}

export default LeavePlannerForm
