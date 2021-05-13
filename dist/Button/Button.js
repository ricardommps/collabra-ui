"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ButtonComponent = function ButtonComponent(props) {
  return /*#__PURE__*/_react.default.createElement(_Button.default, props);
};

var _default = ButtonComponent;
exports.default = _default;