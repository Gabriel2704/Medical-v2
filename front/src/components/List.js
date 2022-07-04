import { List } from 'antd';
import React from 'react';
import '../css/list.css';

const App = ({ doctori }) => (
    <>
        <div className="container-list">
            <List
                header='Doctori'
                bordered
                className='list'
                dataSource={doctori.map(doctor => (
                    doctor.id + ' - ' + doctor.name + ' - ' + doctor.email
                ))}
                renderItem={(item) => <List.Item>{item}</List.Item>}
            />
        </div>
    </>
);

export default App;