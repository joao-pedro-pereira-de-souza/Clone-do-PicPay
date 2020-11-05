import React from 'react';

import{Feather , MaterialCommunityIcons , AntDesign} from '@expo/vector-icons'
import {Container , 
    Header , 
    Title , 
    Card , 
    CardHeader , 
    Avatar , 
    Description , 
    Bold , 
    CardBody , 
    UserName , 
    CardFooter,
    Details,
    Value ,
    Divider, 
    DateLabel,
    Actions,
    Options,
    OptionLabel
} from './styles'

import avatar from '../../images/avatar.png';

export default function Activities() {
 return (
     <Container>
         <Header>

             <Title>Atividades</Title>

         </Header>
         <Card>
             <CardHeader>
                 <Avatar source={avatar}/>
                 <Description>
                     <Bold>Você</Bold> pagou a <Bold>@joaopedro29</Bold>
                 </Description>
             </CardHeader>

             <CardBody>
                 <UserName>Joao</UserName>
             </CardBody>

             <CardFooter>
                 <Details>
                     <Value>R$ 18,00</Value>

                     <Divider/>

                     <Feather name='lock' color='#fff' size={14}/>
                    <DateLabel>há 2 anos</DateLabel>

                 </Details>

                 <Actions>

                     <Options>
                         <MaterialCommunityIcons name="comment-outline" size={14} color='#fff'/>
                         <OptionLabel>0</OptionLabel>
                     </Options>

                     <Options>
                         <AntDesign name="hearto" size={14} color='#fff'/>
                         <OptionLabel>0</OptionLabel>
                     </Options>

                 </Actions>

             </CardFooter>

         </Card>

     </Container>
 )
}