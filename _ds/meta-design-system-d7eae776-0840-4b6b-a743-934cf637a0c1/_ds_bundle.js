/* @ds-bundle: {"format":3,"namespace":"MetaDesignSystem_d7eae7","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"PillTab","sourcePath":"components/core/PillTab.jsx"},{"name":"ColorSwatch","sourcePath":"components/forms/ColorSwatch.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"RadioOption","sourcePath":"components/forms/RadioOption.jsx"},{"name":"SearchPill","sourcePath":"components/forms/SearchPill.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"ProductThumbnail","sourcePath":"components/surfaces/ProductThumbnail.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"efd15d5df617","components/core/Button.jsx":"a941d9a432af","components/core/IconButton.jsx":"4451e5ac3ba8","components/core/PillTab.jsx":"ca9ea6fd1829","components/forms/ColorSwatch.jsx":"d50d7e6c4bb8","components/forms/Input.jsx":"b9d3a55b22df","components/forms/RadioOption.jsx":"480b60008c5e","components/forms/SearchPill.jsx":"f8e066a21b30","components/surfaces/Card.jsx":"1c720ca0a560","components/surfaces/ProductThumbnail.jsx":"045a85aa35a3","ui_kits/meta_store/buynow.jsx":"4ba893cbc073","ui_kits/meta_store/screens.jsx":"67de1d049035","ui_kits/meta_store/shell.jsx":"ef8ed3563c9d","ui_kits/meta_store/ui.jsx":"5a80f4c946c8"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MetaDesignSystem_d7eae7 = window.MetaDesignSystem_d7eae7 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const FONT = "'Montserrat','Optimistic VF',Helvetica,Arial,sans-serif";
const TONES = {
  promo: {
    background: 'var(--color-warning)',
    color: 'var(--color-ink-deep)'
  },
  attention: {
    background: 'var(--color-attention)',
    color: '#fff'
  },
  success: {
    background: 'var(--color-success)',
    color: '#fff'
  },
  critical: {
    background: 'var(--color-critical)',
    color: '#fff'
  },
  neutral: {
    background: 'var(--color-surface-soft)',
    color: 'var(--text-secondary)'
  }
};

/**
 * Badge — pill status chip. Caption-bold scale, 100px radius.
 */
