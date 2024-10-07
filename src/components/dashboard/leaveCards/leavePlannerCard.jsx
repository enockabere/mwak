import PropTypes from "prop-types";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { Link } from "react-router-dom";
import { MdOutlineBarChart, MdOutlineAdd, MdCheck } from "react-icons/md";

const LeavePlannerCard = ({ openPlans = 0, totalPlans = 0, onViewAll, onNewPlan }) => {
  // Data for the pie chart
  const data = [
    { name: "Open Plans", value: openPlans },
    { name: "Remaining Plans", value: totalPlans - openPlans },
  ];

  const COLORS = ["#4caf50", "#f44336"]; // Open (Green), Remaining (Red)

  return (
    <div
      className="relative card-class bg-[#292929] rounded-lg p-6 flex flex-col justify-between"
      style={{ fontFamily: "'Poppins', sans-serif", minHeight: "250px", paddingBottom: "5rem" }} // Ensure enough height and padding
    >
      {/* Header section with title and Show All button */}
      <div className="flex justify-between items-center">
        <h5 className="info-title text-base font-bold text-left flex items-center text-white">
          <MdOutlineBarChart className="mr-2" />
          Leave Planner
        </h5>
        {/* Show All button, aligned with the title */}
        <Link
          to="/leave-planner"
          className="bg-[#383838] text-[#d0e567] hover:bg-[#484848] transition font-bold rounded-full px-2 py-1 text-xs"
          onClick={onViewAll}
        >
          Show All
        </Link>
      </div>

      <div className="flex items-center justify-between mb-2">
        {/* Pie chart */}
        <div className="area-card-chart">
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
        </div>

        {/* Textual information */}
        <div className="ml-4 text-left text-white space-y-1">
          <div className="text-sm flex items-center">
            <MdCheck className="mr-2 align-middle" style={{ fontSize: "1rem" }} /> {/* Total Plans icon */}
            Total Plans: {totalPlans}
          </div>
          <div className="text-sm flex items-center">
            <MdCheck className="mr-2 align-middle" style={{ fontSize: "1rem" }} /> {/* Open Plans icon */}
            Open Plans: {openPlans}
          </div>
        </div>
      </div>

      {/* Add New button and text at the bottom right */}
      <div className="absolute bottom-4 right-4 flex flex-col items-center">
        {/* Button */}
        <Link
          to="/leave-planner"
          className="bg-[#383838] text-[#d0e567] hover:bg-[#484848] transition font-bold rounded-full flex items-center justify-center w-12 h-12"
          onClick={onNewPlan}
        >
          <MdOutlineAdd className="text-xl" />
        </Link>
        {/* Text Below Button */}
        <span className="text-[#d0e567] hover:bg-[#484848] text-sm mt-2">
          Add New
        </span>
      </div>
    </div>
  );
};

LeavePlannerCard.propTypes = {
  openPlans: PropTypes.number.isRequired,
  totalPlans: PropTypes.number.isRequired,
  onViewAll: PropTypes.func.isRequired,
  onNewPlan: PropTypes.func.isRequired,
};

export default LeavePlannerCard;
