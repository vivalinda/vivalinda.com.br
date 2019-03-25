webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-server/head */ "./node_modules/next-server/head.js");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_server_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Page */ "./components/Page.js");


var _jsxFileName = "/Users/ronaldo/Documents/sites/vivalinda.com.br/pages/index.js";







var Index = function Index(_ref) {
  var photos = _ref.photos;
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Page__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_server_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("title", {
    className: "jsx-3213433793",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Vivalinda"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("meta", {
    charSet: "utf-8",
    className: "jsx-3213433793",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    className: "jsx-3213433793",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("meta", {
    "http-equiv": "X-UA-Compatible",
    content: "ie=edge",
    className: "jsx-3213433793",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("meta", {
    name: "description",
    content: "Vivalinda, Novidades Toda Quarta - Voc\xEA Merece - #novidadestodaquarta",
    className: "jsx-3213433793",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("link", {
    rel: "shortcut icon",
    href: "./static/favicon.ico",
    className: "jsx-3213433793",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-3213433793" + " " + "row no-gutters photoContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, photos.map(function (photo, i) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      key: i,
      className: "jsx-3213433793" + " " + "col-12 col-sm-6 col-md-4 col-lg-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
      href: photo.link,
      className: "jsx-3213433793",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
      alt: "foto-instagram",
      src: photo.images.standard_resolution.url,
      className: "jsx-3213433793" + " " + "photoCard",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    })));
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "599180426",
    __self: this
  }, ".photoContainer.jsx-3213433793{padding:67px 1.5% 1.5% 1.5%;}.photoCard.jsx-3213433793{position:relative;width:100%;height:100%;padding:3%;border-radius:7%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb25hbGRvL0RvY3VtZW50cy9zaXRlcy92aXZhbGluZGEuY29tLmJyL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCa0IsQUFHdUMsQUFHVixrQkFDUCxVQUhiLENBSWMsWUFDRCxXQUNNLGlCQUNuQiIsImZpbGUiOiIvVXNlcnMvcm9uYWxkby9Eb2N1bWVudHMvc2l0ZXMvdml2YWxpbmRhLmNvbS5ici9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJ1xuaW1wb3J0IFBhZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9QYWdlJ1xuXG5cbmNvbnN0IEluZGV4ID0gKHsgcGhvdG9zIH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgIDxQYWdlPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5WaXZhbGluZGE8L3RpdGxlPlxuICAgICAgICA8bWV0YSBjaGFyU2V0PSd1dGYtOCcgLz5cbiAgICAgICAgPG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J2luaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGgnIC8+XG4gICAgICAgIDxtZXRhIGh0dHAtZXF1aXY9XCJYLVVBLUNvbXBhdGlibGVcIiBjb250ZW50PVwiaWU9ZWRnZVwiLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIlZpdmFsaW5kYSwgTm92aWRhZGVzIFRvZGEgUXVhcnRhIC0gVm9jw6ogTWVyZWNlIC0gI25vdmlkYWRlc3RvZGFxdWFydGFcIi8+XG4gICAgICAgIDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiBocmVmPVwiLi9zdGF0aWMvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbm8tZ3V0dGVycyBwaG90b0NvbnRhaW5lclwiPlxuICAgICAgICB7cGhvdG9zLm1hcCgocGhvdG8sIGkpID0+IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtc20tNiBjb2wtbWQtNCBjb2wtbGctM1wiIGtleT17aX0gPlxuICAgICAgICAgICAgPGEgaHJlZj17cGhvdG8ubGlua30+XG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicGhvdG9DYXJkXCIgICBhbHQ9XCJmb3RvLWluc3RhZ3JhbVwiIHNyYz17cGhvdG8uaW1hZ2VzLnN0YW5kYXJkX3Jlc29sdXRpb24udXJsfSAvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAucGhvdG9Db250YWluZXJ7XG4gICAgICAgICAgcGFkZGluZzogNjdweCAxLjUlIDEuNSUgMS41JTtcbiAgICAgICAgfVxuICAgICAgICAucGhvdG9DYXJkIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIHBhZGRpbmc6IDMlO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDclO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyMTIxO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICBcbiAgICAgIDwvUGFnZT5cbiAgKVxufVxuXG5QYWdlLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgYmFzZVVSTCA9ICdodHRwczovL2FwaS5pbnN0YWdyYW0uY29tL3YxL3VzZXJzL3NlbGYvbWVkaWEvcmVjZW50LydcbiAgY29uc3QgSU5TVEFfVE9LRU4gPSAnMjAyNTg2NjMyNC4xNjc3ZWQwLjNiOWZjYWJkOTRlMDRkNjc4ZmU0YThmYmM5NWQ3OWM2J1xuICBjb25zdCBudW1PZlBpY3MgPSAxMiAgXG5cbiAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke2Jhc2VVUkx9P2FjY2Vzc190b2tlbj0ke0lOU1RBX1RPS0VOfSZjb3VudD0ke251bU9mUGljc30mY2FsbGJhY2s9P2ApO1xuXG4gIHJldHVybiB7IHBob3RvczogcmVzLmRhdGEuZGF0YSB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4XG4iXX0= */\n/*@ sourceURL=/Users/ronaldo/Documents/sites/vivalinda.com.br/pages/index.js */"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "4285601570",
    __self: this
  }, "body{background-color:#212121;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb25hbGRvL0RvY3VtZW50cy9zaXRlcy92aXZhbGluZGEuY29tLmJyL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNDeUIsQUFHb0MseUJBQzNCIiwiZmlsZSI6Ii9Vc2Vycy9yb25hbGRvL0RvY3VtZW50cy9zaXRlcy92aXZhbGluZGEuY29tLmJyL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnXG5pbXBvcnQgUGFnZSBmcm9tICcuLi9jb21wb25lbnRzL1BhZ2UnXG5cblxuY29uc3QgSW5kZXggPSAoeyBwaG90b3MgfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgPFBhZ2U+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlZpdmFsaW5kYTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9J3V0Zi04JyAvPlxuICAgICAgICA8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0naW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aCcgLz5cbiAgICAgICAgPG1ldGEgaHR0cC1lcXVpdj1cIlgtVUEtQ29tcGF0aWJsZVwiIGNvbnRlbnQ9XCJpZT1lZGdlXCIvPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiVml2YWxpbmRhLCBOb3ZpZGFkZXMgVG9kYSBRdWFydGEgLSBWb2PDqiBNZXJlY2UgLSAjbm92aWRhZGVzdG9kYXF1YXJ0YVwiLz5cbiAgICAgICAgPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIGhyZWY9XCIuL3N0YXRpYy9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBuby1ndXR0ZXJzIHBob3RvQ29udGFpbmVyXCI+XG4gICAgICAgIHtwaG90b3MubWFwKChwaG90bywgaSkgPT4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS02IGNvbC1tZC00IGNvbC1sZy0zXCIga2V5PXtpfSA+XG4gICAgICAgICAgICA8YSBocmVmPXtwaG90by5saW5rfT5cbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJwaG90b0NhcmRcIiAgIGFsdD1cImZvdG8taW5zdGFncmFtXCIgc3JjPXtwaG90by5pbWFnZXMuc3RhbmRhcmRfcmVzb2x1dGlvbi51cmx9IC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5waG90b0NvbnRhaW5lcntcbiAgICAgICAgICBwYWRkaW5nOiA2N3B4IDEuNSUgMS41JSAxLjUlO1xuICAgICAgICB9XG4gICAgICAgIC5waG90b0NhcmQge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgcGFkZGluZzogMyU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNyU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTIxMjE7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIFxuICAgICAgPC9QYWdlPlxuICApXG59XG5cblBhZ2UuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBiYXNlVVJMID0gJ2h0dHBzOi8vYXBpLmluc3RhZ3JhbS5jb20vdjEvdXNlcnMvc2VsZi9tZWRpYS9yZWNlbnQvJ1xuICBjb25zdCBJTlNUQV9UT0tFTiA9ICcyMDI1ODY2MzI0LjE2NzdlZDAuM2I5ZmNhYmQ5NGUwNGQ2NzhmZTRhOGZiYzk1ZDc5YzYnXG4gIGNvbnN0IG51bU9mUGljcyA9IDEyICBcblxuICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7YmFzZVVSTH0/YWNjZXNzX3Rva2VuPSR7SU5TVEFfVE9LRU59JmNvdW50PSR7bnVtT2ZQaWNzfSZjYWxsYmFjaz0/YCk7XG5cbiAgcmV0dXJuIHsgcGhvdG9zOiByZXMuZGF0YS5kYXRhIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhcbiJdfQ== */\n/*@ sourceURL=/Users/ronaldo/Documents/sites/vivalinda.com.br/pages/index.js */"));
};

_components_Page__WEBPACK_IMPORTED_MODULE_7__["default"].getInitialProps =
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var baseURL, INSTA_TOKEN, numOfPics, res;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          baseURL = 'https://api.instagram.com/v1/users/self/media/recent/';
          INSTA_TOKEN = '2025866324.1677ed0.3b9fcabd94e04d678fe4a8fbc95d79c6';
          numOfPics = 12;
          _context.next = 5;
          return axios__WEBPACK_IMPORTED_MODULE_5___default.a.get("".concat(baseURL, "?access_token=").concat(INSTA_TOKEN, "&count=").concat(numOfPics, "&callback=?"));

        case 5:
          res = _context.sent;
          return _context.abrupt("return", {
            photos: res.data.data
          });

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.a21b2246136fa25b0e39.hot-update.js.map