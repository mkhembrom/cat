"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 4132:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ Cat)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);


const Cat = ({ name , img  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "jsx-1ab5df98fc16d401" + " " + "catFamily",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: img,
                alt: name,
                className: "jsx-1ab5df98fc16d401" + " " + "cat"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "jsx-1ab5df98fc16d401" + " " + "breed-type",
                children: name
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "1ab5df98fc16d401",
                children: ".catFamily.jsx-1ab5df98fc16d401{cursor:pointer}.cat.jsx-1ab5df98fc16d401{-webkit-border-radius:20px!important;-moz-border-radius:20px!important;border-radius:20px!important;width:200px;height:200px;-o-object-fit:cover;object-fit:cover}.breed-type.jsx-1ab5df98fc16d401{font-size:20px;color:#291507;margin-top:1rem}@media screen and (max-width:500px){.cat.jsx-1ab5df98fc16d401{width:100%!important;height:120px!important}}"
            })
        ]
    });
};


/***/ }),

/***/ 1804:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ CatBreed)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6197);
/* harmony import */ var _Cat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4132);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(567);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_3__]);
framer_motion__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const CatBreed = ({ catbreed  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "jsx-60eddf535a54d441" + " " + "wrapper",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "jsx-60eddf535a54d441" + " " + "top",
                children: "Most Search Breeds"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "jsx-60eddf535a54d441" + " " + "bottom-bar"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "jsx-60eddf535a54d441" + " " + "box",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "jsx-60eddf535a54d441" + " " + "title",
                        children: "66+ Breeds For you to discover"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "jsx-60eddf535a54d441" + " " + "btn",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: "/breed",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: "jsx-60eddf535a54d441",
                                    children: "SEE MORE"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "jsx-60eddf535a54d441" + " " + "icon",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_5__.BsArrowRight, {})
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "jsx-60eddf535a54d441" + " " + "catList",
                children: catbreed?.map((breed)=>{
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                        initial: {
                            opacity: 0.5,
                            y: 40
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            type: "twin",
                            duration: 0.5
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: `/cat-info/${breed.id}`,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                className: "jsx-60eddf535a54d441",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Cat__WEBPACK_IMPORTED_MODULE_4__/* .Cat */ .K, {
                                    name: breed.name,
                                    img: breed.image.url
                                })
                            })
                        })
                    }, breed.id);
                })
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "60eddf535a54d441",
                children: ".wrapper.jsx-60eddf535a54d441{background-color:#e3e1dc;padding:1rem 100px 40px 100px;margin-bottom:2rem;-webkit-border-radius:0 0 40px 40px;-moz-border-radius:0 0 40px 40px;border-radius:0 0 40px 40px}.top.jsx-60eddf535a54d441{display:inline;font-size:16px;color:#291507;margin-top:1rem}.bottom-bar.jsx-60eddf535a54d441{width:60px;height:5px;margin-top:5px;-webkit-border-radius:30px;-moz-border-radius:30px;border-radius:30px;background-color:#291507;z-index:99}.box.jsx-60eddf535a54d441{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:end;-webkit-align-items:flex-end;-moz-box-align:end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin:1.5rem 0}.title.jsx-60eddf535a54d441{font-size:35px;font-weight:600;width:350px;line-height:1.2;color:#291507}.btn.jsx-60eddf535a54d441{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer}.btn.jsx-60eddf535a54d441 a.jsx-60eddf535a54d441{font-size:.9rem;margin-right:10px;font-weight:bold;color:#291507}.btn.jsx-60eddf535a54d441 .icon.jsx-60eddf535a54d441{font-weight:bold;color:#291507}.catList.jsx-60eddf535a54d441{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}@media screen and (max-width:992px){.wrapper.jsx-60eddf535a54d441{padding:1rem 40px 40px 40px}.title.jsx-60eddf535a54d441{font-size:24px}.btn.jsx-60eddf535a54d441{font-size:12px;display:none}.catList.jsx-60eddf535a54d441{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:auto;gap:20px;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start}}"
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8061:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ CatFeature)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(567);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_3__);




