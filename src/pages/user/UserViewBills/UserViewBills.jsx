import { Card, Col, Pagination, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { getAllBillOneUser } from './../../../services/getAllBillOneUser';
import './UserViewBills.less';

function UserViewBills() {

  const [current, setCurrent] = useState(1);
  const [getPage, setGetPage] = useState({
    PageIndex: 1,
    PageSize: 4,
    userId: 1
   });

  const [getParams, setGetParams] = useState({
   });


  useEffect(() => {
    getAllBillOneUser(getPage)
        .then((data) => {
          setGetParams(data);
        })
        .catch((err) => console.log(err));
    },
    [getPage]);

  const onChangePaging = (page) =>{
    setCurrent(page);
    setGetPage({
      PageIndex: page,
      PageSize: 4,
      userId: 1
    })
    console.log(getPage);
  }
  const total = (getParams.totalRecord * 10) % 4 + 10;
  return (      
      <div className='page-view-bill'>
        
        <div className='all-card-wrapper'>
          <Row>
            {getParams.items?.map((bill) => (
              <Col span={12}>
                <Card title={bill.billId} bordered={false} style={{margin: '10px'}} headStyle={{color: '#1890FF'}}>
                  <p className='des-page-view-bills'>{bill.description}</p>
                  <p><b>Loại hàng hóa: </b>{bill.categoryName}</p>
                  <p><b>Khối lượng: </b>{bill.weight} Kg</p>
                  <p><b>Tổng thanh toán: </b>{bill.price}. 000 VNĐ</p>
                  <p><b>Bưu cục gửi: </b>{bill.startDepartmentAddress}</p>
                  <p><b>Bưu cục nhận: </b>{bill.destinationDepartmentAddress}</p>
                  <p><b>Địa chỉ chi tiết: </b>{bill?.address}</p>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
       
        <Pagination defaultCurrent={1} total={total} onChange={onChangePaging} current={current}/>
      </div>
 
  )
}

export default UserViewBills