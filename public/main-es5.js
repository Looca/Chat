function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/chat-inbox/chat-inbox.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat-inbox/chat-inbox.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppChatInboxChatInboxComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"chat-messages\">\n    <div class=\"chat-messages-header\">\n        <div *ngIf=\"onTypingMessage\">{{onTypingMessage}}</div>\n    </div>\n    <div class=\"chat-messages-show-container\">\n        <ul class=\"chat-messages-show-list\">\n            <li class=\"message-list\" *ngFor=\"let message of messageList\"\n                [ngClass]=\"{'me' : !message.user, 'other': message.user}\">\n                <span class=\"user\" *ngIf=\"message.user\">{{message.user}}</span>\n                {{message.message}}\n                <span class=\"time\">{{message.time}}</span>\n            </li>\n        </ul>\n\n    </div>\n    <div class=\"chat-messages-create-container\">\n        <input class=\"chat-messages-create-input\" type=\"text\" [(ngModel)]=\"message\" (keydown)=\"onTyping()\"\n            (keyup)=\"stopTyping()\">\n        <button class=\"chat-messages-create-button\" (click)=\"SendMessage()\"> Invia </button>\n    </div>\n</div>\n<div *ngIf=\"userConnected\">{{userConnected}} si è connesso</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/insert-user/insert-user.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/insert-user/insert-user.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppInsertUserInsertUserComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"flex-container\">\n    <div class=\"cell-12 insert-user\">\n        <h1>Inserisci Username</h1>\n        <mat-form-field appearance=\"outline\">\n            <mat-label>Username</mat-label>\n            <input matInput placeholder=\"Inserisci una username\" [(ngModel)]=\"username\">\n        </mat-form-field>\n        <button button mat-raised-button (click)=\"insertUsername()\">Entra</button>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _chat_inbox_chat_inbox_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./chat-inbox/chat-inbox.component */
    "./src/app/chat-inbox/chat-inbox.component.ts");
    /* harmony import */


    var _insert_user_insert_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./insert-user/insert-user.component */
    "./src/app/insert-user/insert-user.component.ts");

    var routes = [{
      path: '',
      component: _insert_user_insert_user_component__WEBPACK_IMPORTED_MODULE_4__["InsertUserComponent"]
    }, {
      path: 'chat',
      component: _chat_inbox_chat_inbox_component__WEBPACK_IMPORTED_MODULE_3__["ChatInboxComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        useHash: true,
        paramsInheritanceStrategy: 'always'
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'chat-example-frontend';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _chat_inbox_chat_inbox_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./chat-inbox/chat-inbox.component */
    "./src/app/chat-inbox/chat-inbox.component.ts");
    /* harmony import */


    var _insert_user_insert_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./insert-user/insert-user.component */
    "./src/app/insert-user/insert-user.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/esm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _chat_inbox_chat_inbox_component__WEBPACK_IMPORTED_MODULE_6__["ChatInboxComponent"], _insert_user_insert_user_component__WEBPACK_IMPORTED_MODULE_7__["InsertUserComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/chat-inbox/chat-inbox.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/chat-inbox/chat-inbox.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppChatInboxChatInboxComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".chat-messages-show-container{\r\n    min-height: 400px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    overflow: auto;\r\n }\r\n .chat-messages-header{\r\n   background: #616161;\r\n   height: 80px;\r\n   display: flex;\r\n   justify-content: center;\r\n}\r\n .chat-messages-show-list {\r\n    list-style-type:none;\r\n    margin: 0;\r\n    padding: 0;\r\n }\r\n .chat-messages-create-container{\r\n    background: #616161;\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n }\r\n .chat-messages-create-input {\r\n    padding: 12px;\r\n    margin: 29px 30px;\r\n    flex:2\r\n }\r\n .chat-messages-create-button {\r\n    height: 50px;\r\n    margin: auto 40px;\r\n    width: 100px;\r\n }\r\n .message-list{\r\n     margin: 10px;\r\n    padding: 10px;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    box-shadow: 0px 5px 10px -4px rgba(110,110,110,1);\r\n }\r\n .message-list .user {\r\n    display: block;\r\n    font-weight: bold;\r\n    padding-bottom: 10px;\r\n }\r\n .message-list.other{\r\n   border-radius: 0 5px 5px 5px;\r\n   position: relative;\r\n   background: aqua;\r\n   text-align: left;\r\n   max-width: 25%;\r\n   padding: 10px 15px;\r\n   margin-right: 75%;\r\n   /*float: left;*/\r\n   left: 10px;\r\n }\r\n .message-list.other .time{\r\n   display: block;\r\n   text-align: right;\r\n   font-size: 12px;\r\n }\r\n .message-list.me{\r\n   border-radius: 5px 0 5px 5px;\r\n   position: relative;\r\n   background: greenyellow;\r\n   text-align: right;\r\n   max-width: 25%;\r\n   padding: 10px 15px;\r\n   margin-left: 75%;\r\n   /*float: right;*/\r\n   right: 10px;\r\n}\r\n .message-list.me .time{\r\n   display: block;\r\n   text-align: left;\r\n   font-size: 12px;\r\n }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC1pbmJveC9jaGF0LWluYm94LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixjQUFjO0NBQ2pCO0NBQ0E7R0FDRSxtQkFBbUI7R0FDbkIsWUFBWTtHQUNaLGFBQWE7R0FDYix1QkFBdUI7QUFDMUI7Q0FDQztJQUNHLG9CQUFvQjtJQUNwQixTQUFTO0lBQ1QsVUFBVTtDQUNiO0NBQ0E7SUFDRyxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7Q0FDMUI7Q0FDQTtJQUNHLGFBQWE7SUFDYixpQkFBaUI7SUFDakI7Q0FDSDtDQUNBO0lBQ0csWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixZQUFZO0NBQ2Y7Q0FFQTtLQUNJLFlBQVk7SUFDYixhQUFhO0lBQ2IseUNBQXlDO0lBR3pDLGlEQUFpRDtDQUNwRDtDQUVBO0lBQ0csY0FBYztJQUNkLGlCQUFpQjtJQUNqQixvQkFBb0I7Q0FDdkI7Q0FFQTtHQUNFLDRCQUE0QjtHQUM1QixrQkFBa0I7R0FDbEIsZ0JBQWdCO0dBQ2hCLGdCQUFnQjtHQUNoQixjQUFjO0dBQ2Qsa0JBQWtCO0dBQ2xCLGlCQUFpQjtHQUNqQixlQUFlO0dBQ2YsVUFBVTtDQUNaO0NBRUE7R0FDRSxjQUFjO0dBQ2QsaUJBQWlCO0dBQ2pCLGVBQWU7Q0FDakI7Q0FFQTtHQUNFLDRCQUE0QjtHQUM1QixrQkFBa0I7R0FDbEIsdUJBQXVCO0dBQ3ZCLGlCQUFpQjtHQUNqQixjQUFjO0dBQ2Qsa0JBQWtCO0dBQ2xCLGdCQUFnQjtHQUNoQixnQkFBZ0I7R0FDaEIsV0FBVztBQUNkO0NBRUE7R0FDRyxjQUFjO0dBQ2QsZ0JBQWdCO0dBQ2hCLGVBQWU7Q0FDakIiLCJmaWxlIjoic3JjL2FwcC9jaGF0LWluYm94L2NoYXQtaW5ib3guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGF0LW1lc3NhZ2VzLXNob3ctY29udGFpbmVye1xyXG4gICAgbWluLWhlaWdodDogNDAwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gfVxyXG4gLmNoYXQtbWVzc2FnZXMtaGVhZGVye1xyXG4gICBiYWNrZ3JvdW5kOiAjNjE2MTYxO1xyXG4gICBoZWlnaHQ6IDgwcHg7XHJcbiAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbiAuY2hhdC1tZXNzYWdlcy1zaG93LWxpc3Qge1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOm5vbmU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gfVxyXG4gLmNoYXQtbWVzc2FnZXMtY3JlYXRlLWNvbnRhaW5lcntcclxuICAgIGJhY2tncm91bmQ6ICM2MTYxNjE7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiB9XHJcbiAuY2hhdC1tZXNzYWdlcy1jcmVhdGUtaW5wdXQge1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICAgIG1hcmdpbjogMjlweCAzMHB4O1xyXG4gICAgZmxleDoyXHJcbiB9XHJcbiAuY2hhdC1tZXNzYWdlcy1jcmVhdGUtYnV0dG9uIHtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIG1hcmdpbjogYXV0byA0MHB4O1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gfVxyXG5cclxuIC5tZXNzYWdlLWxpc3R7XHJcbiAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNXB4IDEwcHggLTRweCByZ2JhKDExMCwxMTAsMTEwLDEpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAwcHggNXB4IDEwcHggLTRweCByZ2JhKDExMCwxMTAsMTEwLDEpO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDVweCAxMHB4IC00cHggcmdiYSgxMTAsMTEwLDExMCwxKTtcclxuIH1cclxuXHJcbiAubWVzc2FnZS1saXN0IC51c2VyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuIH1cclxuXHJcbiAubWVzc2FnZS1saXN0Lm90aGVye1xyXG4gICBib3JkZXItcmFkaXVzOiAwIDVweCA1cHggNXB4O1xyXG4gICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgIGJhY2tncm91bmQ6IGFxdWE7XHJcbiAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgIG1heC13aWR0aDogMjUlO1xyXG4gICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgIG1hcmdpbi1yaWdodDogNzUlO1xyXG4gICAvKmZsb2F0OiBsZWZ0OyovXHJcbiAgIGxlZnQ6IDEwcHg7XHJcbiB9XHJcblxyXG4gLm1lc3NhZ2UtbGlzdC5vdGhlciAudGltZXtcclxuICAgZGlzcGxheTogYmxvY2s7XHJcbiAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICBmb250LXNpemU6IDEycHg7XHJcbiB9XHJcblxyXG4gLm1lc3NhZ2UtbGlzdC5tZXtcclxuICAgYm9yZGVyLXJhZGl1czogNXB4IDAgNXB4IDVweDtcclxuICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICBiYWNrZ3JvdW5kOiBncmVlbnllbGxvdztcclxuICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgIG1heC13aWR0aDogMjUlO1xyXG4gICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgIG1hcmdpbi1sZWZ0OiA3NSU7XHJcbiAgIC8qZmxvYXQ6IHJpZ2h0OyovXHJcbiAgIHJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4ubWVzc2FnZS1saXN0Lm1lIC50aW1le1xyXG4gICBkaXNwbGF5OiBibG9jaztcclxuICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgZm9udC1zaXplOiAxMnB4O1xyXG4gfSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/chat-inbox/chat-inbox.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/chat-inbox/chat-inbox.component.ts ***!
    \****************************************************/

  /*! exports provided: ChatInboxComponent */

  /***/
  function srcAppChatInboxChatInboxComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatInboxComponent", function () {
      return ChatInboxComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/utils.service */
    "./src/app/services/utils.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! socket.io-client */
    "./node_modules/socket.io-client/build/index.js");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_4__);

    var SOCKET_ENDPOINT = 'localhost:8080';

    var ChatInboxComponent = /*#__PURE__*/function () {
      function ChatInboxComponent(router, utilsService) {
        _classCallCheck(this, ChatInboxComponent);

        this.router = router;
        this.utilsService = utilsService;
        this.messageList = [];
        this.timeOut = undefined;
      }

      _createClass(ChatInboxComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.username = this.utilsService.getUser();

          if (!this.username) {
            this.router.navigate(['']);
          }

          this.setupSocketConnection();
        }
      }, {
        key: "setupSocketConnection",
        value: function setupSocketConnection() {
          var _this = this;

          this.socket = Object(socket_io_client__WEBPACK_IMPORTED_MODULE_4__["io"])(SOCKET_ENDPOINT, {
            transports: ['websocket']
          });
          this.socket.on('message-broadcast', function (data) {
            if (data) {
              _this.messageList.push(data);
              /*const element = document.createElement('li');
              element.innerHTML = data;
              element.style.background = 'white';
              element.style.padding = '15px 30px';
              element.style.margin = '10px';
              element.style.width = '30%';
              document.getElementById('message-list').appendChild(element);*/

            }

            console.log(_this.messageList);
          });
          this.socket.on('user-broadcast', function (data) {
            if (data) {
              console.log(data);
              _this.userConnected = data;
            }
          });
          this.socket.on('on-typing-broadcast', function (data) {
            if (data) {
              console.log(data);
              _this.onTypingMessage = data + ' sta scrivendo...';
            } else {
              _this.onTypingMessage = '';
            }
          });
        }
      }, {
        key: "onTyping",
        value: function onTyping() {
          clearTimeout(this.timeOut);
          this.socket.emit('on-typing', this.username);
        }
      }, {
        key: "stopTyping",
        value: function stopTyping() {
          var _this2 = this;

          this.timeOut = setTimeout(function () {
            _this2.socket.emit('on-typing', null);
          }, 3000);
        }
      }, {
        key: "SendMessage",
        value: function SendMessage() {
          this.socket.emit('message', {
            user: this.username,
            message: this.message,
            time: new Date().toLocaleDateString() + ' - ' + new Date().toLocaleTimeString()
          });
          this.messageList.push({
            message: this.message,
            time: new Date().toLocaleDateString() + ' - ' + new Date().toLocaleTimeString()
          });
          this.message = '';
        }
      }]);

      return ChatInboxComponent;
    }();

    ChatInboxComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _services_utils_service__WEBPACK_IMPORTED_MODULE_2__["UtilsService"]
      }];
    };

    ChatInboxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-chat-inbox',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./chat-inbox.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/chat-inbox/chat-inbox.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./chat-inbox.component.css */
      "./src/app/chat-inbox/chat-inbox.component.css"))["default"]]
    })], ChatInboxComponent);
    /***/
  },

  /***/
  "./src/app/insert-user/insert-user.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/insert-user/insert-user.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppInsertUserInsertUserComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luc2VydC11c2VyL2luc2VydC11c2VyLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/insert-user/insert-user.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/insert-user/insert-user.component.ts ***!
    \******************************************************/

  /*! exports provided: InsertUserComponent */

  /***/
  function srcAppInsertUserInsertUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InsertUserComponent", function () {
      return InsertUserComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/utils.service */
    "./src/app/services/utils.service.ts");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! socket.io-client */
    "./node_modules/socket.io-client/build/index.js");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_4__);

    var SOCKET_ENDPOINT = 'localhost:8080';

    var InsertUserComponent = /*#__PURE__*/function () {
      function InsertUserComponent(router, utilsService) {
        _classCallCheck(this, InsertUserComponent);

        this.router = router;
        this.utilsService = utilsService;
      }

      _createClass(InsertUserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.setupSocketConnection();
        }
      }, {
        key: "setupSocketConnection",
        value: function setupSocketConnection() {
          this.socket = Object(socket_io_client__WEBPACK_IMPORTED_MODULE_4__["io"])(SOCKET_ENDPOINT, {
            transports: ['websocket']
          });
          console.log(this.socket);
        }
      }, {
        key: "insertUsername",
        value: function insertUsername() {
          console.log(this.username);
          this.socket.emit('username', this.username);
          this.utilsService.setUser(this.username);
          this.router.navigate(['chat']);
        }
      }]);

      return InsertUserComponent;
    }();

    InsertUserComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_utils_service__WEBPACK_IMPORTED_MODULE_3__["UtilsService"]
      }];
    };

    InsertUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-insert-user',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./insert-user.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/insert-user/insert-user.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./insert-user.component.css */
      "./src/app/insert-user/insert-user.component.css"))["default"]]
    })], InsertUserComponent);
    /***/
  },

  /***/
  "./src/app/services/utils.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/utils.service.ts ***!
    \*******************************************/

  /*! exports provided: UtilsService */

  /***/
  function srcAppServicesUtilsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UtilsService", function () {
      return UtilsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var UtilsService = /*#__PURE__*/function () {
      function UtilsService() {
        _classCallCheck(this, UtilsService);
      }

      _createClass(UtilsService, [{
        key: "setUser",
        value: function setUser(user) {
          this.user = user;
        }
      }, {
        key: "getUser",
        value: function getUser() {
          return this.user;
        }
      }]);

      return UtilsService;
    }();

    UtilsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UtilsService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Volumes/Extreme SSD/Progetti/chat-example/chat-example-frontend/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map