import dictionary from './stack.config';

export const experience = [
  {
    name: "Application and Data",
    skills: [
      {...dictionary['HTML'], experience: '+3'},
      {...dictionary['CSS'], experience: '+3'},
      {...dictionary['JAVASCRIPT'], experience: '+3'},
      {...dictionary['JQUERY'], experience: '+3'},
      {...dictionary['BOOTSTRAP'], experience: '+3'},
      {...dictionary['HIGHCHARTS'], experience: '+3'},
      {...dictionary['PHP'], experience: '+3'},
      {...dictionary['MYSQL'], experience: '+3'},
      {...dictionary['LARAVEL'], experience: '+1'},
      {...dictionary['CAKEPHP'], experience: '+1'},
      {...dictionary['APACHE'], experience: '+1'},
      {...dictionary['NGINX'], experience: '+1'},
      {...dictionary['AMAZON_EC2'], experience: '+1'},
      {...dictionary['REDIS'], experience: '<1'},
      {...dictionary['AMAZON_S3'], experience: '<1'},
      {...dictionary['AMAZON_RDS'], experience: '<1'},
    ],
  },
  {
    name: "Utilities",
    skills: [
      {...dictionary['GOOGLE_ANALYTICS'], experience: '<1'},
      {...dictionary['AMAZON_ROUTE_53'], experience: '<1'},
    ]
  },
  {
    name: "DevOps",
    skills: [
      {...dictionary['BITBUCKET'], experience: '+3'},
      {...dictionary['VAGRANT'], experience: '+1'},
      {...dictionary['SENTRY'], experience: '<1'},
      {...dictionary['JENKINS'], experience: '<1'},
      {...dictionary['PAPERTRAIL'], experience: '<1'},
    ]
  },
  {
    name: "Business Tools",
    skills: [
      {...dictionary['ASANA'], experience: '+3'},
      {...dictionary['HIPCHAT'], experience: '+2'},
      {...dictionary['MS_TEAMS'], experience: '+1'},
    ]
  },
];

export const learning = [];

export const coursework = [];