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
      bgColor: '#353535',
      demoType: 'default'
    }, _this.$repeat = {}, _this.$props = { "inaver": { "xmlns:v-bind": "", "v-bind:showBack.sync": "showBack", "v-bind:background.sync": "bgColor" } }, _this.$events = {}, _this.components = {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJzaG93QmFjayIsImJnQ29sb3IiLCJkZW1vVHlwZSIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImluYXZlciIsIm1ldGhvZHMiLCJzaG93Tm90QmFjayIsIiRhcHBseSIsInJhbmRvbUJnQ29sb3IiLCJfY29sb3JzIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwic2hvd0RlbW8iLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLGdCQUFVLElBREw7QUFFTEMsZUFBUyxTQUZKO0FBR0xDLGdCQUFVO0FBSEwsSyxRQUtSQyxPLEdBQVUsRSxRQUNiQyxNLEdBQVMsRUFBQyxVQUFTLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsd0JBQXVCLFVBQTFDLEVBQXFELDBCQUF5QixTQUE5RSxFQUFWLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1JDO0FBRFEsSyxRQUdWQyxPLEdBQVU7QUFDUkMsbUJBQWEsdUJBQVk7QUFDdkIsYUFBS1QsUUFBTCxHQUFnQixDQUFDLEtBQUtBLFFBQXRCO0FBQ0EsYUFBS1UsTUFBTDtBQUNELE9BSk87QUFLUkMscUJBQWUseUJBQVk7QUFDekIsWUFBSUMsVUFBVSxDQUFDLFNBQUQsRUFBWSxTQUFaLEVBQXVCLFNBQXZCLEVBQWtDLFNBQWxDLEVBQTZDLFNBQTdDLEVBQXdELFNBQXhELENBQWQ7QUFDQSxhQUFLWCxPQUFMLEdBQWVXLFFBQVFDLEtBQUtDLEtBQUwsQ0FBV0QsS0FBS0UsTUFBTCxLQUFnQkgsUUFBUUksTUFBbkMsQ0FBUixDQUFmO0FBQ0EsYUFBS04sTUFBTDtBQUNELE9BVE87QUFVUk8sZ0JBQVUsb0JBQVk7QUFDcEIsYUFBS2YsUUFBTCxHQUFnQixLQUFLQSxRQUFMLEtBQWtCLFNBQWxCLEdBQThCLFNBQTlCLEdBQTBDLFNBQTFEO0FBQ0EsYUFBS1EsTUFBTDtBQUNEO0FBYk8sSzs7Ozs7NkJBZUQsQ0FDUjs7OztFQS9CZ0MsZUFBS1EsSTs7a0JBQW5CdEIsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgaW5hdmVyIGZyb20gJy4uL2luYXZlci9pbmF2ZXInXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAndGVzdCdcbiAgICB9XG4gICAgZGF0YSA9IHtcbiAgICAgIHNob3dCYWNrOiB0cnVlLFxuICAgICAgYmdDb2xvcjogJyMzNTM1MzUnLFxuICAgICAgZGVtb1R5cGU6ICdkZWZhdWx0J1xuICAgIH1cbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiaW5hdmVyXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpzaG93QmFjay5zeW5jXCI6XCJzaG93QmFja1wiLFwidi1iaW5kOmJhY2tncm91bmQuc3luY1wiOlwiYmdDb2xvclwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICBpbmF2ZXJcbiAgICB9XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHNob3dOb3RCYWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuc2hvd0JhY2sgPSAhdGhpcy5zaG93QmFja1xuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICB9LFxuICAgICAgcmFuZG9tQmdDb2xvcjogZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgX2NvbG9ycyA9IFsnIzM1MzUzNScsICcjRTM4RjU4JywgJyMyQTVDOTgnLCAnIzAyNzIwNCcsICcjNDQ1NENDJywgJyM2MEQ0QzAnXVxuICAgICAgICB0aGlzLmJnQ29sb3IgPSBfY29sb3JzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIF9jb2xvcnMubGVuZ3RoKV1cbiAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgfSxcbiAgICAgIHNob3dEZW1vOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZGVtb1R5cGUgPSB0aGlzLmRlbW9UeXBlID09PSAnZGVmYXVsdCcgPyAncGljdHVyZScgOiAnZGVmYXVsdCdcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgfVxuICAgIH1cbiAgICBvbkxvYWQoKSB7XG4gICAgfVxuICB9XG4iXX0=