const CatFeature = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "jsx-1da20f11a2a7b449" + " " + "row",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "jsx-1da20f11a2a7b449" + " " + "left",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "jsx-1da20f11a2a7b449" + " " + "left-details",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "jsx-1da20f11a2a7b449" + " " + "bottom-bar"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "jsx-1da20f11a2a7b449" + " " + "title",
                            children: "Why should you have a cat?"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "jsx-1da20f11a2a7b449" + " " + "desc",
                            children: "Having a cat around you can actually trigger the release of calming chemicals in your body which lower your stress and anxiety leves"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "jsx-1da20f11a2a7b449" + " " + "btn",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: "https://www.helpguide.org/articles/healthy-living/joys-of-owning-a-cat.htm#:~:text=Owning%20a%20cat%20can%20bring,be%20an%20extremely%20rewarding%20relationship.",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        target: "_blank",
                                        className: "jsx-1da20f11a2a7b449",
                                        children: "SEE MORE"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "jsx-1da20f11a2a7b449" + " " + "icon",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_3__.BsArrowRight, {})
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "jsx-1da20f11a2a7b449" + " " + "right",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "jsx-1da20f11a2a7b449" + " " + "right-details",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            classame: "imgs",
                            src: "/assets/image_2.png",
                            className: "jsx-1da20f11a2a7b449"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: "/assets/image 3.png",
                            className: "jsx-1da20f11a2a7b449" + " " + "imgs"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: "/assets/image 1.png",
                            className: "jsx-1da20f11a2a7b449" + " " + "imgs"
                        })
                    ]
                })
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "1da20f11a2a7b449",
                children: ".row.jsx-1da20f11a2a7b449{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:1rem 100px}.left.jsx-1da20f11a2a7b449,.right.jsx-1da20f11a2a7b449{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1}.left.jsx-1da20f11a2a7b449{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start}.left-details.jsx-1da20f11a2a7b449{width:350px}.bottom-bar.jsx-1da20f11a2a7b449{width:60px;height:5px;margin-bottom:5px;-webkit-border-radius:30px;-moz-border-radius:30px;border-radius:30px;background-color:#291507;z-index:99}.title.jsx-1da20f11a2a7b449{font-size:35px;font-weight:600;line-height:1.2;color:#291507}.desc.jsx-1da20f11a2a7b449{margin:2rem 0;text-align:justify}.btn.jsx-1da20f11a2a7b449{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer}.btn.jsx-1da20f11a2a7b449 a.jsx-1da20f11a2a7b449{font-size:.9rem;margin-right:10px;font-weight:bold;color:#291507}.btn.jsx-1da20f11a2a7b449 .icon.jsx-1da20f11a2a7b449{font-weight:bold;color:#291507}.right.jsx-1da20f11a2a7b449{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.right-details.jsx-1da20f11a2a7b449{display:grid;grid-template-columns:2;grid-template-rows:4;grid-gap:20px;padding:2em}.imgs.jsx-1da20f11a2a7b449:nth-child(1){grid-column:1/2}.imgs.jsx-1da20f11a2a7b449:nth-child(2){grid-column:2/3;grid-row:1/3;width:190px}.imgs.jsx-1da20f11a2a7b449:nth-child(3){grid-column:1/2;grid-row:2/3;width:150px;margin-left:auto}@media screen and (max-width:992px){.row.jsx-1da20f11a2a7b449{padding:1rem 0px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.left-details.jsx-1da20f11a2a7b449{width:100%}.right-details.jsx-1da20f11a2a7b449{padding:80px 0px}}"
            })
        ]
    });
};


/***/ }),

/***/ 8301:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "V": () => (/* binding */ Hero)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(9816);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "react-icons/fa"
const fa_namespaceObject = require("react-icons/fa");
;// CONCATENATED MODULE: ./components/Hero.jsx






