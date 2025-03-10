"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [432],
  {
    57924: function (e, r, n) {
      n.d(r, {
        u: function () {
          return c;
        },
      });
      var a = n(4337),
        s = n(35250),
        t = n(36963),
        i = n(19841);
      n(70079);
      var l = n(34303);
      function o() {
        var e = (0, a._)([
          "relative top-[-3px] h-2 w-2 rotate-45 transform border-r border-b border-black/10 bg-gray-100",
        ]);
        return (
          (o = function () {
            return e;
          }),
          e
        );
      }
      var c = function (e) {
          var r = e.label,
            n = e.side,
            a = e.sideOffset,
            l = e.withArrow,
            o = e.wide,
            c = e.interactive,
            u = e.usePortal,
            p = e.children,
            m = (0, s.jsxs)(t.VY, {
              side: void 0 === n ? "bottom" : n,
              sideOffset: void 0 === a ? 14 : a,
              className: (0, i.Z)(
                "relative rounded border border-black/10 bg-gray-100 p-1 transition-opacity",
                void 0 !== o && o ? "max-w-sm" : "max-w-xs"
              ),
              children: [
                (0, s.jsx)("span", {
                  className:
                    "flex items-center whitespace-pre-wrap px-2 py-1 text-center text-sm font-medium normal-case text-gray-700",
                  children: r,
                }),
                (void 0 === l || l) &&
                  (0, s.jsx)(t.Eh, {
                    asChild: !0,
                    children: (0, s.jsx)(d, {}),
                  }),
              ],
            });
          return (0, s.jsxs)(t.fC, {
            delayDuration: 300,
            disableHoverableContent: !(void 0 !== c && c),
            children: [
              (0, s.jsx)(t.xz, {
                asChild: !0,
                children: (0, s.jsx)("span", { children: p }),
              }),
              void 0 === u || u ? (0, s.jsx)(t.h_, { children: m }) : m,
            ],
          });
        },
        d = l.Z.div(o());
    },
    48432: function (e, r, n) {
      n.d(r, {
        Z: function () {
          return j;
        },
      });
      var a = n(21722),
        s = n(22830),
        t = n(39889),
        i = n(35250),
        l = n(16578),
        o = n.n(l),
        c = n(68555),
        d = n(70079),
        u = n(1454),
        p = n(82841),
        m = n(36218),
        x = n(24274),
        f = n(71204),
        h = n(97688),
        b = n(74853),
        v = n(99652),
        g = n(44925),
        y = n(1220);
      function j(e) {
        var r = e.isOpen,
          n = e.onClose,
          l = (0, d.useRef)(null),
          j = (0, f.hz)(),
          w = (0, p.WS)(),
          k = (0, s._)((0, d.useState)(!1), 2),
          N = k[0],
          C = k[1],
          P = (0, c.useRouter)(),
          A = (0, d.useCallback)(
            function () {
              w(m.s6.closeAccountPaymentModal), n();
            },
            [n, w]
          ),
          S = (0, d.useCallback)(
            (0, a._)(function () {
              var e;
              return (0, t.Jh)(this, function (r) {
                switch (r.label) {
                  case 0:
                    C(!0), w(m.s6.clickAccountPaymentCheckout), (r.label = 1);
                  case 1:
                    return (
                      r.trys.push([1, 3, 4, 5]), [4, x.ZP.getCheckoutLink()]
                    );
                  case 2:
                    return (e = r.sent()), P.push(e.url), [3, 5];
                  case 3:
                    return (
                      r.sent(),
                      h.m.warning(
                        "请联系客服咨询升级服务",
                        { hasCloseButton: !0 }
                      ),
                      [3, 5]
                    );
                  case 4:
                    return C(!1), [7];
                  case 5:
                    return [2];
                }
              });
            }),
            [P, w, C]
          ),
          Z = (0, d.useCallback)(
            (0, a._)(function () {
              var e;
              return (0, t.Jh)(this, function (r) {
                switch (r.label) {
                  case 0:
                    C(!0), w(m.s6.clickAccountCustomerPortal), (r.label = 1);
                  case 1:
                    return (
                      r.trys.push([1, 3, 4, 5]),
                      [4, x.ZP.fetchCustomerPortalUrl()]
                    );
                  case 2:
                    return (e = r.sent()), P.push(e.url), [3, 5];
                  case 3:
                    return (
                      r.sent(),
                      h.m.warning(
                        "The account management page encountered an error. Please try again. If the problem continues, please visit help.openai.com.",
                        { hasCloseButton: !0 }
                      ),
                      [3, 5]
                    );
                  case 4:
                    return C(!1), [7];
                  case 5:
                    return [2];
                }
              });
            }),
            [P, w, C]
          ),
          _ = (0, d.useCallback)(
            function () {
              w(m.s6.clickAccountPaymentGetHelp);
            },
            [w]
          ),
          T = (0, f.mA)(function (e) {
            var r;
            return null === (r = e.accountPlan) || void 0 === r
              ? void 0
              : r.hasCustomerObject;
          }),
          O = j.has("disable_upgrade_ui");
        return (0, i.jsxs)(b.x, {
          isOpen: r,
          onClose: n,
          focusRef: l,
          children: [
            (0, i.jsxs)("div", {
              className:
                "flex w-full flex-row items-center justify-between border-b px-4 py-3 dark:border-gray-700",
              children: [
                (0, i.jsx)("span", {
                  className: "text-base font-semibold sm:text-base",
                  children: "Your plan",
                }),
                (0, i.jsx)("button", {
                  className:
                    "text-gray-700 opacity-50 transition hover:opacity-75 dark:text-white",
                  onClick: A,
                  children: (0, i.jsx)(u.q5L, { className: "h-6 w-6" }),
                }),
              ],
            }),
            (0, i.jsxs)("div", {
              className: "grid sm:grid-cols-2",
              children: [
                (0, i.jsx)("div", {
                  className:
                    "relative order-2 col-span-1 border-r-0 border-t dark:border-gray-700 sm:order-1 sm:border-r sm:border-t-0",
                  children: (0, i.jsx)(v.Oi, {
                    rowElements: [
                      (0, i.jsx)(
                        v.Cu,
                        { text: "Free plan" },
                        "row-free-plan-name"
                      ),
                      (0, i.jsx)(
                        v.hi,
                        {
                          variant: "disabled",
                          disabled: !0,
                          text: y.S.free.callToAction.active,
                        },
                        "row-free-plan-button"
                      ),
                      (0, i.jsx)(
                        v.G,
                        { variant: "secondary", text: y.S.free.demandAccess },
                        "row-free-plan-demand"
                      ),
                      (0, i.jsx)(
                        v.G,
                        { variant: "secondary", text: y.S.free.responseSpeed },
                        "row-free-plan-speed"
                      ),
                      (0, i.jsx)(
                        v.G,
                        {
                          className: "sm:pb-2",
                          variant: "secondary",
                          text: y.S.free.modelFeatures,
                        },
                        "row-free-plan-updates"
                      ),
                    ],
                  }),
                }),
                (0, i.jsx)("div", {
                  className: "relative order-1 col-span-1 sm:order-2",
                  children: (0, i.jsx)(v.Oi, {
                    rowElements: [
                      (0, i.jsx)(
                        v.Cu,
                        {
                          text: y.S.plus.name,
                          children: (0, i.jsx)("span", {
                            className: "font-semibold text-gray-500",
                            children: y.S.plus.costInDollars,
                          }),
                        },
                        "row-plus-plan-title"
                      ),
                      (0, i.jsx)(
                        v.hi,
                        {
                          variant: "primary",
                          disabledText: O
                            ? "Due to high demand, we've temporarily paused upgrades."
                            : "",
                          disabled: N,
                          isLoading: N,
                          ref: l,
                          onClick: S,
                          text: y.S.plus.callToAction.inactivePayment,
                        },
                        "row-plus-plan-button"
                      ),
                      (0, i.jsx)(
                        v.G,
                        { variant: "primary", text: y.S.plus.demandAccess },
                        "row-plus-plan-demand"
                      ),
                      (0, i.jsx)(
                        v.G,
                        { variant: "primary", text: y.S.plus.responseSpeed },
                        "row-plus-plan-speed"
                      ),
                      (0, i.jsx)(
                        v.G,
                        {
                          className: "sm:pb-2",
                          variant: "primary",
                          text: y.S.plus.modelFeatures,
                        },
                        "row-plus-plan-updates"
                      ),
                      T &&
                        (0, i.jsx)(
                          v.nR,
                          {
                            className: "sm:pb-1",
                            isLoading: N,
                            text: y.S.manageSubscription.callToAction,
                            onClick: Z,
                          },
                          "row-plus-plan-manage"
                        ),
                      (0, i.jsx)(
                        o(),
                        {
                          target: "_blank",
                          href: g.L,
                          passHref: !0,
                          children: (0, i.jsx)(
                            v.nR,
                            {
                              className: "sm:pb-1",
                              isLoading: !1,
                              text: y.S.getHelp.callToAction,
                              onClick: _,
                            },
                            "row-plus-plan-help"
                          ),
                        },
                        "row-plus-plan-help-link"
                      ),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      }
    },
    74853: function (e, r, n) {
      n.d(r, {
        x: function () {
          return o;
        },
      });
      var a = n(4337),
        s = n(35250),
        t = n(34303),
        i = n(27553);
      function l() {
        var e = (0, a._)([
          "flex grow items-center justify-center bg-white dark:bg-gray-900 rounded-md flex flex-col items-start overflow-hidden border shadow-md dark:border-gray-700",
        ]);
        return (
          (l = function () {
            return e;
          }),
          e
        );
      }
      var o = function (e) {
          var r = e.children,
            n = e.isOpen,
            a = e.onClose,
            t = e.focusRef;
          return (0, s.jsx)(i.ZP, {
            size: "fullscreen",
            isOpen: n,
            onModalClose: a,
            type: "success",
            title: "",
            className: "bg-transparent dark:bg-transparent",
            initialFocusRef: t,
            children: (0, s.jsx)("div", {
              className: "flex h-full flex-col items-center justify-start",
              children: (0, s.jsx)("div", {
                className: "relative",
                children: (0, s.jsx)(c, { children: r }),
              }),
            }),
          });
        },
        c = t.Z.div(l());
    },
    99652: function (e, r, n) {
      n.d(r, {
        Cu: function () {
          return h;
        },
        G: function () {
          return g;
        },
        Oi: function () {
          return f;
        },
        hi: function () {
          return v;
        },
        nR: function () {
          return y;
        },
      });
      var a = n(4337),
        s = n(35250),
        t = n(19841),
        i = n(70079),
        l = n(1454),
        o = n(34303),
        c = n(66958),
        d = n(38317),
        u = n(57924);
      function p() {
        var e = (0, a._)([
          "p-4 flex flex-col gap-3 bg-white z-20 relative dark:bg-gray-900",
        ]);
        return (
          (p = function () {
            return e;
          }),
          e
        );
      }
      function m() {
        var e = (0, a._)([
          "gap-2 flex flex-row justify-start items-center text-sm",
        ]);
        return (
          (m = function () {
            return e;
          }),
          e
        );
      }
      function x() {
        var e = (0, a._)([
          "text-xl font-semibold justify-between items-center flex",
        ]);
        return (
          (x = function () {
            return e;
          }),
          e
        );
      }
      var f = function (e) {
          var r = e.rowElements;
          return (0, s.jsx)(j, {
            children: r.map(function (e) {
              return e;
            }),
          });
        },
        h = function (e) {
          var r = e.className,
            n = e.text,
            a = e.children;
          return (0, s.jsxs)(k, {
            className: r,
            children: [(0, s.jsx)("span", { children: n }), a],
          });
        },
        b = {
          "primary-disabled":
            "border-none bg-gray-200 py-3 font-semibold hover:bg-gray-200",
          primary: "border-none py-3 font-semibold",
          disabled:
            "dark:text-gray-white border-none bg-gray-300 py-3 font-semibold text-gray-800 hover:bg-gray-300 dark:bg-gray-500 dark:opacity-100",
        },
        v = (0, i.forwardRef)(function (e, r) {
          var n = e.isLoading,
            a = void 0 !== n && n,
            i = e.disabled,
            o = e.onClick,
            p = e.variant,
            m = void 0 === p ? "primary" : p,
            x = e.text,
            f = e.disabledText;
          return f
            ? (0, s.jsx)("div", {
                className: "relative",
                children: (0, s.jsx)(u.u, {
                  side: "bottom",
                  sideOffset: 20,
                  label: f,
                  usePortal: !1,
                  children: (0, s.jsxs)(c.z, {
                    ref: r,
                    as: "button",
                    color: "disabled",
                    className: (0, t.Z)("w-full", b[m]),
                    children: [
                      x,
                      a &&
                        (0, s.jsx)(d.ZP, {
                          className: "animate-spin",
                          icon: l.dAq,
                        }),
                    ],
                  }),
                }),
              })
            : (0, s.jsxs)(c.z, {
                disabled: void 0 !== i && i,
                onClick: o,
                ref: r,
                as: "button",
                className: (0, t.Z)(b[m]),
                children: [
                  (0, s.jsx)("span", {
                    className: (0, t.Z)("inline-block", {
                      "text-gray-700": "primary-disabled" === m,
                      "text-white": "primary" === m,
                    }),
                    children: x,
                  }),
                  a &&
                    (0, s.jsx)(d.ZP, {
                      className: "animate-spin",
                      icon: l.dAq,
                    }),
                ],
              });
        });
      v.displayName = "PricingPlanButton";
      var g = function (e) {
          var r = e.variant,
            n = void 0 === r ? "primary" : r,
            a = e.className,
            i = e.text;
          return (0, s.jsxs)(w, {
            className: a,
            children: [
              (0, s.jsx)(d.ZP, {
                icon: l._rq,
                className: (0, t.Z)("h-5 w-5", {
                  "text-green-700": "primary" == n,
                  "text-gray-400": "secondary" == n,
                }),
              }),
              (0, s.jsx)("span", { children: i }),
            ],
          });
        },
        y = function (e) {
          var r = e.className,
            n = e.text,
            a = e.isLoading,
            t = e.onClick;
          return (0, s.jsx)(w, {
            className: r,
            children: (0, s.jsxs)("button", {
              onClick: t,
              className: "flex flex-row items-center space-x-1 underline",
              children: [
                (0, s.jsx)("span", { children: n }),
                a &&
                  (0, s.jsx)(d.ZP, { className: "animate-spin", icon: l.dAq }),
              ],
            }),
          });
        },
        j = o.Z.div(p()),
        w = o.Z.div(m()),
        k = o.Z.div(x());
    },
    44925: function (e, r, n) {
      n.d(r, {
        L: function () {
          return a;
        },
      });
      var a = "https://mika.my.qingzhan.com/";
    },
    1220: function (e, r, n) {
      n.d(r, {
        S: function () {
          return a;
        },
      });
      var a = {
        free: {
          name: "Free plan",
          callToAction: {
            active: "当前",
            inactive: "Your current plan",
          },
          costInDollars: "",
          demandAccess: "负载低时可用",
          responseSpeed: "标准响应速度",
          modelFeatures: "定期模型更新",
        },
        plus: {
          name: "ChatGPT Plus",
          callToAction: {
            active: "Your current plan",
            inactive: "I'm interested",
            inactivePayment: "升级",
          },
          costInDollars: "USD $20/mo",
          demandAccess: "高负载时也可用",
          responseSpeed: "更快的响应速度",
          modelFeatures: "优先访问新功能",
        },
        manageSubscription: { callToAction: "Manage my subscription" },
        getHelp: { callToAction: "联系客服" },
      };
    },
  },
]);
