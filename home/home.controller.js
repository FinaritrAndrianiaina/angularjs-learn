class HomeCtrl {
  constructor($scope) {
    'ngInject';
    this.list = new Array();
    this.name = 'AngularJS';
    this.query = '';
  }

  append(d) {
    this.query = '';
    this.list.push(d);
  }
}

export default HomeCtrl;
