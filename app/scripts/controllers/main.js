'use strict';

/**
 * @ngdoc function
 * @name technocomWapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the technocomWapp
 */
angular.module('technocomWapp')
  .controller('MainCtrl', function () {

    $('#container').highcharts({
      chart: {
        type: 'bar'
      },
      title: {
        text: 'Контроль сделок'
      },
      subtitle: {
        text: 'Статусы сделок и общая сумма'
      },
      xAxis: {
        categories: ['Потребность', 'Презентация', 'Переговоры', 'Договор', 'Оплата', 'Отгрузка', 'Завершена'],
        title: {
          text: null
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Сумма (рублей)',
          align: 'high'
        },
        labels: {
          overflow: 'justify'
        }
      },
      plotOptions: {
        bar: {
          dataLabels: {
            enabled: true
          }
        }
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
        shadow: true
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'На текущую дату',
        data: [80000000, 60000000, 70000000, 50000000, 40000000, 30000000, 55000000]
      }]
    });

  });
