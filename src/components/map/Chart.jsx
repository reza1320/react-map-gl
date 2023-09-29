import { Chart } from "react-google-charts";





export const data = [
  ["Language", "Speakers (in millions)"],
  [" فروردین", 1.585],
  [" اردیبهشت", 1.1966],
  [" خرداد", 0.4316],
  [" تیر", 0.6791],
  [" مرداد", 0.7791],
  [" شهریور", 0.8968],
  [" مهر", 0.6791],
  [" آبان", 0.5791],
  [" آذر", 0.6791],
  [" دی", 0.4791],
  [" بهمن", 0.6791],
  [" اسفند", 0.7991]
]


export const options = {
  legend: "none",
  pieSliceText: "label",
  title: "1401",
  pieStartAngle: 130,
  height: 694,
  fontSize: 23,
  backgroundColor: '#ffffff',
  chartArea: { left: '25%', top: '11%', width: '50%', height: '80%' },
  enableInteractivity: true,
  is3D: false,
  reverseCategories: false
}




export default function Charts({ detectedProvence }) {
  return (
    <Chart
      chartType="PieChart"
      data={[["Language", "Speakers (in millions)"], ...Object.assign(detectedProvence)[0].amar]}
      options={{ ...options, title: `${Object.assign(detectedProvence)[0]?.year} | ${Object.assign(detectedProvence)[0]?.district}` }}
      width={"100%"}
      height={"400px"}
      className="relative"
    />
  )
}