import { Send } from '@material-ui/icons';
import styled from 'styled-components';

const Container = styled.div`
	height: 60vh;
	background-color: #fcf5f5;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;
const Title = styled.h1 `
    font-size:70px;
`
const Description = styled.div`
	padding-bottom: 10px;
    font-size: 24px;
`;
const InputContainer= styled.div`
width:50%;
height:40px
background: white;
justify-content:space-between;
border: thin solid lightgray;
display:flex;


`
const Input = styled.input`
    padding: 10px 30px;
    border: 0;
    text-align:center;
    width:100%;
`
const Button = styled.button`
    background: transparent;
    border: 0;
    background: teal;
    color: white;
    padding: 0 10px;
`


const NewsLetter = () => {
  return (
    <Container>
        <Title>
            Newsletter
        </Title>
        <Description>
            Get timely updates from your favourite products.
        </Description>
        <InputContainer>
            <Input placeholder='Your email'/>
            <Button>
                <Send/>
            </Button>
        </InputContainer>
    </Container>
  )
}

export default NewsLetter