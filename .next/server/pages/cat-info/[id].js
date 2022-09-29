"use strict";
(() => {
var exports = {};
exports.id = 124;
exports.ids = [124];
exports.modules = {

/***/ 4989:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _id_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(9816);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
// EXTERNAL MODULE: ./components/Layout/Layout.jsx + 2 modules
var Layout = __webpack_require__(9046);
;// CONCATENATED MODULE: external "simple-react-lightbox"
const external_simple_react_lightbox_namespaceObject = require("simple-react-lightbox");
var external_simple_react_lightbox_default = /*#__PURE__*/__webpack_require__.n(external_simple_react_lightbox_namespaceObject);
;// CONCATENATED MODULE: ./components/OtherCats.jsx




const OtherCats = ({ cats  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "jsx-9669bfe232c7514" + " " + "app",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "jsx-9669bfe232c7514" + " " + "head",
                children: "Other photos"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((external_simple_react_lightbox_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_simple_react_lightbox_namespaceObject.SRLWrapper, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "jsx-9669bfe232c7514" + " " + "cat-lists",
                        children: cats.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "jsx-9669bfe232c7514",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: item.url,
                                    alt: item.name,
                                    className: "jsx-9669bfe232c7514" + " " + "cat-list-img"
                                })
                            }, item.id))
                    })
                })
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "9669bfe232c7514",
                children: ".app.jsx-9669bfe232c7514{width:90%;margin:0 auto}.head.jsx-9669bfe232c7514{font-size:30px;font-weight:bold;color:#291507;margin:1.5rem 0}.cat-lists.jsx-9669bfe232c7514{display:grid;grid-template-columns:repeat(4,1fr);grid-template-rows:auto;grid-row-gap:60px;grid-column-gap:30px;margin-bottom:100px}.cat-list-img.jsx-9669bfe232c7514{width:220px;height:220px;-webkit-border-radius:30px;-moz-border-radius:30px;border-radius:30px;-o-object-fit:cover;object-fit:cover;cursor:pointer}@media screen and (max-width:992px){.cat-lists.jsx-9669bfe232c7514{grid-template-columns:repeat(2,1fr)}}"
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/Strength.jsx


const Strength = ({ st  })=>{
    const array1 = [
        1,
        2,
        3,
        4,
        5
    ];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "jsx-3fdbddbb96f9567" + " " + "str",
        children: [
            array1.fill(1, 0, st).map((i, d)=>{
                return i === 1 ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "jsx-3fdbddbb96f9567" + " " + "color"
                }, d) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "jsx-3fdbddbb96f9567" + " " + "color d"
                }, d);
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "3fdbddbb96f9567",
                children: ".str.jsx-3fdbddbb96f9567{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.color.jsx-3fdbddbb96f9567{width:50px!important;height:10px!important;background-color:#291507;margin-right:10px;-webkit-border-radius:50px;-moz-border-radius:50px;border-radius:50px}.d.jsx-3fdbddbb96f9567{background-color:#e0e0e0}"
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/CatDetails.jsx



