webpackJsonp([11],{

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsociacionesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_asociaciones_data__ = __webpack_require__(442);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AsociacionesPage = /** @class */ (function () {
    function AsociacionesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.asociaciones = __WEBPACK_IMPORTED_MODULE_2__data_asociaciones_data__["a" /* ASOCIACIONES */];
    }
    AsociacionesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AsociacionesPage');
    };
    AsociacionesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-asociaciones',template:/*ion-inline-start:"C:\Users\naaiv\OneDrive\Documents\ExpoCiencias\InteliMindBeta\src\pages\asociaciones\asociaciones.html"*/'<ion-header>\n    <ion-navbar color="darkblue">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Asociaciones</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content>\n    <ion-item-group *ngFor = "let asociacion of asociaciones">\n      <ion-item-divider color="light"> <h2> <b> {{asociacion.ciudad}} </b> </h2> </ion-item-divider>\n      <ion-item text-wrap>        \n        <ion-thumbnail item-end>      \n          <img [src]="asociacion.imagen"/>      \n        </ion-thumbnail>  \n        <h2 id="titulo"> <i> {{asociacion.titulo}} </i> </h2> \n        <h3> Dirección </h3>\n        <p id="direccion">        \n          {{asociacion.direccion}}\n        </p> \n        <h3> Telefono </h3>\n        <p>        \n          {{asociacion.telefono}}\n        </p> \n      </ion-item>\n    </ion-item-group>\n  </ion-content>\n'/*ion-inline-end:"C:\Users\naaiv\OneDrive\Documents\ExpoCiencias\InteliMindBeta\src\pages\asociaciones\asociaciones.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], AsociacionesPage);
    return AsociacionesPage;
}());

//# sourceMappingURL=asociaciones.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__time_tree_time_tree__ = __webpack_require__(88);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailsPage = /** @class */ (function () {
    function DetailsPage(navCtrl, navParams, afs, alerCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afs = afs;
        this.alerCtrl = alerCtrl;
        this.name = "";
        this.datebirth = "";
        this.address = "";
        this.phone = "";
        this.familiarsCollection = afs.collection('familiars');
        // .snapshotChanges() returns a DocumentChangeAction[], which contains
        // a lot of information about "what happened" with each change. If you want to
        // get the data and the id use the map operator.
        this.familiars = this.familiarsCollection.snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return __assign({ id: id }, data);
        }); }));
        console.table(this.familiars);
    }
    DetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailsPage');
    };
    DetailsPage.prototype.insert = function () {
        var id = this.afs.createId();
        var us = { 'name': this.name, 'date_birth': this.datebirth,
            'address': this.address, 'phone_number': this.phone };
        this.familiarsCollection.doc(id).set(us);
    };
    DetailsPage.prototype.doAlert = function () {
        var alert = this.alerCtrl.create({
            title: 'Registro',
            message: '¡El registro se ha realizado exitosamente!',
            buttons: ['Ok']
        });
        alert.present();
    };
    DetailsPage.prototype.gotoTime = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__time_tree_time_tree__["a" /* TimeTreePage */]);
    };
    DetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-details',template:/*ion-inline-start:"C:\Users\naaiv\OneDrive\Documents\ExpoCiencias\InteliMindBeta\src\pages\details\details.html"*/'<ion-header>\n  <ion-navbar color="darkblue">\n    <ion-title>Agregar Familiar</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-list>\n        <h4 style="text-align: center;"> Ingrese los datos correspondientes: </h4>\n        <ion-list>\n          <ion-item>\n            <ion-label floating> Nombre: </ion-label>\n            <ion-input type="text" [(ngModel)]="name"></ion-input>\n          </ion-item>\n      \n          <ion-item>\n            <ion-label floating> Fecha de Nacimiento: </ion-label>\n            <ion-input type="date" values="" [(ngModel)]="datebirth"></ion-input>\n          </ion-item>\n          \n          <ion-item>\n            <ion-label floating> Dirección: </ion-label>\n            <ion-input type="text" values="" [(ngModel)]="address"></ion-input>\n          </ion-item>\n      \n          <ion-item>\n            <ion-label floating> Teléfono: </ion-label>\n            <ion-input type="number" values="" [(ngModel)]="phone"></ion-input>\n          </ion-item>           \n        </ion-list>\n        <div padding>\n          <button ion-button color="ligthblue" block (tap)="insert(name,datebirth,address,phone)"\n            (tap)="process()" (tap)="doAlert()" (tap)="gotoTime">\n            Aceptar\n          </button>\n        </div>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\naaiv\OneDrive\Documents\ExpoCiencias\InteliMindBeta\src\pages\details\details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], DetailsPage);
    return DetailsPage;
}());

