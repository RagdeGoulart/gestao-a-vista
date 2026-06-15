/* @ds-bundle: {"format":3,"namespace":"PRIZMDesignSystem_45a1b2","components":[{"name":"Avatar","sourcePath":"components/actions/Avatar.jsx"},{"name":"Badge","sourcePath":"components/actions/Badge.jsx"},{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"Alert","sourcePath":"components/display/Alert.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"CardHeader","sourcePath":"components/display/Card.jsx"},{"name":"CardTitle","sourcePath":"components/display/Card.jsx"},{"name":"CardDescription","sourcePath":"components/display/Card.jsx"},{"name":"CardContent","sourcePath":"components/display/Card.jsx"},{"name":"CardFooter","sourcePath":"components/display/Card.jsx"},{"name":"Separator","sourcePath":"components/display/Separator.jsx"},{"name":"Table","sourcePath":"components/display/Table.jsx"},{"name":"TableHeader","sourcePath":"components/display/Table.jsx"},{"name":"TableBody","sourcePath":"components/display/Table.jsx"},{"name":"TableRow","sourcePath":"components/display/Table.jsx"},{"name":"TableHead","sourcePath":"components/display/Table.jsx"},{"name":"TableCell","sourcePath":"components/display/Table.jsx"},{"name":"Tabs","sourcePath":"components/display/Tabs.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Label","sourcePath":"components/forms/Label.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"}],"sourceHashes":{"components/actions/Avatar.jsx":"574ea96d929f","components/actions/Badge.jsx":"5d3ab8558243","components/actions/Button.jsx":"20653a009a9f","components/display/Alert.jsx":"39714c3d7a99","components/display/Card.jsx":"aa86d6909893","components/display/Separator.jsx":"d45a03a4a8cc","components/display/Table.jsx":"730a17c90081","components/display/Tabs.jsx":"dfbf8d8a0b28","components/forms/Checkbox.jsx":"66f42303af09","components/forms/Input.jsx":"4be5017cc298","components/forms/Label.jsx":"11bb5874bf8a","components/forms/Select.jsx":"f61e3b805cdc","components/forms/Switch.jsx":"320c1b066fbb","components/forms/Textarea.jsx":"e973a9fb2f57","ui_kits/application/dashboard.jsx":"c668e330db65","ui_kits/application/icons.jsx":"655ab60376d9","ui_kits/application/sidebar.jsx":"e5c2e953120f"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.PRIZMDesignSystem_45a1b2 = window.PRIZMDesignSystem_45a1b2 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.przm-avatar{
  position:relative;display:inline-flex;align-items:center;justify-content:center;
  flex:none;overflow:hidden;border-radius:var(--radius-full);
  background:var(--muted);color:var(--muted-foreground);
  font-family:var(--font-sans);font-weight:var(--font-medium);user-select:none;
}
.przm-avatar img{width:100%;height:100%;object-fit:cover;display:block;}
.przm-avatar--sm{width:2rem;height:2rem;font-size:var(--text-xs);}
.przm-avatar--md{width:2.5rem;height:2.5rem;font-size:var(--text-sm);}
.przm-avatar--lg{width:3rem;height:3rem;font-size:var(--text-base);}
`;
function useCSS() {
  React.useEffect(() => {
    if (document.getElementById("przm-avatar-css")) return;
    const s = document.createElement("style");
    s.id = "przm-avatar-css";
    s.textContent = CSS;
    document.head.appendChild(s);
  }, []);
}

/** PRIZM Avatar — user image with initials fallback. */
function Avatar({
  src,
  alt = "",
  fallback,
  size = "md",
  className = "",
  ...props
}) {
  useCSS();
  const [ok, setOk] = React.useState(Boolean(src));
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `przm-avatar przm-avatar--${size} ${className}`.trim()
  }, props), ok && src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    onError: () => setOk(false)
  }) : /*#__PURE__*/React.createElement("span", null, fallback || alt.slice(0, 2).toUpperCase() || "?"));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/actions/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.przm-badge{
  display:inline-flex;align-items:center;gap:.25rem;
  border-radius:var(--radius-full);border:1px solid transparent;
  font-family:var(--font-sans);font-size:var(--text-xs);font-weight:var(--font-medium);
  line-height:1;padding:.2rem .55rem;white-space:nowrap;
}
.przm-badge svg{width:.75rem;height:.75rem;}
.przm-badge--default{background:var(--primary);color:var(--primary-foreground);}
.przm-badge--secondary{background:var(--secondary);color:var(--secondary-foreground);}
.przm-badge--destructive{background:var(--destructive);color:var(--destructive-foreground);}
.przm-badge--outline{background:transparent;color:var(--foreground);border-color:var(--border);}
.przm-badge--success{background:color-mix(in oklch,var(--success) 14%,transparent);color:var(--success);}
.przm-badge--warning{background:color-mix(in oklch,var(--warning) 18%,transparent);color:var(--amber-600);}
`;
function useCSS() {
  React.useEffect(() => {
    if (document.getElementById("przm-badge-css")) return;
    const s = document.createElement("style");
    s.id = "przm-badge-css";
    s.textContent = CSS;
    document.head.appendChild(s);
  }, []);
}

/** PRIZM Badge — compact status / category label. */
function Badge({
  variant = "default",
  className = "",
  children,
  ...props
}) {
  useCSS();
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `przm-badge przm-badge--${variant} ${className}`.trim()
  }, props), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Badge.jsx", error: String((e && e.message) || e) }); }

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.przm-btn{
  --_h: 2.25rem;
  display:inline-flex;align-items:center;justify-content:center;gap:.5rem;
  white-space:nowrap;border-radius:var(--radius-md);
  font-family:var(--font-sans);font-size:var(--text-sm);font-weight:var(--font-medium);
  line-height:1;height:var(--_h);padding:0 1rem;border:1px solid transparent;
  cursor:pointer;user-select:none;text-decoration:none;
  transition:background-color var(--duration) var(--ease-out),
             color var(--duration) var(--ease-out),
             border-color var(--duration) var(--ease-out),
             box-shadow var(--duration) var(--ease-out),
             transform var(--duration-fast) var(--ease-out);
}
.przm-btn:focus-visible{outline:none;box-shadow:0 0 0 2px var(--background),0 0 0 4px var(--ring);}
.przm-btn:active{transform:translateY(.5px);}
.przm-btn:disabled{opacity:.5;pointer-events:none;}
.przm-btn svg{width:1rem;height:1rem;flex:none;}

.przm-btn--sm{--_h:2rem;padding:0 .75rem;font-size:var(--text-xs);border-radius:var(--radius-sm);}
.przm-btn--lg{--_h:2.5rem;padding:0 1.5rem;}
.przm-btn--icon{--_h:2.25rem;width:2.25rem;padding:0;}

.przm-btn--default{background:var(--primary);color:var(--primary-foreground);box-shadow:var(--shadow-xs);}
.przm-btn--default:hover{background:var(--blue-700);}
.przm-btn--secondary{background:var(--secondary);color:var(--secondary-foreground);box-shadow:var(--shadow-xs);}
.przm-btn--secondary:hover{background:var(--gray-200);}
.przm-btn--destructive{background:var(--destructive);color:var(--destructive-foreground);box-shadow:var(--shadow-xs);}
.przm-btn--destructive:hover{filter:brightness(.93);}
.przm-btn--outline{background:var(--background);color:var(--foreground);border-color:var(--border);box-shadow:var(--shadow-xs);}
.przm-btn--outline:hover{background:var(--accent);color:var(--accent-foreground);}
.przm-btn--ghost{background:transparent;color:var(--foreground);}
.przm-btn--ghost:hover{background:var(--accent);color:var(--accent-foreground);}
.przm-btn--link{background:transparent;color:var(--primary);height:auto;padding:0;border-radius:0;}
.przm-btn--link:hover{text-decoration:underline;text-underline-offset:4px;}
`;
function useCSS() {
  React.useEffect(() => {
    if (document.getElementById("przm-btn-css")) return;
    const s = document.createElement("style");
    s.id = "przm-btn-css";
    s.textContent = CSS;
    document.head.appendChild(s);
  }, []);
}

