'use strict';

// Declare app level module which depends on views, and components
var personalWebsiteApp = angular.module('personalWebsite', [
  'ngRoute',
  'ngSanitize',
  'personalWebsiteControllers',
  'pascalprecht.translate',
  'angulartics',
  'angulartics.google.analytics'
]);

personalWebsiteApp.config(['$routeProvider','$translateProvider',
  function($routeProvider,$translateProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'templates/about.html',
            controller:"HomeCtrl"
        }).
        when('/portfolio', {
            templateUrl: 'templates/portfolio.html',
            controller:"PortfolioCtrl"
        }).
        when('/praca', {
            templateUrl: 'templates/praca.html',
            controller: 'PracaCtrl'
        }).
        otherwise({
          redirectTo: '/'
        });

      var langMap = {
          'en_AU': 'en',
          'en_CA': 'en',
          'en_NZ': 'en',
          'en_PH': 'en',
          'en_UK': 'en',
          'en_US': 'en',
          'es_ES': 'es',
          'es_MX': 'es',
          'es_AR': 'es'
      };

      //Traducciones
      $translateProvider
          .useStaticFilesLoader({
              prefix: './static/lang/',
              suffix: '.json' })
          .registerAvailableLanguageKeys(['en', 'es'], langMap)
          .determinePreferredLanguage()
          .fallbackLanguage(['en']);
      $translateProvider.useSanitizeValueStrategy('escape');

  }]);

