import React from 'react';
import styled from 'styled-components';
import { Modal } from 'react-bootstrap';
import { useScrollFadeIn } from '../../../hooks';

const S = {
	Contain: styled.div`
		width: 100%;
		margin: auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 120px 30px;
		background-color: ${(props) => props.theme.palette.background};
	`,
	Wrapper: styled.div`
		width: 100%;
		max-width: 767px;
		margin: auto;
		display: flex;
		flex-direction: column;
		align-items: center;
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
		text-align: center;
		margin-bottom: 4rem;
	`,
	Description: styled.p`
		${(props) => props.theme.typography.description};
		color: ${(props) => props.theme.palette.gray};
		margin-bottom: 4rem;
	`,
	List: styled.ul`
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	`,
	ListItem: styled.li`
		width: 100%;
		height: 380px;
		box-shadow: 0 0 16px 8px rgba(0, 0, 0, 0.03);
		border-radius: 0.5rem;
		display: flex;
		flex-direction: column;
		background-color: ${(props) => props.theme.palette.white};
		margin-bottom: 4rem;
	`,
	ItemImage: styled.div`
		width: 100%;
		height: 200px;
		border-radius: 0.5rem 0.5rem 0 0;
		background: no-repeat center/contain url(${(props) => props.image});
		background-color: ${(props) => props.theme.palette.gray};
	`,
	TextContainer: styled.div`padding: 2rem;`,
	ItemTitle: styled.h3`
		${(props) => props.theme.typography.heading};
		color: ${(props) => props.theme.palette.black};
		margin-bottom: 0.75rem;
	`,
	ItemLabel: styled.p`
		${(props) => props.theme.typography.caption};
		color: ${(props) => props.theme.palette.gray};
		font-weight: 400;
		margin-bottom: 1.5rem;
	`,
	ItemDesciption: styled.p`
		${(props) => props.theme.typography.description};
		margin-bottom: 1.5rem;
	`,
	TextButton: styled.button`
		width: fit-content;
		padding: 10px;
		${(props) => props.theme.typography.textbutton};
		color: ${(props) => props.theme.palette.secondary};
		cursor: pointer;
	`,
	ModalListItem: styled.p`
		${(props) => props.theme.typography.description};
		padding: 1rem 1rem 1rem 0;
		border-bottom: 1px solid ${(props) => props.theme.palette.lightgray};
		span {
			color: ${(props) => props.theme.palette.secondary};
		}
	`,
	ModalImage: styled.div`
		width: 100%;
		height: 400px;
		border-radius: 0.5rem 0.5rem 0 0;
		background: no-repeat center/contain url(${(props) => props.image});
		background-color: ${(props) => props.theme.palette.gray};
	`
};

