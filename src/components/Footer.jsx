import React from 'react';
import styled from 'styled-components';

const S = {
	Wrapper: styled.footer`
		width: 100%;
		max-width: 1180px;
		margin: auto;
		padding: 120px 0 30px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		flex-wrap: wrap;
	`,
	Info: styled.div`
		flex: 0 0 30%;
		max-width: 30%;
	`,
	Logo: styled.span`
		${(props) => props.theme.typography.label};
		color: ${(props) => props.theme.palette.darkgray};
		display: inline-block;
		font-weight: 900;
		font-size: 1.5rem;
		margin-bottom: 2rem;
	`,
	Text: styled.p`
		${(props) => props.theme.typography.body};
		color: ${(props) => props.theme.palette.gray};
		span {
			display: block;
			margin-bottom: 1.5rem;
		}
	`,
	Menu: styled.ul`
		flex: 0 0 20%;
		max-width: 20%;
		display: flex;
		flex-direction: column;
	`,
	MenuTitle: styled.h4`
		${(props) => props.theme.typography.label};
		color: ${(props) => props.theme.palette.secondary};
		margin-bottom: 2.5rem;
	`,
	MenuItem: styled.a`
		${(props) => props.theme.typography.body};
		color: ${(props) => props.theme.palette.gray};
		display: inline-block;
		margin-bottom: 1.5rem;
		cursor: pointer;
		&:hover {
			opacity: 0.5;
		}
	`,
	Subscribe: styled.div`
		flex: 0 0 30%;
		max-width: 30%;
		p {
			line-height: 1.5;
		}
	`,
	Form: styled.form`
		input {
			width: 60%;
		}
		margin-bottom: 1rem;
	`,
	Bottom: styled.div`
		width: 100%;
		color: ${(props) => props.theme.palette.gray};
		margin-top: 120px;
		padding-top: 30px;
		display: flex;
		justify-content: center;
		border-top: 1px solid ${(props) => props.theme.palette.lightgray};
		span {
			${(props) => props.theme.typography.caption};
		}
	`
};

const Footer = () => (
	<S.Wrapper>
		<S.Info>
			<S.Logo>Lorem</S.Logo>
			<S.Text>
				<span>wja02055@gmail.com</span>
				<span>010 6851 0353</span>
				<span>경상북도 칠곡군 금오대로 1길 6-13 301</span>
			</S.Text>
		</S.Info>
		<S.Menu>
			<S.MenuTitle>Use Programming Language</S.MenuTitle>
			<S.MenuItem>HTML</S.MenuItem>
			<S.MenuItem>CSS</S.MenuItem>
			<S.MenuItem>React</S.MenuItem>
		</S.Menu>
		<S.Menu>
			<S.MenuTitle>.</S.MenuTitle>
			<S.MenuItem>ReactNative</S.MenuItem>
			<S.MenuItem>Node.js</S.MenuItem>
			<S.MenuItem>JavaScript</S.MenuItem>
		</S.Menu>
		<S.Menu>
			<S.MenuTitle>Project</S.MenuTitle>
			<S.MenuItem>단지유 앱</S.MenuItem>
			<S.MenuItem>단지유 관리자 사이트</S.MenuItem>
			<S.MenuItem>단지유 판매자 앱</S.MenuItem>
		</S.Menu>
		<S.Bottom>
			<span>minwoo © 2021</span>
		</S.Bottom>
	</S.Wrapper>
);

export default Footer;
