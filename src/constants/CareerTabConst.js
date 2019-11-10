import sgLogo from './../images/SG-Logo.png'
import ptLogo from './../images/playtech-logo.svg'
import ghLogo from './../images/gresham-logo.png'


export const careerState = {
	"tabName": 'Career',
	"roles": [
		{
			"jobTitle": 'Python Developer',
			"jobLogo": {
				"src": ptLogo,
				"cls": 'cr-company-logo cr-pt-logo'
			},
			"jobLocation": 'Playtech | London, UK',
			"jobPeriod": '06/2018 – Present',
			"jobDesc": 'Backend developer providing solutions for Sports Betting related websites.',
			"jobResp": 'Developing new products, features and functionality, as well as maintaining the existing ones. BAU!',
			"sampleWork": [
				'Implementation and maintenance of applications for collection and aggregation of web feeds from external providers.',
				'Solutions for handling real-time content updates for Sports Betting related websites.',
				'Software migrations from legacy systems to new platforms and pipelines.',
				'Improvement and maintenance of in-house administrative tools and microservices.',
				'Mentoring and training junior engineers.'
			],
			"jobTech": [
				{
					"category": 'Back End',
					"text": 'Python (Tornado, asyncio)'
				},
				{
					"category": 'Front End',
					"text": 'Javascript, HTML, CSS'
				},
				{
					"category": 'VCS',
					"text": 'GIT'
				},
				{
					"category": 'Databases',
					"text": 'Oracle, MongoDB'
				},
				{
					"category": 'Other',
					"text": 'Docker, Kubernetes, RabbitMQ, Codefresh, Rancher'
				}
			],
			"cls": ''
		},
		{
			"jobTitle": 'Software Engineer',
			"jobLogo": {
				"src": sgLogo,
				"cls": 'cr-company-logo cr-sg-logo'
			},
			"jobLocation": 'Openbet | London, UK',
			"jobPeriod": '10/2015 – 06/2018',
			"jobDesc": 'Full stack software engineer providing solutions for Sports Betting related websites.',
			"jobResp": 'Developing new products, features and functionality, as well as maintaining the existing ones. ' +
						'Full cycle development that includes Requirements capture, analysis, development, performance ' +
						'testing, Live and pre-production deployments, maintenance.',
			"sampleWork": [
				'Integration of several new streaming providers with the platform.',
				'Load and performance testing for specific edge cases (i.e. Grand National).',
				'Refactoring of the DB schema by re-organizing triggers and stored procedures to improve performance and scalability.',
				'Various front and back end tickets to introduce either new functionality or fixes for the existed.'
			],
			"jobTech": [
				{
					"category": 'Back End',
					"text": 'Tcl, Bash, occasionally Java'
				},
				{
					"category": 'Front End',
					"text": 'Javascript, HTML, CSS'
				},
				{
					"category": 'VCS',
					"text": 'GIT, CVS'
				},
				{
					"category": 'Databases',
					"text": 'Informix, occasionally postgreSQL'
				},
				{
					"category": 'Other',
					"text": 'Docker, AWS, Jenkins, Artifactory'
				}
			],
			"cls": ''
		},
		{
			"jobTitle": 'Graduate Consultant',
			"jobLogo": {
				"src": ghLogo,
				"cls": 'cr-company-logo cr-gh-logo'
			},
			"jobLocation": 'Gresham Computing | London, UK',
			"jobPeriod": '10/2014 – 8/2015',
			"jobDesc": 'IT Consultant providing assistance mainly on financial reconciliation systems and data analysis.',
			"jobResp": 'Provide timely consultation for problem resolution, manage financial reconciliations, generate ' +
						'Business Intelligence (BI) reports.',
			"sampleWork": [
				'Consulting on the correct usage of the software product.',
				'Generate business intelligence reports based on financial reconciliations.',
				'Develop small scale Java microservices for internal use such as file monitors and database metrics.',
			],
			"jobTech": [
				{
					"category": 'Back End',
					"text": 'Java'
				},
				{
					"category": 'Front End',
					"text": 'Javascript, HTML, CSS'
				},
				{
					"category": 'VCS',
					"text": 'GIT'
				},
				{
					"category": 'Databases',
					"text": 'MySQL, Oracle'
				},
				{
					"category": 'Other',
					"text": 'Excel, Eclipse BIRT'
				}
			],
			"cls": 'cr-page-break'
		},
	]
};