const WORKS_ITEMS = [
	[
		{
			image:
				'https://firebasestorage.googleapis.com/v0/b/portfolio-b7e94.appspot.com/o/AppFirstimage.jpg?alt=media&token=64a46314-60b4-4145-a454-70f5f29a973d',
			title: '단지유 앱',
			label: '2020.04.26 ~',
			label2: '혼자 개발',
			description: '아파트마다 공동구매 및 서비스가 추가된 쇼핑몰',
			memo: [
				'react native 기반 개발',
				'firebase DB 사용(실시간 데이터 변동 적용)',
				'Google Play 등록 경험(Android)',
				'Play Store 등록 경험(IOS)'
			]
		},
		{
			image:
				'https://firebasestorage.googleapis.com/v0/b/portfolio-b7e94.appspot.com/o/adminpage.jpg?alt=media&token=0b20cd56-afc1-4dd1-a320-cfba303ae8d1',
			title: '단지유 관리자 사이트',
			label: '2020.04.26 ~',
			label2: '혼자 개발',
			description: '단지유 앱 배달 및 데이터 관리 페이지',
			memo: [ 'react 기반 개발', 'firebase DB 사용(실시간 데이터 변동 적용)', 'Docker 사용 경험' ]
		},
		{
			image:
				'https://firebasestorage.googleapis.com/v0/b/portfolio-b7e94.appspot.com/o/sellerpage.jpg?alt=media&token=0449c9c0-e1a0-4a43-99ab-84060ea7379b',
			title: '단지유 판매자 앱',
			label: '2021.06.01 ~',
			label2: '혼자 개발',
			description: '단지유 앱 배달 완료시 데이터 전송 및 상품 관리 앱',
			memo: [
				'react native 기반 개발',
				'firebase DB 사용(실시간 데이터 변동 적용)',
				'Google Play 등록 경험(Android)',
				'Play Store 등록 경험(IOS)'
			]
		}
	],
	[
		{
			image:
				'https://firebasestorage.googleapis.com/v0/b/portfolio-b7e94.appspot.com/o/onyourmark.jpg?alt=media&token=5d871fe7-b507-44e7-b5a9-1674e3e65a9b',
			title: 'On Your Mark 앱',
			label: '2021.01.26 ~ ',
			label2: '혼자 개발',
			description: '휴대폰 위치 기반으로 출근 및 퇴근 앱',
			memo: [
				'react native 기반 개발',
				'firebase DB 사용(실시간 데이터 변동 적용)',
				'Google Play 등록 경험(Android)',
				'Play Store 등록 경험(IOS)'
			]
		},
		{
			image:
				'https://firebasestorage.googleapis.com/v0/b/portfolio-b7e94.appspot.com/o/danziu.jpg?alt=media&token=db341339-63c3-4090-ba19-7c306ed8ad78',
			title: '단지유 사이트',
			label: '2021.04.01 ~',
			label2: '혼자 개발',
			description: '단지유 소개 페이지',
			memo: [ 'react 기반 개발', 'firebase DB 사용(실시간 데이터 변동 적용)', 'Docker 사용 경험' ]
		}
	]
];

const Works = () => {
	const animatedItem = {
		0: useScrollFadeIn('up', 1, 0),
		1: useScrollFadeIn('up', 1, 0.2),
		2: useScrollFadeIn('up', 1, 0.3),
		3: useScrollFadeIn('up', 1, 0.4),
		4: useScrollFadeIn('up', 1, 0.6)
	};
	const [ isShow, setIsShow ] = React.useState(false);
	const [ isMemo, setIsMemo ] = React.useState({ title: '', memo: [], image: '' });
	return (
		<S.Contain>
			<S.Wrapper>
				<S.Label>Project</S.Label>
				<S.Title>
					개발에 참가한
					<br />
					프로젝트
				</S.Title>

				<S.List>
					{WORKS_ITEMS.map((item, index) => {
						return item.map((item2, index2) => {
							return (
								<S.ListItem
									key={item2.title}
									{...animatedItem[index === 0 ? index2 : WORKS_ITEMS[index - 1].length + index2]}
								>
									<S.ItemImage image={item2.image} />
									<S.TextContainer>
										<S.ItemTitle>{item2.title}</S.ItemTitle>
										<S.ItemLabel style={{ marginBottom: 5 }}>{item2.label}</S.ItemLabel>
										<S.ItemLabel>{item2.label2}</S.ItemLabel>
										<S.ItemDesciption>{item2.description}</S.ItemDesciption>
										<S.TextButton
											onClick={() => {
												setIsShow(true);
												setIsMemo(item2);
											}}
										>
											Read more
										</S.TextButton>
									</S.TextContainer>
								</S.ListItem>
							);
						});
					})}
				</S.List>
				<Modal
					show={isShow}
					onHide={() => {
						setIsMemo({ title: '', memo: [] });
						setIsShow(false);
					}}
				>
					<Modal.Header closeButton>
						<Modal.Title>{isMemo.title}</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<S.ModalImage image={isMemo.image} />
						{isMemo.memo.map((item, index) => (
							<S.ModalListItem key={item}>
								<span>•</span> {item}
							</S.ModalListItem>
						))}
					</Modal.Body>
				</Modal>
				{/*<Button fill="outline" onClick={()=>setTest(Test.concat([WORKS_ITEMS]))}>More Works</Button>*/}
			</S.Wrapper>
		</S.Contain>
	);
};

export default Works;
