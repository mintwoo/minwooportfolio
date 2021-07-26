import React from 'react';
import styled from 'styled-components';
import { Modal } from 'react-bootstrap';
import { Button } from '../../../components';

const S = {
	Wrapper: styled.footer`
		width: 100%;
		max-width: 767px;
		margin: auto;
		padding: 120px 30px;
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

const Footer = () => {
	const [ isQandA, setIsQandA ] = React.useState(false);
	const [ isTitle, setIsTitle ] = React.useState({ title: '', body: '' });

	return (
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
				<S.MenuItem
					onClick={() => {
						setIsQandA(true);
						setIsTitle({
							title: 'HTML',
							body: 'HTML의 제 기준 역량 %는 75%입니다 :)'
						});
					}}
				>
					HTML
				</S.MenuItem>
				<S.MenuItem
					onClick={() => {
						setIsQandA(true);
						setIsTitle({
							title: 'CSS',
							body: 'CSS의 제 기준 역량 %는 75%입니다 :)'
						});
					}}
				>
					CSS
				</S.MenuItem>
				<S.MenuItem
					onClick={() => {
						setIsQandA(true);
						setIsTitle({
							title: 'React',
							body: 'React의 제 기준 역량 %는 80%입니다 :)'
						});
					}}
				>
					React
				</S.MenuItem>
				<S.MenuItem
					onClick={() => {
						setIsQandA(true);
						setIsTitle({
							title: 'ReactNative',
							body: 'ReactNative의 제 기준 역량 %는 92%입니다 :)'
						});
					}}
				>
					ReactNative
				</S.MenuItem>
				<S.MenuItem
					onClick={() => {
						setIsQandA(true);
						setIsTitle({
							title: 'Node.js',
							body: 'Node.js의 제 기준 역량 %는 72%입니다 :)'
						});
					}}
				>
					Node.js
				</S.MenuItem>
				<S.MenuItem
					onClick={() => {
						setIsQandA(true);
						setIsTitle({
							title: 'JavaScript',
							body: 'JavaScript의 제 기준 역량 %는 90%입니다 :)'
						});
					}}
				>
					JavaScript
				</S.MenuItem>
			</S.Menu>

			<S.Menu>
				<S.MenuTitle>Project</S.MenuTitle>
				<S.MenuItem
					onClick={() => {
						setIsQandA(true);
						setIsTitle({
							title: '단지유 어플',
							body: '아파트마다 공동구매 및 서비스가 추가된 쇼핑몰'
						});
					}}
				>
					단지유 어플
				</S.MenuItem>
				<S.MenuItem
					onClick={() => {
						setIsQandA(true);
						setIsTitle({
							title: '단지유 관리자 사이트',
							body: '단지유 어플 배달 및 데이터 관리 페이지'
						});
					}}
				>
					단지유 관리자 사이트
				</S.MenuItem>
				<S.MenuItem
					onClick={() => {
						setIsQandA(true);
						setIsTitle({
							title: '단지유 판매자 어플',
							body: '단지유 어플 배달 완료시 데이터 전송 및 상품 관리 어플'
						});
					}}
				>
					단지유 판매자 어플
				</S.MenuItem>
				<S.MenuItem
					onClick={() => {
						setIsQandA(true);
						setIsTitle({
							title: 'On Your Mark 어플',
							body: '휴대폰 위치 기반으로 출근 및 퇴근 어플'
						});
					}}
				>
					On Your Mark 어플
				</S.MenuItem>
				<S.MenuItem
					onClick={() => {
						setIsQandA(true);
						setIsTitle({
							title: '단지유 사이트',
							body: '단지유 소개 페이지'
						});
					}}
				>
					단지유 사이트
				</S.MenuItem>
			</S.Menu>
			<S.Bottom>
				<span>minwoo © 2021</span>
			</S.Bottom>
			<Modal show={isQandA} onHide={() => setIsQandA(false)}>
				<Modal.Header closeButton>
					<Modal.Title>{isTitle.title}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<p>{isTitle.body}</p>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={() => setIsQandA(false)}>닫기</Button>
				</Modal.Footer>
			</Modal>
		</S.Wrapper>
	);
};

export default Footer;
