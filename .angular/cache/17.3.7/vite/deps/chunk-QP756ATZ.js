import {
  NgControl
} from "./chunk-D6Y3SFFO.js";
import {
  isPlatformBrowser
} from "./chunk-ISEOMAR5.js";
import {
  Directive,
  ElementRef,
  Input,
  NgModule,
  PLATFORM_ID,
  inject,
  setClassMetadata,
  signal,
  ɵɵclassProp,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵhostProperty
} from "./chunk-R6A45NQ5.js";

// node_modules/@spartan-ng/ui-label-brain/fesm2022/spartan-ng-ui-label-brain.mjs
var nextId = 0;
var _BrnLabelDirective = class _BrnLabelDirective {
  constructor() {
    this._id = signal(`brn-label-${nextId++}`);
    this._ngControl = inject(NgControl, {
      optional: true
    });
    this._isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
    this._element = inject(ElementRef).nativeElement;
    this._dataDisabled = signal("auto");
    this.dataDisabled = this._dataDisabled.asReadonly();
  }
  set id(id) {
    this._id.set(id || this._id());
  }
  get id() {
    return this._id();
  }
  ngOnInit() {
    if (!this._isBrowser)
      return;
    this._changes = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName !== "data-disabled")
          return;
        const state = mutation.target.attributes.getNamedItem(mutation.attributeName)?.value === "true";
        this._dataDisabled.set(state ?? "auto");
      });
    });
    this._changes?.observe(this._element, {
      attributes: true,
      childList: true,
      characterData: true
    });
  }
};
_BrnLabelDirective.ɵfac = function BrnLabelDirective_Factory(t) {
  return new (t || _BrnLabelDirective)();
};
_BrnLabelDirective.ɵdir = ɵɵdefineDirective({
  type: _BrnLabelDirective,
  selectors: [["", "brnLabel", ""]],
  hostVars: 9,
  hostBindings: function BrnLabelDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵhostProperty("id", ctx._id());
      ɵɵclassProp("ng-invalid", (ctx._ngControl == null ? null : ctx._ngControl.invalid) || null)("ng-dirty", (ctx._ngControl == null ? null : ctx._ngControl.dirty) || null)("ng-valid", (ctx._ngControl == null ? null : ctx._ngControl.valid) || null)("ng-touched", (ctx._ngControl == null ? null : ctx._ngControl.touched) || null);
    }
  },
  inputs: {
    id: "id"
  },
  standalone: true
});
var BrnLabelDirective = _BrnLabelDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrnLabelDirective, [{
    type: Directive,
    args: [{
      selector: "[brnLabel]",
      standalone: true,
      host: {
        "[id]": "_id()",
        "[class.ng-invalid]": "this._ngControl?.invalid || null",
        "[class.ng-dirty]": "this._ngControl?.dirty || null",
        "[class.ng-valid]": "this._ngControl?.valid || null",
        "[class.ng-touched]": "this._ngControl?.touched || null"
      }
    }]
  }], null, {
    id: [{
      type: Input
    }]
  });
})();
var _BrnLabelModule = class _BrnLabelModule {
};
_BrnLabelModule.ɵfac = function BrnLabelModule_Factory(t) {
  return new (t || _BrnLabelModule)();
};
_BrnLabelModule.ɵmod = ɵɵdefineNgModule({
  type: _BrnLabelModule,
  imports: [BrnLabelDirective],
  exports: [BrnLabelDirective]
});
_BrnLabelModule.ɵinj = ɵɵdefineInjector({});
var BrnLabelModule = _BrnLabelModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrnLabelModule, [{
    type: NgModule,
    args: [{
      imports: [BrnLabelDirective],
      exports: [BrnLabelDirective]
    }]
  }], null, null);
})();

export {
  BrnLabelDirective,
  BrnLabelModule
};
//# sourceMappingURL=chunk-QP756ATZ.js.map
