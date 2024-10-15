<template>
  <base-section id="projects" class="py-0">
    <v-container>
      <v-row>
        <v-col>
          <base-timeline :projects="projects" />
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>
<script>
export default {
  data: () => ({
    projects: [
      {
        color: 'primary',
        date: '10/2017',
        role: 'Full-stack Developer',
        icon: 'mdi-satellite-variant',
        company: {
          name: 'Capgemini',
          logo: 'capgemini-avatar.jpeg'
        },
        client: {
          name: 'Airbus ADS',
          logo: 'airbus-avatar.png'
        },
        applications: [
          {
            name: 'Pulsar',
            description:
              'is an application dedicated to simulate and validate components. It’s a workflow editor (BPMN) with the ability to visualize exchanges between components.'
          },
          {
            name: 'Donut',
            description:
              'is an application designed to help imagery operator to select optimal areas with photography satellites.'
          },
          {
            name: 'Cesium Demonstrator',
            description:
              'is a POC developped with VueJS, VueX and CesiumJS library.'
          }
        ],
        techs: [
          { text: 'VueJS', icon: 'mdi-vuejs' },
          { text: 'Vuetify', icon: 'mdi-vuetify' },
          { text: 'Vuex', icon: '' },
          { text: 'React', icon: 'mdi-react' },
          { text: 'Redux', icon: '' },
          { text: 'Angular', icon: 'mdi-angular' },
          { text: 'Typescript', icon: 'mdi-language-typescript' },
          { text: 'NodeJs', icon: 'mdi-nodejs' },
          { text: 'Docker', icon: 'mdi-docker' },
          { text: 'Java Spring Boot', icon: 'mdi-language-java' },
          { text: 'Linux', icon: 'mdi-linux' },
          { text: 'Cesium', icon: '' },
          { text: 'Openlayers', icon: '' },
          { text: 'HighCharts', icon: '' },
          { text: 'pm2', icon: '' },
          { text: 'Microservice', icon: '' },
          { text: 'BPMN', icon: '' },
          { text: 'SCRUM', icon: '' }
        ]
      },
      {
        color: 'secondary',
        date: '12/2016',
        role: 'Full-stack Developer',
        icon: 'mdi-airplane',
        company: {
          name: 'Gfi Informatique',
          logo: 'gfi-avatar.png'
        },
        client: {
          name: 'Airbus',
          logo: 'airbus-avatar.png'
        },
        applications: [
          {
            name: 'Picto',
            description:
              'is an IDLE factor optimization for aircraft fleet Project'
          },
          {
            name: 'N-Tracking',
            description: 'is a real time aircraft positioning.',
            links:
              'https://www.airbus.com/newsroom/press-releases/en/2015/06/airbus-prosky-launches-innovative-flight-tracking-airflight.html'
          }
        ],
        techs: [
          { text: 'Java Spring Boot', icon: 'mdi-language-java' },
          { text: 'AngularJS', icon: 'mdi-angularjs' },
          { text: 'Bootstrap', icon: 'mdi-bootstrap' },
          { text: 'SASS', icon: 'mdi-sass' },
          { text: 'python', icon: 'mdi-language-python' },
          { text: 'linux', icon: 'mdi-linux' },
          { text: 'SaaS', icon: '' },
          { text: 'Cassandra', icon: '' },
          { text: 'Redis', icon: '' },
          { text: 'Openlava', icon: '' },
          { text: 'LSF', icon: '' },
          { text: 'D3.js', icon: '' },
          { text: 'Gulp', icon: '' },
          { text: 'Maven', icon: '' },
          { text: 'Jenkins', icon: '' },
          { text: 'Nginx', icon: '' },
          { text: 'PostgreSQL', icon: '' },
          { text: 'Openlayers', icon: '' },
          { text: 'LESS', icon: '' },
          { text: 'Grunt', icon: '' },
          { text: 'SCRUM', icon: '' }
        ]
      },
      {
        color: 'primary',
        date: '07/2016',
        role: 'Front-End Developer',
        icon: 'mdi-format-paint',
        company: {
          name: 'Dulux Australia',
          logo: 'dulux-avatar.png'
        },
        applications: [
          {
            name: 'Web site',
            description:
              "for Dulux colour awards 2016. I had to develop specific components with react & redux and integrate them in their CMS. I've Worked with a full english team for 3 months.",
            links: 'https://colourawards.dulux.com.au/'
          }
        ],
        techs: [
          { text: 'ES6', icon: 'mdi-language-javascript' },
          { text: 'ReactJS', icon: 'mdi-react' },
          { text: 'Redux', icon: '' },
          { text: 'SASS', icon: 'mdi-sass' },
          { text: 'Webpack', icon: 'mdi-webpack' },
          { text: 'Gulp', icon: '' },
          { text: 'SCRUM', icon: '' }
        ]
      },
      {
        color: 'secondary',
        date: '03/2015',
        role: 'Front-End Developer',
        icon: 'mdi-water',
        company: {
          name: 'Gfi Informatique',
          logo: 'gfi-avatar.png'
        },
        client: {
          name: 'Suez environnement',
          logo: 'suez-avatar.png'
        },
        applications: [
          {
            name: 'Sewer Advanced',
            description:
              'is a single page application for monitoring and managing water in cities. I created the user interface but and some back-end features. This application was created with AngularJS 1, TypeScript, OpenLayers 3 and few other libraries. Moreover I developed another application (publication web site) alone in the same project and designed the front-end architecture. I worked with spanish team (English spoken).'
          }
        ],
        techs: [
          { text: 'AngularJS', icon: 'mdi-angularjs' },
          { text: 'TypeScript', icon: 'mdi-language-typescript' },
          { text: 'Bootstrap', icon: 'mdi-bootstrap' },
          { text: 'ASP MVC', icon: 'mdi-dot-net' },
          { text: 'Visual Studio', icon: 'mdi-microsoft-visual-studio' },
          { text: 'LESS', icon: '' },
          { text: 'OpenLayers', icon: '' },
          { text: 'SCRUM', icon: '' }
        ]
      },
      {
        color: 'primary',
        date: '12/2014',
        role: 'Front-End Developer',
        icon: 'mdi-airport',
        company: {
          name: 'Gfi Informatique',
          logo: 'gfi-avatar.png'
        },
        applications: [
          {
            name: 'Web SPA',
            description:
              'allowing to airport Marseille’s firemen to report runways faults (geolocation, cartography). I was in charge to build the user interface using bootstrap 3 and CSS3. This web application works offline (cache management) and online to synchronise data with a server(CouchDB).'
          }
        ],
        techs: [
          { text: 'EmberJS', icon: 'mdi-ember' },
          { text: 'Bootstrap', icon: 'mdi-bootstrap' },
          { text: 'NodeJs', icon: 'mdi-nodejs' },
          { text: 'LESS', icon: '' },
          { text: 'OpenLayers', icon: '' },
          { text: 'CouchDB', icon: '' },
          { text: 'Grunt', icon: '' }
        ]
      },
      {
        color: 'secondary',
        date: '07/2014',
        role: 'Java / Web Developer',
        icon: 'mdi-airplane',
        company: {
          name: 'Gfi Informatique',
          logo: 'gfi-avatar.png'
        },
        client: {
          name: 'Airbus',
          logo: 'airbus-avatar.png'
        },
        applications: [
          {
            name: 'LPCNG:',
            description:
              'Recreating user interface of a Java application LPCNG in HTML5. I had to develop the user interface using HTML5 / JavaScript / CSS3 communicating with a Java/SWING application. The legacy application built in Java (LPCNG) had to communicate with the new web interface through AJAX technology.'
          }
        ],
        techs: [
          { text: 'HTML5', icon: 'mdi-language-html5' },
          { text: 'CSS3', icon: 'mdi-language-css3' },
          { text: 'SASS', icon: 'mdi-sass' },
          { text: 'IEembeded', icon: 'mdi-microsoft-internet-explorer' },
          { text: 'JSView', icon: '' },
          { text: 'SCRUM', icon: '' }
        ]
      },
      {
        color: 'primary',
        date: '01/2014',
        role: 'Jenkins Administrator',
        icon: 'mdi-server-network',
        company: {
          name: 'Gfi Informatique',
          logo: 'gfi-avatar.png'
        },
        applications: [
          {
            name: 'Jenkins: ',
            description:
              'Installation of a continuous integration environment. MI had to install and deploy all continuous integration environments for the company’s mobility department. I had to work a lot about how unify all different continuous integration server in projects, standardize and automate Jenkins jobs. I developed also a Jenkins plug-in to respond to a specific need.'
          }
        ],
        techs: [
          { text: 'Apple iOS', icon: 'mdi-apple-ios' },
          { text: 'Windows 8', icon: 'mdi-microsoft-windows' },
          { text: 'Shell Script', icon: 'mdi-linux' },
          { text: 'Jenkins', icon: '' },
          { text: 'Java', icon: '' }
        ]
      },
      {
        color: 'secondary',
        date: '2013',
        role: 'Master degree ICE',
        icon: 'mdi-school',
        applications: [
          {
            name: 'Collaborative Computing in Company'
          }
        ]
      },
      {
        color: 'primary',
        date: '09/2012',
        role: 'Java Developer',
        icon: 'mdi-airplane',
        company: {
          name: 'Gfi Informatique',
          logo: 'gfi-avatar.png'
        },
        client: {
          name: 'Airbus',
          logo: 'airbus-avatar.png'
        },
        applications: [
          {
            name: 'EFF:',
            description:
              'Maintenance of an application EFF (Electronic Flight folder) which is a tool for the Airbus flight reports. I had to correct bugs and develop new features on the application.'
          }
        ],
        techs: [
          { text: 'Java SWING', icon: 'mdi-language-java' },
          { text: 'XML', icon: 'mdi-xml' },
          { text: 'Hibernate', icon: '' },
          { text: 'HSQLDB', icon: '' },
          { text: 'Struts', icon: '' },
          { text: 'XSL', icon: '' }
        ]
      },
      {
        color: 'secondary',
        date: '04/2012',
        role: 'Full Stack Developer',
        icon: 'mdi-domain',
        company: {
          name: 'EMP',
          logo: 'gbmp-avatar.jpeg'
        },
        applications: [
          {
            name: 'Intranet: ',
            description:
              'Creation of an intranet website to facilitate the communication and transfer of documents inside the company. I had to create a dynamic web site in HTML5, JS, CSS3 and a Back-End (PHP) communicating through AJAX technology.'
          }
        ],
        techs: [
          { text: 'HTML5', icon: 'mdi-language-html5' },
          { text: 'CSS3', icon: 'mdi-language-css3' },
          { text: 'ES5', icon: 'mdi-language-javascript' },
          { text: 'PHP', icon: 'mdi-language-php' },
          { text: 'AJAX', icon: '' }
        ]
      },
      {
        color: 'primary',
        date: '04/2011',
        role: 'Database Administrator',
        icon: 'mdi-database',
        client: {
          name: 'Airbus',
          logo: 'airbus-avatar.png'
        },
        applications: [
          {
            name: 'IBM Web Focus Database',
            description:
              'is a set of queries allowing the user to get information about plane’s pieces. My role was to create a set of FOCUS queries in a report environment (WebFocus) with a documentation based on users needs. The result of these queries permitted to users to realise analysis and statistics.'
          }
        ],
        techs: [
          { text: 'IBM FOCUS', icon: '' },
          { text: 'Sphynx', icon: '' }
        ]
      },
      {
        color: 'secondary',
        date: '2008',
        role: 'Baccalaureate',
        icon: 'mdi-school',
        applications: [
          {
            name: 'General Scientific Baccalaureate'
          }
        ]
      },
      {
        color: 'primary',
        date: '2005',
        role: 'BIA',
        icon: 'mdi-certificate',
        applications: [
          {
            name: 'Aeronautical Initiation Certification'
          }
        ]
      }
    ]
  })
};
</script>
