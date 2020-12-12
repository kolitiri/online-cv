import octoLogo from './../images/Octocat.png'
import garminLogo from './../images/garmin.png'
import chromeLogo from './../images/chrome-store.png'
import findsourceslogo from './../images/findsources.svg'
import pypilogo from './../images/pypi-logo.svg'


export const projectsState = {
	"tabName": 'Projects',
	"projects": [
		{
			"projectTitle": 'Context logger',
			"projectLabels": [
				'Python', 'PyPI',
			],
			"projectDesc": [
				'A simple logger that uses python\'s standard contextvars library to inject contextual details in your logs.',
				'Works nicely with web application frameworks such as Flask and FastApi or any asyncio application.',
				'It also supports structured logging format, for those who want to go deeper into log filtering and generation of analytics.',
			],
			"projectTech": [
				{
					"category": 'Backend',
					"text": 'Python3'
				}
			],
			"projectLogos": [
				{
					"src": octoLogo,
					"href": 'https://github.com/kolitiri/contextlogger',
					"cls": 'pr-octo-logo'
				},
				{
					"src": pypilogo,
					"href": 'https://pypi.org/project/contextlogger/',
					"cls": 'pr-pypi-logo'
				}
			],
		},
		{
			"projectTitle": 'FindSources website',
			"projectLabels": [
				'ReactJS',
				'ReactiveSearch',
				'FastApi',
				'ElasticSearch',
				'MongoDb'
			],
			"projectDesc": [
				'This is a website that serves as a search engine for books.',
				'Users can not only search, but also register as authors and create their own references to their favorite books.',
				'The search results are based on such references rather than the actual content of the books, ' +
				'respecting in this way the authors\' copyrights.',
				'It\'s the users\' input that defines the search results and not the maintainer\'s judgment.',
				'The vision is for this to evolve into a free indexing service for books, with a plethora of ' +
				'references, that can be used for educational purposes.'
			],
			"projectTech": [
				{
					"category": 'Front End',
					"text": 'ReactJS, ReactiveSearch, OpenIdConnect'
				},
				{
					"category": 'Backend',
					"text": 'FastApi, Monstache'
				},
				{
					"category": 'Databases',
					"text": 'MongoDB, ElasticSearch'
				},
				{
					"category": 'Other',
					"text": 'Kubernetes, Digital Ocean, Sentry, Github Actions'
				}
			],
			"projectLogos": [
				{
					"src": octoLogo,
					"href": 'https://github.com/kolitiri/findsources-website',
					"cls": 'pr-octo-logo'
				},
				{
					"src": findsourceslogo,
					"href": 'https://findsources.co.uk/',
					"cls": 'pr-findsources-logo'
				}
			],
		},
		{
			"projectTitle": 'FARM authentication',
			"projectLabels": [
				'FastApi',
				'ReactJS',
				'MongoDb',
				'OpenIdConnect'
			],
			"projectDesc": [
				'A sample project to get started with custom user authentication using the FARM stack. ' +
				'(FastApi, ReactJS, MongoDB)',
				'The project is pre-configured to use the OIDC Authorization Code Flow to sign in with Google and Azure.',
			],
			"projectTech": [
				{
					"category": 'Front End',
					"text": 'ReactJS, OpenIdConnect'
				},
				{
					"category": 'Backend',
					"text": 'FastApi'
				},
				{
					"category": 'Databases',
					"text": 'MongoDB'
				}
			],
			"projectLogos": [
				{
					"src": octoLogo,
					"href": 'https://github.com/kolitiri/fastapi-oidc-react',
					"cls": 'pr-octo-logo'
				}
			],
		},
		{
			"projectTitle": 'Kolitiri Bookmarks',
			"projectLabels": [
				'ReactJS',
				'React Bootstrap',
				'Chrome Extensions API'
			],
			"projectDesc": [
				'This is a chrome extension for managing bookmarks.',
				'It offers a number of options such as, adding bookmarks and organizing them in folders, ' +
				'importing bookmarks from the chrome bar and importing/exporting bookmarks from/to a .json file.',
				'Additionally, it features a dark-mode option for who those don\'t feel like looking on the bright side!'
			],
			"projectTech": [
				{
					"category": 'Front End',
					"text": 'ReactJS, React Bootstrap, Chrome Extensions API'
				},
			],
			"projectLogos": [
				{
					"src": octoLogo,
					"href": 'https://github.com/kolitiri/bookmarks-chrome-extension',
					"cls": 'pr-octo-logo'
				},
				{
					"src": chromeLogo,
					"href": 'https://chrome.google.com/webstore/detail/kolitiri-bookmarks/hfnmppffaaifkdapbbnjlbeeefjdhjdm',
					"cls": 'pr-chrome-logo'
				}
			],
		},
		{
			"projectTitle": 'Online CV',
			"projectLabels": [
				'ReactJS',
				'React Bootstrap',
			],
			"projectDesc": [
				'This is the page you are currently browsing. I know, quite boring!',
				'It was initially designed the "traditional" way (HTML, Javascript, jQuery, Bootstrap). However, I recently ' +
				 'decided to re-write it using ReactJS just for the sake of experimenting with the library.',
				'As you probably noticed, it is hosted on heroku and for simplicity there is no connection to a database. ' +
				 'All information is organised in Json format and is stored in the state of each component.'
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
					"href": 'https://github.com/kolitiri/online-cv',
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
				 'internal GPS of the watch to pick up your current location and work out the expected arrivals of the buses ' +
				 'in your nearest stops.',
				'The application is written in MonkeyC which is a OO programming language used by the majority of Garmin devices.',
				'It is accompanied by a Python service responsible for filtering TFL responses and downsizing huge chunks of data ' +
				'that cannot be handled by the limited resources of most of the devices.'
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
					"href": 'https://github.com/kolitiri/garmin-myBus-app',
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
					"href": 'https://github.com/kolitiri/garmin-myBus-app'
				},
				{
					"title": 'MyBus Web Service (original Flask implementation)',
					"href": 'https://github.com/kolitiri/myBus-web-service'
				},
			],
			"projectLogos": [
				{
					"src": octoLogo,
					"href": 'https://github.com/kolitiri/myBus-web-service-async',
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
					"href": 'https://github.com/kolitiri/django-apps',
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
				'This application was designed to serve as a deployments pipeline by generating a release plan for a specific environment.',
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
					"href": 'https://github.com/kolitiri/release-plan-generator',
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
					"href": 'https://github.com/kolitiri/spareroom-scraper',
					"cls": 'pr-octo-logo'
				},
			],
		},
	]
};
