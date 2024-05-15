import React from 'react';
import CountUp from 'react-countup';

const statsData = [
  { number: 12023, label: 'No. Students', delay: '0' },
  { number: 49, label: 'No. Teachers', delay: '100' },
  { number: 12, label: 'No. Awards', delay: '200' }
];

const Stats = () => {
  return (
    <div className="row count-numbers mb-5">
      {statsData.map((stat, index) => (
        <div className="col-4 col-lg-4" data-aos="fade-up" data-aos-delay={stat.delay} key={index}>
          <span className="counter d-block">
            <CountUp start={0} end={stat.number} duration={3} separator="," />
            {stat.number >= 1000 ? '+' : ''}
          </span>
          <span className="caption-2">{stat.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Stats;