//# sourceMappingURL=details.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DietasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DietasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DietasPage = /** @class */ (function () {
    function DietasPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DietasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DietasPage');
    };
    DietasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dietas',template:/*ion-inline-start:"C:\Users\naaiv\OneDrive\Documents\ExpoCiencias\InteliMindBeta\src\pages\dietas\dietas.html"*/'<ion-header>\n  <ion-navbar color="darkblue">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Dietas</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>  \n  <ion-item-group>\n    <img src="assets/imgs/saludable.jpg" id="image"/>\n    <ion-item-divider color="secondary"> Alimentos recomendados: </ion-item-divider>\n    <ion-item> <ion-icon name="checkmark"></ion-icon> Frutas y verduras </ion-item>\n    <ion-item> <ion-icon name="checkmark"></ion-icon> Granos frescos </ion-item>\n    <ion-item> <ion-icon name="checkmark"></ion-icon> Pescado </ion-item>\n    <ion-item> <ion-icon name="checkmark"></ion-icon> Lácteos bajos en grasas </ion-item>\n    <ion-item> <ion-icon name="checkmark"></ion-icon> Vitamina B12 </ion-item>\n    <ion-item> <ion-icon name="checkmark"></ion-icon> Café </ion-item> \n  </ion-item-group>\n  <br>\n  <br>\n  <ion-item-group>\n    <img src="assets/imgs/chatarra.jpg" id="image"/>\n    <ion-item-divider color="danger"> Evitar el consumo de estos alimentos: </ion-item-divider>\n    <ion-item> <ion-icon name="close"></ion-icon> Mínimo consumo de dulces </ion-item>\n    <ion-item> <ion-icon name="close"></ion-icon> Papas fritas </ion-item>\n    <ion-item> <ion-icon name="close"></ion-icon> Lácteos con alto contenido grado </ion-item>\n    <ion-item> <ion-icon name="close"></ion-icon> Carnes procesadas </ion-item>\n    <ion-item> <ion-icon name="close"></ion-icon> Mantequilla </ion-item>\n  </ion-item-group>\n</ion-content>\n'/*ion-inline-end:"C:\Users\naaiv\OneDrive\Documents\ExpoCiencias\InteliMindBeta\src\pages\dietas\dietas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], DietasPage);
    return DietasPage;
}());

//# sourceMappingURL=dietas.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EjerciciosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the EjerciciosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EjerciciosPage = /** @class */ (function () {
    function EjerciciosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EjerciciosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EjerciciosPage');
    };
    EjerciciosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ejercicios',template:/*ion-inline-start:"C:\Users\naaiv\OneDrive\Documents\ExpoCiencias\InteliMindBeta\src\pages\ejercicios\ejercicios.html"*/'<ion-header>\n  <ion-navbar color="darkblue">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Ejercicios</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <img src="assets/imgs/ejercicio.jpg" id="image"/>\n  <h3>Sugerencias de ejercicios físicos a realizar:</h3>\n  <ion-list no-lines>\n    <ion-item> <ion-icon name="arrow-dropright"></ion-icon> Nadar </ion-item>\n    <ion-item> <ion-icon name="arrow-dropright"></ion-icon> Andar en bicicleta </ion-item>\n    <ion-item> <ion-icon name="arrow-dropright"></ion-icon> Bicileta estática </ion-item>\n    <ion-item> <ion-icon name="arrow-dropright"></ion-icon> Jardinería (cortar el pasto, usar el rastrillo) </ion-item>\n    <ion-item> <ion-icon name="arrow-dropright"></ion-icon> Caminar rápido en una superficie inclinada </ion-item>\n    <ion-item> <ion-icon name="arrow-dropright"></ion-icon> Trapear o escobillar el piso </ion-item>\n    <ion-item> <ion-icon name="arrow-dropright"></ion-icon> Jugar tenis en pareja </ion-item>\n    <ion-item> <ion-icon name="arrow-dropright"></ion-icon> Jugar voleibol </ion-item>\n    <ion-item> <ion-icon name="arrow-dropright"></ion-icon> Remar </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\naaiv\OneDrive\Documents\ExpoCiencias\InteliMindBeta\src\pages\ejercicios\ejercicios.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], EjerciciosPage);
    return EjerciciosPage;
}());

