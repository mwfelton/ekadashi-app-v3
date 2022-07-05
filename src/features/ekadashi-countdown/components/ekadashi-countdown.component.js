import React from "react";
const moment = require('moment');
import { Image, Text } from "react-native";
import { Card, Title, Paragraph } from 'react-native-paper';

import styled from 'styled-components/native'

import ekaData from '../../../ekadashi-2022.json'

let dateArray = []
ekaData.map(day => {dateArray.push(day.date)})
const currentTime = new Date()
let nearestDate;
dateArray.forEach(date => {
    let diff = moment(date).diff(moment(currentTime), 'days');
    if (diff > 0) {
        if (nearestDate) {
            if (moment(date).diff(moment(nearestDate), 'days') < 0) {
                nearestDate = date;
            }
        } else {
            nearestDate = date
        }
    }
})

const countDownFunction = (ekadashiDay) => {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const currentTime = new Date().toDateString()
    let today = new Date(currentTime);
    let ekadashi = new Date(ekadashiDay);
    let diff = ekadashi.getTime() - today.getTime();
    return Math.floor(diff / day)
}

const daysToGo = countDownFunction(nearestDate)

const ekadashiIndex = dateArray.indexOf(nearestDate)
const ekaMoonPhase = ekaData[ekadashiIndex].moonPhase
const ekaType = ekaData[ekadashiIndex].type

const EkadashiDate = () => {
    return (
        <>
        <Card>
          <Text> The next Ekadashi is in {daysToGo} days</Text>
          <Text>{nearestDate}</Text>
          <Text>{ekaMoonPhase}</Text>
          <Text>{ekaType}</Text>
        </Card>
        </>
    )}

export default EkadashiDate;

















// FINALLY RENDERED ALL ARRAY ITEMS

// const EkadashiDate = () => {
//   return (
//       <>
//       <Card>
//           {ekadashi.map((data) => {
//             return (
//               <Paragraph>{data.date}</Paragraph>
//             );
//           })}
//            </Card>
//       </>
//   )}

// export default EkadashiDate;
