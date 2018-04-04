'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Inaver = function (_wepy$component) {
  _inherits(Inaver, _wepy$component);

  function Inaver() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Inaver);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Inaver.__proto__ || Object.getPrototypeOf(Inaver)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      background: {
        type: String,
        default: '#353535'
      },
      colorTheme: {
        type: String,
        default: 'white'
      },
      showBack: {
        type: Boolean,
        default: true
      },
      protectCapsule: {
        type: Boolean,
        default: true
      },
      toBack: {
        type: Boolean,
        default: true
      },
      checkCompatibility: {
        type: Boolean,
        default: true
      },
      smartBack: {
        type: Boolean,
        default: true
      }
    }, _this.computed = {
      getColor: function getColor() {
        if (this.colorTheme === 'black') {
          return '#000';
        } else {
          return '#FFF';
        }
      },
      getCompatibility: function getCompatibility() {
        if (!this.checkCompatibility) {
          return true;
        }
        if (this._compareVersion(_wepy2.default.getSystemInfoSync().version, '6.6.0') === -1) {
          return false;
        }
        return true;
      },
      getSmartShowBack: function getSmartShowBack() {
        var _currentPages = getCurrentPages();
        if (this.smartBack && this.showBack) {
          if (_currentPages.length === 1) {
            return false;
          }
          return true;
        }
        return this.showBack;
      }
    }, _this.watch = {}, _this.data = {}, _this.methods = {
      goBack: function goBack() {
        if (this.toBack) {
          _wepy2.default.navigateBack();
        }
        this.$emit('back');
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Inaver, [{
    key: '_compareVersion',
    value: function _compareVersion(v1, v2) {
      v1 = v1.split('.');
      v2 = v2.split('.');
      var len = Math.max(v1.length, v2.length);

      while (v1.length < len) {
        v1.push('0');
      }
      while (v2.length < len) {
        v2.push('0');
      }

      for (var i = 0; i < len; i++) {
        var num1 = parseInt(v1[i]);
        var num2 = parseInt(v2[i]);

        if (num1 > num2) {
          return 1;
        } else if (num1 < num2) {
          return -1;
        }
      }

      return 0;
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Inaver;
}(_wepy2.default.component);

exports.default = Inaver;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluYXZlci5qcyJdLCJuYW1lcyI6WyJJbmF2ZXIiLCJwcm9wcyIsImJhY2tncm91bmQiLCJ0eXBlIiwiU3RyaW5nIiwiZGVmYXVsdCIsImNvbG9yVGhlbWUiLCJzaG93QmFjayIsIkJvb2xlYW4iLCJwcm90ZWN0Q2Fwc3VsZSIsInRvQmFjayIsImNoZWNrQ29tcGF0aWJpbGl0eSIsInNtYXJ0QmFjayIsImNvbXB1dGVkIiwiZ2V0Q29sb3IiLCJnZXRDb21wYXRpYmlsaXR5IiwiX2NvbXBhcmVWZXJzaW9uIiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJ2ZXJzaW9uIiwiZ2V0U21hcnRTaG93QmFjayIsIl9jdXJyZW50UGFnZXMiLCJnZXRDdXJyZW50UGFnZXMiLCJsZW5ndGgiLCJ3YXRjaCIsImRhdGEiLCJtZXRob2RzIiwiZ29CYWNrIiwibmF2aWdhdGVCYWNrIiwiJGVtaXQiLCJ2MSIsInYyIiwic3BsaXQiLCJsZW4iLCJNYXRoIiwibWF4IiwicHVzaCIsImkiLCJudW0xIiwicGFyc2VJbnQiLCJudW0yIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFDcUJBLE07Ozs7Ozs7Ozs7Ozs7O3NMQUNuQkMsSyxHQUFRO0FBQ05DLGtCQUFZO0FBQ1ZDLGNBQU1DLE1BREk7QUFFVkMsaUJBQVM7QUFGQyxPQUROO0FBS05DLGtCQUFZO0FBQ1ZILGNBQU1DLE1BREk7QUFFVkMsaUJBQVM7QUFGQyxPQUxOO0FBU05FLGdCQUFVO0FBQ1JKLGNBQU1LLE9BREU7QUFFUkgsaUJBQVM7QUFGRCxPQVRKO0FBYU5JLHNCQUFnQjtBQUNkTixjQUFNSyxPQURRO0FBRWRILGlCQUFTO0FBRkssT0FiVjtBQWlCTkssY0FBUTtBQUNOUCxjQUFNSyxPQURBO0FBRU5ILGlCQUFTO0FBRkgsT0FqQkY7QUFxQk5NLDBCQUFvQjtBQUNsQlIsY0FBTUssT0FEWTtBQUVsQkgsaUJBQVM7QUFGUyxPQXJCZDtBQXlCTk8saUJBQVc7QUFDVFQsY0FBTUssT0FERztBQUVUSCxpQkFBUztBQUZBO0FBekJMLEssUUF3RFJRLFEsR0FBVztBQUNUQyxnQkFBVSxvQkFBWTtBQUNwQixZQUFJLEtBQUtSLFVBQUwsS0FBb0IsT0FBeEIsRUFBaUM7QUFDL0IsaUJBQU8sTUFBUDtBQUNELFNBRkQsTUFFTztBQUNMLGlCQUFPLE1BQVA7QUFDRDtBQUNGLE9BUFE7QUFRVFMsd0JBQWtCLDRCQUFZO0FBQzVCLFlBQUksQ0FBQyxLQUFLSixrQkFBVixFQUE4QjtBQUM1QixpQkFBTyxJQUFQO0FBQ0Q7QUFDRCxZQUFJLEtBQUtLLGVBQUwsQ0FBcUIsZUFBS0MsaUJBQUwsR0FBeUJDLE9BQTlDLEVBQXVELE9BQXZELE1BQW9FLENBQUMsQ0FBekUsRUFBNEU7QUFDMUUsaUJBQU8sS0FBUDtBQUNEO0FBQ0QsZUFBTyxJQUFQO0FBQ0QsT0FoQlE7QUFpQlRDLHdCQUFrQiw0QkFBWTtBQUM1QixZQUFJQyxnQkFBZ0JDLGlCQUFwQjtBQUNBLFlBQUksS0FBS1QsU0FBTCxJQUFrQixLQUFLTCxRQUEzQixFQUFxQztBQUNuQyxjQUFJYSxjQUFjRSxNQUFkLEtBQXlCLENBQTdCLEVBQWdDO0FBQzlCLG1CQUFPLEtBQVA7QUFDRDtBQUNELGlCQUFPLElBQVA7QUFDRDtBQUNELGVBQU8sS0FBS2YsUUFBWjtBQUNEO0FBMUJRLEssUUE0QlhnQixLLEdBQVEsRSxRQUVSQyxJLEdBQU8sRSxRQUlQQyxPLEdBQVU7QUFDUkMsY0FBUSxrQkFBWTtBQUNsQixZQUFJLEtBQUtoQixNQUFULEVBQWlCO0FBQ2YseUJBQUtpQixZQUFMO0FBQ0Q7QUFDRCxhQUFLQyxLQUFMLENBQVcsTUFBWDtBQUNEO0FBTk8sSzs7Ozs7b0NBNURNQyxFLEVBQUlDLEUsRUFBSTtBQUN0QkQsV0FBS0EsR0FBR0UsS0FBSCxDQUFTLEdBQVQsQ0FBTDtBQUNBRCxXQUFLQSxHQUFHQyxLQUFILENBQVMsR0FBVCxDQUFMO0FBQ0EsVUFBSUMsTUFBTUMsS0FBS0MsR0FBTCxDQUFTTCxHQUFHUCxNQUFaLEVBQW9CUSxHQUFHUixNQUF2QixDQUFWOztBQUVBLGFBQU9PLEdBQUdQLE1BQUgsR0FBWVUsR0FBbkIsRUFBd0I7QUFDdEJILFdBQUdNLElBQUgsQ0FBUSxHQUFSO0FBQ0Q7QUFDRCxhQUFPTCxHQUFHUixNQUFILEdBQVlVLEdBQW5CLEVBQXdCO0FBQ3RCRixXQUFHSyxJQUFILENBQVEsR0FBUjtBQUNEOztBQUVELFdBQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJSixHQUFwQixFQUF5QkksR0FBekIsRUFBOEI7QUFDNUIsWUFBSUMsT0FBT0MsU0FBU1QsR0FBR08sQ0FBSCxDQUFULENBQVg7QUFDQSxZQUFJRyxPQUFPRCxTQUFTUixHQUFHTSxDQUFILENBQVQsQ0FBWDs7QUFFQSxZQUFJQyxPQUFPRSxJQUFYLEVBQWlCO0FBQ2YsaUJBQU8sQ0FBUDtBQUNELFNBRkQsTUFFTyxJQUFJRixPQUFPRSxJQUFYLEVBQWlCO0FBQ3RCLGlCQUFPLENBQUMsQ0FBUjtBQUNEO0FBQ0Y7O0FBRUQsYUFBTyxDQUFQO0FBQ0Q7Ozs2QkFrQ1EsQ0FDUjs7OztFQTFGaUMsZUFBS0MsUzs7a0JBQXBCeEMsTSIsImZpbGUiOiJpbmF2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5hdmVyIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgIHByb3BzID0ge1xuICAgICAgYmFja2dyb3VuZDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIGRlZmF1bHQ6ICcjMzUzNTM1J1xuICAgICAgfSxcbiAgICAgIGNvbG9yVGhlbWU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBkZWZhdWx0OiAnd2hpdGUnXG4gICAgICB9LFxuICAgICAgc2hvd0JhY2s6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgZGVmYXVsdDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHByb3RlY3RDYXBzdWxlOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIGRlZmF1bHQ6IHRydWVcbiAgICAgIH0sXG4gICAgICB0b0JhY2s6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgZGVmYXVsdDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIGNoZWNrQ29tcGF0aWJpbGl0eToge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBkZWZhdWx0OiB0cnVlXG4gICAgICB9LFxuICAgICAgc21hcnRCYWNrOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIGRlZmF1bHQ6IHRydWVcbiAgICAgIH1cbiAgICB9XG4gICAgX2NvbXBhcmVWZXJzaW9uKHYxLCB2Mikge1xuICAgICAgdjEgPSB2MS5zcGxpdCgnLicpXG4gICAgICB2MiA9IHYyLnNwbGl0KCcuJylcbiAgICAgIHZhciBsZW4gPSBNYXRoLm1heCh2MS5sZW5ndGgsIHYyLmxlbmd0aClcblxuICAgICAgd2hpbGUgKHYxLmxlbmd0aCA8IGxlbikge1xuICAgICAgICB2MS5wdXNoKCcwJylcbiAgICAgIH1cbiAgICAgIHdoaWxlICh2Mi5sZW5ndGggPCBsZW4pIHtcbiAgICAgICAgdjIucHVzaCgnMCcpXG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgdmFyIG51bTEgPSBwYXJzZUludCh2MVtpXSlcbiAgICAgICAgdmFyIG51bTIgPSBwYXJzZUludCh2MltpXSlcblxuICAgICAgICBpZiAobnVtMSA+IG51bTIpIHtcbiAgICAgICAgICByZXR1cm4gMVxuICAgICAgICB9IGVsc2UgaWYgKG51bTEgPCBudW0yKSB7XG4gICAgICAgICAgcmV0dXJuIC0xXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIDBcbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcbiAgICAgIGdldENvbG9yOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbG9yVGhlbWUgPT09ICdibGFjaycpIHtcbiAgICAgICAgICByZXR1cm4gJyMwMDAnXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuICcjRkZGJ1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZ2V0Q29tcGF0aWJpbGl0eTogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuY2hlY2tDb21wYXRpYmlsaXR5KSB7XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fY29tcGFyZVZlcnNpb24od2VweS5nZXRTeXN0ZW1JbmZvU3luYygpLnZlcnNpb24sICc2LjYuMCcpID09PSAtMSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9LFxuICAgICAgZ2V0U21hcnRTaG93QmFjazogZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgX2N1cnJlbnRQYWdlcyA9IGdldEN1cnJlbnRQYWdlcygpXG4gICAgICAgIGlmICh0aGlzLnNtYXJ0QmFjayAmJiB0aGlzLnNob3dCYWNrKSB7XG4gICAgICAgICAgaWYgKF9jdXJyZW50UGFnZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5zaG93QmFja1xuICAgICAgfVxuICAgIH1cbiAgICB3YXRjaCA9IHtcbiAgICB9XG4gICAgZGF0YSA9IHtcbiAgICB9XG4gICAgb25Mb2FkKCkge1xuICAgIH1cbiAgICBtZXRob2RzID0ge1xuICAgICAgZ29CYWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnRvQmFjaykge1xuICAgICAgICAgIHdlcHkubmF2aWdhdGVCYWNrKClcbiAgICAgICAgfVxuICAgICAgICB0aGlzLiRlbWl0KCdiYWNrJylcbiAgICAgIH1cbiAgICB9XG4gIH1cbiJdfQ==