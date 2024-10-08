import PropTypes from "prop-types";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { Link } from "react-router-dom";
import { MdOutlineBarChart, MdOutlineAdd, MdCheck } from "react-icons/md";

const TimesheetCard = ({ totalHours, assignedProjects, onViewAllTimesheets, onAddTimesheet }) => {
  const remainingHours = 80 - totalHours; // Example calculation for remaining hours
  const data = [
    { name: "Worked Hours", value: totalHours },
    { name: "Remaining Hours", value: remainingHours },
  ];

  const COLORS = ["#4caf50", "#f44336"]; // Worked (Green), Remaining (Red)

  return (
    <div
      className="relative card-class bg-[#292929] rounded-lg p-6 flex flex-col justify-between"
      style={{ fontFamily: "'Poppins', sans-serif", minHeight: "250px", paddingBottom: "5rem" }} // Ensure enough height and padding
    >
      {/* Header section with title and Show All button */}
      <div className="flex justify-between items-center"> {/* Reduce the bottom margin */}
        <h5 className="info-title text-base font-bold text-left flex items-center text-white">
          <MdOutlineBarChart className="mr-2" />
          Timesheets
        </h5>
        {/* Show All button, aligned with the title */}
        <Link
          to="/timesheets"
          className="bg-[#383838] text-[#d0e567] hover:bg-[#484848] transition font-bold rounded-full px-2 py-1 text-xs"
          onClick={onViewAllTimesheets}
        >
          Show All
        </Link>
      </div>

      <div className="flex items-center justify-between mb-2"> {/* Reduce the bottom margin */}
        {/* Pie chart */}
        <PieChart width={100} height={100}>
          <Pie
            data={data}
            cx={50}
            cy={50}
            innerRadius={30}
            outerRadius={40}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>

        {/* Textual information */}
        <div className="ml-4 text-left text-white space-y-1"> {/* Reduce space between text */}
          <div className="text-sm flex items-center">
            <MdCheck className="mr-2 align-middle" style={{ fontSize: "1rem" }} /> {/* Total Hours icon */}
            Total Hours Worked: {totalHours}
          </div>
          <div className="text-sm flex items-center">
            <MdCheck className="mr-2 align-middle" style={{ fontSize: "1rem" }} /> {/* Assigned Projects icon */}
            Assigned Projects: {assignedProjects}
          </div>
        </div>
      </div>

      {/* Add Timesheet button and text at the bottom right */}
      <div className="absolute bottom-4 right-4 flex flex-col items-center">
        {/* Button */}
        <Link
          to="/add-timesheet"
          className="bg-[#383838] text-[#d0e567] hover:bg-[#484848] transition font-bold rounded-full flex items-center justify-center w-12 h-12"
          onClick={onAddTimesheet}
        >
          <MdOutlineAdd className="text-xl" />
        </Link>
        {/* Text Below Button */}
        <span className="text-[#d0e567] hover:bg-[#484848] text-sm mt-2">
          Add Timesheet
        </span>
      </div>
    </div>
  );
};

TimesheetCard.propTypes = {
  totalHours: PropTypes.number.isRequired,
  assignedProjects: PropTypes.number.isRequired,
  onViewAllTimesheets: PropTypes.func.isRequired,
  onAddTimesheet: PropTypes.func.isRequired,
};

export default TimesheetCard;
