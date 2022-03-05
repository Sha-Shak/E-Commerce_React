import Styled from "styled-components";
const Container = Styled.div`
    height:30px;
    background-color: #3b8beb;
    color:white;
    text-align:center;
    padding-top: 10px;

` 


function Announcement() {
  return (

    <Container>
        Super deal! Free Shipping on Orders over $50
    </Container>

  );
}

export default Announcement;
