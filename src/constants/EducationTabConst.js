import rguLogo from './../images/rgu.png'
import thesLogo from './../images/thes.jpeg'


export const educationState = {
	"tabName": 'Education',
	"education": [
		{
			"eduTitle": 'MSc Computing Software Technology',
			"eduLogo": {
				"src": rguLogo,
				"cls": 'ed-company-logo ed-rgu-logo'
			},
			"eduLocation": 'Robert Gordon University | Aberdeen, UK',
			"eduPeriod": '09/2013 – 09/2014',
			"eduModules": [
				'Object Oriented Programming (Java)',
				'Relational Database Systems (SQL)',
				'Interactive Systems Development',
				'IT Infrastructure and Service Management (ITIL)',
				'Intranet Systems (HTML, PHP, JavaScript)',
				'Software Project Engineering',
			],
			"eduThesis": {
				"title": 'Lego NXT robotics',
				"content": 'Investigating the capabilities of Lego NXT robots. Exploring the NXT potentials by ' +
							'designing an autonomous robot (LeJOS - Java), able to interact with a user via the ' +
							'computer and perform a number of tasks.',
			},
		},
		{
			"eduTitle": 'BSc School of Mathematics',
			"eduLogo": {
				"src": thesLogo,
				"cls": 'ed-company-logo ed-thes-logo'
			},
			"eduLocation": 'Aristotle University of Thessaloniki | Greece',
			"eduPeriod": '09/2008 – 06/2013',
			"eduModules": [
				'Algebra Advanced',
				'Statistics',
				'Operational Research',
				'Probabilities',
				'Fortran, SPSS, C++',
			],
		},
	]
};
