import PropTypes from "prop-types";
import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";

const StatisticsGraph = ({
  dataset,
  xAxis,
  series,
  chartSettings,
  width = 500,
  height = 300,
}) => {
  const defaultChartSettings = {
    yAxis: [
      {
        label: "Data",
      },
    ],
    width,
    height,
    sx: {
      [`.${axisClasses.left} .${axisClasses.label}`]: {
        transform: "translate(-20px, 0)",
      },
    },
    ...chartSettings,
  };

  return (
    <div className='w-full lg:w-2/3 px-2 mb-4 flex'>
      <div className='border rounded-lg p-4 flex items-center justify-center flex-grow overflow-auto w-full max-w-full max-h-full'>
        <BarChart
          dataset={dataset}
          xAxis={xAxis}
          series={series}
          {...defaultChartSettings}
          className='w-full h-full'
        />
      </div>
    </div>
  );
};

StatisticsGraph.propTypes = {
  dataset: PropTypes.arrayOf(PropTypes.object).isRequired,
  xAxis: PropTypes.arrayOf(PropTypes.object).isRequired,
  series: PropTypes.arrayOf(PropTypes.object).isRequired,
  chartSettings: PropTypes.object,
  valueFormatter: PropTypes.func,
  width: PropTypes.number,
  height: PropTypes.number,
};

StatisticsGraph.defaultProps = {
  chartSettings: {},
  valueFormatter: (value) => `${value}`,
  width: 500,
  height: 300,
};

export default StatisticsGraph;

