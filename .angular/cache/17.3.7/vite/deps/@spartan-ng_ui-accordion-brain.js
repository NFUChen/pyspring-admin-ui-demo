import {
  FocusKeyManager,
  FocusMonitor
} from "./chunk-33JCU7PW.js";
import {
  coerceBooleanProperty
} from "./chunk-HWWPEUWU.js";
import {
  rxHostPressedListener,
  takeUntilDestroyed
} from "./chunk-GMHGR7V4.js";
import "./chunk-TTCURWDP.js";
import "./chunk-ISEOMAR5.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  Directive,
  ElementRef,
  Input,
  InputFlags,
  NgModule,
  NgZone,
  ViewEncapsulation$1,
  computed,
  effect,
  inject,
  input,
  setClassMetadata,
  signal,
  untracked,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵhostProperty,
  ɵɵloadQuery,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵqueryRefresh
} from "./chunk-R6A45NQ5.js";
import "./chunk-SAVXX6OM.js";
import {
  fromEvent
} from "./chunk-SG3BCSKH.js";
import "./chunk-PQ7O3X3G.js";
import "./chunk-WKYGNSYM.js";

// node_modules/@spartan-ng/ui-accordion-brain/fesm2022/spartan-ng-ui-accordion-brain.mjs
var _c0 = ["*"];
var _BrnAccordionTriggerDirective = class _BrnAccordionTriggerDirective {
  constructor() {
    this._accordion = inject(BrnAccordionDirective);
    this._item = inject(BrnAccordionItemDirective);
    this._elementRef = inject(ElementRef);
    this._hostPressedListener = rxHostPressedListener();
    this.state = this._item.state;
    this.id = "brn-accordion-trigger-" + this._item.id;
    this.ariaControls = "brn-accordion-content-" + this._item.id;
    if (!this._accordion) {
      throw Error("Accordion trigger can only be used inside an Accordion. Add brnAccordion to ancestor.");
    }
    if (!this._item) {
      throw Error("Accordion trigger can only be used inside an AccordionItem. Add brnAccordionItem to parent.");
    }
    this._hostPressedListener.subscribe(() => {
      this._accordion.toggleItem(this._item.id);
    });
    fromEvent(this._elementRef.nativeElement, "focus").pipe(takeUntilDestroyed()).subscribe(() => {
      this._accordion.setActiveItem(this);
    });
  }
  focus() {
    this._elementRef.nativeElement.focus();
  }
};
_BrnAccordionTriggerDirective.ɵfac = function BrnAccordionTriggerDirective_Factory(t) {
  return new (t || _BrnAccordionTriggerDirective)();
};
_BrnAccordionTriggerDirective.ɵdir = ɵɵdefineDirective({
  type: _BrnAccordionTriggerDirective,
  selectors: [["", "brnAccordionTrigger", ""]],
  hostAttrs: ["role", "heading", "aria-level", "3"],
  hostVars: 4,
  hostBindings: function BrnAccordionTriggerDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵhostProperty("id", ctx.id);
      ɵɵattribute("data-state", ctx.state())("aria-expanded", ctx.state() === "open")("aria-controls", ctx.ariaControls);
    }
  },
  standalone: true
});
var BrnAccordionTriggerDirective = _BrnAccordionTriggerDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrnAccordionTriggerDirective, [{
    type: Directive,
    args: [{
      selector: "[brnAccordionTrigger]",
      standalone: true,
      host: {
        "[attr.data-state]": "state()",
        "[attr.aria-expanded]": 'state() === "open"',
        "[attr.aria-controls]": "ariaControls",
        role: "heading",
        "aria-level": "3",
        "[id]": "id"
      }
    }]
  }], () => [], null);
})();
var HORIZONTAL_KEYS_TO_PREVENT_DEFAULT = ["ArrowLeft", "ArrowRight", "PageDown", "PageUp", "Home", "End", " ", "Enter"];
var VERTICAL_KEYS_TO_PREVENT_DEFAULT = ["ArrowUp", "ArrowDown", "PageDown", "PageUp", "Home", "End", " ", "Enter"];
var _BrnAccordionDirective = class _BrnAccordionDirective {
  constructor() {
    this._el = inject(ElementRef);
    this._focusMonitor = inject(FocusMonitor);
    this._ngZone = inject(NgZone);
    this._focused = signal(false);
    this._openItemIds = signal([]);
    this.openItemIds = this._openItemIds.asReadonly();
    this.state = computed(() => this._openItemIds().length > 0 ? "open" : "closed");
    this.type = "single";
    this.dir = null;
    this.orientation = "vertical";
  }
  ngAfterContentInit() {
    if (!this.triggers) {
      return;
    }
    this._keyManager = new FocusKeyManager(this.triggers).withHomeAndEnd().withPageUpDown().withWrap();
    if (this.orientation === "horizontal") {
      this._keyManager.withHorizontalOrientation(this.dir ?? "ltr").withVerticalOrientation(false);
    }
    this._el.nativeElement.addEventListener("keydown", (event) => {
      this._keyManager?.onKeydown(event);
      this.preventDefaultEvents(event);
    });
    this._focusMonitor.monitor(this._el, true).subscribe((origin) => this._focused.set(origin !== null));
  }
  ngOnDestroy() {
    this._focusMonitor.stopMonitoring(this._el);
  }
  setActiveItem(item) {
    this._keyManager?.setActiveItem(item);
  }
  toggleItem(id) {
    if (this._openItemIds().includes(id)) {
      this.closeItem(id);
      return;
    }
    this.openItem(id);
  }
  openItem(id) {
    if (this.type === "single") {
      this._openItemIds.set([id]);
      return;
    }
    this._openItemIds.update((ids) => [...ids, id]);
  }
  closeItem(id) {
    this._openItemIds.update((ids) => ids.filter((openId) => id !== openId));
  }
  preventDefaultEvents(event) {
    if (!this._focused())
      return;
    if (!("key" in event))
      return;
    const keys = this.orientation === "horizontal" ? HORIZONTAL_KEYS_TO_PREVENT_DEFAULT : VERTICAL_KEYS_TO_PREVENT_DEFAULT;
    if (keys.includes(event.key) && event.code !== "NumpadEnter") {
      event.preventDefault();
    }
  }
};
_BrnAccordionDirective.ɵfac = function BrnAccordionDirective_Factory(t) {
  return new (t || _BrnAccordionDirective)();
};
_BrnAccordionDirective.ɵdir = ɵɵdefineDirective({
  type: _BrnAccordionDirective,
  selectors: [["", "brnAccordion", ""]],
  contentQueries: function BrnAccordionDirective_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, BrnAccordionTriggerDirective, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.triggers = _t);
    }
  },
  hostVars: 2,
  hostBindings: function BrnAccordionDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("data-state", ctx.state())("data-orientation", ctx.orientation);
    }
  },
  inputs: {
    type: "type",
    dir: "dir",
    orientation: "orientation"
  },
  standalone: true
});
var BrnAccordionDirective = _BrnAccordionDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrnAccordionDirective, [{
    type: Directive,
    args: [{
      selector: "[brnAccordion]",
      standalone: true,
      host: {
        "[attr.data-state]": "state()",
        "[attr.data-orientation]": "orientation"
      }
    }]
  }], null, {
    triggers: [{
      type: ContentChildren,
      args: [BrnAccordionTriggerDirective, {
        descendants: true
      }]
    }],
    type: [{
      type: Input
    }],
    dir: [{
      type: Input
    }],
    orientation: [{
      type: Input
    }]
  });
})();
var itemIdGenerator = 0;
var _BrnAccordionItemDirective = class _BrnAccordionItemDirective {
  constructor() {
    this._accordion = inject(BrnAccordionDirective);
    this.isOpened = input(false, {
      transform: coerceBooleanProperty
    });
    this.id = itemIdGenerator++;
    this.state = computed(() => this._accordion.openItemIds().includes(this.id) ? "open" : "closed");
    if (!this._accordion) {
      throw Error("Accordion trigger can only be used inside an Accordion. Add brnAccordion to ancestor.");
    }
    effect(() => {
      const isOpened = this.isOpened();
      untracked(() => {
        if (isOpened) {
          this._accordion.openItem(this.id);
        } else {
          this._accordion.closeItem(this.id);
        }
      });
    });
  }
};
_BrnAccordionItemDirective.ɵfac = function BrnAccordionItemDirective_Factory(t) {
  return new (t || _BrnAccordionItemDirective)();
};
_BrnAccordionItemDirective.ɵdir = ɵɵdefineDirective({
  type: _BrnAccordionItemDirective,
  selectors: [["", "brnAccordionItem", ""]],
  hostVars: 1,
  hostBindings: function BrnAccordionItemDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("data-state", ctx.state());
    }
  },
  inputs: {
    isOpened: [InputFlags.SignalBased, "isOpened"]
  },
  standalone: true
});
var BrnAccordionItemDirective = _BrnAccordionItemDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrnAccordionItemDirective, [{
    type: Directive,
    args: [{
      selector: "[brnAccordionItem]",
      standalone: true,
      host: {
        "[attr.data-state]": "state()"
      }
    }]
  }], () => [], null);
})();
var _BrnAccordionContentComponent = class _BrnAccordionContentComponent {
  constructor() {
    this._item = inject(BrnAccordionItemDirective);
    this.state = this._item.state;
    this.id = "brn-accordion-content-" + this._item.id;
    this.ariaLabeledBy = "brn-accordion-trigger-" + this._item.id;
    this._addInert = computed(() => this.state() === "closed" ? true : void 0);
    this._contentClass = signal("");
    if (!this._item) {
      throw Error("Accordion Content can only be used inside an AccordionItem. Add brnAccordionItem to parent.");
    }
  }
  setClassToCustomElement(classes) {
    this._contentClass.set(classes);
  }
};
_BrnAccordionContentComponent.ɵfac = function BrnAccordionContentComponent_Factory(t) {
  return new (t || _BrnAccordionContentComponent)();
};
_BrnAccordionContentComponent.ɵcmp = ɵɵdefineComponent({
  type: _BrnAccordionContentComponent,
  selectors: [["brn-accordion-content"], ["hlm-accordion-content"]],
  hostAttrs: ["role", "region"],
  hostVars: 3,
  hostBindings: function BrnAccordionContentComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵhostProperty("id", ctx.id);
      ɵɵattribute("data-state", ctx.state())("aria-labelledby", ctx.ariaLabeledBy);
    }
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 3,
  vars: 3,
  consts: [[2, "overflow", "hidden"]],
  template: function BrnAccordionContentComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "div", 0)(1, "p");
      ɵɵprojection(2);
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵattribute("inert", ctx._addInert());
      ɵɵadvance();
      ɵɵclassMap(ctx._contentClass());
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var BrnAccordionContentComponent = _BrnAccordionContentComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrnAccordionContentComponent, [{
    type: Component,
    args: [{
      selector: "brn-accordion-content, hlm-accordion-content",
      standalone: true,
      host: {
        "[attr.data-state]": "state()",
        "[attr.aria-labelledby]": "ariaLabeledBy",
        role: "region",
        "[id]": "id"
      },
      template: `
		<div [attr.inert]="_addInert()" style="overflow: hidden">
			<p [class]="_contentClass()">
				<ng-content />
			</p>
		</div>
	`,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None
    }]
  }], () => [], null);
})();
var BrnAccordionImports = [BrnAccordionDirective, BrnAccordionContentComponent, BrnAccordionItemDirective, BrnAccordionTriggerDirective];
var _BrnAccordionModule = class _BrnAccordionModule {
};
_BrnAccordionModule.ɵfac = function BrnAccordionModule_Factory(t) {
  return new (t || _BrnAccordionModule)();
};
_BrnAccordionModule.ɵmod = ɵɵdefineNgModule({
  type: _BrnAccordionModule,
  imports: [BrnAccordionDirective, BrnAccordionContentComponent, BrnAccordionItemDirective, BrnAccordionTriggerDirective],
  exports: [BrnAccordionDirective, BrnAccordionContentComponent, BrnAccordionItemDirective, BrnAccordionTriggerDirective]
});
_BrnAccordionModule.ɵinj = ɵɵdefineInjector({});
var BrnAccordionModule = _BrnAccordionModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrnAccordionModule, [{
    type: NgModule,
    args: [{
      imports: [...BrnAccordionImports],
      exports: [...BrnAccordionImports]
    }]
  }], null, null);
})();
export {
  BrnAccordionContentComponent,
  BrnAccordionDirective,
  BrnAccordionImports,
  BrnAccordionItemDirective,
  BrnAccordionModule,
  BrnAccordionTriggerDirective
};
//# sourceMappingURL=@spartan-ng_ui-accordion-brain.js.map
