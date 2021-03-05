import React from 'react'
import style from './modules/RestorantHeader.module.css'

import { Card, Typography, Button } from 'antd';
const { Title, Text } = Typography;

export default function RestorantHeader({bgImage, title, info, time}) {
    const titleStyle = {
        width: '400px',
        height: '204px',
        background: '#FFFFFF',
        'box-shadow': '0px 0px 16px rgba(117, 117, 117, 0.2)',
        'border-radius': '2px',
        margin : '80px 0 0 81px'
    }
    
    return(
        <div className={style.container}>
            <Card style={titleStyle}>
                <Title  style={{ "margin-top": 16 }} level={3}>{title}</Title>
                <Text style={{ "margin": '4px 20px 0 0' }} type="secondary">{info}</Text>
                <Button type="primary" shape="round" value={time} style={{'background': '#262626', border: '1px solid #262626'}}>
                    {time}
                </Button>
            </Card>
            <img src={bgImage} style={{width: '100%', margin: ' -284px 0 0 0'}} alt=""/>
 
        </div>
    )
}