/** @format */

import AreaCard from "./AreaCard"
import "./AreaCards.scss"

const AreaCards = () => {
  return (
    <section className='content-area-cards'>
      <AreaCard
        colors={["#e4e8ef", "#2596be"]}
        percentFillValue={80}
        cardInfo={{
          title: "Total Leave Balance",
          value: "4.5 days",
          text: "You have taken 16.5 leave days to date.",
        }}
      />
      <AreaCard
        colors={["#e4e8ef", "#4ce13f"]}
        percentFillValue={20}
        cardInfo={{
          title: "Total Leave Accrued",
          value: "4 days",
          text: "Next Accrual Date 1st October, 2024",
        }}
      />
      <AreaCard
        colors={["#e4e8ef", "#f29a2e"]}
        percentFillValue={90}
        cardInfo={{
          title: "Leave Utilization Statistics",
          value: "90%",
          text: "Leave used relative to the total",
        }}
      />
    </section>
  )
}

export default AreaCards
