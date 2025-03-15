import React from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { FaMoneyBill, FaUsers, FaChartLine, FaHandshake } from 'react-icons/fa';

const data = [
  { name: 'Jan', sales: 4000, users: 2400 },
  { name: 'Feb', sales: 3000, users: 1398 },
  { name: 'Mar', sales: 2000, users: 9800 },
  { name: 'Apr', sales: 2780, users: 3908 },
  { name: 'May', sales: 1890, users: 4800 },
  { name: 'Jun', sales: 2390, users: 3800 },
  { name: 'Jul', sales: 3490, users: 4300 },
];

const pieData = [
  { name: 'Active', value: 400 },
  { name: 'Inactive', value: 300 },
  { name: 'Pending', value: 300 },
  { name: 'Banned', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const AdminLanding = () => {
  const cardData = [
    { title: "Today's Money", value: '$53k', icon: <FaMoneyBill className='text-gray-100 text-3xl' />, change: '+55% than last week', changeColor: 'text-green-500' },
    { title: "Today's Users", value: '2,300', icon: <FaUsers className='text-gray-100 text-3xl' />, change: '+3% than last month', changeColor: 'text-green-500' },
    { title: 'New Clients', value: '3,462', icon: <FaHandshake className='text-gray-100 text-3xl' />, change: '-2% than yesterday', changeColor: 'text-red-500' },
    { title: 'Sales', value: '$103,430', icon: <FaChartLine className='text-gray-100 text-3xl' />, change: '+5% than yesterday', changeColor: 'text-green-500' },
  ];

  return (
    <div className='p-6'>
      <h2 className='text-2xl font-semibold mb-4'>Admin Dashboard</h2>
      <div className='grid lg:grid-cols-4 gap-6 mb-6'>
        {cardData.map((card) => (
          <div key={card.title} className='border border-gray-300 shadow-2xl rounded-2xl p-6 bg-white text-black transform transition duration-300 hover:scale-105 hover:shadow-2xl'>
            <div className='p-4 bg-gray-800 bg-opacity-30 rounded-full mb-4'>{card.icon}</div>
            <div>
              <h3 className='text-lg font-medium'>{card.title}</h3>
              <p className='text-3xl font-semibold'>{card.value}</p>
              <p className={`text-sm ${card.changeColor} mt-1`}>{card.change}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='grid lg:grid-cols-3 gap-6'>
        <div className='shadow-lg rounded-2xl p-6 bg-white'>
          <h3 className='text-lg font-semibold mb-2'>Sales Overview</h3>
          <ResponsiveContainer width='100%' height={250}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='name' />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type='monotone' dataKey='sales' stroke='#8884d8' />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className='shadow-lg rounded-2xl p-6 bg-white'>
          <h3 className='text-lg font-semibold mb-2'>User Statistics</h3>
          <ResponsiveContainer width='100%' height={250}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='name' />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey='users' fill='#82ca9d' />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className='shadow-lg rounded-2xl p-6 bg-white'>
          <h3 className='text-lg font-semibold mb-2'>User Status</h3>
          <ResponsiveContainer width='100%' height={250}>
            <PieChart>
              <Pie data={pieData} cx='50%' cy='50%' outerRadius={80} fill='#8884d8' dataKey='value'>
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AdminLanding;
