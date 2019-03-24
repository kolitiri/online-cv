import octoLogo from './../images/Octocat.png'
import garminLogo from './../images/garmin.png'


export const projectsState = {
	"tabName": 'Projects',
	"projects": [
		{
			"projectTitle": 'My online CV',
			"projectLabels": [
				'ReactJS',
				'React Bootstrap',
			],
			"projectDesc": [
				'This is the page you are currently browsing.',
				'It was initially designed the traditional way (HTML, Javascript, jQuery, Bootstrap). However, I recently ' +
				 'decided to re-write it using ReactJS, in order to experiment with the library.',
				'It is hosted on heroku and for simplicity there is no connection to a database. ' +
				 'All information are hardcoded in the state of each component.'
			],
			"projectTech": [
				{
					"category": 'Front End',
					"text": 'ReactJS, React Bootstrap'
				},
			],
			"projectLogos": [
				{
					"src": octoLogo,
					"href": '',
					"cls": 'pr-octo-logo'
				},
			],
		},
		{
			"projectTitle": 'Garmin MyBus app',
			"projectLabels": [
				'Monkey-C'
			],
			"projectDesc": [
				'This is a Garmin watch application that helps you keep track of the bus arrivals on your nearest bus stops.',
				'It currently works only for London as it makes use of the TFL\'s unified API. The application is using the ' +
				 'internal GPS of the watch to pick up your current location. It then makes two requests to TFL\'s endpoints:',
				'1. The first request returns the bus stops within a radius (selected by the user) of your location.',
				'2. The second request returns the buses and their prediction times for the stop that you select.'
			],
			"projectTech": [
				{
					"category": 'Backend',
					"text": 'Monkey C (Garmin Connect IQ language)'
				},
				{
					"category": 'APIs',
					"text": 'TFL\'s Unified API'
				},
			],
			"projectAckn": 'This application is Powered by TfL Open Data and contains OS data © Crown copyright and database rights 2016',
			"projectLinks": [
				{
					"title": 'TFL Unified API',
					"href": 'https://api.tfl.gov.uk/'
				},
			],
			"projectLogos": [
				{
					"src": octoLogo,
					"href": 'https://github.com/chris220688/garmin-myBus-app',
					"cls": 'pr-octo-logo'
				},
				{
					"src": garminLogo,
					"href": 'https://apps.garmin.com/en-US/apps/32c1e832-9bab-4ce3-9461-fb61d8d546a8',
					"cls": 'pr-garmin-logo'
				}
			],
		},
		{
			"projectTitle": 'MyBus Web Service',
			"projectLabels": [
				'Python',
				'aiohttp'
			],
			"projectDesc": [
				'This is an updated version of the MyBus web service that was initially designed using Flask.',
				'Flask has now been replaced with aiohttp.',
				'This is a web service hosted on heroku that was created to support the MyBus Garmin watch app.',
				'It acts as a proxy service between the watch and TFL\'s endpoints. Requests from the Garmin app go ' +
				 'through this service and their responses are filtered before they are redirected back to the watch app.'
			],
			"projectTech": [
				{
					"category": 'Web framework',
					"text": 'aiohttp (3.5.4)'
				},
				{
					"category": 'Backend',
					"text": 'Python (3.7.2)'
				},
			],
			"projectAckn": 'This application is Powered by TfL Open Data and contains OS data © Crown copyright and database rights 2016',
			"projectLinks": [
				{
					"title": 'MyBus Garmin app',
					"href": 'https://github.com/chris220688/garmin-myBus-app'
				},
				{
					"title": 'MyBus Web Service (original Flask implementation)',
					"href": 'https://github.com/chris220688/myBus-web-service'
				},
			],
			"projectLogos": [
				{
					"src": octoLogo,
					"href": 'https://github.com/chris220688/myBus-web-service-async',
					"cls": 'pr-octo-logo'
				},
			],
		},
		{
			"projectTitle": 'Django Website',
			"projectLabels": [
				'Python',
				'Django',
				'PostgreSQL'
			],
			"projectDesc": [
				'This project was an attempt to design a website related to homelessness in UK. My main motive, apart from teaching myself ' +
				 'Python/Django, was to create a portal that could potentially alert people about the daily issues the local homeless communities ' +
				 'face and maybe propose solutions that could eventually help people who find themselves in such difficult life situations.',
				'I have stopped working on this project indefinitely since I realised that getting into the trouble of designing such a simple ' +
				 'website with Python might not worth the effort. Could be easily created using technologies such like Wordpress or Anvil elliminating ' +
				 'most of the security risks, deployment and version update headaches.',
				'The project now serves only as part of my github portfolio and also as a cheatsheet for any potential future projects related to Django.'
			],
			"projectTech": [
				{
					"category": 'Web framework',
					"text": 'Django (1.11.1)'
				},
				{
					"category": 'Backend',
					"text": 'Python (3.5.0)'
				},
				{
					"category": 'Front End',
					"text": 'Javascript/jQuery, Bootstrap'
				},
				{
					"category": 'Databases',
					"text": 'PostgreSQL'
				},
			],
			"projectLinks": [
				{
					"title": 'Wordpress',
					"href": 'https://wordpress.com/'
				},
				{
					"title": 'Anvil',
					"href": 'https://anvil.works/'
				}
			],
			"projectLogos": [
				{
					"src": octoLogo,
					"href": 'https://github.com/chris220688/django-apps',
					"cls": 'pr-octo-logo'
				},
			],
		},
		{
			"projectTitle": 'Release Plan Generator',
			"projectLabels": [
				'Python'
			],
			"projectDesc": [
				'This application was designed to serve as a deployments pipeline by generating a release plan for a specific environment set up.',
				'In a word that has already beed taken over by automated deployments and sophisticated pipelines this approach does seem odd ' +
				 'and unrealistic, so you better look for a modern alternative! If you are however stuck in a situation (like myself) where ' +
				 'updating your pipelines and making your lives easier is not an option, then I hope you might find it useful.'
			],
			"projectTech": [
				{
					"category": 'Backend',
					"text": 'Python (3.0.0)'
				},
			],
			"projectLogos": [
				{
					"src": octoLogo,
					"href": 'https://github.com/chris220688/release-plan-generator',
					"cls": 'pr-octo-logo'
				},
			],
		},
		{
			"projectTitle": 'Spareroom Scraper',
			"projectLabels": [
				'Python'
			],
			"projectDesc": [
				'A web scraper that simulates an \'advanced search\' in Spareroom and returns a list of results. ' +
				 'It reads a configuration file and generates a payload to be used for scraping the spareroom endpoints.'
			],
			"projectTech": [
				{
					"category": 'Backend',
					"text": 'Python (3.5.0), Beautiful Soup 4 (4.6.0),Pytest (3.2.3)'
				},
			],
			"projectLogos": [
				{
					"src": octoLogo,
					"href": 'https://github.com/chris220688/spareroom-scraper',
					"cls": 'pr-octo-logo'
				},
			],
		},
	]
};