//# sourceMappingURL=ejercicios.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmparejarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_qrcode__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_qrcode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_qrcode__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EmparejarPage = /** @class */ (function () {
    function EmparejarPage(navCtrl, navParams, afs, alerCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afs = afs;
        this.alerCtrl = alerCtrl;
        this.name = "";
        this.lastname = "";
        this.datebirth = "";
        this.address = "";
        this.phone = "";
        this.zipcode = "";
        this.code = "";
        this.generated = '';
        this.usersCollection = afs.collection('users');
        // .snapshotChanges() returns a DocumentChangeAction[], which contains
        // a lot of information about "what happened" with each change. If you want to
        // get the data and the id use the map operator.
        this.users = this.usersCollection.snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return __assign({ id: id }, data);
        }); }));
        console.table(this.users);
    }
    EmparejarPage.prototype.displayQrCode = function () {
        return this.generated !== '';
    };
    EmparejarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EmparejarPage');
    };
    EmparejarPage.prototype.insert = function () {
        var id = this.afs.createId();
        var us = { 'name': this.name, 'last_name': this.lastname, 'date_birth': this.datebirth,
            'address': this.address, 'phone_number': this.phone, 'zip_code': this.zipcode };
        this.usersCollection.doc(id).set(us);
    };
    EmparejarPage.prototype.process = function () {
        this.code = this.name + " " + this.lastname + " " + this.datebirth + " " + this.address + " " + this.phone + " " + this.zipcode;
        var qrcode = __WEBPACK_IMPORTED_MODULE_4_qrcode___default.a;
        var self = this;
        qrcode.toDataURL(self.code, { errorCorrectionLevel: 'H' }, function (err, url) {
            self.generated = url;
        });
    };
    EmparejarPage.prototype.clean = function () {
        this.name = "";
        this.lastname = "";
        this.datebirth = "";
        this.address = "";
        this.phone = "";
        this.zipcode = "";
    };
    EmparejarPage.prototype.doAlert = function () {
        var alert = this.alerCtrl.create({
            title: 'Registro',
            message: '¡Tu registro se ha realizado exitosamente!',
            buttons: ['Ok']
        });
        alert.present();
    };
    EmparejarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-emparejar',template:/*ion-inline-start:"C:\Users\naaiv\OneDrive\Documents\ExpoCiencias\InteliMindBeta\src\pages\emparejar\emparejar.html"*/'<ion-header>\n  <ion-navbar color="darkblue">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Emparejar</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <!--<ion-list *ngFor ="let user of users | async">\n    <ul>\n      <li>{{user.name}}</li>\n      <li>{{user.last_name}}</li>\n      <li>{{user.address}}</li>\n      <li>{{user.date_birth}}</li>\n      <li>{{user.phone_number}}</li>\n      <li>{{user.zip_code}}</li>\n    </ul>-->\n<!--<ion-card>\n  <ion-card-content>\n    <ion-input [(ngModel)]="code" type="text" placeholder="Ingresa codigo"></ion-input>\n    <button ion-button block (click)="process();">Generar QR</button>\n\n    <img *ngIf="displayQrCode()" [src]="generated"/>\n  </ion-card-content>\n</ion-card>-->\n  <ion-list>\n      <h4 style="text-align: center;"> Ingrese los datos correspondientes: </h4>\n      <ion-list>\n        <ion-item>\n          <ion-label floating> Nombre: </ion-label>\n          <ion-input type="text" [(ngModel)]="name"></ion-input>\n        </ion-item>\n    \n        <ion-item>\n          <ion-label floating> Apellidos: </ion-label>\n          <ion-input type="text" values="" [(ngModel)]="lastname"></ion-input>\n        </ion-item>\n    \n        <ion-item>\n          <ion-label floating> Fecha de Nacimiento: </ion-label>\n          <ion-input type="text" values="" [(ngModel)]="datebirth"></ion-input>\n        </ion-item>\n        \n        <ion-item>\n          <ion-label floating> Dirección: </ion-label>\n          <ion-input type="text" values="" [(ngModel)]="address"></ion-input>\n        </ion-item>\n    \n        <ion-item>\n            <ion-label floating> Teléfono: </ion-label>\n            <ion-input type="text" values="" [(ngModel)]="phone"></ion-input>\n          </ion-item>\n\n        <ion-item>\n          <ion-label floating> Código Postal: </ion-label>\n          <ion-input type="text" values="" [(ngModel)]="zipcode"></ion-input>\n        </ion-item>            \n      </ion-list>\n      <div padding>\n        <button ion-button color="ligthblue" block (tap)="insert(name,lastname,datebirth,address,phone,zipcode)"\n          (tap)="process()" (tap)="clean()" (tap)="doAlert()">\n          Aceptar\n        </button>\n        <img *ngIf="displayQrCode()" [src]="generated"/>\n      </div>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\naaiv\OneDrive\Documents\ExpoCiencias\InteliMindBeta\src\pages\emparejar\emparejar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], EmparejarPage);
    return EmparejarPage;
}());

