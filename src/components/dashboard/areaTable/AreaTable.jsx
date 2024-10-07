/** @format */

import AreaTableAction from "./AreaTableAction"
import "./AreaTable.scss"

const TABLE_HEADS = [
  "Leave start date",
  "Leave end date",
  "Return date",
  "Leave type",
  "Status",
  "Reliever",
  "Action",
]

const TABLE_DATA = [
  {
    Leave_start_date: "1st October 2024",
    Leave_end_date: "6th October 2024",
    Return_date: "7th October 2024",
    Leave_type: "Annual",
    Status: "Pending Approval",
    Reliever: "Enock Maeba",
    Action: "Cancel Approval",
  },
]

const AreaTable = () => {
  return (
    <section className='content-area-table'>
      <div className='data-table-info'>
        <h4 className='data-table-title'>Recent Leave Activity</h4>
      </div>
      <div className='data-table-diagram'>
        <table>
          <thead>
            <tr>
              {TABLE_HEADS?.map((th, index) => (
                <th key={index}>{th}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_DATA?.map((dataItem) => {
              return (
                <tr key={dataItem.id}>
                  <td>{dataItem.Leave_start_date}</td>
                  <td>{dataItem.Leave_end_date}</td>
                  <td>{dataItem.Return_date}</td>
                  <td>{dataItem.Leave_type}</td>
                  <td>
                    <div className='dt-status'>
                      <span
                        className={`dt-status-dot dot-${dataItem.Status}`}
                      ></span>
                      <span className='dt-status-text'>{dataItem.Status}</span>
                    </div>
                  </td>
                  <td>${dataItem.Reliever}</td>
                  <td className='dt-cell-action'>
                    <AreaTableAction />
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default AreaTable
