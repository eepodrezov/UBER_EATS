import React from 'react'
import style from './modules/Foodcards.module.css'
import Foodcard from './Foodcard'



import card1 from '../img/pushkin/card1.png'
import card2 from '../img/pushkin/card2.png'
import card3 from '../img/pushkin/card3.png'
import card4 from '../img/pushkin/card4.png'
import card5 from '../img/pushkin/card5.png'
import card6 from '../img/pushkin/card6.png'

import { Space } from 'antd';

export default function Foodcards() {
    return(
       <div className={style.container}>
           <div className={style.title}>Закуски</div>
           <Space direction="horizontal" wrap>
               <Foodcard cardImg={card1} title='Сельдь на бородинском хлебе' info='С яйцом и огурцом' price='240 ₽'/>
               <Foodcard cardImg={card2} title='Соленья ассорти' info=' ' price='320 ₽'/>
               <Foodcard cardImg={card3} title='Грибы маринованные' info=' ' price='300 ₽'/>
               <Foodcard cardImg={card4} title='Сало домашнее с горчицей' info=' ' price='320 ₽'/>
               <Foodcard cardImg={card5} title='Малосольная семга' info=' ' price='390 ₽'/>
               <Foodcard cardImg={card6} title='Язык говяжий с хреном' info=' ' price='350 ₽'/>
            </Space>
       </div> 
    )
}