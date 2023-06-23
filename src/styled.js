
import styled from "styled-components"

export const Panell = styled.div`
width: 35%;
margin: 30px auto 30px;
border: 4px solid black;
border-radius: 14px;
padding: 20px;
`

export const DivPrincipal = styled.div `
text-align:center;
margin: 30px;
`

export const InputQuantitat = styled.input`
border: 2px solid transparent;
width: 40px
`

export const BotoMesMenys = styled.button`
border: 2px solid transparent;
border-radius:6px;
padding: 18px, 12px;
margin:5px;
color: white;
background-color: #F36835;
min-width:30px
`

export const BotoInf = styled(BotoMesMenys)`
background-color: #AAB0A0;
`

export const Container = styled.div`
text-align:center;
color:white;
align-items: center;
align-content: center;
background-color:#e7a61a;
margin:200px auto;
max-width:500px;
border: grey 3px solid;
border-radius: 30px;
h1{color:yellow; }
p{margin: 10px 30px; text-align: justify}
box-shadow: -2px 34px 96px 123px rgba(66,9,66,0.51);
padding-bottom:35px
`

export const BotoEnrere = styled.button`
width: 12%;
margin:  auto;
border-radius: 14px;
border: 2px solid transparent;
border-radius:6px;
color: white;
background-color:  rgba(66,9,66,0.51);
padding:10px;
`

export const BotoEndavant = styled(BotoEnrere)`
width: 55%;
margin: 20px auto;
padding:15px;
border: 2px solid grey;
background-color: #869DD5
`

export const InnerPopupContainer= styled.div`

position: relative;
padding:12px;
width: 100%;
max-width:640px;
background-color:white;
border:3px solid black;
border-radius: 20px;
`


export const BotoEnorme= styled.button`

position: fixed;
top:0;
left:0;
width: 100%;
height: 100vh;
background-color: rgba(0,0,0,0.4);

display:flex;
justify-content:center;
align-items:center;
`



export const PopupContainer= styled.div`

position: fixed;
top:0;
left:0;
width: 100%;
height: 100vh;
background-color: rgba(0,0,0,0.4);
display:flex;
justify-content:center;
align-items:center;
`
