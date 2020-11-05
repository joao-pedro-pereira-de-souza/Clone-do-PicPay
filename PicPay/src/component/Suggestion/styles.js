import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs(()=> ({
    contentContainerStyle:{
        alignItems:'center',
        paddingLeft: 16

    }
}))`

    background: #1e222b;
    height: 130px;

`;

export const Options = styled.TouchableOpacity`

    width: 80px;
    margin-right: 16px;
    align-items:center;

`;

export const Img = styled.Image``;
export const Label = styled.Text`

    color:#fff;
    margin-top: 8px;
    font-weight: bold;
    font-size: 14px

`;