const Hero = ({ listBreeds  })=>{
    const { 0: isPopup , 1: setIsPopup  } = (0,external_react_.useState)(false);
    const { 0: enterCat , 1: setEnterCat  } = (0,external_react_.useState)("");
    const handleChange = (e)=>{
        if (e.target.value !== "") {
            setIsPopup(true);
        } else {
            setIsPopup(false);
        }
        setEnterCat(e.target.value);
    };
    (0,external_react_.useEffect)(()=>{
        const result = listBreeds.filter((i)=>i.name?.toLowerCase().includes(enterCat.toLowerCase())).length;
        if (result === 0) {
            setIsPopup(false);
        }
    }, [
        isPopup,
        enterCat
    ]);
    // console.log(enterCat);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "jsx-5319b98390eab23",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "jsx-5319b98390eab23" + " " + "heroImage",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "jsx-5319b98390eab23" + " " + "box",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            className: "cat",
                            src: "/assets/CatwikiLogo.svg",
                            alt: "hero",
                            style: {
                                fill: "#fff"
                            },
                            width: "200px",
                            height: "100px"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            className: "jsx-5319b98390eab23" + " " + "h1",
                            children: "Get to know more about your cat breed"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "jsx-5319b98390eab23" + " " + "input-field",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "text",
                                    placeholder: "Enter Your Breed",
                                    value: enterCat,
                                    onChange: (e)=>handleChange(e),
                                    className: "jsx-5319b98390eab23"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    style: {
                                        display: isPopup ? "block" : "none"
                                    },
                                    className: "jsx-5319b98390eab23" + " " + "container",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "jsx-5319b98390eab23" + " " + "results",
                                        children: listBreeds.filter((i)=>i.name?.toLowerCase().includes(enterCat.toLowerCase())).map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "jsx-5319b98390eab23",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: `/cat-info/${item.id}`,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "jsx-5319b98390eab23",
                                                        children: item.name
                                                    })
                                                })
                                            }, item.id))
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "jsx-5319b98390eab23" + " " + "icon",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(fa_namespaceObject.FaSearch, {
                                        size: "16px",
                                        color: "#000"
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "5319b98390eab23",
                children: '.heroImage.jsx-5319b98390eab23{height:500px;width:100%;background:url("/assets/HeroImagemd.png")center center no-repeat;-webkit-border-radius:40px 40px 0 0;-moz-border-radius:40px 40px 0 0;border-radius:40px 40px 0 0;-webkit-background-size:cover;-moz-background-size:cover;-o-background-size:cover;background-size:cover}.box.jsx-5319b98390eab23{width:300px;height:100%;margin:auto 100px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start}.cat.jsx-5319b98390eab23{background-color:#fff;color:#fff;fill:#fff}h1.jsx-5319b98390eab23{color:#fff;font-size:18px;margin-bottom:1rem}.input-field.jsx-5319b98390eab23{position:relative;width:100%}input[type="text"].jsx-5319b98390eab23{padding:12px 20px;-webkit-border-radius:30px;-moz-border-radius:30px;border-radius:30px;width:100%;color:#000;outline:none}.container.jsx-5319b98390eab23{margin-top:10px;background-color:#fff;-webkit-border-radius:30px;-moz-border-radius:30px;border-radius:30px;width:100%;position:absolute;top:100%;left:0;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;padding:1rem}.results.jsx-5319b98390eab23{padding:0px 1rem 0px 0px;height:180px;overflow:auto}.results.jsx-5319b98390eab23::-webkit-scrollbar{width:5px;color:#f2f2f2;padding:1rem}.results.jsx-5319b98390eab23::-webkit-scrollbar-thumb{background-color:#bdbdbd!important;-webkit-border-radius:50px;-moz-border-radius:50px;border-radius:50px}.results.jsx-5319b98390eab23>li.jsx-5319b98390eab23{padding:8px 12px;color:#000;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;list-style:none;cursor:pointer;background-color:#f5f5f5;margin:8px 0;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px}li.jsx-5319b98390eab23 a.jsx-5319b98390eab23{display:block}.icon.jsx-5319b98390eab23{position:absolute;right:16px;top:50%;-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-ms-transform:translateY(-50%);-o-transform:translateY(-50%);transform:translateY(-50%)}@media screen and (max-width:992px){.heroImage.jsx-5319b98390eab23{height:300px;width:100%;-o-object-fit:cover;object-fit:cover}.box.jsx-5319b98390eab23{width:200px;margin:auto 40px}.cat.jsx-5319b98390eab23{}h1.jsx-5319b98390eab23{font-size:14px}}'
            })
        ]
    });
};


/***/ }),

/***/ 3678:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_CatBreed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1804);
/* harmony import */ var _components_CatFeature__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8061);
/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8301);
/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9046);
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9473);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_CatBreed__WEBPACK_IMPORTED_MODULE_2__]);
_components_CatBreed__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







function HomePage({ breeds , listBreed  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "jsx-6d39431a730a2ff8" + " " + "app",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_5__/* .Layout */ .A, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Hero__WEBPACK_IMPORTED_MODULE_4__/* .Hero */ .V, {
                        listBreeds: breeds
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CatBreed__WEBPACK_IMPORTED_MODULE_2__/* .CatBreed */ .D, {
                        catbreed: breeds.slice(0, 4)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CatFeature__WEBPACK_IMPORTED_MODULE_3__/* .CatFeature */ .E, {})
                ]
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "6d39431a730a2ff8",
                children: ".app.jsx-6d39431a730a2ff8{width:90%;margin:0 auto;height:100%}"
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);
async function getServerSideProps(context) {
    const res = await _utils_api__WEBPACK_IMPORTED_MODULE_6__/* .CatData.get */ .U.get("/breeds");
    const data = await res.data;
    return {
        props: {
            breeds: data
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 567:
/***/ ((module) => {

module.exports = require("react-icons/bs");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9816:
/***/ ((module) => {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ 6197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,61,313], () => (__webpack_exec__(3678)));
module.exports = __webpack_exports__;

})();