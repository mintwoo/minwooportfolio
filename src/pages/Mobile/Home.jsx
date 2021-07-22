import React from 'react';
import { Services, Feature, Works, Contact, Header, Footer } from './components';

const Home = (props) => {
	const { firebase, data } = props;

	return (
		<div>
			<Header firebase={firebase} />
			<Feature data={data} />
			<Services data={data} />
			<Works data={data} />
			<Contact firebase={firebase} />
			<Footer data={data} />
		</div>
	);
};

export default Home;