function Badge({
  children,
  tone = 'promo',
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.promo;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      fontFamily: FONT,
      fontSize: 12,
      fontWeight: 700,
      lineHeight: 1.33,
      padding: '4px 10px',
      borderRadius: 'var(--radius-full)',
      whiteSpace: 'nowrap',
      ...t,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const FONT = "'Montserrat','Optimistic VF',Helvetica,Arial,sans-serif";
const SIZES = {
  md: {
    padding: '14px 30px',
    fontSize: 14
  },
  sm: {
    padding: '10px 22px',
    fontSize: 13
  },
  lg: {
    padding: '16px 36px',
    fontSize: 15
  }
};
const VARIANTS = {
  // Black pill — marketing surfaces
  primary: {
    background: 'var(--cta-marketing)',
    color: '#fff',
    border: '2px solid transparent'
  },
  // Cobalt pill — commerce / buy-now flows ONLY
  commerce: {
    background: 'var(--cta-commerce)',
    color: '#fff',
    border: '2px solid transparent'
  },
  // Outlined ghost — secondary action in dual-CTA hero
  secondary: {
    background: 'transparent',
    color: 'var(--text-strong)',
    border: '2px solid var(--text-strong)'
  },
  // Quieter outlined — tertiary
  ghost: {
    background: 'transparent',
    color: 'var(--text-strong)',
    border: '2px solid var(--border-ghost)'
  }
};

/**
 * Button — the pill CTA. Always 100px radius (Meta buttons are never squared).
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  fullWidth = false,
  type = 'button',
  onClick,
  style,
  ...rest
}) {
  const v = VARIANTS[variant] || VARIANTS.primary;
  const s = SIZES[size] || SIZES.md;
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    fontFamily: FONT,
    fontWeight: 700,
    letterSpacing: '-0.14px',
    lineHeight: 1.43,
    borderRadius: 'var(--radius-full)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    width: fullWidth ? '100%' : 'auto',
    transition: 'background var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out), opacity var(--dur-fast) var(--ease-out)',
    fontSize: s.fontSize,
    padding: s.padding,
    ...v
  };
  if (disabled) {
    base.background = variant === 'secondary' || variant === 'ghost' ? 'transparent' : 'var(--text-disabled)';
    base.color = variant === 'secondary' || variant === 'ghost' ? 'var(--text-disabled)' : '#fff';
    base.borderColor = variant === 'secondary' || variant === 'ghost' ? 'var(--border-card)' : 'transparent';
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    style: {
      ...base,
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'scale(0.97)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'scale(1)';
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * IconButton — 40x40 circular utility button (carousel, share, cart, account).
 * Pass an icon node (SVG/img) as children.
 */
function IconButton({
  children,
  label,
  onClick,
  size = 40,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    onClick: onClick,
    style: {
      width: size,
      height: size,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-circle)',
      background: 'var(--color-canvas)',
      color: 'var(--color-ink)',
      border: '1px solid var(--border-card)',
      cursor: 'pointer',
      transition: 'background var(--dur-fast) var(--ease-out)',
      ...style
    },
    onMouseDown: e => {
      e.currentTarget.style.background = 'var(--color-surface-soft)';
    },
    onMouseUp: e => {
      e.currentTarget.style.background = 'var(--color-canvas)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = 'var(--color-canvas)';
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/PillTab.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const FONT = "'Montserrat','Optimistic VF',Helvetica,Arial,sans-serif";

/**
 * PillTab — top-of-page category navigation pill.
 * Active state fills ink-deep; inactive carries a hairline border.
 */
function PillTab({
  children,
  active = false,
  onClick,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onClick,
    style: {
      fontFamily: FONT,
      fontSize: 14,
      fontWeight: 700,
      letterSpacing: '-0.14px',
      lineHeight: 1.43,
      padding: '8px 16px',
      borderRadius: 'var(--radius-full)',
      cursor: 'pointer',
      transition: 'background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out)',
      background: active ? 'var(--color-ink-deep)' : 'var(--color-canvas)',
      color: active ? 'var(--color-canvas)' : 'var(--color-ink)',
      border: active ? '1px solid var(--color-ink-deep)' : '1px solid var(--color-hairline)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { PillTab });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/PillTab.jsx", error: String((e && e.message) || e) }); }

// components/forms/ColorSwatch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ColorSwatch — round color/material picker (frame finishes, glass colors).
 * 32px circle; selected draws a 2px canvas ring + outer cobalt ring.
 */
function ColorSwatch({
  color,
  selected = false,
  label,
  onClick,
  size = 32,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    "aria-pressed": selected,
    onClick: onClick,
    title: label,
    style: {
      width: size + 8,
      height: size + 8,
      padding: 0,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-circle)',
      background: 'transparent',
      border: selected ? '2px solid var(--color-primary)' : '2px solid transparent',
      cursor: 'pointer',
      transition: 'border var(--dur-fast) var(--ease-out)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      borderRadius: 'var(--radius-circle)',
      background: color,
      border: '2px solid var(--color-canvas)',
      boxShadow: '0 0 0 1px var(--border-card)',
      boxSizing: 'border-box'
    }
  }));
}
Object.assign(__ds_scope, { ColorSwatch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/ColorSwatch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const FONT = "'Montserrat','Optimistic VF',Helvetica,Arial,sans-serif";

/**
 * Input — standard 44px text field. Focus ring is Facebook blue;
 * error border is critical-strong.
 */
function Input({
  label,
  error,
  hint,
  style,
  id,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const inputId = id || (label ? `in-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const border = error ? '1px solid var(--color-critical-strong)' : focused ? '2px solid var(--focus-ring)' : '1px solid var(--border-input)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: FONT
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: 'var(--text-body)',
      letterSpacing: '-0.14px'
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      height: 44,
      boxSizing: 'border-box',
      padding: '0 12px',
      fontFamily: FONT,
      fontSize: 16,
      letterSpacing: '-0.16px',
      color: 'var(--text-body)',
      background: 'var(--color-canvas)',
      borderRadius: 'var(--radius-lg)',
      border,
      outline: 'none',
      transition: 'border var(--dur-fast) var(--ease-out)',
      ...style
    }
  }, rest)), error && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--color-critical-strong)'
    }
  }, error), !error && hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/RadioOption.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const FONT = "'Montserrat','Optimistic VF',Helvetica,Arial,sans-serif";

/**
 * RadioOption — configurator option card (storage, shipping, variant).
 * Selected state draws a 2px deep-cobalt border.
 */
function RadioOption({
  title,
  description,
  price,
  selected = false,
  onClick,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onClick,
    "aria-pressed": selected,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      width: '100%',
      textAlign: 'left',
      fontFamily: FONT,
      background: 'var(--color-canvas)',
      borderRadius: 'var(--radius-lg)',
      padding: '20px',
      cursor: 'pointer',
      border: selected ? '2px solid #0143b5' : '1px solid var(--border-ghost)',
      transition: 'border var(--dur-fast) var(--ease-out)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      flex: 'none',
      borderRadius: 'var(--radius-circle)',
      border: selected ? '6px solid var(--color-primary)' : '2px solid var(--color-hairline)',
      boxSizing: 'border-box'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 16,
      fontWeight: 700,
      color: 'var(--text-strong)',
      letterSpacing: '-0.16px'
    }
  }, title), description && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 14,
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, description)), price && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 700,
      color: 'var(--text-strong)'
    }
  }, price));
}
Object.assign(__ds_scope, { RadioOption });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/RadioOption.jsx", error: String((e && e.message) || e) }); }

// components/forms/SearchPill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const FONT = "'Montserrat','Optimistic VF',Helvetica,Arial,sans-serif";

/**
 * SearchPill — top-nav search field. Soft-cloud rest, 40px tall, full radius.
 */
function SearchPill({
  placeholder = 'Search',
  icon,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      height: 40,
      padding: '0 18px',
      borderRadius: 'var(--radius-full)',
      background: 'var(--color-surface-soft)',
      ...style
    }
  }, icon, /*#__PURE__*/React.createElement("input", _extends({
    placeholder: placeholder,
    style: {
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: FONT,
      fontSize: 14,
      letterSpacing: '-0.14px',
      color: 'var(--text-body)',
      width: '100%'
    }
  }, rest)));
}
Object.assign(__ds_scope, { SearchPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SearchPill.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const FONT = "'Montserrat','Optimistic VF',Helvetica,Arial,sans-serif";
const VARIANTS = {
  // White feature card with hairline border, 32px radius
  feature: {
    background: 'var(--surface-card)',
    border: '1px solid var(--border-card)',
    borderRadius: 'var(--radius-xxxl)',
    padding: 'var(--space-xxl)',
    color: 'var(--text-body)'
  },
  // Edge-to-edge photographic showcase tile, no chrome
  photo: {
    background: 'var(--surface-card)',
    border: 'none',
    borderRadius: 'var(--radius-xxxl)',
    padding: 0,
    color: 'var(--text-body)',
    overflow: 'hidden'
  },
  // Dark full-width promo strip
  promo: {
    background: 'var(--surface-dark)',
    border: 'none',
    borderRadius: 'var(--radius-xxxl)',
    padding: 'var(--space-section)',
    color: 'var(--text-on-dark)'
  },
  // Three-up icon-feature tile
  icon: {
    background: 'var(--surface-card)',
    border: '1px solid var(--border-card)',
    borderRadius: 'var(--radius-xl)',
    padding: 'var(--space-xl)',
    color: 'var(--text-body)'
  },
  // Sticky checkout summary with subtle shadow
  summary: {
    background: 'var(--surface-card)',
    border: '1px solid var(--border-card)',
    borderRadius: 'var(--radius-xl)',
    padding: 'var(--space-xl)',
    boxShadow: 'var(--shadow-sticky)',
    color: 'var(--text-body)'
  },
  // Soft-cloud warranty / perk callout
  soft: {
    background: 'var(--surface-soft)',
    border: 'none',
    borderRadius: 'var(--radius-xxl)',
    padding: 'var(--space-xxl)',
    color: 'var(--text-body)'
  }
};

/**
 * Card — the surface primitive. Pick a variant to get Meta's documented
 * radius / chrome / padding combinations.
 */
function Card({
  children,
  variant = 'feature',
  style,
  ...rest
}) {
  const v = VARIANTS[variant] || VARIANTS.feature;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      fontFamily: FONT,
      ...v,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/ProductThumbnail.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const FONT = "'Montserrat','Optimistic VF',Helvetica,Arial,sans-serif";

/**
 * ProductThumbnail — square product image cell for color/SKU pickers and
 * "people also bought" rows. Soft-cloud background, 1:1 aspect.
 * Selected draws a 2px ink-deep border.
 */
function ProductThumbnail({
  src,
  alt = '',
  name,
  price,
  selected = false,
  onClick,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onClick,
    "aria-pressed": selected,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      padding: 0,
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      textAlign: 'left',
      fontFamily: FONT,
      width: '100%',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      aspectRatio: '1 / 1',
      background: 'var(--color-surface-soft)',
      borderRadius: 'var(--radius-lg)',
      border: selected ? '2px solid var(--color-ink-deep)' : '1px solid var(--border-card)',
      padding: 16,
      boxSizing: 'border-box',
      overflow: 'hidden'
    }
  }, src && /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      display: 'block'
    }
  })), name && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: 'var(--text-strong)',
      letterSpacing: '-0.14px'
    }
  }, name), price && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, price));
}
Object.assign(__ds_scope, { ProductThumbnail });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/ProductThumbnail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/meta_store/buynow.jsx
try { (() => {
/* Meta Store UI kit — buy-now configurator + confirmation. */

function BuyNow({
  product,
  onPlaceOrder,
  onBack
}) {
  const p = product;
  const storageOpts = p.icon === 'box' ? [{
    id: 's1',
    title: '128GB',
    desc: 'Plenty for games & apps',
    add: 0
  }, {
    id: 's2',
    title: '256GB',
    desc: 'Double the space',
    add: 80
  }] : [{
    id: 's1',
    title: 'Standard lenses',
    desc: 'Polarized, UV protection',
    add: 0
  }, {
    id: 's2',
    title: 'Transitions®',
    desc: 'Adapts to light',
    add: 80
  }];
  const shipOpts = [{
    id: 'std',
    title: 'Free 2-day delivery',
    desc: 'Arrives Jun 24 – Jun 25',
    add: 0
  }, {
    id: 'exp',
    title: 'Next-day delivery',
    desc: 'Arrives tomorrow by 9pm',
    add: 19
  }];
  const [storage, setStorage] = React.useState('s1');
  const [color, setColor] = React.useState(0);
  const [ship, setShip] = React.useState('std');
  const [warranty, setWarranty] = React.useState(true);
  const sAdd = storageOpts.find(o => o.id === storage).add;
  const shAdd = shipOpts.find(o => o.id === ship).add;
  const wAdd = warranty ? 49 : 0;
  const subtotal = p.price + sAdd + shAdd + wAdd;
  const Radio = ({
    opt,
    group,
    value,
    set
  }) => {
    const sel = value === opt.id;
    return /*#__PURE__*/React.createElement("button", {
      onClick: () => set(opt.id),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        width: '100%',
        textAlign: 'left',
        fontFamily: FONT,
        background: 'var(--color-canvas)',
        borderRadius: 'var(--radius-lg)',
        padding: 18,
        cursor: 'pointer',
        border: sel ? '2px solid #0143b5' : '1px solid var(--border-ghost)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 20,
        height: 20,
        flex: 'none',
        borderRadius: 'var(--radius-circle)',
        border: sel ? '6px solid var(--color-primary)' : '2px solid var(--color-hairline)',
        boxSizing: 'border-box'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        fontSize: 15,
        fontWeight: 700,
        color: 'var(--text-strong)'
      }
    }, opt.title), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        fontSize: 13,
        color: 'var(--text-muted)',
        marginTop: 2
      }
    }, opt.desc)), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        fontWeight: 700,
        color: 'var(--text-strong)'
      }
    }, opt.add ? '+' + money(opt.add) : 'Included'));
  };
  const Group = ({
    title,
    children
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 20,
      fontWeight: 500,
      margin: '0 0 14px',
      color: 'var(--text-strong)',
      fontFeatureSettings: 'var(--font-feature-headings)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, children));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT,
      background: 'var(--surface-page)',
      minHeight: '100vh'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1080,
      margin: '0 auto',
      padding: '24px 32px 64px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontFamily: FONT,
      fontSize: 14,
      fontWeight: 700,
      color: 'var(--text-muted)',
      padding: 0,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevronRight",
    size: 16,
    style: {
      transform: 'rotate(180deg)'
    }
  }), " Back to product"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 36,
      fontWeight: 500,
      margin: '0 0 32px',
      color: 'var(--text-strong)',
      fontFeatureSettings: 'var(--font-feature-headings)'
    }
  }, "Configure your ", p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.5fr 1fr',
      gap: 48,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Group, {
    title: p.icon === 'box' ? 'Storage' : 'Lenses'
  }, storageOpts.map(o => /*#__PURE__*/React.createElement(Radio, {
    key: o.id,
    opt: o,
    value: storage,
    set: setStorage
  }))), /*#__PURE__*/React.createElement(Group, {
    title: 'Color — ' + p.colors[color].label
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      padding: '4px 0'
    }
  }, p.colors.map((c, i) => /*#__PURE__*/React.createElement(ColorSwatch, {
    key: i,
    color: c.hex,
    label: c.label,
    selected: color === i,
    onClick: () => setColor(i),
    size: 36
  })))), /*#__PURE__*/React.createElement(Group, {
    title: "Delivery"
  }, shipOpts.map(o => /*#__PURE__*/React.createElement(Radio, {
    key: o.id,
    opt: o,
    value: ship,
    set: setShip
  }))), /*#__PURE__*/React.createElement(Group, {
    title: "Protection"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setWarranty(!warranty),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      width: '100%',
      textAlign: 'left',
      fontFamily: FONT,
      background: 'var(--color-surface-soft)',
      borderRadius: 'var(--radius-lg)',
      padding: 18,
      cursor: 'pointer',
      border: warranty ? '2px solid #0143b5' : '1px solid var(--border-ghost)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      flex: 'none',
      borderRadius: 'var(--radius-sm)',
      background: warranty ? 'var(--color-primary)' : '#fff',
      border: warranty ? '2px solid var(--color-primary)' : '2px solid var(--color-hairline)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff'
    }
  }, warranty && /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 14,
    stroke: 3
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 15,
      fontWeight: 700,
      color: 'var(--text-strong)'
    }
  }, "Add Meta Protect"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 13,
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, "2-year accidental damage coverage")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: 'var(--text-strong)'
    }
  }, "+", money(49))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-card)',
      borderRadius: 'var(--radius-xl)',
      padding: 24,
      boxShadow: 'var(--shadow-sticky)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'center',
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      flex: 'none',
      background: 'var(--color-surface-soft)',
      borderRadius: 'var(--radius-lg)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--text-faint)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: p.icon,
    size: 34,
    stroke: 1.25
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: 'var(--text-strong)'
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, p.colors[color].label))), [['Device', p.price], [p.icon === 'box' ? 'Storage' : 'Lenses', sAdd], ['Delivery', shAdd], ['Meta Protect', wAdd]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '7px 0',
      fontSize: 14,
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement("span", null, k), /*#__PURE__*/React.createElement("span", null, v === 0 ? k === 'Delivery' ? 'Free' : k === 'Meta Protect' ? '—' : money(0) : money(v)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '16px 0 0',
      marginTop: 8,
      borderTop: '1px solid var(--border-card)',
      fontSize: 18,
      fontWeight: 700,
      color: 'var(--text-strong)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Total"), /*#__PURE__*/React.createElement("span", null, money(subtotal))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "commerce",
    size: "lg",
    fullWidth: true,
    onClick: () => onPlaceOrder(subtotal)
  }, "Place order")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 6,
      marginTop: 14,
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shield",
    size: 14
  }), " Secure checkout \xB7 30-day returns"))))));
}
function Confirm({
  product,
  total,
  onHome
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT,
      background: 'var(--surface-page)',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 460,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 80,
      height: 80,
      margin: '0 auto 24px',
      borderRadius: 'var(--radius-circle)',
      background: 'var(--color-success)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 40,
    stroke: 3
  })), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 36,
      fontWeight: 500,
      margin: 0,
      color: 'var(--text-strong)',
      fontFeatureSettings: 'var(--font-feature-headings)'
    }
  }, "Order confirmed"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      color: 'var(--text-muted)',
      margin: '12px 0 8px',
      lineHeight: 1.44
    }
  }, "Your ", product.name, " is on its way. We've sent a receipt to your email."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--text-faint)',
      marginBottom: 8
    }
  }, "Order #MTA-", Math.floor(Math.random() * 900000 + 100000)), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-card)',
      borderRadius: 'var(--radius-xl)',
      padding: 20,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      margin: '24px 0 28px',
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      background: 'var(--color-surface-soft)',
      borderRadius: 'var(--radius-lg)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--text-faint)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: product.icon,
    size: 26,
    stroke: 1.25
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: 'var(--text-strong)'
    }
  }, product.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--color-success)',
      fontWeight: 700
    }
  }, "Arrives in 2 days"))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 700,
      color: 'var(--text-strong)'
    }
  }, money(total))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: onHome
  }, "Continue shopping")));
}
Object.assign(window, {
  BuyNow,
  Confirm
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/meta_store/buynow.jsx", error: String((e && e.message) || e) }); }

// ui_kits/meta_store/screens.jsx
try { (() => {
/* Meta Store UI kit — screens: Home, Pdp, BuyNow, Confirm. */

function money(n) {
  return '$' + n.toFixed(0);
}

/* ============================ HOME ============================ */
function Home({
  onOpenProduct
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT,
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: '0 auto',
      padding: '32px'
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      borderRadius: 'var(--radius-xxxl)',
      overflow: 'hidden',
      background: 'linear-gradient(120deg,#0a1317,#1c2530)',
      color: '#fff',
      padding: '80px',
      minHeight: 380,
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 520,
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "promo"
  }, "New \xB7 Gen 2")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 64,
      lineHeight: 1.08,
      fontWeight: 500,
      margin: 0,
      letterSpacing: '-1.5px',
      fontFeatureSettings: 'var(--font-feature-headings)'
    }
  }, "Look forward."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: 1.44,
      color: 'rgba(255,255,255,0.78)',
      margin: '20px 0 32px',
      maxWidth: 420
    }
  }, "Ray-Ban Meta glasses capture the moment, take calls, and answer questions \u2014 hands-free."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "light",
    size: "lg",
    onClick: () => onOpenProduct('skyler')
  }, "Shop glasses"), /*#__PURE__*/React.createElement(Button, {
    variant: "outlineLight",
    size: "lg"
  }, "Watch film"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 40,
      top: '50%',
      transform: 'translateY(-50%)',
      width: 320,
      height: 320,
      opacity: 0.9,
      color: 'rgba(255,255,255,0.85)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "glasses",
    size: 220,
    stroke: 1
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      margin: '64px 0 24px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 36,
      fontWeight: 500,
      margin: 0,
      color: 'var(--text-strong)',
      fontFeatureSettings: 'var(--font-feature-headings)'
    }
  }, "Shop the lineup"), /*#__PURE__*/React.createElement("a", {
    style: {
      fontSize: 16,
      fontWeight: 700,
      color: 'var(--color-primary)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      cursor: 'pointer'
    }
  }, "View all ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrowRight",
    size: 16
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 16
    }
  }, PRODUCTS.map(p => /*#__PURE__*/React.createElement("button", {
    key: p.id,
    onClick: () => onOpenProduct(p.id),
    style: {
      textAlign: 'left',
      cursor: 'pointer',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-card)',
      borderRadius: 'var(--radius-xxxl)',
      padding: 16,
      fontFamily: FONT,
      transition: 'transform var(--dur-base) var(--ease-out)'
    },
    onMouseEnter: e => e.currentTarget.style.transform = 'translateY(-4px)',
    onMouseLeave: e => e.currentTarget.style.transform = 'translateY(0)'
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(ProductGlyph, {
    icon: p.icon,
    radius: "var(--radius-xxl)",
    iconSize: 84
  }), p.badge && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 12,
      left: 12
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: p.badge.tone
  }, p.badge.text))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 8px 8px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      color: 'var(--text-faint)',
      textTransform: 'uppercase',
      letterSpacing: '0.4px'
    }
  }, p.cat), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 700,
      color: 'var(--text-strong)',
      margin: '4px 0 2px',
      letterSpacing: '-0.16px'
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, p.tagline), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 700,
      color: 'var(--text-strong)',
      marginTop: 10
    }
  }, "From ", money(p.price)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 16,
      marginTop: 64
    }
  }, [{
    icon: 'truck',
    h: 'Free 2-day delivery',
    b: 'On every order, no minimum.'
  }, {
    icon: 'rotate',
    h: 'Free 30-day returns',
    b: 'Changed your mind? No problem.'
  }, {
    icon: 'shield',
    h: 'Worry-free warranty',
    b: '2-year coverage included.'
  }, {
    icon: 'card',
    h: 'Buy now, pay later',
    b: 'Flexible monthly financing.'
  }].map(f => /*#__PURE__*/React.createElement("div", {
    key: f.h,
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-card)',
      borderRadius: 'var(--radius-xl)',
      padding: '32px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--color-primary)',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: f.icon,
    size: 28,
    stroke: 1.75
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 700,
      color: 'var(--text-strong)',
      letterSpacing: '-0.16px'
    }
  }, f.h), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)',
      marginTop: 6,
      lineHeight: 1.43
    }
  }, f.b)))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-dark)',
      color: '#fff',
      borderRadius: 'var(--radius-xxxl)',
      padding: '64px',
      marginTop: 64,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 560
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 40,
      fontWeight: 500,
      margin: 0,
      letterSpacing: '-1px',
      fontFeatureSettings: 'var(--font-feature-headings)'
    }
  }, "Meta Quest brings the magic of mixed reality."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      color: 'rgba(255,255,255,0.75)',
      margin: '16px 0 28px',
      lineHeight: 1.44
    }
  }, "Step into immersive worlds, fitness, and games \u2014 all from your living room."), /*#__PURE__*/React.createElement(Button, {
    variant: "light",
    size: "lg",
    onClick: () => onOpenProduct('quest3s')
  }, "Explore Quest")), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'rgba(255,255,255,0.85)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "box",
    size: 180,
    stroke: 1
  })))), /*#__PURE__*/React.createElement(Footer, null));
}

/* ============================ PDP ============================ */
function Pdp({
  product,
  onConfigure,
  onHome
}) {
  const p = product;
  const [active, setActive] = React.useState(0);
  const [color, setColor] = React.useState(0);
  const specs = p.icon === 'glasses' ? [['Camera', '12 MP ultra-wide'], ['Audio', 'Open-ear speakers'], ['Battery', 'Up to 4 hours'], ['Charging case', '+32 hours'], ['Water resistance', 'IPX4'], ['Weight', '49 g']] : [['Display', '2064 × 2208 per eye'], ['Processor', 'Snapdragon XR2 Gen 2'], ['Memory', '8 GB RAM'], ['Storage', '128 / 256 GB'], ['Field of view', '110° horizontal'], ['Battery', 'Up to 2.5 hours']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT,
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: '0 auto',
      padding: '24px 32px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 14,
      color: 'var(--text-muted)',
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: onHome,
    style: {
      cursor: 'pointer'
    }
  }, p.cat), /*#__PURE__*/React.createElement(Icon, {
    name: "chevronRight",
    size: 14,
    style: {
      color: 'var(--text-faint)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-strong)',
      fontWeight: 700
    }
  }, p.name)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr',
      gap: 48,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, [0, 1, 2, 3].map(i => /*#__PURE__*/React.createElement("button", {
    key: i,
    onClick: () => setActive(i),
    style: {
      width: 72,
      height: 72,
      borderRadius: 'var(--radius-lg)',
      background: 'var(--color-surface-soft)',
      border: active === i ? '2px solid var(--color-ink-deep)' : '1px solid var(--border-card)',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--text-faint)',
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: p.icon,
    size: 36,
    stroke: 1.25
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(ProductGlyph, {
    icon: p.icon,
    iconSize: 200,
    radius: "var(--radius-xxxl)"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 88
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-card)',
      borderRadius: 'var(--radius-xl)',
      padding: 24,
      boxShadow: 'var(--shadow-sticky)'
    }
  }, p.badge && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: p.badge.tone
  }, p.badge.text)), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 28,
      fontWeight: 500,
      margin: 0,
      color: 'var(--text-strong)',
      fontFeatureSettings: 'var(--font-feature-headings)'
    }
  }, p.name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      color: 'var(--text-muted)',
      margin: '6px 0 0',
      letterSpacing: '-0.16px'
    }
  }, p.tagline), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      margin: '16px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      color: 'var(--color-attention)'
    }
  }, [0, 1, 2, 3, 4].map(i => /*#__PURE__*/React.createElement(Icon, {
    key: i,
    name: "star",
    size: 16,
    style: {
      fill: 'currentColor'
    }
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, "4.8 \xB7 2,431 reviews")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 32,
      fontWeight: 700,
      color: 'var(--text-strong)',
      letterSpacing: '-0.5px'
    }
  }, money(p.price)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)',
      marginTop: 4
    }
  }, "or ", money(p.price / 12), "/mo for 12 months"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: 'var(--text-strong)',
      marginBottom: 10
    }
  }, "Color \u2014 ", p.colors[color].label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, p.colors.map((c, i) => /*#__PURE__*/React.createElement(ColorSwatch, {
    key: i,
    color: c.hex,
    label: c.label,
    selected: color === i,
    onClick: () => setColor(i)
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "commerce",
    size: "lg",
    fullWidth: true,
    onClick: () => onConfigure(p)
  }, "Add to cart"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    fullWidth: true
  }, "Save for later")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginTop: 16,
      fontSize: 13,
      color: 'var(--color-success)',
      fontWeight: 700
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 16
  }), " Free 2-day delivery \xB7 Free returns")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 16,
      marginTop: 64
    }
  }, [{
    icon: 'camera',
    h: '12MP camera',
    b: 'Capture photos & video, hands-free.'
  }, {
    icon: 'zap',
    h: 'Meta AI built in',
    b: 'Ask questions, get answers live.'
  }, {
    icon: 'battery',
    h: 'All-day power',
    b: 'Charging case keeps you going.'
  }, {
    icon: 'shield',
    h: '2-year warranty',
    b: 'Worry-free coverage included.'
  }].map(f => /*#__PURE__*/React.createElement("div", {
    key: f.h,
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-card)',
      borderRadius: 'var(--radius-xl)',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--color-primary)',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: f.icon,
    size: 26,
    stroke: 1.75
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 700,
      color: 'var(--text-strong)'
    }
  }, f.h), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)',
      marginTop: 6,
      lineHeight: 1.43
    }
  }, f.b)))), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 28,
      fontWeight: 500,
      margin: '64px 0 20px',
      color: 'var(--text-strong)',
      fontFeatureSettings: 'var(--font-feature-headings)'
    }
  }, "Tech specs"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-card)',
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      maxWidth: 720
    }
  }, specs.map(([k, v], i) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '16px 24px',
      borderTop: i ? '1px solid var(--border-card)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: 'var(--text-strong)'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--text-secondary)'
    }
  }, v))))), /*#__PURE__*/React.createElement(Footer, null));
}
Object.assign(window, {
  Home,
  Pdp,
  money
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/meta_store/screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/meta_store/shell.jsx
try { (() => {
/* Meta Store UI kit — shared data + page chrome (header, footer). */

const PRODUCTS = [{
  id: 'skyler',
  name: 'Ray-Ban Meta | Skyler',
  cat: 'AI glasses',
  price: 299,
  icon: 'glasses',
  tagline: 'Compact. Cat-eye. Camera-ready.',
  colors: [{
    label: 'Shiny Black',
    hex: '#1c1e21'
  }, {
    label: 'Shiny Chalky Gray',
    hex: '#b8bcc2'
  }, {
    label: 'Caramel',
    hex: '#c9a87c'
  }],
  badge: {
    tone: 'success',
    text: 'In stock'
  }
}, {
  id: 'wayfarer',
  name: 'Ray-Ban Meta | Wayfarer',
  cat: 'AI glasses',
  price: 329,
  icon: 'glasses',
  tagline: 'The icon, now with AI.',
  colors: [{
    label: 'Matte Black',
    hex: '#1c1e21'
  }, {
    label: 'Jeans',
    hex: '#3b5168'
  }, {
    label: 'Shiny Brown',
    hex: '#5a3b29'
  }],
  badge: {
    tone: 'attention',
    text: 'Selling fast'
  }
}, {
  id: 'quest3s',
  name: 'Meta Quest 3S',
  cat: 'VR headset',
  price: 299,
  icon: 'box',
  tagline: 'The magic of mixed reality.',
  colors: [{
    label: '128GB',
    hex: '#e9ebee'
  }, {
    label: '256GB',
    hex: '#c6cbd2'
  }],
  badge: {
    tone: 'promo',
    text: 'Save $50'
  }
}, {
  id: 'quest3',
  name: 'Meta Quest 3',
  cat: 'VR headset',
  price: 499,
  icon: 'box',
  tagline: 'Our most advanced headset.',
  colors: [{
    label: '512GB',
    hex: '#e9ebee'
  }],
  badge: null
}];
function PromoBanner() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-ink-deep)',
      color: '#fff',
      fontFamily: FONT,
      fontSize: 14,
      fontWeight: 700,
      letterSpacing: '-0.14px',
      textAlign: 'center',
      padding: '12px 24px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", null, "Get 25% off the #1 selling AI glasses. Limited time."), /*#__PURE__*/React.createElement("a", {
    style: {
      color: '#fff',
      textDecoration: 'underline',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      cursor: 'pointer'
    }
  }, "Shop now ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrowRight",
    size: 14
  })));
}
function Header({
  onHome,
  onNav,
  tab = 'Glasses',
  cartCount = 0
}) {
  const tabs = ['Glasses', 'Quest', 'Apps', 'Accessories', 'Support'];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PromoBanner, null), /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: 'var(--color-canvas)',
      borderBottom: '1px solid var(--border-card)',
      fontFamily: FONT
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: '0 auto',
      height: 64,
      padding: '0 32px',
      display: 'flex',
      alignItems: 'center',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onHome,
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 26,
      fontWeight: 500,
      letterSpacing: '-1px',
      color: 'var(--color-primary)',
      cursor: 'pointer',
      fontFeatureSettings: 'var(--font-feature-headings)'
    }
  }, "Meta"), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 8,
      flex: 1,
      marginLeft: 8
    }
  }, tabs.map(t => /*#__PURE__*/React.createElement(PillTab, {
    key: t,
    active: t === tab,
    onClick: () => onNav && onNav(t)
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      height: 40,
      padding: '0 16px',
      borderRadius: 'var(--radius-full)',
      background: 'var(--color-surface-soft)',
      color: 'var(--text-muted)',
      width: 180
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 18
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14
    }
  }, "Search")), /*#__PURE__*/React.createElement("button", {
    "aria-label": "Account",
    style: iconBtn
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "user",
    size: 20
  })), /*#__PURE__*/React.createElement("button", {
    "aria-label": "Cart",
    style: {
      ...iconBtn,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bag",
    size: 20
  }), cartCount > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -2,
      right: -2,
      minWidth: 18,
      height: 18,
      padding: '0 5px',
      borderRadius: 9,
      background: 'var(--color-primary)',
      color: '#fff',
      fontSize: 11,
      fontWeight: 700,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxSizing: 'border-box'
    }
  }, cartCount)))));
}
const iconBtn = {
  width: 40,
  height: 40,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 'var(--radius-circle)',
  background: 'var(--color-canvas)',
  color: 'var(--color-ink)',
  border: '1px solid var(--border-card)',
  cursor: 'pointer'
};
function Footer() {
  const cols = [{
    h: 'Shop',
    links: ['AI glasses', 'Quest headsets', 'Accessories', 'Apps & games', 'Gift cards']
  }, {
    h: 'Support',
    links: ['Help center', 'Order status', 'Returns', 'Warranty', 'Contact us']
  }, {
    h: 'Meta',
    links: ['About', 'Newsroom', 'Careers', 'Sustainability', 'Investors']
  }, {
    h: 'Account',
    links: ['Sign in', 'Order history', 'Saved items', 'Meta Pay']
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--color-canvas)',
      borderTop: '1px solid var(--border-card)',
      fontFamily: FONT,
      padding: '64px 32px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1.4fr repeat(4, 1fr)',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 28,
      fontWeight: 500,
      letterSpacing: '-1px',
      color: 'var(--text-strong)',
      fontFeatureSettings: 'var(--font-feature-headings)'
    }
  }, "Meta"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)',
      maxWidth: 260,
      lineHeight: 1.5,
      marginTop: 12
    }
  }, "Building the future of connection, one device at a time.")), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: 'var(--text-strong)',
      marginBottom: 14
    }
  }, c.h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, c.links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)',
      textDecoration: 'none',
      cursor: 'pointer'
    }
  }, l))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: '40px auto 0',
      paddingTop: 24,
      borderTop: '1px solid var(--border-card)',
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--text-faint)'
    }
  }, "\xA9 2026 Meta Platforms \u2014 design-system recreation for prototyping."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20
    }
  }, ['Privacy', 'Terms', 'Cookies', 'United States (English)'].map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    style: {
      fontSize: 12,
      color: 'var(--text-faint)',
      cursor: 'pointer'
    }
  }, l)))));
}
Object.assign(window, {
  PRODUCTS,
  Header,
  Footer,
  PromoBanner
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/meta_store/shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/meta_store/ui.jsx
try { (() => {
/* ============================================================
   Meta Store UI kit — shared primitives + icons.
   Token-styled, self-contained (no bundle dependency) so the
   kit renders standalone. Icons use Lucide path data (the
   documented substitute for Meta's unshipped icon set).
   Exports to window for cross-file <script type="text/babel"> use.
   ============================================================ */
const FONT = "'Montserrat','Optimistic VF',Helvetica,Arial,sans-serif";

/* ---- Icons (Lucide path data, MIT) ---- */
const ICONS = {
  search: [['circle', {
    cx: 11,
    cy: 11,
    r: 8
  }], ['path', {
    d: 'm21 21-4.3-4.3'
  }]],
  bag: [['path', {
    d: 'M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z'
  }], ['path', {
    d: 'M3 6h18'
  }], ['path', {
    d: 'M16 10a4 4 0 0 1-8 0'
  }]],
  user: [['path', {
    d: 'M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2'
  }], ['circle', {
    cx: 12,
    cy: 7,
    r: 4
  }]],
  menu: [['path', {
    d: 'M4 6h16'
  }], ['path', {
    d: 'M4 12h16'
  }], ['path', {
    d: 'M4 18h16'
  }]],
  chevronDown: [['path', {
    d: 'm6 9 6 6 6-6'
  }]],
  chevronRight: [['path', {
    d: 'm9 18 6-6-6-6'
  }]],
  arrowRight: [['path', {
    d: 'M5 12h14'
  }], ['path', {
    d: 'm12 5 7 7-7 7'
  }]],
  star: [['polygon', {
    points: '12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26'
  }]],
  truck: [['path', {
    d: 'M14 18V6a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h2'
  }], ['path', {
    d: 'M15 18H9'
  }], ['path', {
    d: 'M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62l-3.48-4.35A1 1 0 0 0 17.52 8H14'
  }], ['circle', {
    cx: 17,
    cy: 18,
    r: 2
  }], ['circle', {
    cx: 7,
    cy: 18,
    r: 2
  }]],
  shield: [['path', {
    d: 'M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z'
  }], ['path', {
    d: 'm9 12 2 2 4-4'
  }]],
  rotate: [['path', {
    d: 'M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8'
  }], ['path', {
    d: 'M3 3v5h5'
  }]],
  card: [['rect', {
    width: 20,
    height: 14,
    x: 2,
    y: 5,
    rx: 2
  }], ['path', {
    d: 'M2 10h20'
  }]],
  glasses: [['circle', {
    cx: 6,
    cy: 15,
    r: 4
  }], ['circle', {
    cx: 18,
    cy: 15,
    r: 4
  }], ['path', {
    d: 'M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2'
  }], ['path', {
    d: 'M2.5 13 5 7c.7-1.3 1.4-2 3-2'
  }], ['path', {
    d: 'M21.5 13 19 7c-.7-1.3-1.5-2-3-2'
  }]],
  box: [['path', {
    d: 'M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z'
  }], ['path', {
    d: 'm3.3 7 8.7 5 8.7-5'
  }], ['path', {
    d: 'M12 22V12'
  }]],
  heart: [['path', {
    d: 'M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z'
  }]],
  check: [['path', {
    d: 'M20 6 9 17l-5-5'
  }]],
  checkCircle: [['path', {
    d: 'M21.8 10A10 10 0 1 1 17 3.34'
  }], ['path', {
    d: 'm9 11 3 3L22 4'
  }]],
  zap: [['path', {
    d: 'M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'
  }]],
  battery: [['rect', {
    width: 16,
    height: 10,
    x: 2,
    y: 7,
    rx: 2
  }], ['path', {
    d: 'M22 11v2'
  }]],
  camera: [['path', {
    d: 'M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z'
  }], ['circle', {
    cx: 12,
    cy: 13,
    r: 3
  }]]
};
function Icon({
  name,
  size = 24,
  stroke = 2,
  style
}) {
  const data = ICONS[name];
  if (!data) return null;
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      display: 'block',
      flex: 'none',
      ...style
    }
  }, data.map(([tag, attrs], i) => React.createElement(tag, {
    key: i,
    ...attrs
  })));
}

/* ---- Button ---- */
const BTN_VARIANTS = {
  primary: {
    background: 'var(--cta-marketing)',
    color: '#fff',
    border: '2px solid transparent'
  },
  commerce: {
    background: 'var(--cta-commerce)',
    color: '#fff',
    border: '2px solid transparent'
  },
  secondary: {
    background: 'transparent',
    color: 'var(--text-strong)',
    border: '2px solid var(--text-strong)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-strong)',
    border: '2px solid var(--border-ghost)'
  },
  light: {
    background: '#fff',
    color: 'var(--color-ink-deep)',
    border: '2px solid transparent'
  },
  outlineLight: {
    background: 'transparent',
    color: '#fff',
    border: '2px solid rgba(255,255,255,0.6)'
  }
};
const BTN_SIZES = {
  sm: {
    padding: '10px 22px',
    fontSize: 13
  },
  md: {
    padding: '14px 30px',
    fontSize: 14
  },
  lg: {
    padding: '16px 36px',
    fontSize: 15
  }
};
function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled,
  fullWidth,
  onClick,
  icon,
  style
}) {
  const v = BTN_VARIANTS[variant] || BTN_VARIANTS.primary;
  const s = BTN_SIZES[size];
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    fontFamily: FONT,
    fontWeight: 700,
    letterSpacing: '-0.14px',
    lineHeight: 1.43,
    borderRadius: 'var(--radius-full)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    width: fullWidth ? '100%' : 'auto',
    transition: 'background var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)',
    fontSize: s.fontSize,
    padding: s.padding,
    ...v
  };
  if (disabled) {
    base.background = 'var(--text-disabled)';
    base.color = '#fff';
    base.borderColor = 'transparent';
  }
  return /*#__PURE__*/React.createElement("button", {
    disabled: disabled,
    onClick: onClick,
    style: {
      ...base,
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'scale(0.97)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'scale(1)';
    }
  }, children, icon && /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 18
  }));
}

/* ---- Badge ---- */
const BADGE_TONES = {
  promo: {
    background: 'var(--color-warning)',
    color: 'var(--color-ink-deep)'
  },
  attention: {
    background: 'var(--color-attention)',
    color: '#fff'
  },
  success: {
    background: 'var(--color-success)',
    color: '#fff'
  },
  critical: {
    background: 'var(--color-critical)',
    color: '#fff'
  },
  neutral: {
    background: 'var(--color-surface-soft)',
    color: 'var(--text-secondary)'
  }
};
function Badge({
  children,
  tone = 'promo',
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      fontFamily: FONT,
      fontSize: 12,
      fontWeight: 700,
      lineHeight: 1.33,
      padding: '4px 10px',
      borderRadius: 'var(--radius-full)',
      whiteSpace: 'nowrap',
      ...BADGE_TONES[tone],
      ...style
    }
  }, children);
}

/* ---- PillTab ---- */
function PillTab({
  children,
  active,
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      fontFamily: FONT,
      fontSize: 14,
      fontWeight: 700,
      letterSpacing: '-0.14px',
      padding: '8px 16px',
      borderRadius: 'var(--radius-full)',
      cursor: 'pointer',
      transition: 'all var(--dur-fast) var(--ease-out)',
      background: active ? 'var(--color-ink-deep)' : 'var(--color-canvas)',
      color: active ? '#fff' : 'var(--color-ink)',
      border: active ? '1px solid var(--color-ink-deep)' : '1px solid var(--color-hairline)'
    }
  }, children);
}

/* ---- ColorSwatch ---- */
function ColorSwatch({
  color,
  selected,
  label,
  onClick,
  size = 32
}) {
  return /*#__PURE__*/React.createElement("button", {
    "aria-label": label,
    onClick: onClick,
    title: label,
    style: {
      width: size + 8,
      height: size + 8,
      padding: 0,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-circle)',
      background: 'transparent',
      border: selected ? '2px solid var(--color-primary)' : '2px solid transparent',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      borderRadius: 'var(--radius-circle)',
      background: color,
      border: '2px solid #fff',
      boxShadow: '0 0 0 1px var(--border-card)',
      boxSizing: 'border-box'
    }
  }));
}

/* ---- ProductGlyph: branded placeholder tile (soft-cloud + line icon) ---- */
function ProductGlyph({
  icon = 'glasses',
  tint = 'var(--color-surface-soft)',
  radius = 'var(--radius-xxxl)',
  size = '100%',
  iconSize = 96,
  color = 'var(--color-stone)'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      aspectRatio: '1 / 1',
      background: tint,
      borderRadius: radius,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: iconSize,
    stroke: 1.25
  }));
}
Object.assign(window, {
  FONT,
  Icon,
  Button,
  Badge,
  PillTab,
  ColorSwatch,
  ProductGlyph
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/meta_store/ui.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.PillTab = __ds_scope.PillTab;

__ds_ns.ColorSwatch = __ds_scope.ColorSwatch;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.RadioOption = __ds_scope.RadioOption;

__ds_ns.SearchPill = __ds_scope.SearchPill;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.ProductThumbnail = __ds_scope.ProductThumbnail;

})();
