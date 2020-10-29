import React from "react";
import styled from "styled-components";
import { Route, Switch, withRouter } from "react-router-dom";
import Header from "./Components/Header/Header";
import MainDragDropContext from "./Components/Main/MainDragDropContext";
import Footer from "./Components/Footer/Footer";
import Global from "./styles/global";
import EditorContainer from "./Components/Editor/EditorContainer";
import { useWindowSize } from "./utils/useWindowSize";

const Wrapper = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	min-width: 320px;
`;

const App = () => {
	const width = useWindowSize()[0];

	return (
		<>
			<Global />
			<Wrapper>
				<Header />
				<Switch>
					<Route path="/editor/:taskId?" render={() => <EditorContainer />} />
					<Route path="/" render={() => <MainDragDropContext />} />
					<Route component={MainDragDropContext} />
				</Switch>
				{width > 480 && <Footer />}
			</Wrapper>
		</>
	);
};

export default withRouter(App);
