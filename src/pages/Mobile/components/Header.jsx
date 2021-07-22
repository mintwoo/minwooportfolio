import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';

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
	const [ isScroll, setIsScroll ] = useState(false);

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

	return (
		<S.Wrapper isScroll={isScroll}>
			<S.Header isScroll={isScroll}>
				<S.Logo isScroll={isScroll}>Portfolio</S.Logo>
			</S.Header>
		</S.Wrapper>
	);
};

export default Header;
