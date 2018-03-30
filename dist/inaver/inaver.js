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
      samrtBack: {
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
    value: function onLoad() {
      if (this.samrtBack && this.showBack) {
        var _currentPages = getCurrentPages();
        if (_currentPages.length === 1) {
          this.showBack = false;
          this.$apply();
        }
      }
    }
  }]);

  return Inaver;
}(_wepy2.default.component);

exports.default = Inaver;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluYXZlci5qcyJdLCJuYW1lcyI6WyJJbmF2ZXIiLCJwcm9wcyIsImJhY2tncm91bmQiLCJ0eXBlIiwiU3RyaW5nIiwiZGVmYXVsdCIsImNvbG9yVGhlbWUiLCJzaG93QmFjayIsIkJvb2xlYW4iLCJwcm90ZWN0Q2Fwc3VsZSIsInRvQmFjayIsImNoZWNrQ29tcGF0aWJpbGl0eSIsInNhbXJ0QmFjayIsImNvbXB1dGVkIiwiZ2V0Q29sb3IiLCJnZXRDb21wYXRpYmlsaXR5IiwiX2NvbXBhcmVWZXJzaW9uIiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJ2ZXJzaW9uIiwid2F0Y2giLCJkYXRhIiwibWV0aG9kcyIsImdvQmFjayIsIm5hdmlnYXRlQmFjayIsIiRlbWl0IiwidjEiLCJ2MiIsInNwbGl0IiwibGVuIiwiTWF0aCIsIm1heCIsImxlbmd0aCIsInB1c2giLCJpIiwibnVtMSIsInBhcnNlSW50IiwibnVtMiIsIl9jdXJyZW50UGFnZXMiLCJnZXRDdXJyZW50UGFnZXMiLCIkYXBwbHkiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUNxQkEsTTs7Ozs7Ozs7Ozs7Ozs7c0xBQ25CQyxLLEdBQVE7QUFDTkMsa0JBQVk7QUFDVkMsY0FBTUMsTUFESTtBQUVWQyxpQkFBUztBQUZDLE9BRE47QUFLTkMsa0JBQVk7QUFDVkgsY0FBTUMsTUFESTtBQUVWQyxpQkFBUztBQUZDLE9BTE47QUFTTkUsZ0JBQVU7QUFDUkosY0FBTUssT0FERTtBQUVSSCxpQkFBUztBQUZELE9BVEo7QUFhTkksc0JBQWdCO0FBQ2ROLGNBQU1LLE9BRFE7QUFFZEgsaUJBQVM7QUFGSyxPQWJWO0FBaUJOSyxjQUFRO0FBQ05QLGNBQU1LLE9BREE7QUFFTkgsaUJBQVM7QUFGSCxPQWpCRjtBQXFCTk0sMEJBQW9CO0FBQ2xCUixjQUFNSyxPQURZO0FBRWxCSCxpQkFBUztBQUZTLE9BckJkO0FBeUJOTyxpQkFBVztBQUNUVCxjQUFNSyxPQURHO0FBRVRILGlCQUFTO0FBRkE7QUF6QkwsSyxRQXdEUlEsUSxHQUFXO0FBQ1RDLGdCQUFVLG9CQUFZO0FBQ3BCLFlBQUksS0FBS1IsVUFBTCxLQUFvQixPQUF4QixFQUFpQztBQUMvQixpQkFBTyxNQUFQO0FBQ0QsU0FGRCxNQUVPO0FBQ0wsaUJBQU8sTUFBUDtBQUNEO0FBQ0YsT0FQUTtBQVFUUyx3QkFBa0IsNEJBQVk7QUFDNUIsWUFBSSxDQUFDLEtBQUtKLGtCQUFWLEVBQThCO0FBQzVCLGlCQUFPLElBQVA7QUFDRDtBQUNELFlBQUksS0FBS0ssZUFBTCxDQUFxQixlQUFLQyxpQkFBTCxHQUF5QkMsT0FBOUMsRUFBdUQsT0FBdkQsTUFBb0UsQ0FBQyxDQUF6RSxFQUE0RTtBQUMxRSxpQkFBTyxLQUFQO0FBQ0Q7QUFDRCxlQUFPLElBQVA7QUFDRDtBQWhCUSxLLFFBa0JYQyxLLEdBQVEsRSxRQUVSQyxJLEdBQU8sRSxRQVdQQyxPLEdBQVU7QUFDUkMsY0FBUSxrQkFBWTtBQUNsQixZQUFJLEtBQUtaLE1BQVQsRUFBaUI7QUFDZix5QkFBS2EsWUFBTDtBQUNEO0FBQ0QsYUFBS0MsS0FBTCxDQUFXLE1BQVg7QUFDRDtBQU5PLEs7Ozs7O29DQXpETUMsRSxFQUFJQyxFLEVBQUk7QUFDdEJELFdBQUtBLEdBQUdFLEtBQUgsQ0FBUyxHQUFULENBQUw7QUFDQUQsV0FBS0EsR0FBR0MsS0FBSCxDQUFTLEdBQVQsQ0FBTDtBQUNBLFVBQUlDLE1BQU1DLEtBQUtDLEdBQUwsQ0FBU0wsR0FBR00sTUFBWixFQUFvQkwsR0FBR0ssTUFBdkIsQ0FBVjs7QUFFQSxhQUFPTixHQUFHTSxNQUFILEdBQVlILEdBQW5CLEVBQXdCO0FBQ3RCSCxXQUFHTyxJQUFILENBQVEsR0FBUjtBQUNEO0FBQ0QsYUFBT04sR0FBR0ssTUFBSCxHQUFZSCxHQUFuQixFQUF3QjtBQUN0QkYsV0FBR00sSUFBSCxDQUFRLEdBQVI7QUFDRDs7QUFFRCxXQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSUwsR0FBcEIsRUFBeUJLLEdBQXpCLEVBQThCO0FBQzVCLFlBQUlDLE9BQU9DLFNBQVNWLEdBQUdRLENBQUgsQ0FBVCxDQUFYO0FBQ0EsWUFBSUcsT0FBT0QsU0FBU1QsR0FBR08sQ0FBSCxDQUFULENBQVg7O0FBRUEsWUFBSUMsT0FBT0UsSUFBWCxFQUFpQjtBQUNmLGlCQUFPLENBQVA7QUFDRCxTQUZELE1BRU8sSUFBSUYsT0FBT0UsSUFBWCxFQUFpQjtBQUN0QixpQkFBTyxDQUFDLENBQVI7QUFDRDtBQUNGOztBQUVELGFBQU8sQ0FBUDtBQUNEOzs7NkJBd0JRO0FBQ1AsVUFBSSxLQUFLeEIsU0FBTCxJQUFrQixLQUFLTCxRQUEzQixFQUFxQztBQUNuQyxZQUFJOEIsZ0JBQWdCQyxpQkFBcEI7QUFDQSxZQUFJRCxjQUFjTixNQUFkLEtBQXlCLENBQTdCLEVBQWdDO0FBQzlCLGVBQUt4QixRQUFMLEdBQWdCLEtBQWhCO0FBQ0EsZUFBS2dDLE1BQUw7QUFDRDtBQUNGO0FBQ0Y7Ozs7RUF2RmlDLGVBQUtDLFM7O2tCQUFwQnhDLE0iLCJmaWxlIjoiaW5hdmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluYXZlciBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICBwcm9wcyA9IHtcbiAgICAgIGJhY2tncm91bmQ6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBkZWZhdWx0OiAnIzM1MzUzNSdcbiAgICAgIH0sXG4gICAgICBjb2xvclRoZW1lOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgZGVmYXVsdDogJ3doaXRlJ1xuICAgICAgfSxcbiAgICAgIHNob3dCYWNrOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIGRlZmF1bHQ6IHRydWVcbiAgICAgIH0sXG4gICAgICBwcm90ZWN0Q2Fwc3VsZToge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBkZWZhdWx0OiB0cnVlXG4gICAgICB9LFxuICAgICAgdG9CYWNrOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIGRlZmF1bHQ6IHRydWVcbiAgICAgIH0sXG4gICAgICBjaGVja0NvbXBhdGliaWxpdHk6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgZGVmYXVsdDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHNhbXJ0QmFjazoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBkZWZhdWx0OiB0cnVlXG4gICAgICB9XG4gICAgfVxuICAgIF9jb21wYXJlVmVyc2lvbih2MSwgdjIpIHtcbiAgICAgIHYxID0gdjEuc3BsaXQoJy4nKVxuICAgICAgdjIgPSB2Mi5zcGxpdCgnLicpXG4gICAgICB2YXIgbGVuID0gTWF0aC5tYXgodjEubGVuZ3RoLCB2Mi5sZW5ndGgpXG5cbiAgICAgIHdoaWxlICh2MS5sZW5ndGggPCBsZW4pIHtcbiAgICAgICAgdjEucHVzaCgnMCcpXG4gICAgICB9XG4gICAgICB3aGlsZSAodjIubGVuZ3RoIDwgbGVuKSB7XG4gICAgICAgIHYyLnB1c2goJzAnKVxuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIHZhciBudW0xID0gcGFyc2VJbnQodjFbaV0pXG4gICAgICAgIHZhciBudW0yID0gcGFyc2VJbnQodjJbaV0pXG5cbiAgICAgICAgaWYgKG51bTEgPiBudW0yKSB7XG4gICAgICAgICAgcmV0dXJuIDFcbiAgICAgICAgfSBlbHNlIGlmIChudW0xIDwgbnVtMikge1xuICAgICAgICAgIHJldHVybiAtMVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAwXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgICBnZXRDb2xvcjogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5jb2xvclRoZW1lID09PSAnYmxhY2snKSB7XG4gICAgICAgICAgcmV0dXJuICcjMDAwJ1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAnI0ZGRidcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGdldENvbXBhdGliaWxpdHk6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNoZWNrQ29tcGF0aWJpbGl0eSkge1xuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2NvbXBhcmVWZXJzaW9uKHdlcHkuZ2V0U3lzdGVtSW5mb1N5bmMoKS52ZXJzaW9uLCAnNi42LjAnKSA9PT0gLTEpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgICB3YXRjaCA9IHtcbiAgICB9XG4gICAgZGF0YSA9IHtcbiAgICB9XG4gICAgb25Mb2FkKCkge1xuICAgICAgaWYgKHRoaXMuc2FtcnRCYWNrICYmIHRoaXMuc2hvd0JhY2spIHtcbiAgICAgICAgbGV0IF9jdXJyZW50UGFnZXMgPSBnZXRDdXJyZW50UGFnZXMoKVxuICAgICAgICBpZiAoX2N1cnJlbnRQYWdlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICB0aGlzLnNob3dCYWNrID0gZmFsc2VcbiAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGdvQmFjazogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy50b0JhY2spIHtcbiAgICAgICAgICB3ZXB5Lm5hdmlnYXRlQmFjaygpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy4kZW1pdCgnYmFjaycpXG4gICAgICB9XG4gICAgfVxuICB9XG4iXX0=