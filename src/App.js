import React from 'react';
import Firebase from './hooks/firebase';
import { ThemeProvider } from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import { GlobalStyle } from './styles';
import { theme, theme2 } from './styles/theme';
import { PC, Tablet, Mobile } from './pages';

const firebase = new Firebase();

const App = () => {
	const [ data, setdata ] = React.useState(null);

	const isPc = useMediaQuery({
		query: '(min-width:1024px)'
	});
	const isTablet = useMediaQuery({
		query: '(min-width:768px) and (max-width:1023px)'
	});
	const isMobile = useMediaQuery({
		query: '(max-width:767px)'
	});

	React.useEffect(() => {
		firebase.db.collection('DataBase').doc('db').get().then((doc) => {
			setdata(doc.data());
		});
	}, []);

	if (data != null)
		return (
			<ThemeProvider theme={isPc ? theme : theme2}>
				<GlobalStyle />
				{isPc && <PC firebase={firebase} data={data} />}
				{isTablet && <Tablet firebase={firebase} data={data} />}
				{isMobile && <Mobile firebase={firebase} data={data} />}
			</ThemeProvider>
		);
	else return <div />;
};

export default App;
