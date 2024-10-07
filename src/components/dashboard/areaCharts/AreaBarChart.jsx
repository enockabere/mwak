/** @format */

import {useContext} from "react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import {ThemeContext} from "../../../context/ThemeContext"
import {FaArrowUpLong} from "react-icons/fa6"
import {LIGHT_THEME} from "../../../constants/themeConstants"
import "./AreaCharts.scss"

const data = [
  {
    leave: "Annual",
    taken: 10,
    total: 21,
  },
  {
    leave: "Paternity",
    taken: 2,
    total: 15,
  },
  {
    leave: "Maternity",
    taken: 35,
    total: 90,
  },
  {
    leave: "Sick",
    taken: 90,
    total: 70,
  },
  {
    leave: "Study",
    taken: 55,
    total: 80,
  },
  {
    leave: "Compassionate",
    taken: 30,
    total: 50,
  },
  {
    leave: "Annual",
    taken: 32,
    total: 75,
  },
  {
    leave: "Paternity",
    taken: 62,
    total: 86,
  },
  {
    leave: "Maternity",
    taken: 55,
    total: 78,
  },
]

const AreaBarChart = () => {
  const {theme} = useContext(ThemeContext)

  const formatTooltipValue = (value) => {
    return `${value}`
  }

  const formatYAxisLabel = (value) => {
    return `${value}`
  }

  const formatLegendValue = (value) => {
    return value.charAt(0).toUpperCase() + value.slice(1)
  }

  return (
    <div className='bar-chart'>
      <div className='bar-chart-info'>
        <h5 className='bar-chart-title'>Leave Usage by Type</h5>
        <div className='chart-info-data'>
          <div className='info-data-value'>1 day</div>
          <div className='info-data-text'>
            <FaArrowUpLong />
            <p>5% than last month.</p>
          </div>
        </div>
      </div>
      <div className='bar-chart-wrapper'>
        <ResponsiveContainer width='100%' height='100%'>
          <BarChart
            width={500}
            height={200}
            data={data}
            margin={{
              top: 5,
              right: 5,
              left: 0,
              bottom: 5,
            }}
          >
            <XAxis
              padding={{left: 10}}
              dataKey='leave'
              tickSize={0}
              axisLine={false}
              tick={{
                fill: `${theme === LIGHT_THEME ? "#676767" : "#f3f3f3"}`,
                fontSize: 14,
              }}
            />
            <YAxis
              padding={{bottom: 10, top: 10}}
              tickFormatter={formatYAxisLabel}
              tickCount={6}
              axisLine={false}
              tickSize={0}
              tick={{
                fill: `${theme === LIGHT_THEME ? "#676767" : "#f3f3f3"}`,
              }}
            />
            <Tooltip
              formatter={formatTooltipValue}
              cursor={{fill: "transparent"}}
            />
            <Legend
              iconType='circle'
              iconSize={10}
              verticalAlign='top'
              align='right'
              formatter={formatLegendValue}
            />
            <Bar
              dataKey='total'
              fill='#475be8'
              activeBar={false}
              isAnimationActive={false}
              barSize={24}
              radius={[4, 4, 4, 4]}
            />
            <Bar
              dataKey='taken'
              fill='#e3e7fc'
              activeBar={false}
              isAnimationActive={false}
              barSize={24}
              radius={[4, 4, 4, 4]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default AreaBarChart
