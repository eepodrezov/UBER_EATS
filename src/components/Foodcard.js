import React from 'react'
import style from './modules/Foodcard.module.css'

import { Card, Typography } from 'antd';
const { Title, Text } = Typography;

export default function Foodcard({ cardImg, title, info, price }) {
    return (
        <div className={style.container}>
            <Card style={{ width: "100%" }}>
                <div className={style.card}>
                    <div className={style.col1}>
                        <Title style={{ "margin-top": 16 }} level={3}>{title}</Title>
                        <Text style={{ "margin-top": 4 }} type="secondary">{info}</Text>
                        <br />
                        <Text style={{ "margin-top": 4 }}>{price}</Text>
                    </div>
                    <div className={style.col2}>
                        <img src={cardImg} alt="Card Image" />
                    </div>
                </div>

                

            </Card>
        </div>
    )
}