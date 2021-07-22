import React from 'react';
import { Header, Footer } from '../../components';
import { Services, Feature, Works, Contact } from './components';
import Firebase from '../../hooks/firebase';

const firebase = new Firebase();

const Home = () => {
	const [ data, setdata ] = React.useState(null);
	React.useEffect(() => {
		firebase.db.collection('DataBase').doc('db').onSnapshot((doc) => {
			let data = doc.data();
			setdata(data);
		});
	});
	if (data != null)
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
	else return <div />;
};

export default Home;
