import {
  NgIf
} from "./chunk-ISEOMAR5.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  Directive,
  ElementRef,
  HostListener,
  Input,
  InputFlags,
  NgModule,
  Pipe,
  ViewEncapsulation$1,
  booleanAttribute,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵɵInputTransformsFeature,
  ɵɵStandaloneFeature,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor
} from "./chunk-R6A45NQ5.js";
import "./chunk-SAVXX6OM.js";
import "./chunk-SG3BCSKH.js";
import "./chunk-PQ7O3X3G.js";
import "./chunk-WKYGNSYM.js";

// node_modules/@spartan-ng/ui-avatar-brain/fesm2022/spartan-ng-ui-avatar-brain.mjs
var _c0 = [[["", "brnAvatarImage", ""]], [["", "brnAvatarFallback", ""]]];
var _c1 = ["[brnAvatarImage]", "[brnAvatarFallback]"];
function BrnAvatarComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵprojection(1);
    ɵɵelementContainerEnd();
  }
}
function BrnAvatarComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0, 1);
  }
}
var _BrnAvatarImageDirective = class _BrnAvatarImageDirective {
  constructor() {
    this.error = signal(false);
    this.loaded = signal(false);
    this.canShow = computed(() => {
      return this.loaded() && !this.error();
    });
  }
  onError() {
    this.error.set(true);
  }
  onLoad() {
    this.loaded.set(true);
  }
};
_BrnAvatarImageDirective.ɵfac = function BrnAvatarImageDirective_Factory(t) {
  return new (t || _BrnAvatarImageDirective)();
};
_BrnAvatarImageDirective.ɵdir = ɵɵdefineDirective({
  type: _BrnAvatarImageDirective,
  selectors: [["img", "brnAvatarImage", ""]],
  hostBindings: function BrnAvatarImageDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("error", function BrnAvatarImageDirective_error_HostBindingHandler() {
        return ctx.onError();
      })("load", function BrnAvatarImageDirective_load_HostBindingHandler() {
        return ctx.onLoad();
      });
    }
  },
  exportAs: ["avatarImage"],
  standalone: true
});
var BrnAvatarImageDirective = _BrnAvatarImageDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrnAvatarImageDirective, [{
    type: Directive,
    args: [{
      selector: "img[brnAvatarImage]",
      standalone: true,
      exportAs: "avatarImage"
    }]
  }], null, {
    onError: [{
      type: HostListener,
      args: ["error"]
    }],
    onLoad: [{
      type: HostListener,
      args: ["load"]
    }]
  });
})();
var _BrnAvatarComponent = class _BrnAvatarComponent {
  constructor() {
    this.image = null;
  }
};
_BrnAvatarComponent.ɵfac = function BrnAvatarComponent_Factory(t) {
  return new (t || _BrnAvatarComponent)();
};
_BrnAvatarComponent.ɵcmp = ɵɵdefineComponent({
  type: _BrnAvatarComponent,
  selectors: [["brn-avatar"]],
  contentQueries: function BrnAvatarComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, BrnAvatarImageDirective, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.image = _t.first);
    }
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c1,
  decls: 3,
  vars: 2,
  consts: [["fallback", ""], [4, "ngIf", "ngIfElse"]],
  template: function BrnAvatarComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef(_c0);
      ɵɵtemplate(0, BrnAvatarComponent_ng_container_0_Template, 2, 0, "ng-container", 1)(1, BrnAvatarComponent_ng_template_1_Template, 1, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      const fallback_r1 = ɵɵreference(2);
      ɵɵproperty("ngIf", ctx.image == null ? null : ctx.image.canShow())("ngIfElse", fallback_r1);
    }
  },
  dependencies: [NgIf],
  encapsulation: 2,
  changeDetection: 0
});
var BrnAvatarComponent = _BrnAvatarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrnAvatarComponent, [{
    type: Component,
    args: [{
      selector: "brn-avatar",
      standalone: true,
      imports: [NgIf],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      template: `
		<ng-container *ngIf="image?.canShow(); else fallback">
			<ng-content select="[brnAvatarImage]" />
		</ng-container>
		<ng-template #fallback>
			<ng-content select="[brnAvatarFallback]" />
		</ng-template>
	`
    }]
  }], null, {
    image: [{
      type: ContentChild,
      args: [BrnAvatarImageDirective, {
        static: true
      }]
    }]
  });
})();
var _BrnAvatarFallbackDirective = class _BrnAvatarFallbackDirective {
  constructor() {
    this.element = inject(ElementRef).nativeElement;
    this.userCls = signal("");
    this.useAutoColor = signal(false);
    this.textContent = inject(ElementRef).nativeElement.textContent;
  }
  getTextContent() {
    return this.element.textContent;
  }
  set class(cls) {
    this.userCls.set(cls);
  }
  set autoColor(value) {
    this.useAutoColor.set(value);
  }
};
_BrnAvatarFallbackDirective.ɵfac = function BrnAvatarFallbackDirective_Factory(t) {
  return new (t || _BrnAvatarFallbackDirective)();
};
_BrnAvatarFallbackDirective.ɵdir = ɵɵdefineDirective({
  type: _BrnAvatarFallbackDirective,
  selectors: [["", "brnAvatarFallback", ""]],
  inputs: {
    class: "class",
    autoColor: [InputFlags.HasDecoratorInputTransform, "autoColor", "autoColor", booleanAttribute]
  },
  exportAs: ["avatarFallback"],
  standalone: true,
  features: [ɵɵInputTransformsFeature]
});
var BrnAvatarFallbackDirective = _BrnAvatarFallbackDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrnAvatarFallbackDirective, [{
    type: Directive,
    args: [{
      selector: "[brnAvatarFallback]",
      standalone: true,
      exportAs: "avatarFallback"
    }]
  }], null, {
    class: [{
      type: Input
    }],
    autoColor: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
function hashString(str) {
  let h;
  for (let i = 0; i < str.length; i++)
    h = Math.imul(31, h || 0) + str.charCodeAt(i) | 0;
  return h || 0;
}
function hashManyTimes(times = 5, str) {
  let h = hashString(str);
  for (let i = 0; i < times; i++)
    h = hashString(String(h));
  return h;
}
function hexColorFor(str) {
  const hash = str.length <= 2 ? hashManyTimes(5, str) : hashString(str);
  let color = "#";
  for (let i = 0; i < 3; i += 1) {
    const value = hash >> i * 8 & 255;
    color += `00${value.toString(16)}`.slice(-2);
  }
  return color;
}
var toInitial = (capitalize = true) => (word) => {
  const initial = word.charAt(0);
  return capitalize ? initial.toLocaleUpperCase() : initial;
};
var firstAndLast = (initials) => `${initials[0]}${initials[initials.length - 1]}`;
var _InitialsPipe = class _InitialsPipe {
  transform(name, capitalize = true, firstAndLastOnly = true, delimiter = " ") {
    if (!name)
      return "";
    const initials = name.trim().split(delimiter).filter(Boolean).map(toInitial(capitalize));
    if (firstAndLastOnly && initials.length > 1)
      return firstAndLast(initials);
    return initials.join("");
  }
};
_InitialsPipe.ɵfac = function InitialsPipe_Factory(t) {
  return new (t || _InitialsPipe)();
};
_InitialsPipe.ɵpipe = ɵɵdefinePipe({
  name: "initials",
  type: _InitialsPipe,
  pure: true,
  standalone: true
});
var InitialsPipe = _InitialsPipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InitialsPipe, [{
    type: Pipe,
    args: [{
      name: "initials",
      standalone: true
    }]
  }], null, null);
})();
var isShortHand = (hex) => hex.length === 3;
var cleanup = (hex) => {
  const noHash = hex.replace("#", "").trim().toLowerCase();
  if (!isShortHand(noHash))
    return noHash;
  return noHash.split("").map((char) => char + char).join("");
};
var isBright = (hex) => Number.parseInt(cleanup(hex), 16) > 16777215 / 1.25;
var BrnAvatarImports = [BrnAvatarComponent, BrnAvatarFallbackDirective, BrnAvatarImageDirective];
var _BrnAvatarModule = class _BrnAvatarModule {
};
_BrnAvatarModule.ɵfac = function BrnAvatarModule_Factory(t) {
  return new (t || _BrnAvatarModule)();
};
_BrnAvatarModule.ɵmod = ɵɵdefineNgModule({
  type: _BrnAvatarModule,
  imports: [BrnAvatarComponent, BrnAvatarFallbackDirective, BrnAvatarImageDirective],
  exports: [BrnAvatarComponent, BrnAvatarFallbackDirective, BrnAvatarImageDirective]
});
_BrnAvatarModule.ɵinj = ɵɵdefineInjector({});
var BrnAvatarModule = _BrnAvatarModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrnAvatarModule, [{
    type: NgModule,
    args: [{
      imports: [...BrnAvatarImports],
      exports: [...BrnAvatarImports]
    }]
  }], null, null);
})();
export {
  BrnAvatarComponent,
  BrnAvatarFallbackDirective,
  BrnAvatarImageDirective,
  BrnAvatarImports,
  BrnAvatarModule,
  InitialsPipe,
  hexColorFor,
  isBright
};
//# sourceMappingURL=@spartan-ng_ui-avatar-brain.js.map
