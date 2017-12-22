webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-search-user></app-search-user>\n<!--app-user-detail></app-user-detail-->\n<!--app-user-repository></app-user-repository-->\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search_user_search_user_component__ = __webpack_require__("../../../../../src/app/search-user/search-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_repository_user_repository_component__ = __webpack_require__("../../../../../src/app/user-repository/user-repository.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__github_service__ = __webpack_require__("../../../../../src/app/github.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_detail_user_detail_component__ = __webpack_require__("../../../../../src/app/user-detail/user-detail.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__search_user_search_user_component__["a" /* SearchUserComponent */],
                __WEBPACK_IMPORTED_MODULE_5__user_repository_user_repository_component__["a" /* UserRepositoryComponent */],
                __WEBPACK_IMPORTED_MODULE_7__user_detail_user_detail_component__["a" /* UserDetailComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__github_service__["a" /* GithubService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/github.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GithubService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__("../../../../../src/app/util.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GithubService = (function () {
    function GithubService(http) {
        this.http = http;
    }
    GithubService.prototype.getUserProfil = function (login) {
        this._currentProfil = this.http.get(__WEBPACK_IMPORTED_MODULE_2__util__["a" /* githubApiBaseUrl */] + 'users/' + login);
    };
    GithubService.prototype.getUserRepository = function (url) {
        this._currentRepo = this.http.get(url);
    };
    Object.defineProperty(GithubService.prototype, "currentProfil", {
        get: function () {
            return this._currentProfil;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GithubService.prototype, "currentRepo", {
        get: function () {
            return this._currentRepo;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GithubService.prototype, "currentLogin", {
        get: function () {
            return this._currentLogin;
        },
        set: function (login) {
            this._currentLogin = login;
            this.getUserProfil(login);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GithubService.prototype, "currentRepoUrl", {
        get: function () {
            return this._currentRepoUrl;
        },
        set: function (repoUrl) {
            this._currentRepoUrl = repoUrl;
            this.getUserRepository(repoUrl);
        },
        enumerable: true,
        configurable: true
    });
    GithubService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], GithubService);
    return GithubService;
}());



/***/ }),

