'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _inaver = require('./../inaver/inaver.js');

var _inaver2 = _interopRequireDefault(_inaver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: 'test'
    }, _this.data = {
      showBack: true,
      smartBack: true,
      bgColor: '#353535',
      demoType: 'default'
    }, _this.$repeat = {}, _this.$props = { "inaver": { "xmlns:v-bind": "", "v-bind:showBack.sync": "showBack", "v-bind:background.sync": "bgColor", "v-bind:smartBack.sync": "smartBack" } }, _this.$events = {}, _this.components = {
      inaver: _inaver2.default
    }, _this.methods = {
      showNotBack: function showNotBack() {
        this.showBack = !this.showBack;
        this.$apply();
      },
      randomBgColor: function randomBgColor() {
        var _colors = ['#353535', '#E38F58', '#2A5C98', '#027204', '#4454CC', '#60D4C0'];
        this.bgColor = _colors[Math.floor(Math.random() * _colors.length)];
        this.$apply();
      },
      showDemo: function showDemo() {
        this.demoType = this.demoType === 'default' ? 'picture' : 'default';
        this.$apply();
      },
      showSamrtBack: function showSamrtBack() {
        this.smartBack = !this.smartBack;
        this.$apply();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJzaG93QmFjayIsInNtYXJ0QmFjayIsImJnQ29sb3IiLCJkZW1vVHlwZSIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImluYXZlciIsIm1ldGhvZHMiLCJzaG93Tm90QmFjayIsIiRhcHBseSIsInJhbmRvbUJnQ29sb3IiLCJfY29sb3JzIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwic2hvd0RlbW8iLCJzaG93U2FtcnRCYWNrIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxnQkFBVSxJQURMO0FBRUxDLGlCQUFXLElBRk47QUFHTEMsZUFBUyxTQUhKO0FBSUxDLGdCQUFVO0FBSkwsSyxRQU1SQyxPLEdBQVUsRSxRQUNiQyxNLEdBQVMsRUFBQyxVQUFTLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsd0JBQXVCLFVBQTFDLEVBQXFELDBCQUF5QixTQUE5RSxFQUF3Rix5QkFBd0IsV0FBaEgsRUFBVixFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNSQztBQURRLEssUUFHVkMsTyxHQUFVO0FBQ1JDLG1CQUFhLHVCQUFZO0FBQ3ZCLGFBQUtWLFFBQUwsR0FBZ0IsQ0FBQyxLQUFLQSxRQUF0QjtBQUNBLGFBQUtXLE1BQUw7QUFDRCxPQUpPO0FBS1JDLHFCQUFlLHlCQUFZO0FBQ3pCLFlBQUlDLFVBQVUsQ0FBQyxTQUFELEVBQVksU0FBWixFQUF1QixTQUF2QixFQUFrQyxTQUFsQyxFQUE2QyxTQUE3QyxFQUF3RCxTQUF4RCxDQUFkO0FBQ0EsYUFBS1gsT0FBTCxHQUFlVyxRQUFRQyxLQUFLQyxLQUFMLENBQVdELEtBQUtFLE1BQUwsS0FBZ0JILFFBQVFJLE1BQW5DLENBQVIsQ0FBZjtBQUNBLGFBQUtOLE1BQUw7QUFDRCxPQVRPO0FBVVJPLGdCQUFVLG9CQUFZO0FBQ3BCLGFBQUtmLFFBQUwsR0FBZ0IsS0FBS0EsUUFBTCxLQUFrQixTQUFsQixHQUE4QixTQUE5QixHQUEwQyxTQUExRDtBQUNBLGFBQUtRLE1BQUw7QUFDRCxPQWJPO0FBY1JRLHFCQUFlLHlCQUFZO0FBQ3pCLGFBQUtsQixTQUFMLEdBQWlCLENBQUMsS0FBS0EsU0FBdkI7QUFDQSxhQUFLVSxNQUFMO0FBQ0Q7QUFqQk8sSzs7Ozs7NkJBbUJELENBQ1I7Ozs7RUFwQ2dDLGVBQUtTLEk7O2tCQUFuQnhCLEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IGluYXZlciBmcm9tICcuLi9pbmF2ZXIvaW5hdmVyJ1xuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ3Rlc3QnXG4gICAgfVxuICAgIGRhdGEgPSB7XG4gICAgICBzaG93QmFjazogdHJ1ZSxcbiAgICAgIHNtYXJ0QmFjazogdHJ1ZSxcbiAgICAgIGJnQ29sb3I6ICcjMzUzNTM1JyxcbiAgICAgIGRlbW9UeXBlOiAnZGVmYXVsdCdcbiAgICB9XG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcImluYXZlclwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6c2hvd0JhY2suc3luY1wiOlwic2hvd0JhY2tcIixcInYtYmluZDpiYWNrZ3JvdW5kLnN5bmNcIjpcImJnQ29sb3JcIixcInYtYmluZDpzbWFydEJhY2suc3luY1wiOlwic21hcnRCYWNrXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgIGluYXZlclxuICAgIH1cbiAgICBtZXRob2RzID0ge1xuICAgICAgc2hvd05vdEJhY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5zaG93QmFjayA9ICF0aGlzLnNob3dCYWNrXG4gICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIH0sXG4gICAgICByYW5kb21CZ0NvbG9yOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBfY29sb3JzID0gWycjMzUzNTM1JywgJyNFMzhGNTgnLCAnIzJBNUM5OCcsICcjMDI3MjA0JywgJyM0NDU0Q0MnLCAnIzYwRDRDMCddXG4gICAgICAgIHRoaXMuYmdDb2xvciA9IF9jb2xvcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogX2NvbG9ycy5sZW5ndGgpXVxuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICB9LFxuICAgICAgc2hvd0RlbW86IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5kZW1vVHlwZSA9IHRoaXMuZGVtb1R5cGUgPT09ICdkZWZhdWx0JyA/ICdwaWN0dXJlJyA6ICdkZWZhdWx0J1xuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICB9LFxuICAgICAgc2hvd1NhbXJ0QmFjazogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnNtYXJ0QmFjayA9ICF0aGlzLnNtYXJ0QmFja1xuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICB9XG4gICAgfVxuICAgIG9uTG9hZCgpIHtcbiAgICB9XG4gIH1cbiJdfQ==