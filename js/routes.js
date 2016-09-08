angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.sender', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/sender.html',
        controller: 'senderCtrl'
      }
    }
  })

  .state('tabsController.programme', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/programme.html',
        controller: 'programmeCtrl'
      }
    }
  })

  .state('tabsController.radios', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/radios.html',
        controller: 'radiosCtrl'
      }
    }
  })

  .state('streams', {
    url: '/page5',
    templateUrl: 'templates/streams.html',
    controller: 'streamsCtrl'
  })

  .state('tabsController.feeds', {
    url: '/page6',
    views: {
      'tab4': {
        templateUrl: 'templates/feeds.html',
        controller: 'feedsCtrl'
      }
    }
  })

  .state('chat', {
    url: '/page7',
    templateUrl: 'templates/chat.html',
    controller: 'chatCtrl'
  })

  .state('socials', {
    url: '/page8',
    templateUrl: 'templates/socials.html',
    controller: 'socialsCtrl'
  })

  .state('impressum', {
    url: '/page9',
    templateUrl: 'templates/impressum.html',
    controller: 'impressumCtrl'
  })

$urlRouterProvider.otherwise('/page9')

  

});