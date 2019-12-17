(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html": 
        /*!**********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"show\">\n  <p class=\"title\">\n    About me <span class=\"glyphicon glyphicon-user\"></span>\n  </p>\n  <hr>\n  <div class=\"row \">\n    <div class=\"about col-sm-12\">\n      <b>Hello! I’m Shashank Vaibhav</b>, Front-End Developer from Jharkhand, India. I have been working\n      on Web Designing since 3 years.\n    </div>\n  </div>\n  <hr><br>\n  <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"short_title col-sm-5\">\n          Age\n        </div>\n        <div class=\"short_about col-sm-6\">\n            {{age}} (02<sup>nd</sup> Feb, 1997)\n        </div>\n      </div>\n      <br>\n      <div class=\"row\">\n        <div class=\"short_title col-sm-5\">\n          Address\n        </div>\n        <div class=\"short_about col-sm-6\">\n          Shiv Shakti Nagar, Jodhadih More, Chas, Bokaro Steel City, Jharkhand, India\n        </div>\n      </div>\n      <br>\n      <div class=\"row\">\n        <div class=\"short_title col-sm-5\">\n          Nationality\n        </div>\n        <div class=\"short_about col-sm-6\">\n          Indian\n        </div>\n      </div>\n      <br>\n      <div class=\"row\">\n        <div class=\"short_title col-sm-5\">\n          Language Known\n        </div>\n        <div class=\"short_about col-sm-6\">\n          English, Hindi, Odiya\n        </div>\n      </div>\n      <br>\n      <div class=\"row\">\n        <div class=\"short_title col-sm-5\">\n          Hobbies\n        </div>\n        <div class=\"short_about col-sm-6\">\n          Listening Music, Playing games\n        </div>\n      </div>\n  </div>\n</div>\n<div *ngIf=\"!show\">\n  <div class=\"loader\"></div>\n</div>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- <ngx-spinner\nbdColor = \"rgba(51, 51, 51, 0.8)\"\nsize = \"large\"\ncolor = \"#934d4d\"\ntype = \"ball-8bits\"></ngx-spinner> -->\n\n<ngx-ui-loader></ngx-ui-loader>\n\n\n<div class=\"container\">\n  <div class=\"icon-bar\">\n          <a routerLink = \"about\"><span class=\"glyphicon glyphicon-user\"></span><br>About</a>\n          <a routerLink = \"resume\"><span class=\"glyphicon glyphicon-list-alt\"></span><br>Resume</a>\n          <a routerLink = \"work\"><span class=\"glyphicon glyphicon-briefcase\"></span><br>Works</a>\n          <a routerLink = \"certificate\"><span class=\"glyphicon glyphicon-education\"></span><br>Certificate</a>\n          <a routerLink = \"contact\"><span class=\"glyphicon glyphicon-envelope\"></span><br>Contact</a>\n  </div>\n  <div class=\"row\">\n      <div class=\"main-content col-sm-5 text-center\">\n        <img src=\"assets/images/img.jpg\" class=\"profile_img\">\n        <br><br>\n        <div class=\"name\">\n          Shashank Vaibhav\n        </div>\n        <div class=\"designation\">\n          Software Engineer\n        </div>\n        <hr>\n        <div class=\"designation\">\n            <span class=\"glyphicon glyphicon-earphone\"></span> +917992250559<br>\n            <span class=\"glyphicon glyphicon-envelope\"></span> shashankvaibhavsinha@gmail.com\n        </div>\n      </div>\n      <div class=\"sub-content col-sm-5\">\n        <div class=\"sub-content-view\">\n            <router-outlet></router-outlet>\n        </div>\n      </div>\n  </div>\n</div>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/certificate/certificate.component.html": 
        /*!**********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/certificate/certificate.component.html ***!
          \**********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"show\">\n  <p class=\"title\">\n      Certificate <span class=\"glyphicon glyphicon-education\"></span>\n  </p>\n  <hr><br>\n  <div class=\"short_title\">Bachelor of Technology</div>\n  <br>\n  <img src=\"assets/images/provisional.PNG\">\n  <br><br>\n  <div class=\"short_title\">Front End Web Developer</div>\n  <br>\n  <img src=\"assets/images/webdesigner.PNG\" style=\"width: 90%;\">\n  <br><br>\n  <div class=\"short_title\">Database Design</div>\n  <br>\n  <img src=\"assets/images/database.PNG\" style=\"width: 90%;\">\n  <br>\n\n</div>\n<div *ngIf=\"!show\">\n    <div class=\"loader\"></div>\n</div>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html": 
        /*!**************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"show\">\n  <p class=\"title\">\n      Contact Me <span class=\"glyphicon glyphicon-envelope\"></span>\n  </p>\n  <hr><br>\n  <div class=\"mapouter\">\n    <div class=\"gmap_canvas\">\n      <iframe width=\"522\" height=\"300\" id=\"gmap_canvas\" src=\"https://maps.google.com/maps?q=I-67%2C%20Aghapur%2C%20Sector%2041%2C%20Noida%2C%20Uttar%20Pradesh%20201303&t=&z=13&ie=UTF8&iwloc=&output=embed\" frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\">\n      </iframe>\n    </div>\n  </div><br>\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"short_title\">\n          Present Address\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"short_content\">\n          I-67, Aghapur, Sector-41, Noida, Uttar Pradesh, 201303\n      </div>\n    </div>\n  </div>\n  <br>\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"short_title\">\n          Permanent Address\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"short_content\">\n        Shiv Shakti Nagar, Jodhadih More, Chas, Bokaro Steel City, Jharkhand, 827013\n      </div>\n    </div>\n  </div>\n  <br>\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"short_title\">\n          Phone Number\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"short_content\">\n        +917992250559 / +1(845)-444-6560\n      </div>\n    </div>\n  </div>\n  <br>\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"short_title\">\n          Email\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"short_content\">\n        shashankvaibhavsinha@gmail.com\n      </div>\n    </div>\n  </div>\n  <br>\n\n</div>\n  <div *ngIf=\"!show\">\n      <div class=\"loader\"></div>\n  </div>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/resume/resume.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/resume/resume.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"show\">\n  <p class=\"title\">\n    Resume <span class=\"glyphicon glyphicon-list-alt\"></span>\n  </p>\n  <hr><br>\n  <div class=\"short_title\">Experience</div>\n  <hr><br>\n  <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"short_title col-sm-6\">\n          GlobalLogic\n        </div>\n        <div class=\"col-sm-6\" style=\"text-align: right;\">\n          July 2019 - Present\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"short_resume\">\n          Trainee Software Engineer\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"short_resume\">\n          Noida, Uttar Pradesh, India\n        </div>\n      </div>\n  </div>\n  <br>\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"short_title col-sm-6\">\n        Ajatus Software\n      </div>\n      <div class=\"col-sm-6\" style=\"text-align: right;\">\n        April 2018 - July 2018\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"short_resume\">\n        Software Engineer Intern\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"short_resume\">\n        Bhubaneswar, Odisha, India\n      </div>\n    </div>\n  </div>\n\n  <br>\n  <div class=\"short_title\">Education</div>\n  <hr><br>\n  <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"short_title col-sm-7\">\n          College of Engineering Bhubaneswar\n        </div>\n        <div class=\"col-sm-5\" style=\"text-align: right;\">\n          July 2015 - May 2019\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"short_resume\">\n          Bachelor of Technology(Information Technology)\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"short_resume\">\n            Bhubaneswar, Odisha, India\n        </div>\n      </div>\n  </div>\n  <br>\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"short_title col-sm-7\">\n        Adarsh Vidya Mandir\n      </div>\n      <div class=\"col-sm-5\" style=\"text-align: right;\">\n        April 2012 - April 2014\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"short_resume\">\n        Secondary High School\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"short_resume\">\n        Chas, Bokaro, Jharkhand, India\n      </div>\n    </div>\n  </div>\n  <br>\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"short_title col-sm-7\">\n        Guru Gobind Singh Public School\n      </div>\n      <div class=\"col-sm-5\" style=\"text-align: right;\">\n        April 2010 - April 2012\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"short_resume\">\n        Primary High School\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"short_resume\">\n        Chas, Bokaro, Jharkhand, India\n      </div>\n    </div>\n  </div>\n</div>\n<div *ngIf=\"!show\">\n    <div class=\"loader\"></div>\n</div>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/work/work.component.html": 
        /*!********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/work/work.component.html ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"show\">\n  <p class=\"title\">\n      Work <span class=\"glyphicon glyphicon-briefcase\"></span>\n  </p>\n  <hr><br>\n  <div class=\"short_title\">Skills</div>\n  <hr>\n  <br>\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"short_title\">\n        Front End Development\n      </div>\n    </div>\n    <div class=\"row short_content\">\n      <ul>\n        <li>HTML/CSS</li>\n        <div class=\"progress\">\n            <div class=\"progress-bar progress-bar-striped active\" role=\"progressbar\" aria-valuenow=\"90\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:90%\"></div>\n        </div>\n        <li>Javascript</li>\n        <div class=\"progress\">\n            <div class=\"progress-bar progress-bar-striped active\" role=\"progressbar\" aria-valuenow=\"75\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:75%\"></div>\n        </div>\n        <li>jQuery</li>\n        <div class=\"progress\">\n            <div class=\"progress-bar progress-bar-striped active\" role=\"progressbar\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:40%\"></div>\n        </div>\n        <li>CSS & Javascript Framework</li>\n        <div class=\"progress\">\n            <div class=\"progress-bar progress-bar-striped active\" role=\"progressbar\" aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:70%\"></div>\n        </div>\n        <li>Responsive Design</li>\n        <div class=\"progress\">\n            <div class=\"progress-bar progress-bar-striped active\" role=\"progressbar\" aria-valuenow=\"80\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:80%\"></div>\n        </div>\n      </ul>\n    </div>\n  </div>\n  <br>\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"short_title\">\n        Back End Development\n      </div>\n    </div>\n    <div class=\"row short_content\">\n      <ul>\n        <li>PHP</li>\n        <div class=\"progress\">\n            <div class=\"progress-bar progress-bar-striped active\" role=\"progressbar\" aria-valuenow=\"80\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:80%\"></div>\n        </div>\n        <li>Java</li>\n        <div class=\"progress\">\n            <div class=\"progress-bar progress-bar-striped active\" role=\"progressbar\" aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:70%\"></div>\n        </div>\n      </ul>\n    </div>\n  </div>\n  <br>\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"short_title\">\n        Databases\n      </div>\n    </div>\n    <div class=\"row short_content\">\n      <ul>\n        <li>MySQL</li>\n        <div class=\"progress\">\n            <div class=\"progress-bar progress-bar-striped active\" role=\"progressbar\" aria-valuenow=\"80\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:80%\"></div>\n        </div>\n      </ul>\n    </div>\n  </div>\n</div>\n<div *ngIf=\"!show\">\n    <div class=\"loader\"></div>\n</div>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
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
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
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
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/about/about.component.css": 
        /*!*******************************************!*\
          !*** ./src/app/about/about.component.css ***!
          \*******************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("div{\r\n  font-family: roboto;\r\n  color: #50394c;\r\n}\r\n.title {\r\n  position: relative;\r\n  font-size: 30px;\r\n  color: #50394c;\r\n  line-height: 21px;\r\n  font-weight: 600;\r\n  z-index: 2;\r\n}\r\n.short_title {\r\n  position: relative;\r\n  font-size: 20px;\r\n  color: #50394c;\r\n  line-height: 21px;\r\n  font-weight: 600;\r\n  z-index: 2;\r\n}\r\n.short_about{\r\n  font-size: 16px;\r\n  position: relative;\r\n  color: #50394c;\r\n  line-height: 21px;\r\n  z-index: 2;\r\n}\r\nhr{\r\n  border: 1px solid #618685;\r\n  margin: 0;\r\n}\r\n.about{\r\n  padding: 20px;\r\n  font-size: 20px;\r\n}\r\n.loader {\r\n  border: 5px solid #f3f3f3;\r\n  border-radius: 50%;\r\n  border-top: 5px solid #3498db;\r\n  width: 70px;\r\n  top: 50%;\r\n  position: absolute;\r\n  left: 50%;\r\n  margin-top: -50px;\r\n  margin-left: -50px;\r\n  height: 70px;\r\n  -webkit-animation: spin 1s linear infinite; /* Safari */\r\n  animation: spin 1s linear infinite;\r\n}\r\n@-webkit-keyframes spin {\r\n  0% { -webkit-transform: rotate(0deg); }\r\n  100% { -webkit-transform: rotate(360deg); }\r\n}\r\n@keyframes spin {\r\n  0% { transform: rotate(0deg); }\r\n  100% { transform: rotate(360deg); }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLFVBQVU7QUFDWjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixVQUFVO0FBQ1o7QUFDQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixVQUFVO0FBQ1o7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixTQUFTO0FBQ1g7QUFDQTtFQUNFLGFBQWE7RUFDYixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3QixXQUFXO0VBQ1gsUUFBUTtFQUNSLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osMENBQTBDLEVBQUUsV0FBVztFQUN2RCxrQ0FBa0M7QUFDcEM7QUFDQTtFQUNFLEtBQUssK0JBQStCLEVBQUU7RUFDdEMsT0FBTyxpQ0FBaUMsRUFBRTtBQUM1QztBQUNBO0VBQ0UsS0FBSyx1QkFBdUIsRUFBRTtFQUM5QixPQUFPLHlCQUF5QixFQUFFO0FBQ3BDIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdntcclxuICBmb250LWZhbWlseTogcm9ib3RvO1xyXG4gIGNvbG9yOiAjNTAzOTRjO1xyXG59XHJcbi50aXRsZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBjb2xvcjogIzUwMzk0YztcclxuICBsaW5lLWhlaWdodDogMjFweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuLnNob3J0X3RpdGxlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yOiAjNTAzOTRjO1xyXG4gIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG4uc2hvcnRfYWJvdXR7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBjb2xvcjogIzUwMzk0YztcclxuICBsaW5lLWhlaWdodDogMjFweDtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcbmhye1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM2MTg2ODU7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcbi5hYm91dHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4ubG9hZGVyIHtcclxuICBib3JkZXI6IDVweCBzb2xpZCAjZjNmM2YzO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3JkZXItdG9wOiA1cHggc29saWQgIzM0OThkYjtcclxuICB3aWR0aDogNzBweDtcclxuICB0b3A6IDUwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIG1hcmdpbi10b3A6IC01MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtNTBweDtcclxuICBoZWlnaHQ6IDcwcHg7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlOyAvKiBTYWZhcmkgKi9cclxuICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xyXG59XHJcbkAtd2Via2l0LWtleWZyYW1lcyBzcGluIHtcclxuICAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuICAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XHJcbn1cclxuQGtleWZyYW1lcyBzcGluIHtcclxuICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XHJcbiAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cclxufVxyXG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/about/about.component.ts": 
        /*!******************************************!*\
          !*** ./src/app/about/about.component.ts ***!
          \******************************************/
        /*! exports provided: AboutComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function () { return AboutComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AboutComponent = /** @class */ (function () {
                function AboutComponent() {
                    var _this = this;
                    this.show = false;
                    this.dob = '02-02-1997';
                    setTimeout(function () {
                        _this.show = true;
                    }, 500);
                }
                AboutComponent.prototype.ngOnInit = function () {
                    var bdate = new Date(this.dob);
                    var timeDiff = Math.abs(Date.now() - bdate.getTime());
                    this.age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
                };
                return AboutComponent;
            }());
            AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-about',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")).default]
                })
            ], AboutComponent);
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
            /* harmony import */ var _certificate_certificate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./certificate/certificate.component */ "./src/app/certificate/certificate.component.ts");
            /* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
            /* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resume/resume.component */ "./src/app/resume/resume.component.ts");
            /* harmony import */ var _work_work_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./work/work.component */ "./src/app/work/work.component.ts");
            var routes = [];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                            {
                                path: '',
                                redirectTo: 'about',
                                pathMatch: 'full'
                            },
                            {
                                path: 'about',
                                component: _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"]
                            },
                            {
                                path: 'certificate',
                                component: _certificate_certificate_component__WEBPACK_IMPORTED_MODULE_4__["CertificateComponent"]
                            },
                            {
                                path: 'contact',
                                component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"]
                            },
                            {
                                path: 'resume',
                                component: _resume_resume_component__WEBPACK_IMPORTED_MODULE_6__["ResumeComponent"]
                            },
                            {
                                path: 'work',
                                component: _work_work_component__WEBPACK_IMPORTED_MODULE_7__["WorkComponent"]
                            }
                        ])],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("/* You can add global styles to this file, and also import other style files */\r\n@media only screen and (max-width : 768px) {\r\n  .icon-bar {\r\n      width: 100%;\r\n      overflow: auto;\r\n      background-color: #c3efcf;\r\n      border-radius: 0px !important;\r\n  }\r\n  .icon-bar a {\r\n      float: left;\r\n      padding: 32px;\r\n  }\r\n  .main-content{\r\n      width: 100%;\r\n      height: 500px;\r\n  }\r\n  .sub-content{\r\n      width:100%;\r\n      border-radius: 0px !important;\r\n  }\r\n  .container{\r\n    padding: 0px !important;\r\n  }\r\n}\r\n@media only screen and (min-width: 768px) {\r\n  body{\r\n      overflow: hidden;\r\n  }\r\n  .icon-bar {\r\n      margin: 10px 0;\r\n      width: 90px;\r\n      float:left;\r\n      padding: 12px 0;\r\n  }\r\n  .icon-bar a {\r\n      display: block;\r\n      padding: 15px 13px;\r\n      width: 85px;\r\n      margin-top: 10px;\r\n  }\r\n  .container{\r\n      padding:50px 0;\r\n\r\n  }\r\n  .main-content{\r\n      height: 550px;\r\n      border-radius: 20px;\r\n  }\r\n  .sub-content{\r\n      margin-top:20px;\r\n  }\r\n}\r\nbody{\r\n  margin:0px;\r\n  background-color: #fefce1;\r\n}\r\n.icon-bar{\r\n  /* background-color: #c3efcf; */\r\n  border-radius: 20px;\r\n}\r\n.icon-bar a {\r\n  text-align: center;\r\n  transition: all 0.3s ease;\r\n  background-color: #c3efcf;\r\n  color: #004d4d;\r\n  border-radius: 20px;\r\n  font-family: Garamond;\r\n  font-size: 16px;\r\n  /* border: 1px solid #d3efcf;  */\r\n  background-clip: padding-box;\r\n}\r\n.icon-bar span{\r\n  font-size: 30px;\r\n}\r\n.icon-bar a:hover {\r\n  background-color: #e6ffff;\r\n}\r\n.active{\r\n  background-color: #e6ffff !important ;\r\n}\r\n.profile_img{\r\n  height: 60%;\r\n  border-radius: 50%;\r\n}\r\n.name{\r\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n  font-size: 40px;\r\n  color: #4d2285;\r\n}\r\n.designation{\r\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n  font-size: 20px;\r\n  color: #4d2285;\r\n}\r\n.main-content{\r\n  /* background: #b1cbbb; */\r\n  background: linear-gradient(to bottom right,#80ced6 0%,#78cc6d 100%);\r\n  padding: 20px;\r\n}\r\n.sub-content{\r\n  padding:20px;\r\n  border-top-right-radius: 30px;\r\n  border-bottom-right-radius: 30px;\r\n  background: #deeaee;\r\n  background: linear-gradient(to right,#fefbd8 0%,#f4e1d2 10%);\r\n  height: 500px;\r\n  float: left;\r\n  /* width: 0; */\r\n  /* transition:  all 3s; */\r\n}\r\n.sub-content-view{\r\n  overflow-y: auto;\r\n  overflow-x: hidden;\r\n  height: 100%;\r\n  padding: 10px;\r\n}\r\n::-webkit-scrollbar {\r\n  margin-left: -10px;\r\n  width: 5px;\r\n}\r\n::-webkit-scrollbar-track {\r\n  box-shadow: inset 0 0 5px grey;\r\n  border-radius: 10px;\r\n}\r\n::-webkit-scrollbar-thumb {\r\n  background: #50394c;\r\n  border-radius: 10px;\r\n}\r\n::-webkit-scrollbar-thumb:hover {\r\n  background: #618685;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQThFO0FBQzlFO0VBQ0U7TUFDSSxXQUFXO01BQ1gsY0FBYztNQUNkLHlCQUF5QjtNQUN6Qiw2QkFBNkI7RUFDakM7RUFDQTtNQUNJLFdBQVc7TUFDWCxhQUFhO0VBQ2pCO0VBQ0E7TUFDSSxXQUFXO01BQ1gsYUFBYTtFQUNqQjtFQUNBO01BQ0ksVUFBVTtNQUNWLDZCQUE2QjtFQUNqQztFQUNBO0lBQ0UsdUJBQXVCO0VBQ3pCO0FBQ0Y7QUFDQTtFQUNFO01BQ0ksZ0JBQWdCO0VBQ3BCO0VBQ0E7TUFDSSxjQUFjO01BQ2QsV0FBVztNQUNYLFVBQVU7TUFDVixlQUFlO0VBQ25CO0VBQ0E7TUFDSSxjQUFjO01BQ2Qsa0JBQWtCO01BQ2xCLFdBQVc7TUFDWCxnQkFBZ0I7RUFDcEI7RUFDQTtNQUNJLGNBQWM7O0VBRWxCO0VBQ0E7TUFDSSxhQUFhO01BQ2IsbUJBQW1CO0VBQ3ZCO0VBQ0E7TUFDSSxlQUFlO0VBQ25CO0FBQ0Y7QUFDQTtFQUNFLFVBQVU7RUFDVix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLCtCQUErQjtFQUMvQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixnQ0FBZ0M7RUFDaEMsNEJBQTRCO0FBQzlCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHFDQUFxQztBQUN2QztBQUNBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsNERBQTREO0VBQzVELGVBQWU7RUFDZixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSw0REFBNEQ7RUFDNUQsZUFBZTtFQUNmLGNBQWM7QUFDaEI7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixvRUFBb0U7RUFDcEUsYUFBYTtBQUNmO0FBQ0E7RUFDRSxZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLGdDQUFnQztFQUNoQyxtQkFBbUI7RUFDbkIsNERBQTREO0VBQzVELGFBQWE7RUFDYixXQUFXO0VBQ1gsY0FBYztFQUNkLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtBQUNmO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaO0FBQ0E7RUFDRSw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogNzY4cHgpIHtcclxuICAuaWNvbi1iYXIge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjM2VmY2Y7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuaWNvbi1iYXIgYSB7XHJcbiAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICBwYWRkaW5nOiAzMnB4O1xyXG4gIH1cclxuICAubWFpbi1jb250ZW50e1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiA1MDBweDtcclxuICB9XHJcbiAgLnN1Yi1jb250ZW50e1xyXG4gICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmNvbnRhaW5lcntcclxuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgYm9keXtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbiAgLmljb24tYmFyIHtcclxuICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICAgIHdpZHRoOiA5MHB4O1xyXG4gICAgICBmbG9hdDpsZWZ0O1xyXG4gICAgICBwYWRkaW5nOiAxMnB4IDA7XHJcbiAgfVxyXG4gIC5pY29uLWJhciBhIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHBhZGRpbmc6IDE1cHggMTNweDtcclxuICAgICAgd2lkdGg6IDg1cHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgfVxyXG4gIC5jb250YWluZXJ7XHJcbiAgICAgIHBhZGRpbmc6NTBweCAwO1xyXG5cclxuICB9XHJcbiAgLm1haW4tY29udGVudHtcclxuICAgICAgaGVpZ2h0OiA1NTBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICB9XHJcbiAgLnN1Yi1jb250ZW50e1xyXG4gICAgICBtYXJnaW4tdG9wOjIwcHg7XHJcbiAgfVxyXG59XHJcbmJvZHl7XHJcbiAgbWFyZ2luOjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmY2UxO1xyXG59XHJcbi5pY29uLWJhcntcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjYzNlZmNmOyAqL1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuLmljb24tYmFyIGEge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjM2VmY2Y7XHJcbiAgY29sb3I6ICMwMDRkNGQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBmb250LWZhbWlseTogR2FyYW1vbmQ7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkICNkM2VmY2Y7ICAqL1xyXG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbn1cclxuLmljb24tYmFyIHNwYW57XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbi5pY29uLWJhciBhOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZmZmZmO1xyXG59XHJcbi5hY3RpdmV7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZmZmZiAhaW1wb3J0YW50IDtcclxufVxyXG4ucHJvZmlsZV9pbWd7XHJcbiAgaGVpZ2h0OiA2MCU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbi5uYW1le1xyXG4gIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgY29sb3I6ICM0ZDIyODU7XHJcbn1cclxuLmRlc2lnbmF0aW9ue1xyXG4gIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6ICM0ZDIyODU7XHJcbn1cclxuLm1haW4tY29udGVudHtcclxuICAvKiBiYWNrZ3JvdW5kOiAjYjFjYmJiOyAqL1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsIzgwY2VkNiAwJSwjNzhjYzZkIDEwMCUpO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuLnN1Yi1jb250ZW50e1xyXG4gIHBhZGRpbmc6MjBweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzBweDtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMzBweDtcclxuICBiYWNrZ3JvdW5kOiAjZGVlYWVlO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwjZmVmYmQ4IDAlLCNmNGUxZDIgMTAlKTtcclxuICBoZWlnaHQ6IDUwMHB4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIC8qIHdpZHRoOiAwOyAqL1xyXG4gIC8qIHRyYW5zaXRpb246ICBhbGwgM3M7ICovXHJcbn1cclxuLnN1Yi1jb250ZW50LXZpZXd7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xyXG4gIHdpZHRoOiA1cHg7XHJcbn1cclxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDVweCBncmV5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYmFja2dyb3VuZDogIzUwMzk0YztcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICM2MTg2ODU7XHJcbn1cclxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm2015/ngx-ui-loader.js");
            // import { NgxSpinnerService } from 'ngx-spinner';
            var AppComponent = /** @class */ (function () {
                function AppComponent(spinner) {
                    this.spinner = spinner;
                    this.loader = false;
                    this.spinner.start();
                    // setTimeout(() => {
                    //   this.spinner.stop();
                    // }, 500);
                }
                AppComponent.prototype.ngOnInit = function () {
                    this.loader = true;
                    if (this.loader) {
                        this.spinner.stop();
                    }
                };
                return AppComponent;
            }());
            AppComponent.ctorParameters = function () { return [
                { type: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_2__["NgxUiLoaderService"] }
            ]; };
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
            /* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resume/resume.component */ "./src/app/resume/resume.component.ts");
            /* harmony import */ var _work_work_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./work/work.component */ "./src/app/work/work.component.ts");
            /* harmony import */ var _certificate_certificate_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./certificate/certificate.component */ "./src/app/certificate/certificate.component.ts");
            /* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
            /* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm2015/ngx-ui-loader.js");
            // import { NgxSpinnerModule } from 'ngx-spinner';
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                        _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"],
                        _resume_resume_component__WEBPACK_IMPORTED_MODULE_6__["ResumeComponent"],
                        _work_work_component__WEBPACK_IMPORTED_MODULE_7__["WorkComponent"],
                        _certificate_certificate_component__WEBPACK_IMPORTED_MODULE_8__["CertificateComponent"],
                        _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"],
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                        ngx_ui_loader__WEBPACK_IMPORTED_MODULE_10__["NgxUiLoaderModule"]
                    ],
                    providers: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/certificate/certificate.component.css": 
        /*!*******************************************************!*\
          !*** ./src/app/certificate/certificate.component.css ***!
          \*******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("div{\r\n  font-family: roboto;\r\n  color: #50394c;\r\n}\r\n.title {\r\n  position: relative;\r\n  font-size: 30px;\r\n  color: #50394c;\r\n  line-height: 21px;\r\n  font-weight: 600;\r\n  z-index: 2;\r\n}\r\n.short_title {\r\n  position: relative;\r\n  font-size: 20px;\r\n  color: #50394c;\r\n  line-height: 21px;\r\n  font-weight: 600;\r\n  z-index: 2;\r\n}\r\n.short_content{\r\n  padding: 5px 20px 0;\r\n  font-size: 16px;\r\n  position: relative;\r\n  color: #50394c;\r\n  line-height: 21px;\r\n  z-index: 2;\r\n}\r\nhr{\r\n  border: 1px solid #618685;\r\n  margin: 0;\r\n}\r\n.loader {\r\n  border: 5px solid #f3f3f3;\r\n  border-radius: 50%;\r\n  border-top: 5px solid #3498db;\r\n  width: 70px;\r\n  top: 50%;\r\n  position: absolute;\r\n  left: 50%;\r\n  margin-top: -50px;\r\n  margin-left: -50px;\r\n  height: 70px;\r\n  -webkit-animation: spin 1s linear infinite; /* Safari */\r\n  animation: spin 1s linear infinite;\r\n}\r\n@-webkit-keyframes spin {\r\n  0% { -webkit-transform: rotate(0deg); }\r\n  100% { -webkit-transform: rotate(360deg); }\r\n}\r\n@keyframes spin {\r\n  0% { transform: rotate(0deg); }\r\n  100% { transform: rotate(360deg); }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2VydGlmaWNhdGUvY2VydGlmaWNhdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLFVBQVU7QUFDWjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixVQUFVO0FBQ1o7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsVUFBVTtBQUNaO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsU0FBUztBQUNYO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3QixXQUFXO0VBQ1gsUUFBUTtFQUNSLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osMENBQTBDLEVBQUUsV0FBVztFQUN2RCxrQ0FBa0M7QUFDcEM7QUFDQTtFQUNFLEtBQUssK0JBQStCLEVBQUU7RUFDdEMsT0FBTyxpQ0FBaUMsRUFBRTtBQUM1QztBQUNBO0VBQ0UsS0FBSyx1QkFBdUIsRUFBRTtFQUM5QixPQUFPLHlCQUF5QixFQUFFO0FBQ3BDIiwiZmlsZSI6InNyYy9hcHAvY2VydGlmaWNhdGUvY2VydGlmaWNhdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdntcclxuICBmb250LWZhbWlseTogcm9ib3RvO1xyXG4gIGNvbG9yOiAjNTAzOTRjO1xyXG59XHJcbi50aXRsZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBjb2xvcjogIzUwMzk0YztcclxuICBsaW5lLWhlaWdodDogMjFweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuLnNob3J0X3RpdGxlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yOiAjNTAzOTRjO1xyXG4gIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG4uc2hvcnRfY29udGVudHtcclxuICBwYWRkaW5nOiA1cHggMjBweCAwO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgY29sb3I6ICM1MDM5NGM7XHJcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG5ocntcclxuICBib3JkZXI6IDFweCBzb2xpZCAjNjE4Njg1O1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4ubG9hZGVyIHtcclxuICBib3JkZXI6IDVweCBzb2xpZCAjZjNmM2YzO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3JkZXItdG9wOiA1cHggc29saWQgIzM0OThkYjtcclxuICB3aWR0aDogNzBweDtcclxuICB0b3A6IDUwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIG1hcmdpbi10b3A6IC01MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtNTBweDtcclxuICBoZWlnaHQ6IDcwcHg7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlOyAvKiBTYWZhcmkgKi9cclxuICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xyXG59XHJcbkAtd2Via2l0LWtleWZyYW1lcyBzcGluIHtcclxuICAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuICAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XHJcbn1cclxuQGtleWZyYW1lcyBzcGluIHtcclxuICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XHJcbiAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cclxufVxyXG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/certificate/certificate.component.ts": 
        /*!******************************************************!*\
          !*** ./src/app/certificate/certificate.component.ts ***!
          \******************************************************/
        /*! exports provided: CertificateComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertificateComponent", function () { return CertificateComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var CertificateComponent = /** @class */ (function () {
                function CertificateComponent() {
                    var _this = this;
                    this.show = false;
                    setTimeout(function () {
                        _this.show = true;
                    }, 500);
                }
                CertificateComponent.prototype.ngOnInit = function () {
                };
                return CertificateComponent;
            }());
            CertificateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-certificate',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./certificate.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/certificate/certificate.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./certificate.component.css */ "./src/app/certificate/certificate.component.css")).default]
                })
            ], CertificateComponent);
            /***/ 
        }),
        /***/ "./src/app/contact/contact.component.css": 
        /*!***********************************************!*\
          !*** ./src/app/contact/contact.component.css ***!
          \***********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("div{\r\n  font-family: roboto;\r\n  color: #50394c;\r\n}\r\n.title {\r\n  position: relative;\r\n  font-size: 30px;\r\n  color: #50394c;\r\n  line-height: 21px;\r\n  font-weight: 600;\r\n  z-index: 2;\r\n}\r\n.short_title {\r\n  position: relative;\r\n  font-size: 20px;\r\n  color: #50394c;\r\n  line-height: 21px;\r\n  font-weight: 600;\r\n  z-index: 2;\r\n}\r\n.short_content{\r\n  padding: 5px 20px 0;\r\n  font-size: 16px;\r\n  position: relative;\r\n  color: #50394c;\r\n  line-height: 21px;\r\n  z-index: 2;\r\n}\r\nhr{\r\n  border: 1px solid #618685;\r\n  margin: 0;\r\n}\r\n.mapouter{\r\n  position:relative;\r\n  text-align:right;\r\n}\r\n.gmap_canvas{\r\n  overflow:hidden;\r\n  background:none!important;\r\n}\r\n.loader {\r\n  border: 5px solid #f3f3f3;\r\n  border-radius: 50%;\r\n  border-top: 5px solid #3498db;\r\n  width: 70px;\r\n  top: 50%;\r\n  position: absolute;\r\n  left: 50%;\r\n  margin-top: -50px;\r\n  margin-left: -50px;\r\n  height: 70px;\r\n  -webkit-animation: spin 1s linear infinite; /* Safari */\r\n  animation: spin 1s linear infinite;\r\n}\r\n@-webkit-keyframes spin {\r\n  0% { -webkit-transform: rotate(0deg); }\r\n  100% { -webkit-transform: rotate(360deg); }\r\n}\r\n@keyframes spin {\r\n  0% { transform: rotate(0deg); }\r\n  100% { transform: rotate(360deg); }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixVQUFVO0FBQ1o7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsVUFBVTtBQUNaO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLFVBQVU7QUFDWjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLFNBQVM7QUFDWDtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQiw2QkFBNkI7RUFDN0IsV0FBVztFQUNYLFFBQVE7RUFDUixrQkFBa0I7RUFDbEIsU0FBUztFQUNULGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLDBDQUEwQyxFQUFFLFdBQVc7RUFDdkQsa0NBQWtDO0FBQ3BDO0FBQ0E7RUFDRSxLQUFLLCtCQUErQixFQUFFO0VBQ3RDLE9BQU8saUNBQWlDLEVBQUU7QUFDNUM7QUFDQTtFQUNFLEtBQUssdUJBQXVCLEVBQUU7RUFDOUIsT0FBTyx5QkFBeUIsRUFBRTtBQUNwQyIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2e1xyXG4gIGZvbnQtZmFtaWx5OiByb2JvdG87XHJcbiAgY29sb3I6ICM1MDM5NGM7XHJcbn1cclxuLnRpdGxlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGNvbG9yOiAjNTAzOTRjO1xyXG4gIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG4uc2hvcnRfdGl0bGUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6ICM1MDM5NGM7XHJcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcbi5zaG9ydF9jb250ZW50e1xyXG4gIHBhZGRpbmc6IDVweCAyMHB4IDA7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBjb2xvcjogIzUwMzk0YztcclxuICBsaW5lLWhlaWdodDogMjFweDtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcbmhye1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM2MTg2ODU7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcbi5tYXBvdXRlcntcclxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICB0ZXh0LWFsaWduOnJpZ2h0O1xyXG59XHJcbi5nbWFwX2NhbnZhc3tcclxuICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgYmFja2dyb3VuZDpub25lIWltcG9ydGFudDtcclxufVxyXG4ubG9hZGVyIHtcclxuICBib3JkZXI6IDVweCBzb2xpZCAjZjNmM2YzO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3JkZXItdG9wOiA1cHggc29saWQgIzM0OThkYjtcclxuICB3aWR0aDogNzBweDtcclxuICB0b3A6IDUwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIG1hcmdpbi10b3A6IC01MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtNTBweDtcclxuICBoZWlnaHQ6IDcwcHg7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlOyAvKiBTYWZhcmkgKi9cclxuICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xyXG59XHJcbkAtd2Via2l0LWtleWZyYW1lcyBzcGluIHtcclxuICAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuICAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XHJcbn1cclxuQGtleWZyYW1lcyBzcGluIHtcclxuICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XHJcbiAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cclxufVxyXG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/contact/contact.component.ts": 
        /*!**********************************************!*\
          !*** ./src/app/contact/contact.component.ts ***!
          \**********************************************/
        /*! exports provided: ContactComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function () { return ContactComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ContactComponent = /** @class */ (function () {
                function ContactComponent() {
                    var _this = this;
                    this.show = false;
                    setTimeout(function () {
                        _this.show = true;
                    }, 500);
                }
                ContactComponent.prototype.ngOnInit = function () {
                };
                return ContactComponent;
            }());
            ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-contact',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")).default]
                })
            ], ContactComponent);
            /***/ 
        }),
        /***/ "./src/app/resume/resume.component.css": 
        /*!*********************************************!*\
          !*** ./src/app/resume/resume.component.css ***!
          \*********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("div{\r\n  font-family: roboto;\r\n  color: #50394c;\r\n}\r\n.title {\r\n  position: relative;\r\n  font-size: 30px;\r\n  color: #50394c;\r\n  line-height: 21px;\r\n  font-weight: 600;\r\n  z-index: 2;\r\n}\r\n.short_title {\r\n  position: relative;\r\n  font-size: 20px;\r\n  color: #50394c;\r\n  line-height: 21px;\r\n  font-weight: 600;\r\n  z-index: 2;\r\n}\r\n.short_resume{\r\n  padding: 5px 20px 0;\r\n  font-size: 16px;\r\n  position: relative;\r\n  color: #50394c;\r\n  line-height: 21px;\r\n  z-index: 2;\r\n}\r\nhr{\r\n  border: 1px solid #618685;\r\n  margin: 0;\r\n}\r\n.loader {\r\n  border: 5px solid #f3f3f3;\r\n  border-radius: 50%;\r\n  border-top: 5px solid #3498db;\r\n  width: 70px;\r\n  top: 50%;\r\n  position: absolute;\r\n  left: 50%;\r\n  margin-top: -50px;\r\n  margin-left: -50px;\r\n  height: 70px;\r\n  -webkit-animation: spin 1s linear infinite; /* Safari */\r\n  animation: spin 1s linear infinite;\r\n}\r\n@-webkit-keyframes spin {\r\n  0% { -webkit-transform: rotate(0deg); }\r\n  100% { -webkit-transform: rotate(360deg); }\r\n}\r\n@keyframes spin {\r\n  0% { transform: rotate(0deg); }\r\n  100% { transform: rotate(360deg); }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdW1lL3Jlc3VtZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsVUFBVTtBQUNaO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLFVBQVU7QUFDWjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixVQUFVO0FBQ1o7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixTQUFTO0FBQ1g7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLFdBQVc7RUFDWCxRQUFRO0VBQ1Isa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWiwwQ0FBMEMsRUFBRSxXQUFXO0VBQ3ZELGtDQUFrQztBQUNwQztBQUNBO0VBQ0UsS0FBSywrQkFBK0IsRUFBRTtFQUN0QyxPQUFPLGlDQUFpQyxFQUFFO0FBQzVDO0FBQ0E7RUFDRSxLQUFLLHVCQUF1QixFQUFFO0VBQzlCLE9BQU8seUJBQXlCLEVBQUU7QUFDcEMiLCJmaWxlIjoic3JjL2FwcC9yZXN1bWUvcmVzdW1lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXZ7XHJcbiAgZm9udC1mYW1pbHk6IHJvYm90bztcclxuICBjb2xvcjogIzUwMzk0YztcclxufVxyXG4udGl0bGUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgY29sb3I6ICM1MDM5NGM7XHJcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcbi5zaG9ydF90aXRsZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjb2xvcjogIzUwMzk0YztcclxuICBsaW5lLWhlaWdodDogMjFweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuLnNob3J0X3Jlc3VtZXtcclxuICBwYWRkaW5nOiA1cHggMjBweCAwO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgY29sb3I6ICM1MDM5NGM7XHJcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG5ocntcclxuICBib3JkZXI6IDFweCBzb2xpZCAjNjE4Njg1O1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4ubG9hZGVyIHtcclxuICBib3JkZXI6IDVweCBzb2xpZCAjZjNmM2YzO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3JkZXItdG9wOiA1cHggc29saWQgIzM0OThkYjtcclxuICB3aWR0aDogNzBweDtcclxuICB0b3A6IDUwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIG1hcmdpbi10b3A6IC01MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtNTBweDtcclxuICBoZWlnaHQ6IDcwcHg7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlOyAvKiBTYWZhcmkgKi9cclxuICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xyXG59XHJcbkAtd2Via2l0LWtleWZyYW1lcyBzcGluIHtcclxuICAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuICAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XHJcbn1cclxuQGtleWZyYW1lcyBzcGluIHtcclxuICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XHJcbiAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cclxufVxyXG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/resume/resume.component.ts": 
        /*!********************************************!*\
          !*** ./src/app/resume/resume.component.ts ***!
          \********************************************/
        /*! exports provided: ResumeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeComponent", function () { return ResumeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ResumeComponent = /** @class */ (function () {
                function ResumeComponent() {
                    var _this = this;
                    this.show = false;
                    setTimeout(function () {
                        _this.show = true;
                    }, 500);
                }
                ResumeComponent.prototype.ngOnInit = function () {
                };
                return ResumeComponent;
            }());
            ResumeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-resume',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./resume.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/resume/resume.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./resume.component.css */ "./src/app/resume/resume.component.css")).default]
                })
            ], ResumeComponent);
            /***/ 
        }),
        /***/ "./src/app/work/work.component.css": 
        /*!*****************************************!*\
          !*** ./src/app/work/work.component.css ***!
          \*****************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("div{\r\n  font-family: roboto;\r\n  color: #50394c;\r\n}\r\n.title {\r\n  position: relative;\r\n  font-size: 30px;\r\n  color: #50394c;\r\n  line-height: 21px;\r\n  font-weight: 600;\r\n  z-index: 2;\r\n}\r\n.short_title {\r\n  position: relative;\r\n  font-size: 20px;\r\n  color: #50394c;\r\n  line-height: 21px;\r\n  font-weight: 600;\r\n  z-index: 2;\r\n}\r\n.short_content{\r\n  padding: 5px 20px 0;\r\n  font-size: 16px;\r\n  position: relative;\r\n  color: #50394c;\r\n  line-height: 21px;\r\n  z-index: 2;\r\n}\r\nhr{\r\n  border: 1px solid #618685;\r\n  margin: 0;\r\n}\r\n.progress{\r\n  height: 10px;\r\n  margin:0;\r\n}\r\n.loader {\r\n  border: 5px solid #f3f3f3;\r\n  border-radius: 50%;\r\n  border-top: 5px solid #3498db;\r\n  width: 70px;\r\n  top: 50%;\r\n  position: absolute;\r\n  left: 50%;\r\n  margin-top: -50px;\r\n  margin-left: -50px;\r\n  height: 70px;\r\n  -webkit-animation: spin 1s linear infinite; /* Safari */\r\n  animation: spin 1s linear infinite;\r\n}\r\n@-webkit-keyframes spin {\r\n  0% { -webkit-transform: rotate(0deg); }\r\n  100% { -webkit-transform: rotate(360deg); }\r\n}\r\n@keyframes spin {\r\n  0% { transform: rotate(0deg); }\r\n  100% { transform: rotate(360deg); }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29yay93b3JrLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixVQUFVO0FBQ1o7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsVUFBVTtBQUNaO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLFVBQVU7QUFDWjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLFNBQVM7QUFDWDtBQUNBO0VBQ0UsWUFBWTtFQUNaLFFBQVE7QUFDVjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQiw2QkFBNkI7RUFDN0IsV0FBVztFQUNYLFFBQVE7RUFDUixrQkFBa0I7RUFDbEIsU0FBUztFQUNULGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLDBDQUEwQyxFQUFFLFdBQVc7RUFDdkQsa0NBQWtDO0FBQ3BDO0FBQ0E7RUFDRSxLQUFLLCtCQUErQixFQUFFO0VBQ3RDLE9BQU8saUNBQWlDLEVBQUU7QUFDNUM7QUFDQTtFQUNFLEtBQUssdUJBQXVCLEVBQUU7RUFDOUIsT0FBTyx5QkFBeUIsRUFBRTtBQUNwQyIsImZpbGUiOiJzcmMvYXBwL3dvcmsvd29yay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2e1xyXG4gIGZvbnQtZmFtaWx5OiByb2JvdG87XHJcbiAgY29sb3I6ICM1MDM5NGM7XHJcbn1cclxuLnRpdGxlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGNvbG9yOiAjNTAzOTRjO1xyXG4gIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG4uc2hvcnRfdGl0bGUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6ICM1MDM5NGM7XHJcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcbi5zaG9ydF9jb250ZW50e1xyXG4gIHBhZGRpbmc6IDVweCAyMHB4IDA7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBjb2xvcjogIzUwMzk0YztcclxuICBsaW5lLWhlaWdodDogMjFweDtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcbmhye1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM2MTg2ODU7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcbi5wcm9ncmVzc3tcclxuICBoZWlnaHQ6IDEwcHg7XHJcbiAgbWFyZ2luOjA7XHJcbn1cclxuLmxvYWRlciB7XHJcbiAgYm9yZGVyOiA1cHggc29saWQgI2YzZjNmMztcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm9yZGVyLXRvcDogNXB4IHNvbGlkICMzNDk4ZGI7XHJcbiAgd2lkdGg6IDcwcHg7XHJcbiAgdG9wOiA1MCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICBtYXJnaW4tdG9wOiAtNTBweDtcclxuICBtYXJnaW4tbGVmdDogLTUwcHg7XHJcbiAgaGVpZ2h0OiA3MHB4O1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTsgLyogU2FmYXJpICovXHJcbiAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcclxufVxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgc3BpbiB7XHJcbiAgMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XHJcbiAgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxyXG59XHJcbkBrZXlmcmFtZXMgc3BpbiB7XHJcbiAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxyXG4gIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XHJcbn1cclxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/work/work.component.ts": 
        /*!****************************************!*\
          !*** ./src/app/work/work.component.ts ***!
          \****************************************/
        /*! exports provided: WorkComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkComponent", function () { return WorkComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var WorkComponent = /** @class */ (function () {
                function WorkComponent() {
                    var _this = this;
                    this.show = false;
                    setTimeout(function () {
                        _this.show = true;
                    }, 500);
                }
                WorkComponent.prototype.ngOnInit = function () {
                };
                return WorkComponent;
            }());
            WorkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-work',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./work.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/work/work.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./work.component.css */ "./src/app/work/work.component.css")).default]
                })
            ], WorkComponent);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
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
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! D:\node\resume\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map