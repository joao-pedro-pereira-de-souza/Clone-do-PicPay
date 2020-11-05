import React from 'react';
import { View , Text} from 'react-native';
import {Wrapper , Header , BalanceContainer , Container , BalanceTitle , Balance} from './style';

import {MaterialCommunityIcons , AntDesign} from '@expo/vector-icons';

import Suggestion from '../../component/Suggestion/Index';
import Activities from '../../component/Activities/Index';
import Tips from '../../component/Tips/Index'
import Banner from '../../component/Banner/Index';
export default function Home() {
 return (

  <Wrapper>

    <Container>
    <Header>

   <MaterialCommunityIcons name="qrcode-scan" size={30} color="#10c86c"/>

   <BalanceContainer>

     <BalanceTitle>Meu saldo</BalanceTitle>
     <Balance>$0</Balance>

   </BalanceContainer>

   <AntDesign name="gift" size={30} color="#10c86c"/>

   </Header>

      <Suggestion/>
      <Activities/>
      <Tips/>
      <Banner/>

   </Container>
  </Wrapper>
   

  );
}