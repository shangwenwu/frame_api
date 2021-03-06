'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = undefined;

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _rcUtil = require('rc-util');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

function getScroll(w, top) {
  var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
  var method = 'scroll' + (top ? 'Top' : 'Left');
  if (typeof ret !== 'number') {
    var d = w.document;
    // ie6,7,8 standard mode
    ret = d.documentElement[method];
    if (typeof ret !== 'number') {
      // quirks mode
      ret = d.body[method];
    }
  }
  return ret;
}

function getOffset(element) {
  var rect = element.getBoundingClientRect();
  var body = document.body;
  var clientTop = element.clientTop || body.clientTop || 0;
  var clientLeft = element.clientLeft || body.clientLeft || 0;
  var scrollTop = getScroll(window, true);
  var scrollLeft = getScroll(window);

  return {
    top: rect.top + scrollTop - clientTop,
    left: rect.left + scrollLeft - clientLeft
  };
}

var Affix = (_temp = _class = function (_React$Component) {
  _inherits(Affix, _React$Component);

  function Affix(props) {
    _classCallCheck(this, Affix);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.handleScroll = function () {
      var _this$props = _this.props;
      var offsetTop = _this$props.offsetTop;
      var offsetBottom = _this$props.offsetBottom;
      var offset = _this$props.offset;

      // Backwards support

      offsetTop = offsetTop || offset;
      var scrollTop = getScroll(window, true);
      var elemOffset = getOffset(_reactDom2["default"].findDOMNode(_this));
      var elemSize = {
        width: _reactDom2["default"].findDOMNode(_this.refs.fixedNode).offsetWidth,
        height: _reactDom2["default"].findDOMNode(_this.refs.fixedNode).offsetHeight
      };

      var offsetMode = {};
      if (typeof offsetTop !== 'number' && typeof offsetBottom !== 'number') {
        offsetMode.top = true;
        offsetTop = 0;
      } else {
        offsetMode.top = typeof offsetTop === 'number';
        offsetMode.bottom = typeof offsetBottom === 'number';
      }

      if (scrollTop > elemOffset.top - offsetTop && offsetMode.top) {
        // Fixed Top
        if (!_this.state.affixStyle) {
          _this.setState({
            affixStyle: {
              position: 'fixed',
              top: offsetTop,
              left: elemOffset.left,
              width: _reactDom2["default"].findDOMNode(_this).offsetWidth
            }
          }, function () {
            return _this.props.onChange(!!_this.state.affixStyle);
          });
        }
      } else if (scrollTop < elemOffset.top + elemSize.height + offsetBottom - window.innerHeight && offsetMode.bottom) {
        // Fixed Bottom
        if (!_this.state.affixStyle) {
          _this.setState({
            affixStyle: {
              position: 'fixed',
              bottom: offsetBottom,
              left: elemOffset.left,
              width: _reactDom2["default"].findDOMNode(_this).offsetWidth
            }
          }, function () {
            return _this.props.onChange(!!_this.state.affixStyle);
          });
        }
      } else if (_this.state.affixStyle) {
        _this.setState({
          affixStyle: null
        }, function () {
          return _this.props.onChange(!!_this.state.affixStyle);
        });
      }
    };

    _this.state = {
      affixStyle: null
    };
    return _this;
  }

  Affix.prototype.componentDidMount = function componentDidMount() {
    (0, _warning2["default"])(!('offset' in this.props), '`offset` prop of Affix is deprecated, use `offsetTop` instead.');
    this.scrollEvent = _rcUtil.Dom.addEventListener(window, 'scroll', this.handleScroll);
    this.resizeEvent = _rcUtil.Dom.addEventListener(window, 'resize', this.handleScroll);
  };

  Affix.prototype.componentWillUnmount = function componentWillUnmount() {
    if (this.scrollEvent) {
      this.scrollEvent.remove();
    }
    if (this.resizeEvent) {
      this.resizeEvent.remove();
    }
  };

  Affix.prototype.render = function render() {
    var className = (0, _classnames2["default"])({
      'ant-affix': this.state.affixStyle
    });

    return _react2["default"].createElement(
      'div',
      this.props,
      _react2["default"].createElement(
        'div',
        { className: className, ref: 'fixedNode', style: this.state.affixStyle },
        this.props.children
      )
    );
  };

  return Affix;
}(_react2["default"].Component), _class.propTypes = {
  offsetTop: _react2["default"].PropTypes.number,
  offsetBottom: _react2["default"].PropTypes.number
}, _class.defaultProps = {
  onChange: function onChange() {}
}, _temp);
exports["default"] = Affix;
module.exports = exports['default'];