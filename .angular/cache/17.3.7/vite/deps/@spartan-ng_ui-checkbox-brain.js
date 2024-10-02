import {
  FocusMonitor
} from "./chunk-33JCU7PW.js";
import "./chunk-HWWPEUWU.js";
import {
  rxHostPressedListener
} from "./chunk-GMHGR7V4.js";
import "./chunk-TTCURWDP.js";
import {
  NG_VALUE_ACCESSOR
} from "./chunk-D6Y3SFFO.js";
import {
  NgStyle,
  isPlatformBrowser
} from "./chunk-ISEOMAR5.js";
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  InputFlags,
  NgModule,
  Output,
  PLATFORM_ID,
  Renderer2,
  ViewChild,
  ViewEncapsulation$1,
  booleanAttribute,
  computed,
  effect,
  forwardRef,
  inject,
  input,
  setClassMetadata,
  signal,
  ɵɵInputTransformsFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵloadQuery,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵviewQuery
} from "./chunk-R6A45NQ5.js";
import "./chunk-SAVXX6OM.js";
import "./chunk-SG3BCSKH.js";
import "./chunk-PQ7O3X3G.js";
import "./chunk-WKYGNSYM.js";

// node_modules/@spartan-ng/ui-checkbox-brain/fesm2022/spartan-ng-ui-checkbox-brain.mjs
var _c0 = ["checkBox"];
var _c1 = ["*"];
var _c2 = () => ({
  position: "absolute",
  width: "1px",
  height: "1px",
  padding: "0",
  margin: "-1px",
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  borderWidth: "0"
});
var BRN_CHECKBOX_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => BrnCheckboxComponent),
  multi: true
};
function indeterminateBooleanAttribute(value) {
  if (value === "indeterminate")
    return "indeterminate";
  return booleanAttribute(value);
}
var CONTAINER_POST_FIX = "-checkbox";
var _BrnCheckboxComponent = class _BrnCheckboxComponent {
  // TODO should be changed to new model input when updated to Angular 17.2
  set checked(value) {
    this._checked.set(value);
  }
  set disabled(value) {
    this._disabled.set(value);
  }
  get disabled() {
    return this._disabled();
  }
  constructor() {
    this._renderer = inject(Renderer2);
    this._elementRef = inject(ElementRef);
    this._focusMonitor = inject(FocusMonitor);
    this._isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
    this._focusVisible = signal(false);
    this.focusVisible = this._focusVisible.asReadonly();
    this._focused = signal(false);
    this.focused = this._focused.asReadonly();
    this._checked = signal(false);
    this.isChecked = this._checked.asReadonly();
    this._dataState = computed(() => {
      const checked = this._checked();
      if (checked === "indeterminate")
        return "indeterminate";
      return checked ? "checked" : "unchecked";
    });
    this._ariaChecked = computed(() => {
      const checked = this._checked();
      if (checked === "indeterminate")
        return "mixed";
      return checked ? "true" : "false";
    });
    this._value = computed(() => {
      const checked = this._checked();
      if (checked === "indeterminate")
        return "";
      return checked ? "on" : "off";
    });
    this.id = input(null);
    this.hostId = computed(() => this.id() ? this.id() + CONTAINER_POST_FIX : null);
    this.name = input(null);
    this.hostName = computed(() => this.name() ? this.name() + CONTAINER_POST_FIX : null);
    this.ariaLabel = input(null, {
      alias: "aria-label"
    });
    this.ariaLabelledby = input(null, {
      alias: "aria-labelledby"
    });
    this.ariaDescribedby = input(null, {
      alias: "aria-describedby"
    });
    this.required = input(false, {
      transform: booleanAttribute
    });
    this._disabled = signal(false);
    this._onChange = (_) => {
    };
    this._onTouched = () => {
    };
    this.changed = new EventEmitter();
    rxHostPressedListener().subscribe(() => this.handleChange());
    effect(() => {
      const parent = this._renderer.parentNode(this._elementRef.nativeElement);
      if (!parent)
        return;
      if (parent?.tagName === "LABEL") {
        this._renderer.setAttribute(parent, "data-disabled", this._disabled() ? "true" : "false");
        return;
      }
      if (!this._isBrowser)
        return;
      const label = parent?.querySelector(`label[for="${this.id()}"]`);
      if (!label)
        return;
      this._renderer.setAttribute(label, "data-disabled", this._disabled() ? "true" : "false");
    });
  }
  handleChange() {
    if (this._disabled())
      return;
    if (!this.checkbox)
      return;
    const previousChecked = this._checked();
    this._checked.set(previousChecked === "indeterminate" ? true : !previousChecked);
    this._onChange(!previousChecked);
    this.changed.emit(!previousChecked);
  }
  ngAfterContentInit() {
    this._focusMonitor.monitor(this._elementRef, true).subscribe((focusOrigin) => {
      if (focusOrigin)
        this._focused.set(true);
      if (focusOrigin === "keyboard" || focusOrigin === "program") {
        this._focusVisible.set(true);
      }
      if (!focusOrigin) {
        Promise.resolve().then(() => {
          this._focusVisible.set(false);
          this._focused.set(false);
          this._onTouched();
        });
      }
    });
    if (!this.checkbox)
      return;
    this.checkbox.nativeElement.indeterminate = this._checked() === "indeterminate";
    if (this.checkbox.nativeElement.indeterminate) {
      this.checkbox.nativeElement.value = "indeterminate";
    } else {
      this.checkbox.nativeElement.value = this._checked() ? "on" : "off";
    }
    this.checkbox.nativeElement.dispatchEvent(new Event("change"));
  }
  ngOnDestroy() {
    this._focusMonitor.stopMonitoring(this._elementRef);
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  writeValue(value) {
    if (value === "indeterminate") {
      this.checked = "indeterminate";
    } else {
      this.checked = !!value;
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  registerOnChange(fn) {
    this._onChange = fn;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  /** Implemented as a part of ControlValueAccessor. */
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
};
_BrnCheckboxComponent.ɵfac = function BrnCheckboxComponent_Factory(t) {
  return new (t || _BrnCheckboxComponent)();
};
_BrnCheckboxComponent.ɵcmp = ɵɵdefineComponent({
  type: _BrnCheckboxComponent,
  selectors: [["brn-checkbox"]],
  viewQuery: function BrnCheckboxComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c0, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.checkbox = _t.first);
    }
  },
  hostVars: 10,
  hostBindings: function BrnCheckboxComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("tabindex", ctx._disabled() ? "-1" : "0")("data-state", ctx._dataState())("data-focus-visible", ctx.focusVisible())("data-focus", ctx.focused())("data-disabled", ctx._disabled())("aria-labelledby", null)("aria-label", null)("aria-describedby", null)("id", ctx.hostId())("name", ctx.hostName());
    }
  },
  inputs: {
    checked: [InputFlags.HasDecoratorInputTransform, "checked", "checked", indeterminateBooleanAttribute],
    id: [InputFlags.SignalBased, "id"],
    name: [InputFlags.SignalBased, "name"],
    ariaLabel: [InputFlags.SignalBased, "aria-label", "ariaLabel"],
    ariaLabelledby: [InputFlags.SignalBased, "aria-labelledby", "ariaLabelledby"],
    ariaDescribedby: [InputFlags.SignalBased, "aria-describedby", "ariaDescribedby"],
    required: [InputFlags.SignalBased, "required"],
    disabled: [InputFlags.HasDecoratorInputTransform, "disabled", "disabled", booleanAttribute]
  },
  outputs: {
    changed: "changed"
  },
  standalone: true,
  features: [ɵɵProvidersFeature([BRN_CHECKBOX_VALUE_ACCESSOR]), ɵɵInputTransformsFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c1,
  decls: 3,
  vars: 12,
  consts: [["checkBox", ""], ["tabindex", "-1", "type", "checkbox", "role", "checkbox", 3, "ngStyle", "id", "name", "value", "checked", "required"]],
  template: function BrnCheckboxComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelement(0, "input", 1, 0);
      ɵɵprojection(2);
    }
    if (rf & 2) {
      let tmp_2_0;
      let tmp_3_0;
      ɵɵproperty("ngStyle", ɵɵpureFunction0(11, _c2))("id", (tmp_2_0 = ctx.id()) !== null && tmp_2_0 !== void 0 ? tmp_2_0 : "")("name", (tmp_3_0 = ctx.name()) !== null && tmp_3_0 !== void 0 ? tmp_3_0 : "")("value", ctx._value())("checked", ctx.isChecked())("required", ctx.required());
      ɵɵattribute("aria-label", ctx.ariaLabel())("aria-labelledby", ctx.ariaLabelledby())("aria-describedby", ctx.ariaDescribedby())("aria-required", ctx.required() || null)("aria-checked", ctx._ariaChecked());
    }
  },
  dependencies: [NgStyle],
  encapsulation: 2,
  changeDetection: 0
});
var BrnCheckboxComponent = _BrnCheckboxComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrnCheckboxComponent, [{
    type: Component,
    args: [{
      selector: "brn-checkbox",
      standalone: true,
      imports: [NgStyle],
      template: `
		<input
			#checkBox
			tabindex="-1"
			type="checkbox"
			role="checkbox"
			[ngStyle]="{
				position: 'absolute',
				width: '1px',
				height: '1px',
				padding: '0',
				margin: '-1px',
				overflow: 'hidden',
				clip: 'rect(0, 0, 0, 0)',
				whiteSpace: 'nowrap',
				borderWidth: '0'
			}"
			[id]="id() ?? ''"
			[name]="name() ?? ''"
			[value]="_value()"
			[checked]="isChecked()"
			[required]="required()"
			[attr.aria-label]="ariaLabel()"
			[attr.aria-labelledby]="ariaLabelledby()"
			[attr.aria-describedby]="ariaDescribedby()"
			[attr.aria-required]="required() || null"
			[attr.aria-checked]="_ariaChecked()"
		/>
		<ng-content />
	`,
      host: {
        "[attr.tabindex]": '_disabled() ? "-1" : "0"',
        "[attr.data-state]": "_dataState()",
        "[attr.data-focus-visible]": "focusVisible()",
        "[attr.data-focus]": "focused()",
        "[attr.data-disabled]": "_disabled()",
        "[attr.aria-labelledby]": "null",
        "[attr.aria-label]": "null",
        "[attr.aria-describedby]": "null",
        "[attr.id]": "hostId()",
        "[attr.name]": "hostName()"
      },
      providers: [BRN_CHECKBOX_VALUE_ACCESSOR],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None
    }]
  }], () => [], {
    checked: [{
      type: Input,
      args: [{
        transform: indeterminateBooleanAttribute
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    checkbox: [{
      type: ViewChild,
      args: ["checkBox", {
        static: true
      }]
    }],
    changed: [{
      type: Output
    }]
  });
})();
var BrnCheckboxImports = [BrnCheckboxComponent];
var _BrnCheckboxModule = class _BrnCheckboxModule {
};
_BrnCheckboxModule.ɵfac = function BrnCheckboxModule_Factory(t) {
  return new (t || _BrnCheckboxModule)();
};
_BrnCheckboxModule.ɵmod = ɵɵdefineNgModule({
  type: _BrnCheckboxModule,
  imports: [BrnCheckboxComponent],
  exports: [BrnCheckboxComponent]
});
_BrnCheckboxModule.ɵinj = ɵɵdefineInjector({});
var BrnCheckboxModule = _BrnCheckboxModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrnCheckboxModule, [{
    type: NgModule,
    args: [{
      imports: [...BrnCheckboxImports],
      exports: [...BrnCheckboxImports]
    }]
  }], null, null);
})();
export {
  BRN_CHECKBOX_VALUE_ACCESSOR,
  BrnCheckboxComponent,
  BrnCheckboxImports,
  BrnCheckboxModule,
  indeterminateBooleanAttribute
};
//# sourceMappingURL=@spartan-ng_ui-checkbox-brain.js.map