//# sourceMappingURL=emparejar.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MiniJuegosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_mini_juegos_data__ = __webpack_require__(479);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MiniJuegosPage = /** @class */ (function () {
    function MiniJuegosPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.minijuegos = __WEBPACK_IMPORTED_MODULE_2__data_mini_juegos_data__["a" /* MINIJUEGOS */];
    }
    /*gotoDetails(minijuego:any){
  
      this.navCtrl.push(DetailsPage, {minijuego} );
  
    }
  
    gotoModal(minijuego:any){
      const modalCtrl = this.modalCtrl.create('ModalPage',{minijuego});
  
      modalCtrl.present();
    }*/
    MiniJuegosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MiniJuegosPage');
    };
    MiniJuegosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mini-juegos',template:/*ion-inline-start:"C:\Users\naaiv\OneDrive\Documents\ExpoCiencias\InteliMindBeta\src\pages\mini-juegos\mini-juegos.html"*/'<link href="assets/css/juegos.css" rel="stylesheet">\n<ion-header>\n  <ion-navbar color="darkblue">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>MiniJuegos</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>    \n  <ion-list>\n    <ion-card *ngFor = "let minijuego of minijuegos">\n      <img [src]= "minijuego.imagen"/>\n  \n      <ion-card-content>\n        <ion-card-title>\n          {{minijuego.titulo}}\n        </ion-card-title>\n        <p>\n          {{minijuego.descripcion}}\n        </p>\n       \n        \n      </ion-card-content>\n  \n      <ion-row no-padding>\n        <ion-col>\n          <button ion-button clear small color="ligthblue" icon-start>\n            <ion-icon name="game-controller-b"></ion-icon>\n            <a href={{minijuego.link}}>Jugar</a>\n          </button>\n          <!--<button ion-button clear small color="ligthblue" icon-start\n                  (tap) = "gotoModal(minijuego)">\n            <ion-icon name="game-controller-b"></ion-icon>\n            Modal\n          </button>-->\n        </ion-col>        \n      </ion-row>   \n    </ion-card>    \n  </ion-list> \n</ion-content>\n'/*ion-inline-end:"C:\Users\naaiv\OneDrive\Documents\ExpoCiencias\InteliMindBeta\src\pages\mini-juegos\mini-juegos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], MiniJuegosPage);
    return MiniJuegosPage;
}());

//# sourceMappingURL=mini-juegos.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecordatoriosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the RecordatoriosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RecordatoriosPage = /** @class */ (function () {
    function RecordatoriosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RecordatoriosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RecordatoriosPage');
    };
    RecordatoriosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-recordatorios',template:/*ion-inline-start:"C:\Users\naaiv\OneDrive\Documents\ExpoCiencias\InteliMindBeta\src\pages\recordatorios\recordatorios.html"*/'<!--\n  Generated template for the RecordatoriosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="darkblue">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Recordatorios</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <ion-label> Recordatorio 1 </ion-label>\n      <ion-checkbox color="secondary" checked="true"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label> Recordatorio 2 </ion-label>\n      <ion-checkbox value="cherry" disabled="true"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label> Recordatorio 3 </ion-label>\n      <ion-checkbox color="secondary"></ion-checkbox>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\naaiv\OneDrive\Documents\ExpoCiencias\InteliMindBeta\src\pages\recordatorios\recordatorios.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], RecordatoriosPage);
    return RecordatoriosPage;
}());

//# sourceMappingURL=recordatorios.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TimeDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TimeDetailsPage = /** @class */ (function () {
    function TimeDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TimeDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TimeDetailsPage');
    };
    TimeDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-time-details',template:/*ion-inline-start:"C:\Users\naaiv\OneDrive\Documents\ExpoCiencias\InteliMindBeta\src\pages\time-details\time-details.html"*/'<!--\n  Generated template for the TimeDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="darkblue">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>¿Qué es TimeLine?</ion-title>  \n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<h1>TimeLine</h1>\n<p>Con el propósito de seguir con el desarrollo de las habilidades cognitivas de la persona, este apartado\nesta desarrollado con el propósito de que el paciente tenga la opción de recrear su árbol familiar, desde\nsus padres, hermanos, incluyendo además a sus hijos. Tendrá la posibilidad de incluir imágenes y videos que\nrelacionen de una manera más sencilla al familiar con los recuerdos de la persona, recursos con los que además\nse realizará un pequeño video con los sucesos más importantes del familiar.\n</p>\n<img src="assets/imgs/time.png"/> \n</ion-content>\n'/*ion-inline-end:"C:\Users\naaiv\OneDrive\Documents\ExpoCiencias\InteliMindBeta\src\pages\time-details\time-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], TimeDetailsPage);
    return TimeDetailsPage;
}());