/**
 * PRIZM Button — primary interactive control.
 */
function Button({
  variant = "default",
  size = "default",
  asChild = false,
  className = "",
  children,
  ...props
}) {
  useCSS();
  const cls = `przm-btn przm-btn--${variant} przm-btn--${size} ${className}`.trim();
  const Tag = props.href ? "a" : "button";
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls
  }, props), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/display/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.przm-alert{
  display:grid;grid-template-columns:auto 1fr;gap:.25rem .75rem;
  border:1px solid var(--border);border-radius:var(--radius-lg);
  background:var(--card);color:var(--card-foreground);padding:1rem;
}
.przm-alert__icon{grid-row:1 / span 2;display:flex;align-items:flex-start;padding-top:.1rem;}
.przm-alert__icon svg{width:1rem;height:1rem;}
.przm-alert__title{font-size:var(--text-sm);font-weight:var(--font-semibold);line-height:1.2;}
.przm-alert__desc{font-size:var(--text-sm);color:var(--muted-foreground);line-height:1.45;}
.przm-alert--destructive{border-color:color-mix(in oklch,var(--destructive) 45%,var(--border));color:var(--destructive);}
.przm-alert--destructive .przm-alert__desc{color:color-mix(in oklch,var(--destructive) 75%,var(--muted-foreground));}
.przm-alert--success{border-color:color-mix(in oklch,var(--success) 45%,var(--border));color:var(--success);}
.przm-alert--warning{border-color:color-mix(in oklch,var(--warning) 55%,var(--border));color:var(--amber-600);}
`;
function useCSS() {
  React.useEffect(() => {
    if (document.getElementById("przm-alert-css")) return;
    const s = document.createElement("style");
    s.id = "przm-alert-css";
    s.textContent = CSS;
    document.head.appendChild(s);
  }, []);
}

/** PRIZM Alert — inline callout with optional icon. */
function Alert({
  variant = "default",
  icon,
  title,
  children,
  className = "",
  ...props
}) {
  useCSS();
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "alert",
    className: `przm-alert przm-alert--${variant} ${className}`.trim()
  }, props), icon && /*#__PURE__*/React.createElement("span", {
    className: "przm-alert__icon"
  }, icon), title && /*#__PURE__*/React.createElement("div", {
    className: "przm-alert__title"
  }, title), children && /*#__PURE__*/React.createElement("div", {
    className: "przm-alert__desc"
  }, children));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Alert.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.przm-card{
  display:flex;flex-direction:column;gap:1rem;
  background:var(--card);color:var(--card-foreground);
  border:1px solid var(--border);border-radius:var(--radius-xl);
  box-shadow:var(--shadow-sm);padding:1.5rem 0;
}
.przm-card__header{display:flex;flex-direction:column;gap:.375rem;padding:0 1.5rem;}
.przm-card__title{font-family:var(--font-sans);font-size:var(--text-lg);font-weight:var(--font-semibold);line-height:1.2;letter-spacing:var(--tracking-tight);}
.przm-card__desc{font-size:var(--text-sm);color:var(--muted-foreground);line-height:1.45;}
.przm-card__content{padding:0 1.5rem;}
.przm-card__footer{display:flex;align-items:center;gap:.75rem;padding:0 1.5rem;}
`;
function useCSS() {
  React.useEffect(() => {
    if (document.getElementById("przm-card-css")) return;
    const s = document.createElement("style");
    s.id = "przm-card-css";
    s.textContent = CSS;
    document.head.appendChild(s);
  }, []);
}

