"use strict";
exports.id = 313;
exports.ids = [313];
exports.modules = {

/***/ 9046:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "A": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(9816);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
;// CONCATENATED MODULE: ./components/Footer.jsx


const Footer = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "jsx-c9dbf36c9886f6e5",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "jsx-c9dbf36c9886f6e5" + " " + "footer",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "jsx-c9dbf36c9886f6e5" + " " + "logo",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "/assets/CatwikiLogo.svg",
                            alt: "footer-logo",
                            className: "jsx-c9dbf36c9886f6e5"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "jsx-c9dbf36c9886f6e5" + " " + "copy-write",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            className: "jsx-c9dbf36c9886f6e5" + " " + "footer-desc",
                            children: [
                                "\xa9    created by ",
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "jsx-c9dbf36c9886f6e5",
                                    children: "Manjesh Hembrom"
                                }),
                                " - devChallange.io 2022"
                            ]
                        })
                    })
                ]
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "c9dbf36c9886f6e5",
                children: ".footer.jsx-c9dbf36c9886f6e5{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:1rem 50px 1rem 100px;background-color:#000;color:#fff;-webkit-border-radius:40px 40px 0 0;-moz-border-radius:40px 40px 0 0;border-radius:40px 40px 0 0}.logo.jsx-c9dbf36c9886f6e5,.copy-write.jsx-c9dbf36c9886f6e5{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.footer-desc.jsx-c9dbf36c9886f6e5{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.footer-desc.jsx-c9dbf36c9886f6e5 span.jsx-c9dbf36c9886f6e5{font-weight:bold}@media screen and (max-width:992px){.footer.jsx-c9dbf36c9886f6e5{padding:1rem 20px 1rem 20px}.copy-write.jsx-c9dbf36c9886f6e5{margin-left:2rem;font-size:14px}}"
            })
        ]
    });
};

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/Header.jsx




const Header = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "jsx-18cc8619c204c37c",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "jsx-18cc8619c204c37c" + " " + "left",
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: "jsx-18cc8619c204c37c",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: "/assets/CatwikiLogo.svg",
                            width: "200px",
                            height: "100px",
                            alt: "logo"
                        })
                    })
                })
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "18cc8619c204c37c",
                children: ""
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/Layout/Layout.jsx




const Layout = ({ children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "jsx-c14c7b1307cfd1dc" + " " + "appbar",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "jsx-c14c7b1307cfd1dc" + " " + "headerbar",
                children: /*#__PURE__*/ jsx_runtime_.jsx(Header, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                className: "jsx-c14c7b1307cfd1dc" + " " + "mainbar",
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "jsx-c14c7b1307cfd1dc" + " " + "footerbar",
                children: /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "c14c7b1307cfd1dc",
                children: ".appbar.jsx-c14c7b1307cfd1dc{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}"
            })
        ]
    });
};


/***/ }),

/***/ 9473:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ CatData)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const BASE_URL = "https://api.thecatapi.com/v1";
const CatData = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
    baseURL: BASE_URL,
    headers: {
        "content-type": "application/json",
        "x-api-key": process.env.API_KEY
    }
});


/***/ })

};
;