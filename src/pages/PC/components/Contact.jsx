import React, { useState } from 'react';
import styled from 'styled-components';
import { Form } from 'react-bootstrap';
import { Button } from '../../../components';
import { useScrollFadeIn } from '../../../hooks';

const S = {
	Wrapper: styled.section`
		width: 100%;
		width: 1180px;
		margin: auto;
		padding: 120px 0;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	`,
	Image: styled.div`
		width: 580px;
		height: 580px;
		background: no-repeat center/cover url(${(props) => props.image});
	`,
	TextWrapper: styled.div`
		box-sizing: border-box;
		width: 580px;
		padding-left: 50px;
		display: flex;
		flex-direction: column;
		justify-content: center;
	`,
	Label: styled.p`
		display: inline-block;
		${(props) => props.theme.typography.label};
		color: ${(props) => props.theme.palette.primary};
		margin-bottom: 1rem;
	`,
	Title: styled.h2`
		${(props) => props.theme.typography.subtitle};
		color: ${(props) => props.theme.palette.black};
		margin-bottom: 1rem;
	`,
	Description: styled.p`
		${(props) => props.theme.typography.description};
		color: ${(props) => props.theme.palette.gray};
		margin-bottom: 2rem;
	`,
	Form: styled.form`
		display: flex;
		flex-direction: column;
		input {
			margin-bottom: 1rem;
		}
		button {
			width: 50%;
		}
	`
};

const Contact = (props) => {
	const { firebase } = props;
	const [ isTitle, setIsTitle ] = useState('');
	const [ isMemo, setIsMemo ] = useState('');
	const [ isAnswer, setIsAnswer ] = useState('');

	const animatedItem = {
		0: useScrollFadeIn('up', 1, 0),
		1: useScrollFadeIn('up', 1, 0.2),
		2: useScrollFadeIn('up', 1, 0.3),
		3: useScrollFadeIn('up', 1, 0.4)
	};

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
			});
	};

	return (
		<S.Wrapper>
			<S.Image
				image={
					'https://firebasestorage.googleapis.com/v0/b/portfolio-b7e94.appspot.com/o/img-contact.jpg?alt=media&token=7f7290e6-ff14-46e0-bbad-a8868c5c8a94'
				}
			/>
			<S.TextWrapper>
				<S.Label {...animatedItem[0]}>Q & A</S.Label>
				<S.Title {...animatedItem[1]}>
					제 포트폴리오에
					<br />
					대한 궁금한게
					<br />
					있으면 물어봐주세요.
				</S.Title>
				<S.Description {...animatedItem[2]}>무엇이든 다 물어봐주세요!!</S.Description>
				<S.Form {...animatedItem[3]} onSubmit={onSubmit}>
					<Form.Group>
						<Form.Label style={{ marginBottom: 10 }}>질문 제목</Form.Label>
						<Form.Control
							placeholder="질문 제목"
							value={isTitle}
							onChange={(e) => {
								setIsTitle(e.target.value);
							}}
						/>
					</Form.Group>
					<Form.Group>
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
					<Button type="submit">보내기</Button>
				</S.Form>
			</S.TextWrapper>
		</S.Wrapper>
	);
};

export default Contact;
