$('.year').text(new Date().getFullYear());
var app = angular.module('SunhengApp', []);
app.controller('portfolioCtrl', function($scope) {
  $scope.projects = [
    {
      name: 'Google',
      image: 'images/portfolio/google.png',
      link: 'https://www.google.com/',
      content: [
        'Developed and pushed new features to production for a Google product.',
        'Worked with JavaScript, AngularJS, Chrome APIs, and Google Closure Library.'
      ]
    }, 
    {
      name: 'WhatDoYouRecommendFor.Me',
      image: 'images/portfolio/whatdoyourecommendforme.png',
      link: 'https://github.com/sunheng/FoodRecommendation',
      content: [
        'Created in 32 hours at HackGT.',
        'Enter a name of the restaurant and we\'ll figure out what the top meals are based on the reviews of other foodies.'
      ]
    },
    {
      name: 'EVPath User Feedback System',
      image: 'images/portfolio/evpath.png',
      link: 'https://github.com/sunheng/EVPath-Feedback-System',
      content: [
        'Worked under Dr. Matthew Wolf on building a real-time user feedback system for a joint research project with the Aerospace Combustion Laboratory.',
        'Built an application that output suspected error images in real-time to a web interface during the experiment. The experiment consisted of taking photos with two 10,000 frames per second cameras of particles injected into the combustion chamber.',
        'Features of the application included users ability to categorize dataset, track decision history using Redis database and user management written with Node.js and AngularJS.',
        'Programmed simulation scripts in C using experimental data for application testing.'
      ]
    },
    {
      name: 'Intradiem',
      image: 'images/portfolio/intradiem.png',
      link: 'http://www.intradiem.com/',
      content: [
        'Designed and implemented RESTful APIs that interact with MS SQL Server to support the mobile project.',
        'Created a C# console application that managed client\'s stores information.',
        'Documented existing and new features of the API.',
        'Maintained the automated User Management Application for different versions of the product.'
      ]
    },
    {
      name: 'GouramiChat',
      image: 'images/portfolio/gouramichat.png',
      link: 'http://gouramichat.herokuapp.com/',
      content: [
        'GouramiChat is a fast and simple chat room application where users can create their own custom room and invite anyone to join. Messaging is in real-time!',
        'Conversations are not saved in any form.'
      ]
    },
    {
      name: 'AirWatch by VMware',
      image: 'images/portfolio/airwatch.png',
      link: 'http://www.air-watch.com/',
      content: [
        'Developed new features on the web console for administrative users using C#, ASP.NET MVC framework, and JavaScript.',
        'Features included the ability to filter out available device management, drag and drop capability, and front-end features that enhanced user experience and optimized page-loading time.'
      ]
    },
    {
      name: 'I Share We Impact',
      image: 'images/portfolio/iswi.png',
      link: 'http://ishareweimpact.com/',
      content: [
        'ISWI was a website that allows the community to register events and sign up for volunteering work.'
      ]
    },
    {
      name: 'Oriental Pearls',
      image: 'images/portfolio/orientalpearls.png',
      link: '',
      content: [
        'Built with WordPress allowing the admin to easily manage and update website information.'
      ]
    }
  ];

  $scope.current = $scope.projects[0];
  $scope.setCurrent = function(index) {
    $scope.current = $scope.projects[index];
  };
});