'use strict';

/**
 * @ngdoc function
 * @name technocomWapp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the technocomWapp
 */
angular.module('technocomWapp')
  .controller('NavCtrl', function ($scope) {

  $scope.menu_items = [
    {
      title: 'Главная',
      link: '#!/',
      icon: 'fa fa-home'
    },
    {
      title: 'Клиенты',
      link: '#!/customers',
      icon: 'fa fa-users'
    },
    {
      title: 'Каталог',
      link: '#!/catalog',
      icon: 'fa fa-cog'
    },
    {
      title: 'Сделки',
      link: '#!/requests',
      icon: 'fa fa-briefcase'
    },
    {
      title: 'События',
      link: '#!/events',
      icon: 'fa fa-calendar'
    },
    {
      title: 'Заказы',
      link: '#!/orders',
      icon: 'fa fa-shopping-basket'
    },
    {
      title: 'Оплаты',
      link: '#!/payments',
      icon: 'fa fa-rub'
    },
    {
      title: 'План-Факт',
      link: '#!/plan-fact',
      icon: 'fa fa-line-chart'
    },
    {
      title: 'Настройки',
      link: '#!/settings',
      icon: 'fa fa-tachometer'
    }
  ];

  });