/***/ "../../../../../src/app/profil.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Profil; });
/* User's profil */
var Profil = (function () {
    function Profil(login, avatarUrl, name, followers, following, repos, reposUrl) {
        this._login = login;
        this._avatar_url = avatarUrl;
        this._name = name;
        this._followers = followers;
        this._following = following;
        this._repos = repos;
        this._repos_url = reposUrl;
    }
    Object.defineProperty(Profil.prototype, "login", {
        get: function () {
            return this._login;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Profil.prototype, "avatarUrl", {
        get: function () {
            return this._avatar_url;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Profil.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Profil.prototype, "followers", {
        get: function () {
            return this._followers;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Profil.prototype, "following", {
        get: function () {
            return this._following;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Profil.prototype, "repos", {
        get: function () {
            return this._repos;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Profil.prototype, "reposUrl", {
        get: function () {
            return this._repos_url;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Profil.prototype, "reposInfo", {
        get: function () {
            return this._reposInfo;
        },
        set: function (reposInfo) {
            this._reposInfo = reposInfo;
        },
        enumerable: true,
        configurable: true
    });
    Profil.prototype.addRepo = function (repository) {
        this._reposInfo.push(repository);
        return this._reposInfo;
    };
    return Profil;
}());



/***/ }),

/***/ "../../../../../src/app/search-user/search-user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/search-user/search-user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <!--div class=\"col-lg-6\"-->\n    <div class=\"input-group\">\n      <input ref-login (keyup.enter)=\"getProfil(login.value)\" type=\"text\" class=\"form-control\" placeholder=\"Enter the login of a github account\" aria-label=\"Login\">\n      <span class=\"input-group-btn\">\n        <button class=\"btn btn-secondary\" type=\"button\" on-click=\"getProfil(login.value)\">\n            <i *ngIf=\"!profil && showLoadingif\" class=\"fa fa-circle-o-notch fa-spin\" style=\"font-size:12px;color:blue\"></i>\n            <i class=\"fa fa-search\" aria-hidden=\"true\" *ngIf=\"!showLoadingif\"></i>\n        </button>\n      </span>\n    </div>\n  <!--/div-->\n</div>\n\n<app-user-detail [profil]=\"profil\"></app-user-detail>\n\n<app-user-repository [repos]=\"repos | async\"></app-user-repository>\n"

/***/ }),

/***/ "../../../../../src/app/search-user/search-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__github_service__ = __webpack_require__("../../../../../src/app/github.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchUserComponent = (function () {
    function SearchUserComponent(githubService) {
        this.githubService = githubService;
    }
    SearchUserComponent.prototype.ngOnInit = function () {
    };
    SearchUserComponent.prototype.getProfil = function (login) {
        var _this = this;
        if (login) {
            this.clear();
            this.showLoadingif = true;
            this.githubService.currentLogin = login.trim();
            this.githubService.currentProfil.subscribe(function (pf) {
                _this.profil = pf;
                _this.githubService.currentRepoUrl = _this.profil["repos_url"];
                _this.repos = _this.githubService.currentRepo;
                _this.showLoadingif = false;
            }, function (err) {
                _this.clear();
            });
        }
    };
    SearchUserComponent.prototype.clear = function () {
        this.profil = null;
        this.repos = null;
        this.showLoadingif = false;
    };
    SearchUserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-search-user',
            template: __webpack_require__("../../../../../src/app/search-user/search-user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/search-user/search-user.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__github_service__["a" /* GithubService */]])
    ], SearchUserComponent);
    return SearchUserComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user-detail/user-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-detail/user-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<!-- code start -->\n<div class=\"twPc-div\" *ngIf=\"profil\">\n    <a class=\"twPc-bg twPc-block\"></a>\n\n\t<div>\n\t\t<div class=\"twPc-button\">\n            <!-- Twitter Button | you can get from: https://about.twitter.com/tr/resources/buttons#follow -->\n            <!--a href=\"https://twitter.com/mertskaplan\" class=\"twitter-follow-button\" data-show-count=\"false\" data-size=\"large\" data-show-screen-name=\"false\" data-dnt=\"true\">Follow @mertskaplan</a-->\n            <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>\n            <!-- Twitter Button -->\n\t\t</div>\n\n\t\t<a [title]=\"profil.name\" [href]=\"\" class=\"twPc-avatarLink\">\n\t\t\t<img [alt]=\"profil.name\" [src]=\"profil.avatar_url\" class=\"twPc-avatarImg\">\n\t\t</a>\n\n\t\t<div class=\"twPc-divUser\">\n\t\t\t<div class=\"twPc-divName\">\n\t\t\t\t<a [href]=\"profil.html_url\" target=\"_blank\">{{ profil.name }}</a>\n\t\t\t</div>\n\t\t\t<span>\n\t\t\t\t<a [href]=\"profil.html_url\" target=\"_blank\">@<span>{{ profil.login }}</span></a>\n\t\t\t</span>\n\t\t</div>\n\n\t\t<div class=\"twPc-divStats\">\n\t\t\t<ul class=\"twPc-Arrange\">\n\t\t\t\t<li class=\"twPc-ArrangeSizeFit\">\n\t\t\t\t\t<a [href]=\"\" title=\"{{ profil.public_repos }} Repos\">\n\t\t\t\t\t\t<span class=\"twPc-StatLabel twPc-block\">Repos</span>\n\t\t\t\t\t\t<span class=\"twPc-StatValue\">{{ profil.public_repos }}</span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"twPc-ArrangeSizeFit\">\n\t\t\t\t\t<a [href]=\"\" title=\"{{ profil.following }} Following\">\n\t\t\t\t\t\t<span class=\"twPc-StatLabel twPc-block\">Following</span>\n\t\t\t\t\t\t<span class=\"twPc-StatValue\">{{ profil.following }}</span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"twPc-ArrangeSizeFit\">\n\t\t\t\t\t<a [href]=\"\" title=\"{{ profil.followers }} Followers\">\n\t\t\t\t\t\t<span class=\"twPc-StatLabel twPc-block\">Followers</span>\n\t\t\t\t\t\t<span class=\"twPc-StatValue\">{{ profil.followers }}</span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n</div>\n<!-- code end -->\n"

/***/ }),

/***/ "../../../../../src/app/user-detail/user-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__github_service__ = __webpack_require__("../../../../../src/app/github.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profil__ = __webpack_require__("../../../../../src/app/profil.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserDetailComponent = (function () {
    function UserDetailComponent(githubService) {
        this.githubService = githubService;
    }
    UserDetailComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__profil__["a" /* Profil */])
    ], UserDetailComponent.prototype, "profil", void 0);
    UserDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-user-detail',
            template: __webpack_require__("../../../../../src/app/user-detail/user-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user-detail/user-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__github_service__["a" /* GithubService */]])
    ], UserDetailComponent);
    return UserDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user-repository/user-repository.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-repository/user-repository.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n<!--button type=\"button\" class=\"btn btn-primary btn-sm\">Primary</button-->\n<div *ngIf=\"repos\">\n  <span *ngFor=\"let repo of repos\">\n    <a [href]=\"repo.html_url\" target=\"_blank\" class=\"badge badge-primary\" [title]=\"repo.html_url\">{{repo.name}}</a>\n  </span>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/user-repository/user-repository.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRepositoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserRepositoryComponent = (function () {
    function UserRepositoryComponent() {
    }
    UserRepositoryComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Array)
    ], UserRepositoryComponent.prototype, "repos", void 0);
    UserRepositoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-user-repository',
            template: __webpack_require__("../../../../../src/app/user-repository/user-repository.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user-repository/user-repository.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserRepositoryComponent);
    return UserRepositoryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/util.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return githubApiBaseUrl; });
var githubApiBaseUrl = "https://api.github.com/";


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map