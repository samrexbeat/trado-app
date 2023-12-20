import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";
  
  const data = [
    {
      name: "Jan",
      x: 4000,
      y: 2400,
      amt: 2100
    },
    {
      name: "Feb",
      x: 3000,
      y: 1398,
      amt: 2210
    },
    {
      name: "Mar",
      x: 2000,
      y: 9800,
      amt: 2290
    },
    {
      name: "Apr",
      x: 2780,
      y: 3908,
      amt: 2000
    },
    {
      name: "May",
      x: 1890,
      y: 4800,
      amt: 2181
    },
    {
      name: "Jun",
      x: 2390,
      y: 3800,
      amt: 2500
    },
    {
      name: "Jul",
      x: 3490,
      y: 4300,
      amt: 2100
    },
    {
        name: "Aug",
        x: 3490,
        y: 4300,
        amt: 2100
      },
      {
        name: "Sep",
        x: 3490,
        y: 4300,
        amt: 2100
      },
      {
        name: "Oct",
        x: 3490,
        y: 4300,
        amt: 2100
      },
      {
        name: "Nov",
        x: 3490,
        y: 4300,
        amt: 2100
      },
      {
        name: "Dec",
        x: 3490,
        y: 4300,
        amt: 2100
      },
  ];
  
  export default function BarChartn() {
    return (
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 10,
          right: 10,
          left: 0,
          bottom: 8
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="x" fill="#506056" />
        <Bar dataKey="y" fill="#a5c2b0" />
      </BarChart>
    );
  }
  