//# sourceMappingURL=time-details.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeLinePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_time_details_time_details__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__time_tree_time_tree__ = __webpack_require__(88);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the TimeLinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TimeLinePage = /** @class */ (function () {
    function TimeLinePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TimeLinePage.prototype.gotoDetails = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_time_details_time_details__["a" /* TimeDetailsPage */]);
    };
    TimeLinePage.prototype.gotoTree = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__time_tree_time_tree__["a" /* TimeTreePage */]);
    };
    TimeLinePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TimeLinePage');
    };
    TimeLinePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-time-line',template:/*ion-inline-start:"C:\Users\naaiv\OneDrive\Documents\ExpoCiencias\InteliMindBeta\src\pages\time-line\time-line.html"*/'<!--\n  Generated template for the TimeLinePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="darkblue">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>TimeLine</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-item (tap) = "gotoDetails()">\n    <ion-thumbnail item-end>      \n      <img src="assets/imgs/time2.png"/>      \n    </ion-thumbnail>  \n    <h2>¿Qué es TimeLine?</h2>\n  </ion-item>\n  <ion-item (tap) = "gotoTree()">\n    <ion-thumbnail item-end>      \n      <img src="assets/imgs/arbol.jpg"/>      \n    </ion-thumbnail>  \n    <h2>Crear Árbol Genealógico</h2>\n  </ion-item>\n</ion-content>\n'/*ion-inline-end:"C:\Users\naaiv\OneDrive\Documents\ExpoCiencias\InteliMindBeta\src\pages\time-line\time-line.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], TimeLinePage);
    return TimeLinePage;
}());

//# sourceMappingURL=time-line.js.map

/***/ }),

/***/ 200:
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
webpackEmptyAsyncContext.id = 200;