personalWebsiteApp.run(function($rootScope,$translate) {

    $rootScope.page = "";

    $rootScope.works_en = [

        {title:"De Tapillas",image:"images/detapillas.png",url:null,url_doc:"http://manujlopez.com/presentation",gallery:null,video:"https://youtu.be/-atWnVNGU9w",tech:['Django','AngularJS','Ionic','Azure'],desc:"This app was created as final project at UAL.\r\nIt allows to check info related to bars and tapas about my city, Almería.",type:"ual"},
        {title:"BlueBird",image:"images/splash.png",url:null,url_doc:"media/docs/bluebird.pdf",gallery:null,video:null,tech:['Java','Hibernate','JSwing','UML'],desc:"Desktop App like Twitter-style. Co-developed with @mario_mn92.",type:"ual"},
        {title:"ZooQuiz",image:"images/zooquiz.png",url:null,url_doc:"media/images/zooquiz.gif",gallery:null,video:"https://youtu.be/3h0ZV5DZNns",tech:['ObjectiveC','XYPieChart','SQLite'],desc:"A game app. It consists in a little quiz where kids can determine the type of animals answering some questions. Co-developed with some classmates. I was the leader of the project.",type:"ual"},
        {title:"Interactive Almería",image:"images/almeria-flash.jpg",url:null,url_doc:null,gallery:"http://manujlopez.com/media/images/flash.zip",video:null,tech:['Flash','ActionScript2'],desc:"A touristic app which allows check different places from Almeria province. It was developed during my stay(Erasmus) at Wroclaw in Politechnika Wrocławska",type:"ual"},
        {title:"Risk Management",image:"images/risk-management-app.jpg",url:"http://pris.manujlopez.com",url_doc:null,gallery:null,video:null,tech:['Bootstrap3','CakePHP','jQuery'],desc:"A website which allows to follow a whole project with its different risks(probabilities to happen, errors, descriptions,...)",type:"ual"},
        {title:"My E-Diary",image:"images/miediario.jpg",url:null,url_doc:null,gallery:null,video:"https://www.youtube.com/watch?v=mLdG1vZtqZk",tech:['C#','EF4','DbContext'],desc:"A desktop application where you can save notes as an eletronic diary",type:"ual"},

        {url:null,title:"Almerinegocios",image:"images/almerinegocios.png",year:2007,tech:['PHP','Joomla','Sobi2'],desc:"Business web-directory based in local and regional business.",type:"freelance"},
        {url:"http://web.archive.org/web/20100108222030/http://www.ideas1980.com/",image:"images/ideas1980.png",year:2007,title:"Ideas1980",tech:['Joomla'],desc:"Corporative website.",type:"freelance"},
        {url:"http://sserial.es",image:"images/sserial.png",year:2009,title:"Serial Serigrafía SL",tech:['PHP','Prestashop','RWD','API'],desc:"Development of new features in an e-commerce solution using Fotolia API and PHP, CSS (Responsive Web Design) , HTML5 and jQuery ",type:"freelance"},
        {url:"http://lacasitapresumida.com",image:"images/casita.jpg",year:2009,title:"La Casita Presumida",tech:['Prestashop'],desc:"E-commerce solution.",type:"freelance"},
        {url:null,image:"images/nopic-en.jpg",year:2011,title:"AM Servicios",tech:['Wordpress'],desc:"Corporative website.",type:"freelance"},
        {url:"http://liquidacionweb.com",image:"images/liquidacion.jpg",year:2013,title:"Liquidación Web",tech:['Prestashop','RWD'],desc:"E-commerce solution.",type:"freelance"},
        {url:null,image:"images/nexo.png",year:2013,title:"Asociación NEXO",tech:['PHP','Foundation Zurb'],desc:"Corporative website.",type:"freelance"},
        {url:null,image:"images/congelite.png",year:2013,title:"Congelite",tech:['CSS3','Media Queries','RWD'],desc:"Landing page with responsive web design.",type:"freelance"},
        {url:"https://play.google.com/store/apps/details?id=com.pwrdevelopers.taptify",image:"images/taptify.png",year:2014,title:"Taptify",tech:['Android','Java','SVN'],desc:"Game co-developed with an erasmus roommate during my Erasmus year in Poland.",type:"freelance"},

        {url:"https://www.3yourmind.com",image:"images/3yourmind.png",start_date:"12/2015",end_date:"Current",title:"3YOURMIND",tech:['Python','Django','JavaScript','GIT','JIRA','Slack'],desc:"Development of new features and improvements for 3YOURMIND software",location:"Wrocław, Poland",type:"job"},
        {url:"http://nidmi.es",image:"images/nidmi.png",start_date:"12/2014",end_date:"03/2015",title:"Nidmi",tech:['Python','Flask','PHP','CakePHP','GoogleCloud','Redis','FFMPEG'],desc:"Development of a system which lets record several videos and merge them and upload to Youtube using Redis, Python, Flask, Google Compute Engine, FFMpeg, Youtube API and HTML5.\n Migration of multimedia content to Google Cloud Storage. \n Collaboration with other company to develop API for sharing data with mobile app",location:"Almería, Spain",type:"job"}

    ];

    $rootScope.works_es = [

        {title:"De Tapillas",image:"images/detapillas.png",url:null,url_doc:"http://manujlopez.com/presentacion",gallery:null,video:"https://youtu.be/-atWnVNGU9w",tech:['Django','AngularJS','Ionic','Azure'],desc:"Esta aplicación fue creada como proyecto fin de grado en la universidad de Almería. Permite comprobar información referente a bares y tapas en Almería principalmente.",type:"ual"},
        {title:"BlueBird",image:"images/splash.png",url:null,url_doc:"media/docs/bluebird.pdf",gallery:null,video:null,tech:['Java','Hibernate','JSwing','UML'],desc:"Aplicación de escritorio con un estilo similar a Twitter co-desarrollada con @mario_mn92",type:"ual"},
        {title:"ZooQuiz",image:"images/zooquiz.png",url:null,url_doc:"media/images/zooquiz.gif",gallery:null,video:"https://youtu.be/3h0ZV5DZNns",tech:['ObjectiveC','XYPieChart','SQLite'],desc:"Un juego. Consiste en un pequeño cuestionario donde los niños pueden determinar el tipo de animal respondiendo algunas preguntas. Co-desarrollado con algunos compañeros de clase. Yo fui el lider del proyecto",type:"ual"},
        {title:"Almería interactiva",image:"images/almeria-flash.jpg",url:null,url_doc:null,gallery:"http://manujlopez.com/media/images/flash.zip",video:null,tech:['Flash','ActionScript2'],desc:"Una aplicación 'turistica' que permite ver diferentes lugares de la provincia de Almería. Desarrollada durante mi estancia en Wroclaw,Polonia (Erasmus)",type:"ual"},
        {title:"Gestión de Riesgos",image:"images/risk-management-app.jpg",url:"http://pris.manujlopez.com",url_doc:null,gallery:null,video:null,tech:['Bootstrap3','CakePHP','jQuery'],desc:"Aplicación web que permite hacer un seguimiento completo de los diferentes riesgos que puede tener un proyecto software",type:"ual"},
        {title:"Mi E-Diario",image:"images/miediario.jpg",url:null,url_doc:null,gallery:null,video:"https://www.youtube.com/watch?v=mLdG1vZtqZk",tech:['C#','EF4','DbContext'],desc:"Una aplicación de escritorio que actua como un diario, en este caso, electrónico",type:"ual"},

        {url:null,title:"Almerinegocios",image:"images/almerinegocios.png",year:2007,tech:['PHP','Joomla','Sobi2'],desc:"Directorio web de empresas locales y regionales de Almería",type:"freelance"},
        {url:"http://web.archive.org/web/20100108222030/http://www.ideas1980.com/",image:"images/ideas1980.png",year:2007,title:"Ideas1980",tech:['Joomla'],desc:"Web corporativa para Ideas1980",type:"freelance"},
        {url:"http://sserial.es",image:"images/sserial.png",year:2009,title:"Serial Serigrafía SL",tech:['PHP','Prestashop','RWD','API'],desc:"Tienda virtual. Desarrollo de nuevas funcionalidades con PHP, HTML5, CSS y JQuery",type:"freelance"},
        {url:"http://lacasitapresumida.com",image:"images/casita.jpg",year:2009,title:"La Casita Presumida",tech:['Prestashop'],desc:"Tienda virtual",type:"freelance"},
        {url:null,image:"images/nopic-es.jpg",year:2011,title:"AM Servicios",tech:['Wordpress'],desc:"Web corporativa",type:"freelance"},
        {url:"http://liquidacionweb.com",image:"images/liquidacion.jpg",year:2013,title:"Liquidación Web",tech:['Prestashop','RWD'],desc:"Tienda virtual",type:"freelance"},
        {url:null,image:"images/nexo.png",year:2013,title:"Asociación NEXO",tech:['PHP','Foundation Zurb'],desc:"Web corporativa",type:"freelance"},
        {url:null,image:"images/congelite.png",year:2013,title:"Congelite",tech:['CSS3','Media Queries','RWD'],desc:"Landing page con diseño adaptable a dispositivos moviles",type:"freelance"},
        {url:"https://play.google.com/store/apps/details?id=com.pwrdevelopers.taptify",image:"images/taptify.png",year:2014,title:"Taptify",tech:['Android','Java','SVN'],desc:"Juego co-desarrollado con un estudiante Erasmus durante mi estancia en Polonia",type:"freelance"},

        {url:"https://www.3yourmind.com",image:"images/3yourmind.png",start_date:"12/2015",end_date:"Actual",title:"3YOURMIND",tech:['Python','Django','JavaScript','GIT','JIRA','Slack'],desc:"Desarrollo de nuevas funcionalidades para el producto software de la compañia.",location:"Wrocław, Polonia",type:"job"},
        {url:"http://nidmi.es",image:"images/nidmi.png",start_date:"12/2014",end_date:"03/2015",title:"Nidmi",tech:['Python','Flask','PHP','CakePHP','GoogleCloud','Redis','FFMPEG'],desc:"Desarrollo de un sistema de videoentrevistas usando un rango variado de tecnologías como Redis,Python,Flask,GoogleCompute Engine,API Youtube y FFMpeg,YoutubeAPI y HTML5. Migración del contenido multimedia a Google Cloud Storage. Colaboración con Mobyte Studio para desarrollar API (CakePHP) para compartir datos con laaplicación móvil. GIT(Bitbucket) usado para control de versiones y JIRA para gestión de tareas",location:"Almería, España",type:"job"}

    ];

    $rootScope.loadLang = function(){
        if($translate.use()=='en'){
            $rootScope.works= $rootScope.works_en;
            $rootScope.selected_lang = 'en';
        }

        if($translate.use()=='es'){
            $rootScope.works= $rootScope.works_es;
            $rootScope.selected_lang = 'es';
        }
    };

    $rootScope.loadLang();

    $rootScope.lang = function(lang) {
        $translate.use(lang);
        $rootScope.loadLang();
    };




});