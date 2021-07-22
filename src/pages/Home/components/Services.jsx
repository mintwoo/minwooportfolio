import React from 'react';
import styled from 'styled-components';
import { useScrollFadeIn, useScrollCount } from '../../../hooks';

const S = {
	Wrapper: styled.section`
		width: 100%;
		max-width: 1180px;
		margin: auto;
		padding: 120px 0;
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
		margin-bottom: 1rem;
	`,
	Description: styled.p`
		${(props) => props.theme.typography.description};
		color: ${(props) => props.theme.palette.gray};
		margin-bottom: 4rem;
	`,
	ItemWrapper: styled.ul`
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin-bottom: 20px;
	`,
	ItemBox: styled.li`
		width: 380px;
		padding: 3rem 2rem;
		text-align: center;
		background-color: ${(props) => props.theme.palette.white};
		display: flex;
		flex-direction: column;
		box-shadow: 0 0 16px 8px rgba(0, 0, 0, 0.03);
		border-radius: 0.5rem;
	`,
	ItemTitle: styled.h3`
		${(props) => props.theme.typography.heading};
		color: ${(props) => props.theme.palette.black};
		margin-bottom: 1rem;
	`,
	Number: styled.span`
		${(props) => props.theme.typography.subtitle};
		color: ${(props) => props.theme.palette.secondary};
		font-size: 3rem;
		margin-bottom: 1rem;
	`
};

const SERVICES_ITEMS = [ [ 'HTML', 'CSS', 'React' ], [ 'ReactNative', 'Node.js', 'JavaScript' ] ];

const Services = (props) => {
	const { data } = props;
	const animatedItem = {
		0: useScrollFadeIn('up', 1, 0),
		1: useScrollFadeIn('up', 1, 0.2),
		2: useScrollFadeIn('up', 1, 0.3),
		3: useScrollFadeIn('up', 1, 0.4),
		4: useScrollFadeIn('up', 1, 0.5),
		5: useScrollFadeIn('up', 1, 0.6)
	};

	const countItem = {
		0: useScrollCount(75),
		1: useScrollCount(50),
		2: useScrollCount(80),
		3: useScrollCount(92),
		4: useScrollCount(72),
		5: useScrollCount(90)
	};

	return (
		<S.Wrapper>
			<S.Label>Use Programming Language</S.Label>
			<S.Title>
				사용가능한
				<br />
				프로그래밍 언어 역량
			</S.Title>
			<S.Description>제 기준 역량을 %로 나타내봤습니다.</S.Description>
			{SERVICES_ITEMS.map((item, index) => (
				<S.ItemWrapper key={index}>
					{item.map((item2, index2) => {
						const value = index === 0 ? index2 : SERVICES_ITEMS[index - 1].length + index2;

						return (
							<S.ItemBox key={item2} {...animatedItem[value]}>
								<S.ItemTitle>{item2}</S.ItemTitle>
								<S.Number>
									<span {...countItem[value]}>0</span>%
								</S.Number>
							</S.ItemBox>
						);
					})}
				</S.ItemWrapper>
			))}
		</S.Wrapper>
	);
};

export default Services;