/** PRIZM Card — elevated content container. */
function Card({
  className = "",
  children,
  ...props
}) {
  useCSS();
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `przm-card ${className}`.trim()
  }, props), children);
}
function CardHeader({
  className = "",
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `przm-card__header ${className}`.trim()
  }, props), children);
}
function CardTitle({
  className = "",
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `przm-card__title ${className}`.trim()
  }, props), children);
}
function CardDescription({
  className = "",
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `przm-card__desc ${className}`.trim()
  }, props), children);
}
function CardContent({
  className = "",
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `przm-card__content ${className}`.trim()
  }, props), children);
}
function CardFooter({
  className = "",
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `przm-card__footer ${className}`.trim()
  }, props), children);
}
Object.assign(__ds_scope, { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/Separator.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.przm-sep{flex:none;background:var(--border);border:none;}
.przm-sep--h{height:1px;width:100%;margin:0;}
.przm-sep--v{width:1px;align-self:stretch;min-height:1rem;}
`;
function useCSS() {
  React.useEffect(() => {
    if (document.getElementById("przm-sep-css")) return;
    const s = document.createElement("style");
    s.id = "przm-sep-css";
    s.textContent = CSS;
    document.head.appendChild(s);
  }, []);
}

/** PRIZM Separator — hairline divider. */
function Separator({
  orientation = "horizontal",
  className = "",
  ...props
}) {
  useCSS();
  const o = orientation === "vertical" ? "v" : "h";
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "separator",
    "aria-orientation": orientation,
    className: `przm-sep przm-sep--${o} ${className}`.trim()
  }, props));
}
Object.assign(__ds_scope, { Separator });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Separator.jsx", error: String((e && e.message) || e) }); }

// components/display/Table.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.przm-table-wrap{width:100%;overflow-x:auto;}
.przm-table{width:100%;border-collapse:collapse;font-family:var(--font-sans);font-size:var(--text-sm);}
.przm-table thead th{
  text-align:left;color:var(--muted-foreground);font-weight:var(--font-medium);
  height:2.5rem;padding:0 .75rem;border-bottom:1px solid var(--border);white-space:nowrap;
}
.przm-table tbody td{padding:.75rem;border-bottom:1px solid var(--border);color:var(--foreground);vertical-align:middle;}
.przm-table tbody tr:last-child td{border-bottom:none;}
.przm-table tbody tr{transition:background-color var(--duration) var(--ease-out);}
.przm-table tbody tr:hover{background:var(--muted);}
`;
function useCSS() {
  React.useEffect(() => {
    if (document.getElementById("przm-table-css")) return;
    const s = document.createElement("style");
    s.id = "przm-table-css";
    s.textContent = CSS;
    document.head.appendChild(s);
  }, []);
}

/** PRIZM Table — bordered data table primitives. */
function Table({
  className = "",
  children,
  ...props
}) {
  useCSS();
  return /*#__PURE__*/React.createElement("div", {
    className: "przm-table-wrap"
  }, /*#__PURE__*/React.createElement("table", _extends({
    className: `przm-table ${className}`.trim()
  }, props), children));
}
function TableHeader({
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("thead", props, children);
}
function TableBody({
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("tbody", props, children);
}
function TableRow({
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("tr", props, children);
}
function TableHead({
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("th", props, children);
}
function TableCell({
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("td", props, children);
}
Object.assign(__ds_scope, { Table, TableHeader, TableBody, TableRow, TableHead, TableCell });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Table.jsx", error: String((e && e.message) || e) }); }

// components/display/Tabs.jsx
try { (() => {
const CSS = `
.przm-tabs{display:flex;flex-direction:column;gap:.85rem;}
.przm-tabs__list{
  display:inline-flex;align-items:center;gap:2px;align-self:flex-start;
  background:var(--muted);border-radius:var(--radius-lg);padding:3px;
}
.przm-tabs__trigger{
  appearance:none;border:none;cursor:pointer;background:transparent;
  font-family:var(--font-sans);font-size:var(--text-sm);font-weight:var(--font-medium);
  color:var(--muted-foreground);padding:.35rem .75rem;border-radius:var(--radius-md);
  transition:background-color var(--duration) var(--ease-out),color var(--duration) var(--ease-out);
}
.przm-tabs__trigger:hover{color:var(--foreground);}
.przm-tabs__trigger[data-active="true"]{background:var(--background);color:var(--foreground);box-shadow:var(--shadow-xs);}
.dark .przm-tabs__trigger[data-active="true"]{background:var(--gray-700);}
.przm-tabs__trigger:focus-visible{outline:none;box-shadow:0 0 0 2px var(--background),0 0 0 4px var(--ring);}
`;
function useCSS() {
  React.useEffect(() => {
    if (document.getElementById("przm-tabs-css")) return;
    const s = document.createElement("style");
    s.id = "przm-tabs-css";
    s.textContent = CSS;
    document.head.appendChild(s);
  }, []);
}

/** PRIZM Tabs — segmented view switcher. Controlled or uncontrolled. */
function Tabs({
  tabs = [],
  value,
  defaultValue,
  onValueChange,
  className = ""
}) {
  useCSS();
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue ?? (tabs[0] && tabs[0].value));
  const active = isControlled ? value : internal;
  const current = tabs.find(t => t.value === active) || tabs[0];
  return /*#__PURE__*/React.createElement("div", {
    className: `przm-tabs ${className}`.trim()
  }, /*#__PURE__*/React.createElement("div", {
    className: "przm-tabs__list",
    role: "tablist"
  }, tabs.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.value,
    role: "tab",
    type: "button",
    "data-active": t.value === active,
    className: "przm-tabs__trigger",
    onClick: () => {
      if (!isControlled) setInternal(t.value);
      onValueChange && onValueChange(t.value);
    }
  }, t.label))), current && current.content !== undefined && /*#__PURE__*/React.createElement("div", {
    role: "tabpanel"
  }, current.content));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.przm-check{
  appearance:none;-webkit-appearance:none;flex:none;
  width:1rem;height:1rem;border-radius:var(--radius-sm);
  border:1px solid var(--gray-300);background:var(--background);cursor:pointer;
  display:inline-flex;align-items:center;justify-content:center;
  transition:background-color var(--duration) var(--ease-out),border-color var(--duration) var(--ease-out);
}
.dark .przm-check{border-color:var(--gray-600);}
.przm-check:focus-visible{outline:none;box-shadow:0 0 0 2px var(--background),0 0 0 4px var(--ring);}
.przm-check:checked{background:var(--primary);border-color:var(--primary);}
.przm-check:checked::after{
  content:"";width:.6rem;height:.6rem;background:var(--primary-foreground);
  -webkit-mask:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='3.5' stroke-linecap='round' stroke-linejoin='round'><polyline points='20 6 9 17 4 12'/></svg>") center/contain no-repeat;
          mask:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='3.5' stroke-linecap='round' stroke-linejoin='round'><polyline points='20 6 9 17 4 12'/></svg>") center/contain no-repeat;
}
.przm-check:disabled{opacity:.5;cursor:not-allowed;}
`;
function useCSS() {
  React.useEffect(() => {
    if (document.getElementById("przm-check-css")) return;
    const s = document.createElement("style");
    s.id = "przm-check-css";
    s.textContent = CSS;
    document.head.appendChild(s);
  }, []);
}

/** PRIZM Checkbox — boolean form input. */
function Checkbox({
  className = "",
  ...props
}) {
  useCSS();
  return /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    className: `przm-check ${className}`.trim()
  }, props));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.przm-input{
  display:flex;width:100%;height:2.25rem;
  border-radius:var(--radius-md);border:1px solid var(--input);
  background:var(--background);color:var(--foreground);
  font-family:var(--font-sans);font-size:var(--text-sm);line-height:1.25;
  padding:0 .75rem;box-shadow:var(--shadow-2xs);
  transition:border-color var(--duration) var(--ease-out),box-shadow var(--duration) var(--ease-out);
}
.przm-input::placeholder{color:var(--muted-foreground);}
.przm-input:focus-visible{outline:none;border-color:var(--ring);box-shadow:0 0 0 3px color-mix(in oklch,var(--ring) 35%,transparent);}
.przm-input:disabled{opacity:.5;cursor:not-allowed;}
.przm-input[aria-invalid="true"]{border-color:var(--destructive);}
.przm-input[aria-invalid="true"]:focus-visible{box-shadow:0 0 0 3px color-mix(in oklch,var(--destructive) 30%,transparent);}
`;
function useCSS() {
  React.useEffect(() => {
    if (document.getElementById("przm-input-css")) return;
    const s = document.createElement("style");
    s.id = "przm-input-css";
    s.textContent = CSS;
    document.head.appendChild(s);
  }, []);
}

/** PRIZM Input — single-line text field. */
function Input({
  className = "",
  type = "text",
  ...props
}) {
  useCSS();
  return /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    className: `przm-input ${className}`.trim()
  }, props));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Label.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.przm-label{
  display:inline-flex;align-items:center;gap:.4rem;
  font-family:var(--font-sans);font-size:var(--text-sm);font-weight:var(--font-medium);
  line-height:1;color:var(--foreground);user-select:none;
}
.przm-label[data-disabled="true"]{opacity:.5;}
`;
function useCSS() {
  React.useEffect(() => {
    if (document.getElementById("przm-label-css")) return;
    const s = document.createElement("style");
    s.id = "przm-label-css";
    s.textContent = CSS;
    document.head.appendChild(s);
  }, []);
}

/** PRIZM Label — form control label. */
function Label({
  className = "",
  children,
  ...props
}) {
  useCSS();
  return /*#__PURE__*/React.createElement("label", _extends({
    className: `przm-label ${className}`.trim()
  }, props), children);
}
Object.assign(__ds_scope, { Label });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Label.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
const CSS = `
.przm-select{
  position:relative;display:flex;align-items:center;width:100%;height:2.25rem;
  border-radius:var(--radius-md);border:1px solid var(--input);
  background:var(--background);color:var(--foreground);box-shadow:var(--shadow-2xs);
}
.przm-select select{
  appearance:none;-webkit-appearance:none;border:none;outline:none;background:transparent;
  width:100%;height:100%;padding:0 2rem 0 .75rem;cursor:pointer;color:inherit;
  font-family:var(--font-sans);font-size:var(--text-sm);
}
.przm-select:focus-within{border-color:var(--ring);box-shadow:0 0 0 3px color-mix(in oklch,var(--ring) 35%,transparent);}
.przm-select__chev{
  position:absolute;right:.625rem;width:1rem;height:1rem;pointer-events:none;
  color:var(--muted-foreground);
}
`;
function useCSS() {
  React.useEffect(() => {
    if (document.getElementById("przm-select-css")) return;
    const s = document.createElement("style");
    s.id = "przm-select-css";
    s.textContent = CSS;
    document.head.appendChild(s);
  }, []);
}

/** PRIZM Select — native dropdown styled to match form controls. */
function Select({
  options = [],
  placeholder,
  className = "",
  children,
  ...props
}) {
  useCSS();
  return /*#__PURE__*/React.createElement("div", {
    className: `przm-select ${className}`.trim()
  }, /*#__PURE__*/React.createElement("select", props, placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), options.map(o => typeof o === "string" ? /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o) : /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label)), children), /*#__PURE__*/React.createElement("svg", {
    className: "przm-select__chev",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.przm-switch{
  position:relative;display:inline-flex;flex:none;align-items:center;
  width:2.25rem;height:1.25rem;border-radius:var(--radius-full);
  background:var(--gray-200);border:none;cursor:pointer;padding:2px;
  transition:background-color var(--duration) var(--ease-out);
}
.dark .przm-switch{background:var(--gray-700);}
.przm-switch[data-on="true"]{background:var(--primary);}
.przm-switch:focus-visible{outline:none;box-shadow:0 0 0 2px var(--background),0 0 0 4px var(--ring);}
.przm-switch:disabled{opacity:.5;cursor:not-allowed;}
.przm-switch__thumb{
  width:1rem;height:1rem;border-radius:var(--radius-full);background:#fff;
  box-shadow:var(--shadow-sm);transition:transform var(--duration) var(--ease-out);
}
.przm-switch[data-on="true"] .przm-switch__thumb{transform:translateX(1rem);}
`;
function useCSS() {
  React.useEffect(() => {
    if (document.getElementById("przm-switch-css")) return;
    const s = document.createElement("style");
    s.id = "przm-switch-css";
    s.textContent = CSS;
    document.head.appendChild(s);
  }, []);
}

/** PRIZM Switch — boolean toggle. Controlled or uncontrolled. */
function Switch({
  checked,
  defaultChecked = false,
  onCheckedChange,
  disabled,
  className = "",
  ...props
}) {
  useCSS();
  const isControlled = checked !== undefined;
  const [on, setOn] = React.useState(defaultChecked);
  const value = isControlled ? checked : on;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: "switch",
    "aria-checked": value,
    "data-on": value,
    disabled: disabled,
    className: `przm-switch ${className}`.trim(),
    onClick: () => {
      if (!isControlled) setOn(v => !v);
      onCheckedChange && onCheckedChange(!value);
    }
  }, props), /*#__PURE__*/React.createElement("span", {
    className: "przm-switch__thumb"
  }));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.przm-textarea{
  display:flex;width:100%;min-height:5rem;
  border-radius:var(--radius-md);border:1px solid var(--input);
  background:var(--background);color:var(--foreground);
  font-family:var(--font-sans);font-size:var(--text-sm);line-height:1.5;
  padding:.5rem .75rem;box-shadow:var(--shadow-2xs);resize:vertical;
  transition:border-color var(--duration) var(--ease-out),box-shadow var(--duration) var(--ease-out);
}
.przm-textarea::placeholder{color:var(--muted-foreground);}
.przm-textarea:focus-visible{outline:none;border-color:var(--ring);box-shadow:0 0 0 3px color-mix(in oklch,var(--ring) 35%,transparent);}
.przm-textarea:disabled{opacity:.5;cursor:not-allowed;}
`;
function useCSS() {
  React.useEffect(() => {
    if (document.getElementById("przm-textarea-css")) return;
    const s = document.createElement("style");
    s.id = "przm-textarea-css";
    s.textContent = CSS;
    document.head.appendChild(s);
  }, []);
}

/** PRIZM Textarea — multi-line text field. */
function Textarea({
  className = "",
  ...props
}) {
  useCSS();
  return /*#__PURE__*/React.createElement("textarea", _extends({
    className: `przm-textarea ${className}`.trim()
  }, props));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// ui_kits/application/dashboard.jsx
try { (() => {
// PRIZM application — dashboard content (topbar + stats + table).
const APP = window.PRIZMDesignSystem_45a1b2;
const {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Button,
  Badge,
  Input,
  Tabs,
  Separator,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell
} = APP;
const TITLES = {
  dashboard: "Dashboard",
  documents: "Documents",
  tasks: "Tasks",
  reports: "Reports",
  team: "Team",
  settings: "Settings"
};
function Topbar({
  active
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      height: 56,
      flex: "none",
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "0 20px",
      borderBottom: "1px solid var(--border)",
      background: "var(--background)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--muted-foreground)"
    }
  }, "Grupo Itss"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--border)"
    }
  }, "/"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 500,
      color: "var(--foreground)"
    }
  }, TITLES[active]), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 240
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 10,
      top: "50%",
      transform: "translateY(-50%)",
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Search",
    size: 15,
    style: {
      color: "var(--muted-foreground)"
    }
  })), /*#__PURE__*/React.createElement(Input, {
    placeholder: "Search\u2026",
    style: {
      paddingLeft: 32,
      height: 36
    }
  })), /*#__PURE__*/React.createElement(Button, {
    size: "icon",
    variant: "ghost",
    "aria-label": "Notifications"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Bell",
    size: 18
  })), /*#__PURE__*/React.createElement(Button, {
    size: "sm"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Plus",
    size: 16
  }), " New"));
}
const STATS = [{
  label: "Total Revenue",
  value: "$15,231.89",
  delta: "+20.1%",
  up: true,
  icon: "DollarSign"
}, {
  label: "Subscriptions",
  value: "+2,350",
  delta: "+180.1%",
  up: true,
  icon: "Users"
}, {
  label: "Active Now",
  value: "573",
  delta: "+201",
  up: true,
  icon: "Activity"
}, {
  label: "Churn",
  value: "1.4%",
  delta: "-0.4%",
  up: false,
  icon: "TrendingDown"
}];
function StatCard({
  s
}) {
  return /*#__PURE__*/React.createElement(Card, {
    style: {
      gap: 8,
      padding: "18px 0"
    }
  }, /*#__PURE__*/React.createElement(CardContent, {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--muted-foreground)",
      fontWeight: 500
    }
  }, s.label), /*#__PURE__*/React.createElement(Icon, {
    name: s.icon,
    size: 16,
    style: {
      color: "var(--muted-foreground)"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 26,
      fontWeight: 700,
      letterSpacing: "-0.02em",
      lineHeight: 1.1
    }
  }, s.value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: s.up ? "var(--success)" : "var(--destructive)",
      display: "flex",
      alignItems: "center",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.up ? "TrendingUp" : "TrendingDown",
    size: 13
  }), " ", s.delta, " from last month")));
}

// Tiny sparkline-ish bar chart (activity), orange accent per brand.
function ActivityChart() {
  const bars = [40, 55, 35, 70, 48, 62, 80, 58, 73, 90, 66, 84];
  return /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, null, /*#__PURE__*/React.createElement(CardTitle, {
    style: {
      fontSize: "var(--text-base)"
    }
  }, "Activity"), /*#__PURE__*/React.createElement(CardDescription, null, "Documents processed over the last 12 weeks.")), /*#__PURE__*/React.createElement(CardContent, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      gap: 8,
      height: 120
    }
  }, bars.map((b, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      height: b + "%",
      borderRadius: "var(--radius-sm) var(--radius-sm) 2px 2px",
      background: i === 9 ? "var(--orange-500)" : "var(--secondary)"
    }
  })))));
}
const ROWS = [{
  status: "Success",
  v: "success",
  email: "michael.miller@example.com",
  amount: "$630.00"
}, {
  status: "Success",
  v: "success",
  email: "felicia.reid@example.com",
  amount: "$767.50"
}, {
  status: "Processing",
  v: "secondary",
  email: "georgia.young@example.com",
  amount: "$396.84"
}, {
  status: "Success",
  v: "success",
  email: "alma.lawson@example.com",
  amount: "$475.22"
}, {
  status: "Failed",
  v: "destructive",
  email: "dolores.chambers@example.com",
  amount: "$275.43"
}];
function PaymentsTable() {
  return /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, {
    style: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CardTitle, {
    style: {
      fontSize: "var(--text-base)"
    }
  }, "Payments"), /*#__PURE__*/React.createElement(CardDescription, null, "Manage recent transactions.")), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "sm"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Download",
    size: 15
  }), " Export")), /*#__PURE__*/React.createElement(CardContent, null, /*#__PURE__*/React.createElement(Table, null, /*#__PURE__*/React.createElement(TableHeader, null, /*#__PURE__*/React.createElement(TableRow, null, /*#__PURE__*/React.createElement(TableHead, null, "Status"), /*#__PURE__*/React.createElement(TableHead, null, "Email"), /*#__PURE__*/React.createElement(TableHead, {
    style: {
      textAlign: "right"
    }
  }, "Amount"))), /*#__PURE__*/React.createElement(TableBody, null, ROWS.map((r, i) => /*#__PURE__*/React.createElement(TableRow, {
    key: i
  }, /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement(Badge, {
    variant: r.v
  }, r.status)), /*#__PURE__*/React.createElement(TableCell, {
    style: {
      color: "var(--muted-foreground)"
    }
  }, r.email), /*#__PURE__*/React.createElement(TableCell, {
    style: {
      textAlign: "right",
      fontFamily: "var(--font-mono)",
      fontSize: 13
    }
  }, r.amount)))))));
}
function Dashboard() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18,
      padding: 20,
      maxWidth: 1100,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "prizm-h2",
    style: {
      fontSize: "var(--text-2xl)"
    }
  }, "Welcome back, Sofia"), /*#__PURE__*/React.createElement("p", {
    className: "prizm-muted",
    style: {
      marginTop: 4
    }
  }, "Here's what's happening across your workspace."))), /*#__PURE__*/React.createElement(Tabs, {
    tabs: [{
      value: "overview",
      label: "Overview"
    }, {
      value: "analytics",
      label: "Analytics"
    }, {
      value: "reports",
      label: "Reports"
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 16
    }
  }, STATS.map(s => /*#__PURE__*/React.createElement(StatCard, {
    key: s.label,
    s: s
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr",
      gap: 16,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(PaymentsTable, null), /*#__PURE__*/React.createElement(ActivityChart, null)));
}
function Placeholder({
  active
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      placeItems: "center",
      height: "100%",
      padding: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      maxWidth: 320
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: "var(--radius-lg)",
      margin: "0 auto 14px",
      display: "grid",
      placeItems: "center",
      background: "var(--muted)",
      color: "var(--muted-foreground)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "FolderOpen",
    size: 22
  })), /*#__PURE__*/React.createElement("h3", {
    className: "prizm-h4"
  }, TITLES[active]), /*#__PURE__*/React.createElement("p", {
    className: "prizm-muted",
    style: {
      marginTop: 6
    }
  }, "This surface is part of the PRIZM kit. Pick another item from the sidebar to explore.")));
}
function App() {
  const [active, setActive] = React.useState("dashboard");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      height: "100vh",
      background: "var(--background)",
      color: "var(--foreground)"
    }
  }, /*#__PURE__*/React.createElement(Sidebar, {
    active: active,
    setActive: setActive
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(Topbar, {
    active: active
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: "auto",
      background: "var(--gray-50)"
    }
  }, active === "dashboard" ? /*#__PURE__*/React.createElement(Dashboard, null) : /*#__PURE__*/React.createElement(Placeholder, {
    active: active
  }))));
}
window.PrizmApp = App;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/application/dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/application/icons.jsx
try { (() => {
// Shared Lucide icon renderer for PRIZM UI kits.
// Uses the real Lucide icon set loaded from CDN (window.lucide.icons).
function Icon({
  name,
  size = 16,
  color,
  style,
  ...props
}) {
  const set = window.lucide && window.lucide.icons || {};
  const node = set[name];
  if (!node) return null;
  return React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color || "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      flex: "none",
      ...style
    },
    ...props
  }, node.map(([tag, attrs], i) => React.createElement(tag, {
    key: i,
    ...attrs
  })));
}
window.Icon = Icon;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/application/icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/application/sidebar.jsx
try { (() => {
// PRIZM application shell — sidebar navigation.
const PRZM = window.PRIZMDesignSystem_45a1b2;
const {
  Avatar,
  Separator
} = PRZM;
const NAV = [{
  group: "Platform",
  items: [{
    id: "dashboard",
    label: "Dashboard",
    icon: "LayoutDashboard"
  }, {
    id: "documents",
    label: "Documents",
    icon: "FileText",
    badge: "24"
  }, {
    id: "tasks",
    label: "Tasks",
    icon: "SquareCheck"
  }, {
    id: "reports",
    label: "Reports",
    icon: "ChartColumn"
  }]
}, {
  group: "Workspace",
  items: [{
    id: "team",
    label: "Team",
    icon: "Users"
  }, {
    id: "settings",
    label: "Settings",
    icon: "Settings"
  }]
}];
function NavItem({
  item,
  active,
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  const on = active === item.id;
  return /*#__PURE__*/React.createElement("button", {
    onClick: () => onClick(item.id),
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      width: "100%",
      padding: "0 10px",
      height: 34,
      border: "none",
      cursor: "pointer",
      borderRadius: "var(--radius-md)",
      textAlign: "left",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-sm)",
      fontWeight: on ? 500 : 450,
      color: on ? "var(--sidebar-accent-foreground)" : "var(--sidebar-foreground)",
      background: on ? "var(--sidebar-accent)" : hover ? "var(--sidebar-accent)" : "transparent",
      transition: "background-color 160ms var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: item.icon,
    size: 16,
    style: {
      color: on ? "var(--sidebar-primary)" : "var(--muted-foreground)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, item.label), item.badge && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      color: "var(--muted-foreground)",
      background: "var(--background)",
      border: "1px solid var(--sidebar-border)",
      borderRadius: "var(--radius-full)",
      padding: "1px 7px"
    }
  }, item.badge));
}
function Sidebar({
  active,
  setActive
}) {
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 256,
      flex: "none",
      height: "100%",
      boxSizing: "border-box",
      background: "var(--sidebar)",
      borderRight: "1px solid var(--sidebar-border)",
      display: "flex",
      flexDirection: "column",
      padding: 12
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      width: "100%",
      padding: "8px 10px",
      border: "none",
      cursor: "pointer",
      borderRadius: "var(--radius-md)",
      background: "transparent",
      textAlign: "left"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 32,
      borderRadius: "var(--radius-md)",
      flex: "none",
      background: "var(--primary)",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: 700,
      fontFamily: "var(--font-mono)",
      fontSize: 15
    }
  }, "P"), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      lineHeight: 1.15
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: 13,
      fontWeight: 600,
      color: "var(--sidebar-foreground)"
    }
  }, "PRIZM"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: 11,
      color: "var(--muted-foreground)"
    }
  }, "Grupo Itss")), /*#__PURE__*/React.createElement(Icon, {
    name: "ChevronsUpDown",
    size: 15,
    style: {
      color: "var(--muted-foreground)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 12
    }
  }), /*#__PURE__*/React.createElement(Separator, null), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 12
    }
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16,
      flex: 1,
      overflow: "auto"
    }
  }, NAV.map(sec => /*#__PURE__*/React.createElement("div", {
    key: sec.group,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 3
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      textTransform: "uppercase",
      letterSpacing: ".04em",
      color: "var(--muted-foreground)",
      fontWeight: 600,
      padding: "4px 10px"
    }
  }, sec.group), sec.items.map(it => /*#__PURE__*/React.createElement(NavItem, {
    key: it.id,
    item: it,
    active: active,
    onClick: setActive
  }))))), /*#__PURE__*/React.createElement(Separator, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "10px 6px 2px"
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    size: "sm",
    src: "https://i.pravatar.cc/64?img=15",
    alt: "Sofia Davis"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      lineHeight: 1.15
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: 13,
      fontWeight: 500,
      color: "var(--sidebar-foreground)"
    }
  }, "Sofia Davis"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: 11,
      color: "var(--muted-foreground)"
    }
  }, "sofia@itss.com")), /*#__PURE__*/React.createElement(Icon, {
    name: "EllipsisVertical",
    size: 16,
    style: {
      color: "var(--muted-foreground)"
    }
  })));
}
window.Sidebar = Sidebar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/application/sidebar.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CardHeader = __ds_scope.CardHeader;

__ds_ns.CardTitle = __ds_scope.CardTitle;

__ds_ns.CardDescription = __ds_scope.CardDescription;

__ds_ns.CardContent = __ds_scope.CardContent;

__ds_ns.CardFooter = __ds_scope.CardFooter;

__ds_ns.Separator = __ds_scope.Separator;

__ds_ns.Table = __ds_scope.Table;

__ds_ns.TableHeader = __ds_scope.TableHeader;

__ds_ns.TableBody = __ds_scope.TableBody;

__ds_ns.TableRow = __ds_scope.TableRow;

__ds_ns.TableHead = __ds_scope.TableHead;

__ds_ns.TableCell = __ds_scope.TableCell;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Label = __ds_scope.Label;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

})();
