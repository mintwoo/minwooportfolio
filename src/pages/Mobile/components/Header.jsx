import React, { useEffect, useState, useCallback } from 'react';
import { Modal, Form } from 'react-bootstrap';
import styled from 'styled-components';
import Button from '../../../components/Button';

const S = {
	Wrapper: styled.div`
		width: 100%;
		position: sticky;
		top: 0;
		z-index: 1000;
		transition: all 0.2s ease-in-out;
		background-color: ${({ isScroll, theme }) => (isScroll ? theme.palette.white : theme.palette.background)};
		box-shadow: ${(props) => (props.isScroll ? '0 0 16px 8px rgba(0, 0, 0, 0.03)' : 'none')};
	`,
	Header: styled.header`
		width: 100%;
		max-width: 767px;
		margin: auto;
		transition: all 0.2s ease-in-out;
		height: ${(props) => (props.isScroll ? '70px' : '100px')};
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	`,
	Logo: styled.span`
		color: ${({ isScroll, theme }) => (isScroll ? theme.palette.black : theme.palette.primary)};
		font-weight: 900;
		font-size: 2rem;
		flex: 0 0 25%;
		max-width: 25%;
	`,
	Navigation: styled.div`
		flex: 0 0 50%;
		max-width: 50%;
		display: flex;
		justify-content: center;
	`,
	NavigationItem: styled.a`
		color: ${(props) => props.theme.palette.primary};
		color: ${({ isScroll, theme }) => (isScroll ? theme.palette.black : theme.palette.primary)};
		margin: 0 1rem;
		cursor: pointer;
		&:hover {
			opacity: 0.5;
		}
	`,
	ButtonWrapper: styled.div`
		flex: 0 0 25%;
		max-width: 25%;
		display: flex;
		justify-content: flex-end;
	`
};

const Header = (props) => {
	const { firebase } = props;
	const [ isScroll, setIsScroll ] = useState(false);
	const [ isQandA, setIsQandA ] = useState(false);
	const [ isTitle, setIsTitle ] = useState('');
	const [ isMemo, setIsMemo ] = useState('');
	const [ isAnswer, setIsAnswer ] = useState('');

	const handleScroll = useCallback(() => {
		if (window.pageYOffset > 0) {
			setIsScroll(true);
		}
		if (window.pageYOffset === 0) {
			setIsScroll(false);
		}
	}, []);

	useEffect(
		() => {
			window.addEventListener('mousewheel', handleScroll);
			return () => {
				window.removeEventListener('mousewheel', handleScroll);
			};
		},
		[ handleScroll ]
	);

	const onSubmit = (e) => {
		e.preventDefault();
		firebase.db
			.collection('QandA')
			.add({
				Title: isTitle,
				Memo: isMemo,
				Answer: isAnswer
			})
			.then(() => {
				alert('질문 감사합니다!');
				setIsMemo('');
				setIsTitle('');
				setIsAnswer('');
				setIsQandA(false);
			});
	};

	return (
		<S.Wrapper isScroll={isScroll}>
			<S.Header isScroll={isScroll}>
				<S.Logo isScroll={isScroll}>Portfolio</S.Logo>
			</S.Header>
			<Modal show={isQandA} onHide={() => setIsQandA(false)}>
				<Modal.Header closeButton>
					<Modal.Title>Q & A</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={onSubmit}>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label style={{ marginBottom: 10 }}>질문 제목</Form.Label>
							<Form.Control
								placeholder="질문 제목"
								value={isTitle}
								onChange={(e) => {
									setIsTitle(e.target.value);
								}}
							/>
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicPassword">
							<Form.Label style={{ marginBottom: 10 }}>질문 내용</Form.Label>
							<Form.Control
								as="textarea"
								placeholder="100자 이내로 입력해주세요."
								value={isMemo}
								onChange={(e) => {
									setIsMemo(e.target.value);
								}}
							/>
						</Form.Group>
						<Form.Group>
							<Form.Label style={{ marginBottom: 10 }}>이메일</Form.Label>
							<Form.Control
								placeholder="회신받을 이메일"
								type={'email'}
								value={isAnswer}
								onChange={(e) => {
									setIsAnswer(e.target.value);
								}}
							/>
						</Form.Group>
						<Button type="submit">Submit</Button>
					</Form>
				</Modal.Body>
			</Modal>
		</S.Wrapper>
	);
};

export default Header;
