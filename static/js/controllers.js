var personalWebsiteControllers = angular.module('personalWebsiteControllers', []);

personalWebsiteControllers.controller('PracaCtrl', ['$rootScope','$scope','$analytics',
    function ($rootScope,$scope,$analytics) {
        $rootScope.page = " - Salary Calculator";
        $scope.salary_net = -1;
        $scope.calculate = function(){
            $scope.salary_net = $scope.salary_gross - $scope.salary_gross*(30/100)+" zl";
            $analytics.eventTrack('calculate Salary (' + $scope.salary_gross + ' zl gross)'  , {  category: 'Calculator', label: 'Calculator Salary' });
        }
}]);

personalWebsiteControllers.controller('PortfolioCtrl', ['$rootScope','$scope',
    function ($rootScope,$scope) {
        $rootScope.page = " - Portfolio";

        $scope.works = [

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

            {url:"https://www.3yourmind.com",image:"images/3yourmind.png",start_date:"12/2015",end_date:"Current",title:"3YOURMIND",tech:['Django','KnockoutJS','JavaScript','CSS3','JQuery','GIT','JIRA','Slack'],desc:"Development of new features and improvements for 3YOURMIND software. Implementation of Mockups to HTML/CSS ",location:"Wrocław, Poland",type:"job"},
            {url:"http://nidmi.es",image:"images/nidmi.png",start_date:"12/2014",end_date:"03/2015",title:"Nidmi",tech:['Python','Flask','PHP','CakePHP','GoogleCloud','Redis','FFMPEG'],desc:"Development of a system which lets record several videos and merge them and upload to Youtube using Redis, Python, Flask, Google Compute Engine, FFMpeg, Youtube API and HTML5.\n Migration of multimedia content to Google Cloud Storage. \n Collaboration with other company to develop API for sharing data with mobile app",location:"Almería, Spain",type:"job"}

        ];

}]);

personalWebsiteControllers.controller('HomeCtrl', ['$rootScope',
    function ($rootScope) {
        $rootScope.page = " - Home";
}]);