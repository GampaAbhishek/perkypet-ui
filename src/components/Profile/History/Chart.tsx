import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from 'recharts';

const data = [
  { year: 2015, rank: 110 },
  { year: 2016, rank: 140 },
  { year: 2018, rank: 100 },
  { year: 2020, rank: 150 },
  { year: 2022, rank: 120 },
  { year: 2023, rank: 110 },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
            width:'40%',
          background: 'white',
          borderRadius: '8px',
          padding: '6px 10px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
          fontWeight: 'bold',
          color: '#333',
        }}
      >
        {`${payload[0].value} of 201`}
      </div>
    );
  }
  return null;
};

const BreedPopularityChart = () => {
  return (
    <div style={{
      backgroundColor: 'white',
      padding: '1rem',
      borderRadius: '1rem',
      boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
    }}>
      <h4 style={{ color: '#120063', fontWeight: '600', marginBottom: '1rem' }}>
        Breed Popularity Ranking
      </h4>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <XAxis dataKey="year" />
          <YAxis reversed domain={[200, 1]} />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="rank"
            stroke="#4f46e5"
            strokeWidth={3}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BreedPopularityChart;