const StrFun = ({ text , str  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "jsx-d4ef45fd756abbe0" + " " + "lrdiv",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "jsx-d4ef45fd756abbe0" + " " + "sub-lr",
                children: [
                    text,
                    ":"
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Strength, {
                st: str
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "d4ef45fd756abbe0",
                children: ".lrdiv.jsx-d4ef45fd756abbe0{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:1.2rem}.sub-lr.jsx-d4ef45fd756abbe0{font-weight:bold;width:150px}"
            })
        ]
    });
};
const CatDetails = ({ info  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "jsx-41e5baa0cac984f" + " " + "app",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "jsx-41e5baa0cac984f" + " " + "row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "jsx-41e5baa0cac984f" + " " + "left",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "jsx-41e5baa0cac984f" + " " + "left-details",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: info?.url,
                                    alt: "cats",
                                    className: "jsx-41e5baa0cac984f" + " " + "catImage"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "jsx-41e5baa0cac984f" + " " + "backd"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "jsx-41e5baa0cac984f" + " " + "right",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "jsx-41e5baa0cac984f" + " " + "title",
                                children: info.breeds[0].name
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "jsx-41e5baa0cac984f" + " " + "desc",
                                children: info.breeds[0].description
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "jsx-41e5baa0cac984f" + " " + "sub",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "jsx-41e5baa0cac984f" + " " + "subinfo",
                                        children: "Temperament:"
                                    }),
                                    " ",
                                    info.breeds[0].temperament
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "jsx-41e5baa0cac984f" + " " + "sub",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "jsx-41e5baa0cac984f" + " " + "subinfo",
                                        children: "Origin:"
                                    }),
                                    info.breeds[0].origin,
                                    " "
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "jsx-41e5baa0cac984f" + " " + "sub",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "jsx-41e5baa0cac984f" + " " + "subinfo",
                                        children: "Life Span:"
                                    }),
                                    info.breeds[0].life_span
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(StrFun, {
                                text: "Adaptability",
                                str: info.breeds[0].adaptability
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(StrFun, {
                                text: "Affection level",
                                str: info.breeds[0].affection_level
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(StrFun, {
                                text: "Child Friendly",
                                str: info.breeds[0].child_friendly
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(StrFun, {
                                text: "Grooming",
                                str: info.breeds[0].grooming
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(StrFun, {
                                text: "Intelligence",
                                str: info.breeds[0].intelligence
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(StrFun, {
                                text: "Health issues",
                                str: info.breeds[0].health_issues
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(StrFun, {
                                text: "Social needs",
                                str: info.breeds[0].social_needs
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(StrFun, {
                                text: "Stranger friendly",
                                str: info.breeds[0].stranger_friendly
                            })
                        ]
                    })
                ]
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "41e5baa0cac984f",
                children: ".row.jsx-41e5baa0cac984f{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:0 100px}.left.jsx-41e5baa0cac984f{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1}.right.jsx-41e5baa0cac984f{-webkit-box-flex:1.5;-webkit-flex:1.5;-moz-box-flex:1.5;-ms-flex:1.5;flex:1.5;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start}.left-details.jsx-41e5baa0cac984f{position:relative}.catImage.jsx-41e5baa0cac984f{width:300px;height:300px;-o-object-fit:cover;object-fit:cover;-webkit-border-radius:20px;-moz-border-radius:20px;border-radius:20px}.backd.jsx-41e5baa0cac984f{z-index:-99;position:absolute;top:50%;left:-12px;height:250px!important;width:100px!important;-webkit-border-radius:20px;-moz-border-radius:20px;border-radius:20px;background-color:#dec68b;-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-ms-transform:translateY(-50%);-o-transform:translateY(-50%);transform:translateY(-50%)}.title.jsx-41e5baa0cac984f{font-size:40px;font-weight:bold;color:#291507}.desc.jsx-41e5baa0cac984f{margin:1.2rem 0}.sub.jsx-41e5baa0cac984f{margin-bottom:1.2rem}.subinfo.jsx-41e5baa0cac984f{font-weight:bold;margin-right:10px}@media screen and (max-width:992px){.row.jsx-41e5baa0cac984f{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:0px 40px}.catImage.jsx-41e5baa0cac984f{width:100%;height:350px}.title.jsx-41e5baa0cac984f{margin-top:1rem}}"
            })
        ]
    });
};
/* harmony default export */ const components_CatDetails = (CatDetails);

// EXTERNAL MODULE: ./utils/api.js
var api = __webpack_require__(9473);
;// CONCATENATED MODULE: ./pages/cat-info/[id].jsx






const CatInfo = ({ cats , catDetail  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "jsx-12772b7337b5c736" + " " + "app",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Layout/* Layout */.A, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(components_CatDetails, {
                        info: catDetail
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(OtherCats, {
                        cats: cats
                    })
                ]
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "12772b7337b5c736",
                children: ".app.jsx-12772b7337b5c736{width:90%;margin:0 auto}"
            })
        ]
    });
};
/* harmony default export */ const _id_ = (CatInfo);
async function getServerSideProps(ctx) {
    const response = await api/* CatData.get */.U.get("/images/search?limit=8");
    const data = await response.data;
    const { id  } = ctx.query;
    const res = await api/* CatData.get */.U.get(`/images/search?breed_ids=${id}`);
    const detail = await res.data;
    return {
        props: {
            cats: data,
            catDetail: detail[0]
        }
    };
}


/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9816:
/***/ ((module) => {

module.exports = require("styled-jsx/style");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,61,313], () => (__webpack_exec__(4989)));
module.exports = __webpack_exports__;

})();