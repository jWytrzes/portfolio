import React from 'react';
import About from '../sections/About/About';
import Hero from '../sections/Hero/Hero';
import Projects from '../sections/Projects/Projects';
import Resume from '../sections/Resume/Resume';
import Contact from '../sections/Contact/Contact';
import Layout from '../templates/Layout';

export default function Home() {
	return (
		<Layout>
			<Hero />
			<Projects />
			<About />
			<Resume />
			<Contact />
		</Layout>
	);
}
