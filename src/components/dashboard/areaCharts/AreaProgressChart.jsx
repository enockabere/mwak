/** @format */

import {FaCalendarCheck} from "react-icons/fa"

const Notifications = () => {
  return (
    <div className='grid md:grid-cols-1'>
      {/* Leave Deadline Reminders Tile */}
      <div className='bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 rounded-lg shadow-md flex items-center space-x-4'>
        <FaCalendarCheck className='text-blue-500 text-3xl' />
        <div>
          <h4 className='font-bold'>Leave Deadline Reminders</h4>
          <p>
            You have upcoming leave deadlines. Submit your leave applications
            soon!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Notifications
