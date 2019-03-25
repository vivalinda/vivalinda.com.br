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
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/NavBar */ "./components/NavBar.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");


var _jsxFileName = "/Users/ronaldo/Documents/sites/vivalinda.com.br/pages/index.js";








var Page = function Page(_ref) {
  var photos = _ref.photos;
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-3213433793",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_server_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("title", {
    className: "jsx-3213433793",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Vivalinda"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("meta", {
    charSet: "utf-8",
    className: "jsx-3213433793",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    className: "jsx-3213433793",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_NavBar__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-3213433793" + " " + "row no-gutters photoContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, photos.map(function (photo, i) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      key: i,
      className: "jsx-3213433793" + " " + "col-12 col-sm-6 col-md-4 col-lg-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
      href: photo.link,
      className: "jsx-3213433793",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
      alt: "foto-instagram",
      src: photo.images.standard_resolution.url,
      className: "jsx-3213433793" + " " + "photoCard",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    })));
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "599180426",
    __self: this
  }, ".photoContainer.jsx-3213433793{padding:67px 1.5% 1.5% 1.5%;}.photoCard.jsx-3213433793{position:relative;width:100%;height:100%;padding:3%;border-radius:7%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb25hbGRvL0RvY3VtZW50cy9zaXRlcy92aXZhbGluZGEuY29tLmJyL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCa0IsQUFHdUMsQUFHVixrQkFDUCxVQUhiLENBSWMsWUFDRCxXQUNNLGlCQUNuQiIsImZpbGUiOiIvVXNlcnMvcm9uYWxkby9Eb2N1bWVudHMvc2l0ZXMvdml2YWxpbmRhLmNvbS5ici9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJ1xuaW1wb3J0IE5hdkJhciBmcm9tICcuLi9jb21wb25lbnRzL05hdkJhcidcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXInXG5cblxuY29uc3QgUGFnZSA9ICh7IHBob3RvcyB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5WaXZhbGluZGE8L3RpdGxlPlxuICAgICAgICA8bWV0YSBjaGFyU2V0PSd1dGYtOCcgLz5cbiAgICAgICAgPG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J2luaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGgnIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8TmF2QmFyIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBuby1ndXR0ZXJzIHBob3RvQ29udGFpbmVyXCI+XG4gICAgICAgIHtwaG90b3MubWFwKChwaG90bywgaSkgPT4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS02IGNvbC1tZC00IGNvbC1sZy0zXCIga2V5PXtpfSA+XG4gICAgICAgICAgICA8YSBocmVmPXtwaG90by5saW5rfT5cbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJwaG90b0NhcmRcIiAgIGFsdD1cImZvdG8taW5zdGFncmFtXCIgc3JjPXtwaG90by5pbWFnZXMuc3RhbmRhcmRfcmVzb2x1dGlvbi51cmx9IC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5waG90b0NvbnRhaW5lcntcbiAgICAgICAgICBwYWRkaW5nOiA2N3B4IDEuNSUgMS41JSAxLjUlO1xuICAgICAgICB9XG4gICAgICAgIC5waG90b0NhcmQge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgcGFkZGluZzogMyU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNyU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTIxMjE7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIFxuICAgIDwvZGl2PlxuICApXG59XG5cblBhZ2UuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBiYXNlVVJMID0gJ2h0dHBzOi8vYXBpLmluc3RhZ3JhbS5jb20vdjEvdXNlcnMvc2VsZi9tZWRpYS9yZWNlbnQvJ1xuICBjb25zdCBJTlNUQV9UT0tFTiA9ICcyMDI1ODY2MzI0LjE2NzdlZDAuM2I5ZmNhYmQ5NGUwNGQ2NzhmZTRhOGZiYzk1ZDc5YzYnXG4gIGNvbnN0IG51bU9mUGljcyA9IDEyICBcblxuICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7YmFzZVVSTH0/YWNjZXNzX3Rva2VuPSR7SU5TVEFfVE9LRU59JmNvdW50PSR7bnVtT2ZQaWNzfSZjYWxsYmFjaz0/YCk7XG5cbiAgcmV0dXJuIHsgcGhvdG9zOiByZXMuZGF0YS5kYXRhIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFnZVxuIl19 */\n/*@ sourceURL=/Users/ronaldo/Documents/sites/vivalinda.com.br/pages/index.js */"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "4285601570",
    __self: this
  }, "body{background-color:#212121;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb25hbGRvL0RvY3VtZW50cy9zaXRlcy92aXZhbGluZGEuY29tLmJyL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNDeUIsQUFHb0MseUJBQzNCIiwiZmlsZSI6Ii9Vc2Vycy9yb25hbGRvL0RvY3VtZW50cy9zaXRlcy92aXZhbGluZGEuY29tLmJyL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnXG5pbXBvcnQgTmF2QmFyIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2QmFyJ1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3RlcidcblxuXG5jb25zdCBQYWdlID0gKHsgcGhvdG9zIH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlZpdmFsaW5kYTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9J3V0Zi04JyAvPlxuICAgICAgICA8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0naW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aCcgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxOYXZCYXIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG5vLWd1dHRlcnMgcGhvdG9Db250YWluZXJcIj5cbiAgICAgICAge3Bob3Rvcy5tYXAoKHBob3RvLCBpKSA9PiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXNtLTYgY29sLW1kLTQgY29sLWxnLTNcIiBrZXk9e2l9ID5cbiAgICAgICAgICAgIDxhIGhyZWY9e3Bob3RvLmxpbmt9PlxuICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInBob3RvQ2FyZFwiICAgYWx0PVwiZm90by1pbnN0YWdyYW1cIiBzcmM9e3Bob3RvLmltYWdlcy5zdGFuZGFyZF9yZXNvbHV0aW9uLnVybH0gLz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxGb290ZXIgLz5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnBob3RvQ29udGFpbmVye1xuICAgICAgICAgIHBhZGRpbmc6IDY3cHggMS41JSAxLjUlIDEuNSU7XG4gICAgICAgIH1cbiAgICAgICAgLnBob3RvQ2FyZCB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBwYWRkaW5nOiAzJTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA3JTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjEyMTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAgXG4gICAgPC9kaXY+XG4gIClcbn1cblxuUGFnZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGJhc2VVUkwgPSAnaHR0cHM6Ly9hcGkuaW5zdGFncmFtLmNvbS92MS91c2Vycy9zZWxmL21lZGlhL3JlY2VudC8nXG4gIGNvbnN0IElOU1RBX1RPS0VOID0gJzIwMjU4NjYzMjQuMTY3N2VkMC4zYjlmY2FiZDk0ZTA0ZDY3OGZlNGE4ZmJjOTVkNzljNidcbiAgY29uc3QgbnVtT2ZQaWNzID0gMTIgIFxuXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtiYXNlVVJMfT9hY2Nlc3NfdG9rZW49JHtJTlNUQV9UT0tFTn0mY291bnQ9JHtudW1PZlBpY3N9JmNhbGxiYWNrPT9gKTtcblxuICByZXR1cm4geyBwaG90b3M6IHJlcy5kYXRhLmRhdGEgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYWdlXG4iXX0= */\n/*@ sourceURL=/Users/ronaldo/Documents/sites/vivalinda.com.br/pages/index.js */"));
};

Page.getInitialProps =
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
/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ })

})
//# sourceMappingURL=index.js.dc24a3a8e55e107883a7.hot-update.js.map