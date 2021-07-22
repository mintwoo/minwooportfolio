import React from 'react';
import styled from 'styled-components';
import { useScrollFadeIn } from '../../../hooks';

const S = {
	Contain: styled.div`
		width: 100%;
		margin: auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 120px 0;
		background-color: ${(props) => props.theme.palette.background};
	`,
	Wrapper: styled.div`
		width: 100%;
		max-width: 1180px;
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
		flex-direction: row;
		justify-content: space-between;
		margin-bottom: 4rem;
	`,
	ListItem: styled.li`
		width: 380px;
		box-shadow: 0 0 16px 8px rgba(0, 0, 0, 0.03);
		border-radius: 0.5rem;
		background-color: ${(props) => props.theme.palette.white};
	`,
	ItemImage: styled.div`
		width: 100%;
		height: 380px;
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
	`
};

const WORKS_ITEMS = [
	{
		image:
			'https://firebasestorage.googleapis.com/v0/b/portfolio-b7e94.appspot.com/o/AppFirstimage.jpg?alt=media&token=64a46314-60b4-4145-a454-70f5f29a973d',
		title: '단지유 어플',
		label: '2020.04.26 ~',
		label2: '혼자 개발',
		description: 'ReactNative의 장점인 Android, Ios 동시 개발로 진행되었습니다. 데이터베이스는 Firebase를 사용하여 진행하였습니다.'
	},
	{
		image:
			'https://firebasestorage.googleapis.com/v0/b/portfolio-b7e94.appspot.com/o/adminpage.jpg?alt=media&token=0b20cd56-afc1-4dd1-a320-cfba303ae8d1',
		title: '단지유 관리자 사이트',
		label: '2020.04.26 ~',
		label2: '혼자 개발',
		description: 'React를 사용하여 웹 개발 및 데이터베이스는 Firebase로 진행하였습니다.'
	},
	{
		image:
			'https://firebasestorage.googleapis.com/v0/b/portfolio-b7e94.appspot.com/o/sellerpage.jpg?alt=media&token=0449c9c0-e1a0-4a43-99ab-84060ea7379b',
		title: '단지유 판매자 어플',
		label: '2021.06.01 ~',
		label2: '혼자 개발',
		description: 'ReactNative의 장점인 Android, Ios 동시 개발로 진행되었습니다. 데이터베이스는 Firebase를 사용하여 진행하였습니다.'
	}
];

const Works = () => {
	const animatedItem = {
		0: useScrollFadeIn('left', 1, 0),
		1: useScrollFadeIn('left', 1, 0.2),
		2: useScrollFadeIn('left', 1, 0.3)
	};
	const [ Test, setTest ] = React.useState([ WORKS_ITEMS ]);

	return (
		<S.Contain>
			<S.Wrapper>
				<S.Label>Project</S.Label>
				<S.Title>
					개발에 참가한
					<br />
					프로젝트
				</S.Title>
				{/*<S.Description>
					현재 개발한 프로젝트입니다.
					<br />
					개발에 참가한 프로젝트
        </S.Description>*/}
				{Test.map((val, ind) => {
					return (
						<S.List key={ind}>
							{val.map((item, index) => (
								<S.ListItem key={item.title} {...animatedItem[index]}>
									<S.ItemImage image={item.image} />
									<S.TextContainer>
										<S.ItemTitle>{item.title}</S.ItemTitle>
										<S.ItemLabel style={{ marginBottom: 5 }}>{item.label}</S.ItemLabel>
										<S.ItemLabel>{item.label2}</S.ItemLabel>
										<S.ItemDesciption>{item.description}</S.ItemDesciption>
										<S.TextButton>Read more</S.TextButton>
									</S.TextContainer>
								</S.ListItem>
							))}
						</S.List>
					);
				})}

				{/*<Button fill="outline" onClick={()=>setTest(Test.concat([WORKS_ITEMS]))}>More Works</Button>*/}
			</S.Wrapper>
		</S.Contain>
	);
};

export default Works;