/***/ }),

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/asociaciones/asociaciones.module": [
		510,
		10
	],
	"../pages/details/details.module": [
		511,
		9
	],
	"../pages/dietas/dietas.module": [
		512,
		8
	],
	"../pages/ejercicios/ejercicios.module": [
		513,
		7
	],
	"../pages/emparejar/emparejar.module": [
		514,
		6
	],
	"../pages/mini-juegos/mini-juegos.module": [
		515,
		5
	],
	"../pages/modal/modal.module": [
		520,
		0
	],
	"../pages/recordatorios/recordatorios.module": [
		516,
		4
	],
	"../pages/time-details/time-details.module": [
		517,
		3
	],
	"../pages/time-line/time-line.module": [
		518,
		2
	],
	"../pages/time-tree/time-tree.module": [
		519,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 241;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\naaiv\OneDrive\Documents\ExpoCiencias\InteliMindBeta\src\pages\home\home.html"*/'<link href="assets/css/home.css" rel="stylesheet">\n<ion-header>\n  <ion-navbar color="darkblue">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Inicio</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding id="content">\n    <img src="assets/imgs/logo.png"/>\n\n  <h2>¿Qué es InteliMind?</h2>\n\n  <p>\n    InteliMind es una aplicación orientada al apoyo para la enfermedad de Alzheimer, la cual cuenta con actividades o \n    ejercicios fisicos y mentales, además de propocionar dietas para la prevención de la demencia, asosiaciones a las\n    cuales el usuario puede recurrir, así como también un TimeLine donde podrá generar un árbol genealógico de su familia.\n    Todo con la finalidad de ayudar en lo máximo posible a la persona con esta enfermedad, además de llevar un\n    seguimiento de la evolución de la propia enfermedad.\n  </p>\n</ion-content>\n'/*ion-inline-end:"C:\Users\naaiv\OneDrive\Documents\ExpoCiencias\InteliMindBeta\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(416);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_emparejar_emparejar__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_mini_juegos_mini_juegos__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_ejercicios_ejercicios__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_dietas_dietas__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_recordatorios_recordatorios__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_asociaciones_asociaciones__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_time_line_time_line__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_details_details__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_time_details_time_details__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_time_tree_time_tree__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angularfire2_firestore__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angularfire2_auth__ = __webpack_require__(505);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//pages


/*import { ListPage } from '../pages/list/list';*/












//plugin



//provider
//import {UserService} from '../../src/providers/user.service';
//import { AngularFirestore } from 'angularfire2/firestore';
var config = {
    apiKey: "AIzaSyAi44FUxn0P7vrZbpp3XherT4pNjJGrX34",
    authDomain: "intelimind-b4342.firebaseapp.com",
    databaseURL: "https://intelimind-b4342.firebaseio.com",
    projectId: "intelimind-b4342"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_emparejar_emparejar__["a" /* EmparejarPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_mini_juegos_mini_juegos__["a" /* MiniJuegosPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_ejercicios_ejercicios__["a" /* EjerciciosPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_dietas_dietas__["a" /* DietasPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_recordatorios_recordatorios__["a" /* RecordatoriosPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_asociaciones_asociaciones__["a" /* AsociacionesPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_time_line_time_line__["a" /* TimeLinePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_details_details__["a" /* DetailsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_time_details_time_details__["a" /* TimeDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_time_tree_time_tree__["a" /* TimeTreePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/asociaciones/asociaciones.module#AsociacionesPageModule', name: 'AsociacionesPage', segment: 'asociaciones', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/details/details.module#DetailsPageModule', name: 'DetailsPage', segment: 'details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dietas/dietas.module#DietasPageModule', name: 'DietasPage', segment: 'dietas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ejercicios/ejercicios.module#EjerciciosPageModule', name: 'EjerciciosPage', segment: 'ejercicios', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/emparejar/emparejar.module#EmparejarPageModule', name: 'EmparejarPage', segment: 'emparejar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mini-juegos/mini-juegos.module#MiniJuegosPageModule', name: 'MiniJuegosPage', segment: 'mini-juegos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/recordatorios/recordatorios.module#RecordatoriosPageModule', name: 'RecordatoriosPage', segment: 'recordatorios', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/time-details/time-details.module#TimeDetailsPageModule', name: 'TimeDetailsPage', segment: 'time-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/time-line/time-line.module#TimeLinePageModule', name: 'TimeLinePage', segment: 'time-line', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/time-tree/time-tree.module#TimeTreePageModule', name: 'TimeTreePage', segment: 'time-tree', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal/modal.module#ModalPageModule', name: 'ModalPage', segment: 'modal', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_17_angularfire2__["a" /* AngularFireModule */].initializeApp(config),
                __WEBPACK_IMPORTED_MODULE_19_angularfire2_auth__["a" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_18_angularfire2_firestore__["b" /* AngularFirestoreModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_emparejar_emparejar__["a" /* EmparejarPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_mini_juegos_mini_juegos__["a" /* MiniJuegosPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_ejercicios_ejercicios__["a" /* EjerciciosPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_dietas_dietas__["a" /* DietasPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_recordatorios_recordatorios__["a" /* RecordatoriosPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_asociaciones_asociaciones__["a" /* AsociacionesPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_time_line_time_line__["a" /* TimeLinePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_details_details__["a" /* DetailsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_time_details_time_details__["a" /* TimeDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_time_tree_time_tree__["a" /* TimeTreePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ASOCIACIONES; });
var ASOCIACIONES = [
    {
        ciudad: "Aguascalientes",
        imagen: "assets/imgs/aguascalientes1.jpg",
        titulo: "Fundación de Alzheimer Aguascalientes, A.C.",
        direccion: "Sierra Nevada 221, Bosques del Prado Norte",
        telefono: "(449) 970 55 14 y 269 17 85"
    },
    {
        imagen: "assets/imgs/aguascalientes2.jpg",
        titulo: "Centro del Día, Sra. Ruth Landgrave.",
        direccion: "Sierra de la Canela 236. Fracc. Bosques.",
        telefono: "(449) 9129113 y 9143785"
    },
    {
        ciudad: "Ciudad de México",
        imagen: "assets/imgs/cd1.png",
        titulo: "Instituto Nacional de Neurología y Neurocirugía",
        direccion: "Av. Insurgentes Sur 3877, La Fama, 14269 Ciudad de México, CDMX",
        telefono: "(55) 5606-3822, extensión 2016"
    },
    {
        imagen: "assets/imgs/cd2.jpg",
        titulo: "Alzheimer México, I.A.P.",
        direccion: "Calle Moneda 90, Tlalpan Centro I, 14000 Ciudad de México, CDMX",
        telefono: "(55) 5280 4202 y 5280-3349"
    },
    {
        imagen: "assets/imgs/cd3.jpg",
        titulo: "Asociación Mexicana de Alzheimer y Enfermedades Similares A.C.",
        direccion: "Av. Insurgentes Sur # 594, departamento 402. Col. Del Valle.",
        telefono: "5523- 1526"
    },
    {
        ciudad: "Coahuila",
        imagen: "assets/imgs/coahuila1.jpg",
        titulo: "Centro Alzheimer de la Laguna, A.C.",
        direccion: "A.C. Hidalgo 2351 Ote. Col. Centro 27000 Torreón, Coah.",
        telefono: "+8717132718"
    },
    {
        ciudad: "Durango",
        imagen: "assets/imgs/durango1.png",
        titulo: "Instituto de Salud Mental",
        direccion: "Capitán Pedro Celestino Negrete 1003B, Fátima, 34060 Durango, Dgo.",
        telefono: "618 811 5787"
    },
    {
        imagen: "assets/imgs/imss.jpg",
        titulo: "Instituto Mexicano del Seguro Social",
        direccion: "Avenue De La Normal 200, Predio Canoas, 34077 Durango, Dgo.",
        telefono: "618 811 9820"
    },
    {
        imagen: "assets/imgs/issste.jpg",
        titulo: "ISSSTE Dr. Santiago Ramon y Cajal",
        direccion: "Predio Canoas s/n, Colonia Obrera, Silvestre Dorador, 34070 Durango, Dgo.",
        telefono: "618 811 7511 y 618 811 7827"
    },
    {
        ciudad: "Guanajuato",
        imagen: "assets/imgs/guanajuato.png",
        titulo: "Fundación de Alzheimer León",
        direccion: "Jacarandas 212. Club Campestre 37120 León, Gto.",
        telefono: "+477 7737555"
    },
    {
        ciudad: "Hidalgo",
        imagen: "assets/imgs/hidalgo1.jpg",
        titulo: "Federación Mexicana de Alzheimer y Enf. Similares, A.C.",
        direccion: "Real de catorce 101. Fracc. Real del Valle Pachuca Hgo.",
        telefono: "771 7190296 y 97"
    },
    {
        imagen: "assets/imgs/hidalgo2.png",
        titulo: "Asociación de Alzheimer y Enf. Similares, A.C.",
        direccion: "Carretera Cubitos La Paz 122 Fracc. Lomas Residencial Pachuca. Pachuca, Hgo.",
        telefono: "+771 7194752"
    },
    {
        ciudad: "Jalisco",
        imagen: "assets/imgs/jalisco1.png",
        titulo: "Fundación Alzheimer, Guadalajara, A.C.",
        direccion: "Calle Esturión 3187. Col Residencial Loma Bonita Guadalajara, Jal.",
        telefono: "+33 36 324241"
    },
    {
        imagen: "assets/imgs/jalisco2.jpg",
        titulo: "Centro de Día 'Les Champs Elyses'",
        direccion: "Av. Xóchilt 194. Col. Ciudad del Sol 45050 Zapopan, Jal.",
        telefono: "+33 31 210143"
    },
    {
        ciudad: "Michoacán",
        imagen: "assets/imgs/michoacan.jpg",
        titulo: "Asociación Alzheimer de Morelia",
        direccion: "Calle de Ana Ma. Gallaga 911-A, 2do. Piso. Col. Centro o Cuauhtémoc 58000 Morelia, Mich.",
        telefono: "+443 3131761"
    },
    {
        ciudad: "Nuevo León",
        imagen: "assets/imgs/nuevoleon.png",
        titulo: "Asociación Alzheimer de Monterrey, A.C.",
        direccion: "Av. Loma Grande 2713 Ingt. 3. Col. Lomas de San Francisco 64710 Monterrey, Nuevo León.",
        telefono: "+8183 336948 y 336713"
    },
    {
        ciudad: "Oaxaca",
        imagen: "assets/imgs/oaxaca.png",
        titulo: "Asociación Oaxaqueña de Alzheimer y Enf. Sim., A.C.",
        direccion: "Segunda Privada de Jacaranda 204 o Maya Fernández. Col. San Felipe del Agua 68020 Oaxaca, Oax.",
        telefono: "+951 5200526-5200403 y +952 5164571"
    },
    {
        ciudad: "San Luis Potosí",
        imagen: "assets/imgs/oaxaca.png",
        titulo: "Asociación Vallense de Alzheimer y Enf. Sim., A.C.",
        direccion: "Boulevard 48. Sur Zona Centro 79000 Ciudad Valles, S.L.P.",
        telefono: "+662 2101662"
    },
    {
        ciudad: "Sonora",
        imagen: "assets/imgs/sonora.png",
        titulo: "Asociación Sonorense de Alzheimer.",
        direccion: "Calle Tres y Ley Federal del Trabajo. Edificio Cree. Fracc. Bugambilias 83140. Hermosillo, Son.",
        telefono: "+481 3821042"
    }
];
//# sourceMappingURL=asociaciones_data.js.map

/***/ }),

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MINIJUEGOS; });
var MINIJUEGOS = [
    {
        imagen: "assets/imgs/sopa.png",
        titulo: "Sopa de letras",
        descripcion: "Minijuego para encontrar palabras en una sola",
        link: "https://buscapalabras.com.ar/jugar-sopa-de-letras.php"
    },
    {
        imagen: "assets/imgs/sumas.png",
        titulo: "Sumas de Pizarra",
        descripcion: "Ejercicio de aritmética para ejercitar la memoria",
        link: "https://www.juegos.com/juego/chalkboard-sums"
    },
    {
        imagen: "assets/imgs/memorama.jpg",
        titulo: "Memorama",
        descripcion: "Ejercicio para ejercitar la memoria",
        link: "https://www.juegos.com/juego/pares-de-chicos-adorables"
    }
];
//# sourceMappingURL=mini_juegos_data.js.map

