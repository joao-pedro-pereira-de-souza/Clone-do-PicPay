import React,{useState} from 'react';

import {Switch} from 'react-native'

import {Wrapper ,
   Header , 
   HeaderContainer , 
   Title , 
   BalanceContainer , 
   Value , 
   Bold , 
   EyeButton , 
   Info,
  Actions,
  Action,
  ActionLabel, 
  UseBalance,
  UseBalanceTilte,
  PaymentMethods,
  PaymentMethodsTitle,
  Card,
  CardBody,
  CardDetails,
  CardTitle,
  CardInfo,
  Img,
  AddButton,
  AddLabel,
  UserTicketContainer,
  UserTicketButton,
  UserTicketButtonLabel,
  
  } from './styles';

import {Feather , MaterialCommunityIcons , FontAwesome , AntDesign} from '@expo/vector-icons';

import creditCard from '../../images/credit-card.png'

export default function Wallet() {

  const[isVisible , setIsVisible ] = useState(true);

  const[useBalance , setBalance ] = useState(true);

  function handleToggleVisiblility(){
    setIsVisible((prevState)=> !prevState);
  }

  function handleToggleBalance(){
    setBalance((prevState)=> !prevState);
  }


 return (
   
    <Wrapper showsHorizontalScrollIndicator={false}>

      <Header colors={useBalance ? ['#52e78c' , '#1ab563'] : ['#d3d3d3' , '#868686']}>

        <HeaderContainer>

          <Title>Saldo PicPay</Title>

          <BalanceContainer>

            <Value>
              R$ <Bold>{isVisible ? '0,00' : '----'}</Bold>
            </Value>

            <EyeButton onPress={handleToggleVisiblility}>
              <Feather name={isVisible ? 'eye' : 'eye-off'} size={28} color='#fff'/>
            </EyeButton>

          </BalanceContainer>

          <Info>
            seu saldo está rendendo 100% do CDI
          </Info>

          <Actions>
              <Action>

                <MaterialCommunityIcons name="cash" size={20} color="#fff"/>
                <ActionLabel>Adicionar</ActionLabel>

              </Action>

              <Action>

                <FontAwesome name="bank" size={20} color="#fff"/>
                <ActionLabel>Adicionar</ActionLabel>

              </Action>

          </Actions>

        </HeaderContainer>

      </Header>

      <UseBalance>
          <UseBalanceTilte>
            Usar o saldo ao pagar
          </UseBalanceTilte>

          <Switch
          value={useBalance}

          onValueChange={handleToggleBalance}
          
          /> 
        </UseBalance>

        <PaymentMethods>
          <PaymentMethodsTitle>
            Forma de pagamento
          </PaymentMethodsTitle>

          <Card>

           <CardBody>
           <CardDetails>

              <CardTitle>Cadastra-se o seu cartão</CardTitle>

              <CardInfo>

                Cadastra-se o seu cartão de crédito para poder fazer pagamentos mesmo quando não tiver saldo no seu PicPay. 
                
              </CardInfo>

              </CardDetails>

              <Img source={creditCard} resizeMode='contain'/>

           </CardBody>

           <AddButton>

             <AntDesign name='pluscircleo' size={30} color='#0db060'/>

             <AddLabel>
               Adicionar o cartão de crédito
             </AddLabel>

           </AddButton>

          </Card>


          <UserTicketContainer>
                
              <UserTicketButton>

                  <MaterialCommunityIcons name='ticket-outline' size={20} color='#0db060'/>

                  <UserTicketButtonLabel>
                    usar código promocional
                  </UserTicketButtonLabel>

                  </UserTicketButton>

              </UserTicketContainer>

        </PaymentMethods>
      
    </Wrapper>
  );
}