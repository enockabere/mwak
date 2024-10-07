/** @format */

import { AreaCards, AreaCharts, AreaTop } from "../../components";
import LeavePlannerCard from "../../components/dashboard/leaveCards/leavePlannerCard";
import LeaveApplicationCard from '../../components/dashboard/leaveCards/LeaveApplicationCard'
import TimesheetCard from '../../components/dashboard/timesheetCard/TimesheetCard'

const Dashboard = () => {
  const totalPlans = 12;
  const openPlans = 4;

  const openApps = 3;
  const pendingApps = 2;
  const approvedApps = 5;

  const totalHours = 40;
  const assignedProjects = 3; 

  return (
    <div className="content-area">
      {/* Top section */}
      <AreaTop />
      
      {/* Dashboard Grid */}
      <div className="dashboard-grid grid grid-cols-1 md:grid-cols-3 gap-2">
        <LeavePlannerCard
          openPlans={openPlans}
          totalPlans={totalPlans}
          onViewAll={() => console.log("View all plans")}
          onNewPlan={() => console.log("New plan initiated")}
        />
        <LeaveApplicationCard
          openApps={2}  // Example data
          pendingApps={pendingApps}  // Example data
          approvedApps={approvedApps}  // Example data
          onViewAll={() => console.log("View all applications")}
          onNewApp={() => console.log("New application initiated")}
        />
        <TimesheetCard
          totalHours={totalHours}
          assignedProjects={assignedProjects}
          onViewAllTimesheets={() => console.log("View all timesheets")}
          onAddTimesheet={() => console.log("Add new timesheet")}
        />
      </div>

      {/* AreaCards and AreaCharts can also be part of the grid if you like */}
      <AreaCards />
      <AreaCharts />
    </div>
  );
};

export default Dashboard;
