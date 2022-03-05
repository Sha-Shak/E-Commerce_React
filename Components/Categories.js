import styled from "styled-components";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";
const Container = styled.div
`
	display:flex;
`

 export const Categories = () => {
	return (<Container>

			{categories.map(category=> (
				<CategoryItem category={category}></CategoryItem>
			))}

		</Container>);
};
