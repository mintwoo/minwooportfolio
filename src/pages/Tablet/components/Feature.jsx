import React from 'react';
import styled from 'styled-components';
import { useScrollClipPath } from '../../../hooks';

const S = {
	Contain: styled.div`
		width: 100%;
		margin: auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: ${(props) => props.theme.palette.background};
	`,
	Wrapper: styled.section`
		padding: 50px;
		width: 100%;
		max-width: 1023px;
		margin: auto;
		display: flex;
		flex-direction: column;
		background-color: ${(props) => props.theme.palette.background};
	`,
	TextWrapper: styled.div`
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
	SubTitle: styled.h2`
		font-size: 1.3rem;
		color: ${(props) => props.theme.palette.black};
		margin-bottom: 0.5rem;
	`,
	Description: styled.p`
		${(props) => props.theme.typography.description};
		color: ${(props) => props.theme.palette.black};
		margin-bottom: 2rem;
	`,
	List: styled.ul`margin-bottom: 2rem;`,
	ListItem: styled.p`
		${(props) => props.theme.typography.description};
		padding: 1rem 1rem 1rem 0;
		border-bottom: 1px solid ${(props) => props.theme.palette.lightgray};
		span {
			color: ${(props) => props.theme.palette.secondary};
		}
	`,
	TextButton: styled.button`
		width: fit-content;
		${(props) => props.theme.typography.textbutton};
		color: ${(props) => props.theme.palette.secondary};
		cursor: pointer;
	`,
	Image: styled.div`
		width: 100%;
		height: 300px;
		margin-bottom: 50px;
		background: no-repeat center/cover
			url(https://firebasestorage.googleapis.com/v0/b/portfolio-b7e94.appspot.com/o/profile.jpg?alt=media&token=5964cc18-9251-40b6-986c-36e3731b5143);
	`
};

const Feature = (props) => {
	const { data } = props;
	const animatedImage = useScrollClipPath();

	return (
		<S.Contain>
			<S.Wrapper>
				<S.Image {...animatedImage} />
				<S.TextWrapper>
					<S.Label>Profile</S.Label>
					<S.Title>
						{data.profile.title.map((item) => (
							<div>
								{item}
								<br />
							</div>
						))}
					</S.Title>
					<S.Description>
						{data.profile.subtitle.map((item) => (
							<div>
								{item}
								<br />
							</div>
						))}
					</S.Description>
					<S.SubTitle>경력</S.SubTitle>
					<S.List>
						{data.profile.list.map((item, index) => (
							<S.ListItem key={item}>
								<span>•</span> {item}
							</S.ListItem>
						))}
					</S.List>
					{/*<S.TextButton>Read more about our serives</S.TextButton>*/}
				</S.TextWrapper>
			</S.Wrapper>
		</S.Contain>
	);
};

export default Feature;
