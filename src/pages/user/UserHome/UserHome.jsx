import React from 'react';
import LogoutFunction from '../../../components/LogoutFunction/LogoutFunction';
import { Line } from '@ant-design/plots';
import mockData from '../../../mocks/UserOverview.json';
import Header from '../../../assets/images/UserOverviewHeader3.png';
import Right from '../../../assets/images/UserOverviewRight2.png';
// import { Logout } from '../../../components/LogoutFunction/LogoutFunction';
import './UserHome.less';

const UserHome = () => {
  const logout = LogoutFunction();
  const data = mockData.data;
  const config = {
    data,
    xField: 'year',
    yField: 'Tổng chi',
    label: {},
    point: {
      size: 5,
      shape: 'diamond',
      style: {
        fill: 'white',
        stroke: '#5B8FF9',
        lineWidth: 2,
      },
    },
    tooltip: {
      showMarkers: false,
    },
    state: {
      active: {
        style: {
          shadowBlur: 4,
          stroke: '#000',
          fill: 'red',
        },
      },
    },
    interactions: [
      {
        type: 'marker-active',
      },
    ],
  };
  return (
    <div className='page-user-overview'>

      <div className='left-user-overview'>
        <div>
          <img
            src={Header}
            alt='ahihi'
            className='image-header-user-overview'
          />
        </div>
        <div className='user-overview-chart'>
          <Line {...config} />
        </div>
      </div>

      <div>
        <img
          src={Right}
          alt='ahihi'
          className='image-right-user-overview'
        />
      </div>
    </div>
  )
};

export default UserHome;