/***/ }),

/***/ 497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_emparejar_emparejar__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_mini_juegos_mini_juegos__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_ejercicios_ejercicios__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_dietas_dietas__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_recordatorios_recordatorios__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_asociaciones_asociaciones__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_time_line_time_line__ = __webpack_require__(167);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { ListPage } from '../pages/list/list';







//import { DetailsPage } from '../pages/details/details';
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Emparejar', component: __WEBPACK_IMPORTED_MODULE_5__pages_emparejar_emparejar__["a" /* EmparejarPage */] },
            { title: 'MiniJuegos', component: __WEBPACK_IMPORTED_MODULE_6__pages_mini_juegos_mini_juegos__["a" /* MiniJuegosPage */] },
            { title: 'Ejercicios', component: __WEBPACK_IMPORTED_MODULE_7__pages_ejercicios_ejercicios__["a" /* EjerciciosPage */] },
            { title: 'Dietas', component: __WEBPACK_IMPORTED_MODULE_8__pages_dietas_dietas__["a" /* DietasPage */] },
            { title: 'Recordatorios', component: __WEBPACK_IMPORTED_MODULE_9__pages_recordatorios_recordatorios__["a" /* RecordatoriosPage */] },
            { title: 'Asociaciones', component: __WEBPACK_IMPORTED_MODULE_10__pages_asociaciones_asociaciones__["a" /* AsociacionesPage */] },
            { title: 'TimeLine', component: __WEBPACK_IMPORTED_MODULE_11__pages_time_line_time_line__["a" /* TimeLinePage */] },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\naaiv\OneDrive\Documents\ExpoCiencias\InteliMindBeta\src\app\app.html"*/'<ion-menu [content]="content" type="overlay">\n  <ion-header>\n    <ion-toolbar color="darkblue">\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\naaiv\OneDrive\Documents\ExpoCiencias\InteliMindBeta\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeTreePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__details_details__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the TimeTreePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TimeTreePage = /** @class */ (function () {
    function TimeTreePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TimeTreePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TimeTreePage');
    };
    TimeTreePage.prototype.gotoAdd = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__details_details__["a" /* DetailsPage */]);
    };
    TimeTreePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-time-tree',template:/*ion-inline-start:"C:\Users\naaiv\OneDrive\Documents\ExpoCiencias\InteliMindBeta\src\pages\time-tree\time-tree.html"*/'<ion-header>\n  <ion-navbar color="darkblue">\n    <ion-title>Crear Árbol Genealógico</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-fab center middle>\n    <button ion-fab color="yellow"><ion-icon name="ios-contact"></ion-icon></button>\n    <ion-fab-list side="top">\n      Padres\n      <button ion-fab color="light" (tap)="gotoAdd()"><ion-icon name="ios-add-circle-outline"></ion-icon></button>\n    </ion-fab-list>\n    <ion-fab-list side="bottom">\n      Hijos\n      <button ion-fab color="light" (tap)="gotoAdd()"><ion-icon name="ios-add-circle-outline"></ion-icon></button>\n    </ion-fab-list>\n    <ion-fab-list side="left">\n      Pareja\n      <button ion-fab color="light" (tap)="gotoAdd()"><ion-icon name="ios-add-circle-outline"></ion-icon></button>\n    </ion-fab-list>\n    <ion-fab-list side="right">\n      Hermanos\n      <button ion-fab color="light" (tap)="gotoAdd()"><ion-icon name="ios-add-circle-outline"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"C:\Users\naaiv\OneDrive\Documents\ExpoCiencias\InteliMindBeta\src\pages\time-tree\time-tree.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], TimeTreePage);
    return TimeTreePage;
}());

//# sourceMappingURL=time-tree.js.map

/***/ })

},[293]);
//# sourceMappingURL=main.js.map