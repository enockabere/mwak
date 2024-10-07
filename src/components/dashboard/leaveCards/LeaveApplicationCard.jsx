/** @format */

import PropTypes from "prop-types"
import {PieChart, Pie, Cell, Tooltip} from "recharts"
import {MdOutlineBarChart, MdOutlineAdd, MdCheck} from "react-icons/md" // Import icons if needed

const LeaveApplicationCard = ({
  openApps,
  pendingApps,
  approvedApps,
  onViewAll,
  onNewApp,
}) => {
  const data = [
    {name: "Open", value: openApps},
    {name: "Pending", value: pendingApps},
    {name: "Approved", value: approvedApps},
  ]

  // Colors for the pie chart segments
  const COLORS = ["#ff6f61", "#f7b733", "#3eaf7c"]

  return (
    <div
      className='relative card-class bg-[#292929] rounded-lg p-6 flex flex-col'
      style={{fontFamily: "'Poppins', sans-serif"}}
    >
      {/* View All button in the top-right corner */}
      <a
        href='/all-applications'
        className='absolute top-4 right-4 bg-[#383838] text-[#d0e567] hover:bg-[#484848] transition font-bold rounded-full px-2 py-1 text-xs'
        onClick={onViewAll}
      >
        Show All
      </a>

      <h5 className='info-title text-base font-semibold mb-2 text-left flex items-center text-white'>
        <MdOutlineBarChart className='mr-2' />
        Leave Applications
      </h5>

      <div className='flex items-center justify-between'>
        {/* Pie Chart */}
        <div className='application-chart'>
          <PieChart width={100} height={100}>
            <Pie
              data={data}
              cx={50}
              cy={50}
              innerRadius={30}
              outerRadius={40}
              fill='#8884d8'
              paddingAngle={5}
              dataKey='value'
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>

        {/* Values for Open, Pending, Approved */}
        <div className='ml-4 text-left text-white'>
          <div className='text-sm flex items-center'>
            <MdCheck className='mr-2 align-middle' style={{fontSize: "1rem"}} />{" "}
            {/* Open icon */}
            Open: {openApps}
          </div>
          <div className='text-sm flex items-center'>
            <MdCheck className='mr-2 align-middle' style={{fontSize: "1rem"}} />{" "}
            {/* Pending icon */}
            Pending: {pendingApps}
          </div>
          <div className='text-sm flex items-center'>
            <MdCheck className='mr-2 align-middle' style={{fontSize: "1rem"}} />{" "}
            {/* Approved icon */}
            Approved: {approvedApps}
          </div>
        </div>
      </div>

      {/* New Application button at the bottom right */}
      <div className='absolute bottom-4 right-4 flex flex-col items-center'>
        {/* Round button */}
        <a
          href='/new-application'
          className='bg-[#383838] text-[#d0e567] hover:bg-[#484848] transition font-bold rounded-full flex items-center justify-center w-12 h-12'
          onClick={onNewApp}
        >
          <MdOutlineAdd className='text-xl' />
        </a>
        {/* Text below button */}
        <span className='text-[#d0e567] hover:bg-[#484848] text-sm mt-2'>
          New Application
        </span>
      </div>
    </div>
  )
}

LeaveApplicationCard.propTypes = {
  openApps: PropTypes.number.isRequired,
  pendingApps: PropTypes.number.isRequired,
  approvedApps: PropTypes.number.isRequired,
  onViewAll: PropTypes.func.isRequired,
  onNewApp: PropTypes.func.isRequired,
}

export default LeaveApplicationCard
