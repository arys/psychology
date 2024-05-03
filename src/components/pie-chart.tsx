'use client'
import { ResponsivePie } from "@nivo/pie"

function PieChart(props) {
  return (
    <div {...props}>
      <ResponsivePie
        data={[
          { id: "21-25", value: 111 },
          { id: "26-30", value: 157 },
          { id: "31-40", value: 129 },
        ]}
        sortByValue
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
        cornerRadius={0}
        padAngle={0}
        borderWidth={1}
        borderColor={"#ffffff"}
        enableArcLinkLabels={false}
        arcLabel={(d) => `${d.id}`}
        arcLabelsTextColor={"#ffffff"}
        arcLabelsRadiusOffset={0.65}
        colors={["#2563eb"]}
        theme={{
          labels: {
            text: {
              fontSize: "18px",
            },
          },
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
        }}
        role="application"
      />
    </div>
  )
}

export default PieChart