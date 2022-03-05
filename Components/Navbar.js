import Badge from "@material-ui/core/Badge";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import Styled from "styled-components";



const Container = Styled.div`
    height: 40px;
    margin-bottom:15px;
    // border-bottom: 1px solid lightgray;

`;
const Wrapper = Styled.div`
    display: flex;
    justify-content: space-between;
    height:40px;
    margin: 0;
`
const Left = Styled.div`
   flex: 1;
   display:flex;
   align-items: center;
`

const Language = Styled.span`
  font-size: 14px;
  cursor: pointer;
`
const SearchContainer= Styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    padding:5px;
    margin-left:25px;

`
const Input = Styled.input `
    border:none;
`
const Center = Styled.div`
    flex: 1;
    text-align:center;
   
`;
const Logo = Styled.h1`
    font-weight: 900 !important;
    margin:0;
    
`
const Right = Styled.div`
  flex: 1;
  display:flex;
  text-align:center;
  justify-content: flex-end;
  margin: 0px;
 
`
const MenuItem = Styled.div`
    font-size:14px;
    margin-left: 10px;
    padding: 10px 0;
`

function Navbar() {
  return (
		<Container>
			<Wrapper>
				<Left>
					<Language>EN</Language>
					<SearchContainer>
						<Input />
						<SearchIcon style={{color: "gray", fontSize: "16px" }}/>
					</SearchContainer>
				</Left>
				<Center>
					<Logo>Kinte Chai</Logo>
				</Center>
				<Right>
					<MenuItem>Register</MenuItem>
					<MenuItem>Sign In</MenuItem>
					<MenuItem>
						<Badge badgeContent={4} color="primary">
							<ShoppingCartOutlinedIcon/>
						</Badge>
					</MenuItem>
				</Right>
			</Wrapper>
		</Container>
	);
}

export default Navbar;
