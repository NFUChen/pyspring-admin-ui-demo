import {
  BasePortalOutlet,
  CdkPortalOutlet,
  ComponentPortal,
  Overlay,
  OverlayConfig,
  OverlayContainer,
  OverlayModule,
  OverlayPositionBuilder,
  OverlayRef,
  PortalModule,
  ScrollStrategyOptions,
  TemplatePortal
} from "./chunk-HTMUMCL5.js";
import {
  A11yModule,
  ESCAPE,
  FocusMonitor,
  FocusTrapFactory,
  InteractivityChecker,
  hasModifierKey
} from "./chunk-33JCU7PW.js";
import {
  Directionality
} from "./chunk-PBWN6U44.js";
import {
  Platform,
  _getFocusedElementPierceShadowDom,
  coerceNumberProperty
} from "./chunk-HWWPEUWU.js";
import {
  provideCustomClassSettableExisting,
  provideExposesStateProviderExisting
} from "./chunk-GMHGR7V4.js";
import "./chunk-TTCURWDP.js";
import {
  DOCUMENT
} from "./chunk-ISEOMAR5.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Directive,
  ElementRef,
  EventEmitter,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  InputFlags,
  NgModule,
  NgZone,
  Optional,
  Output,
  RendererFactory2,
  SkipSelf,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation$1,
  booleanAttribute,
  computed,
  effect,
  inject,
  input,
  numberAttribute,
  runInInjectionContext,
  setClassMetadata,
  signal,
  ɵɵInheritDefinitionFeature,
  ɵɵInputTransformsFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵhostProperty,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵqueryRefresh,
  ɵɵtemplate,
  ɵɵviewQuery
} from "./chunk-R6A45NQ5.js";
import "./chunk-SAVXX6OM.js";
import {
  defer
} from "./chunk-SG3BCSKH.js";
import {
  Subject,
  filter,
  of,
  startWith,
  take,
  takeUntil
} from "./chunk-PQ7O3X3G.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-WKYGNSYM.js";

// node_modules/@angular/cdk/fesm2022/dialog.mjs
function CdkDialogContainer_ng_template_0_Template(rf, ctx) {
}
var DialogConfig = class {
  constructor() {
    this.role = "dialog";
    this.panelClass = "";
    this.hasBackdrop = true;
    this.backdropClass = "";
    this.disableClose = false;
    this.width = "";
    this.height = "";
    this.data = null;
    this.ariaDescribedBy = null;
    this.ariaLabelledBy = null;
    this.ariaLabel = null;
    this.ariaModal = true;
    this.autoFocus = "first-tabbable";
    this.restoreFocus = true;
    this.closeOnNavigation = true;
    this.closeOnDestroy = true;
    this.closeOnOverlayDetachments = true;
  }
};
function throwDialogContentAlreadyAttachedError() {
  throw Error("Attempting to attach dialog content after content is already attached");
}
var _CdkDialogContainer = class _CdkDialogContainer extends BasePortalOutlet {
  constructor(_elementRef, _focusTrapFactory, _document, _config, _interactivityChecker, _ngZone, _overlayRef, _focusMonitor) {
    super();
    this._elementRef = _elementRef;
    this._focusTrapFactory = _focusTrapFactory;
    this._config = _config;
    this._interactivityChecker = _interactivityChecker;
    this._ngZone = _ngZone;
    this._overlayRef = _overlayRef;
    this._focusMonitor = _focusMonitor;
    this._platform = inject(Platform);
    this._focusTrap = null;
    this._elementFocusedBeforeDialogWasOpened = null;
    this._closeInteractionType = null;
    this._ariaLabelledByQueue = [];
    this._changeDetectorRef = inject(ChangeDetectorRef);
    this.attachDomPortal = (portal) => {
      if (this._portalOutlet.hasAttached() && (typeof ngDevMode === "undefined" || ngDevMode)) {
        throwDialogContentAlreadyAttachedError();
      }
      const result = this._portalOutlet.attachDomPortal(portal);
      this._contentAttached();
      return result;
    };
    this._document = _document;
    if (this._config.ariaLabelledBy) {
      this._ariaLabelledByQueue.push(this._config.ariaLabelledBy);
    }
  }
  _addAriaLabelledBy(id) {
    this._ariaLabelledByQueue.push(id);
    this._changeDetectorRef.markForCheck();
  }
  _removeAriaLabelledBy(id) {
    const index = this._ariaLabelledByQueue.indexOf(id);
    if (index > -1) {
      this._ariaLabelledByQueue.splice(index, 1);
      this._changeDetectorRef.markForCheck();
    }
  }
  _contentAttached() {
    this._initializeFocusTrap();
    this._handleBackdropClicks();
    this._captureInitialFocus();
  }
  /**
   * Can be used by child classes to customize the initial focus
   * capturing behavior (e.g. if it's tied to an animation).
   */
  _captureInitialFocus() {
    this._trapFocus();
  }
  ngOnDestroy() {
    this._restoreFocus();
  }
  /**
   * Attach a ComponentPortal as content to this dialog container.
   * @param portal Portal to be attached as the dialog content.
   */
  attachComponentPortal(portal) {
    if (this._portalOutlet.hasAttached() && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throwDialogContentAlreadyAttachedError();
    }
    const result = this._portalOutlet.attachComponentPortal(portal);
    this._contentAttached();
    return result;
  }
  /**
   * Attach a TemplatePortal as content to this dialog container.
   * @param portal Portal to be attached as the dialog content.
   */
  attachTemplatePortal(portal) {
    if (this._portalOutlet.hasAttached() && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throwDialogContentAlreadyAttachedError();
    }
    const result = this._portalOutlet.attachTemplatePortal(portal);
    this._contentAttached();
    return result;
  }
  // TODO(crisbeto): this shouldn't be exposed, but there are internal references to it.
  /** Captures focus if it isn't already inside the dialog. */
  _recaptureFocus() {
    if (!this._containsFocus()) {
      this._trapFocus();
    }
  }
  /**
   * Focuses the provided element. If the element is not focusable, it will add a tabIndex
   * attribute to forcefully focus it. The attribute is removed after focus is moved.
   * @param element The element to focus.
   */
  _forceFocus(element, options) {
    if (!this._interactivityChecker.isFocusable(element)) {
      element.tabIndex = -1;
      this._ngZone.runOutsideAngular(() => {
        const callback = () => {
          element.removeEventListener("blur", callback);
          element.removeEventListener("mousedown", callback);
          element.removeAttribute("tabindex");
        };
        element.addEventListener("blur", callback);
        element.addEventListener("mousedown", callback);
      });
    }
    element.focus(options);
  }
  /**
   * Focuses the first element that matches the given selector within the focus trap.
   * @param selector The CSS selector for the element to set focus to.
   */
  _focusByCssSelector(selector, options) {
    let elementToFocus = this._elementRef.nativeElement.querySelector(selector);
    if (elementToFocus) {
      this._forceFocus(elementToFocus, options);
    }
  }
  /**
   * Moves the focus inside the focus trap. When autoFocus is not set to 'dialog', if focus
   * cannot be moved then focus will go to the dialog container.
   */
  _trapFocus() {
    const element = this._elementRef.nativeElement;
    switch (this._config.autoFocus) {
      case false:
      case "dialog":
        if (!this._containsFocus()) {
          element.focus();
        }
        break;
      case true:
      case "first-tabbable":
        this._focusTrap?.focusInitialElementWhenReady().then((focusedSuccessfully) => {
          if (!focusedSuccessfully) {
            this._focusDialogContainer();
          }
        });
        break;
      case "first-heading":
        this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');
        break;
      default:
        this._focusByCssSelector(this._config.autoFocus);
        break;
    }
  }
  /** Restores focus to the element that was focused before the dialog opened. */
  _restoreFocus() {
    const focusConfig = this._config.restoreFocus;
    let focusTargetElement = null;
    if (typeof focusConfig === "string") {
      focusTargetElement = this._document.querySelector(focusConfig);
    } else if (typeof focusConfig === "boolean") {
      focusTargetElement = focusConfig ? this._elementFocusedBeforeDialogWasOpened : null;
    } else if (focusConfig) {
      focusTargetElement = focusConfig;
    }
    if (this._config.restoreFocus && focusTargetElement && typeof focusTargetElement.focus === "function") {
      const activeElement = _getFocusedElementPierceShadowDom();
      const element = this._elementRef.nativeElement;
      if (!activeElement || activeElement === this._document.body || activeElement === element || element.contains(activeElement)) {
        if (this._focusMonitor) {
          this._focusMonitor.focusVia(focusTargetElement, this._closeInteractionType);
          this._closeInteractionType = null;
        } else {
          focusTargetElement.focus();
        }
      }
    }
    if (this._focusTrap) {
      this._focusTrap.destroy();
    }
  }
  /** Focuses the dialog container. */
  _focusDialogContainer() {
    if (this._elementRef.nativeElement.focus) {
      this._elementRef.nativeElement.focus();
    }
  }
  /** Returns whether focus is inside the dialog. */
  _containsFocus() {
    const element = this._elementRef.nativeElement;
    const activeElement = _getFocusedElementPierceShadowDom();
    return element === activeElement || element.contains(activeElement);
  }
  /** Sets up the focus trap. */
  _initializeFocusTrap() {
    if (this._platform.isBrowser) {
      this._focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement);
      if (this._document) {
        this._elementFocusedBeforeDialogWasOpened = _getFocusedElementPierceShadowDom();
      }
    }
  }
  /** Sets up the listener that handles clicks on the dialog backdrop. */
  _handleBackdropClicks() {
    this._overlayRef.backdropClick().subscribe(() => {
      if (this._config.disableClose) {
        this._recaptureFocus();
      }
    });
  }
};
_CdkDialogContainer.ɵfac = function CdkDialogContainer_Factory(t) {
  return new (t || _CdkDialogContainer)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(FocusTrapFactory), ɵɵdirectiveInject(DOCUMENT, 8), ɵɵdirectiveInject(DialogConfig), ɵɵdirectiveInject(InteractivityChecker), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(OverlayRef), ɵɵdirectiveInject(FocusMonitor));
};
_CdkDialogContainer.ɵcmp = ɵɵdefineComponent({
  type: _CdkDialogContainer,
  selectors: [["cdk-dialog-container"]],
  viewQuery: function CdkDialogContainer_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(CdkPortalOutlet, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._portalOutlet = _t.first);
    }
  },
  hostAttrs: ["tabindex", "-1", 1, "cdk-dialog-container"],
  hostVars: 6,
  hostBindings: function CdkDialogContainer_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("id", ctx._config.id || null)("role", ctx._config.role)("aria-modal", ctx._config.ariaModal)("aria-labelledby", ctx._config.ariaLabel ? null : ctx._ariaLabelledByQueue[0])("aria-label", ctx._config.ariaLabel)("aria-describedby", ctx._config.ariaDescribedBy || null);
    }
  },
  standalone: true,
  features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  decls: 1,
  vars: 0,
  consts: [["cdkPortalOutlet", ""]],
  template: function CdkDialogContainer_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, CdkDialogContainer_ng_template_0_Template, 0, 0, "ng-template", 0);
    }
  },
  dependencies: [CdkPortalOutlet],
  styles: [".cdk-dialog-container{display:block;width:100%;height:100%;min-height:inherit;max-height:inherit}"],
  encapsulation: 2
});
var CdkDialogContainer = _CdkDialogContainer;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkDialogContainer, [{
    type: Component,
    args: [{
      selector: "cdk-dialog-container",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.Default,
      standalone: true,
      imports: [CdkPortalOutlet],
      host: {
        "class": "cdk-dialog-container",
        "tabindex": "-1",
        "[attr.id]": "_config.id || null",
        "[attr.role]": "_config.role",
        "[attr.aria-modal]": "_config.ariaModal",
        "[attr.aria-labelledby]": "_config.ariaLabel ? null : _ariaLabelledByQueue[0]",
        "[attr.aria-label]": "_config.ariaLabel",
        "[attr.aria-describedby]": "_config.ariaDescribedBy || null"
      },
      template: "<ng-template cdkPortalOutlet />\n",
      styles: [".cdk-dialog-container{display:block;width:100%;height:100%;min-height:inherit;max-height:inherit}"]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: FocusTrapFactory
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DialogConfig]
    }]
  }, {
    type: InteractivityChecker
  }, {
    type: NgZone
  }, {
    type: OverlayRef
  }, {
    type: FocusMonitor
  }], {
    _portalOutlet: [{
      type: ViewChild,
      args: [CdkPortalOutlet, {
        static: true
      }]
    }]
  });
})();
var DialogRef = class {
  constructor(overlayRef, config) {
    this.overlayRef = overlayRef;
    this.config = config;
    this.closed = new Subject();
    this.disableClose = config.disableClose;
    this.backdropClick = overlayRef.backdropClick();
    this.keydownEvents = overlayRef.keydownEvents();
    this.outsidePointerEvents = overlayRef.outsidePointerEvents();
    this.id = config.id;
    this.keydownEvents.subscribe((event) => {
      if (event.keyCode === ESCAPE && !this.disableClose && !hasModifierKey(event)) {
        event.preventDefault();
        this.close(void 0, {
          focusOrigin: "keyboard"
        });
      }
    });
    this.backdropClick.subscribe(() => {
      if (!this.disableClose) {
        this.close(void 0, {
          focusOrigin: "mouse"
        });
      }
    });
    this._detachSubscription = overlayRef.detachments().subscribe(() => {
      if (config.closeOnOverlayDetachments !== false) {
        this.close();
      }
    });
  }
  /**
   * Close the dialog.
   * @param result Optional result to return to the dialog opener.
   * @param options Additional options to customize the closing behavior.
   */
  close(result, options) {
    if (this.containerInstance) {
      const closedSubject = this.closed;
      this.containerInstance._closeInteractionType = options?.focusOrigin || "program";
      this._detachSubscription.unsubscribe();
      this.overlayRef.dispose();
      closedSubject.next(result);
      closedSubject.complete();
      this.componentInstance = this.containerInstance = null;
    }
  }
  /** Updates the position of the dialog based on the current position strategy. */
  updatePosition() {
    this.overlayRef.updatePosition();
    return this;
  }
  /**
   * Updates the dialog's width and height.
   * @param width New width of the dialog.
   * @param height New height of the dialog.
   */
  updateSize(width = "", height = "") {
    this.overlayRef.updateSize({
      width,
      height
    });
    return this;
  }
  /** Add a CSS class or an array of classes to the overlay pane. */
  addPanelClass(classes) {
    this.overlayRef.addPanelClass(classes);
    return this;
  }
  /** Remove a CSS class or an array of classes from the overlay pane. */
  removePanelClass(classes) {
    this.overlayRef.removePanelClass(classes);
    return this;
  }
};
var DIALOG_SCROLL_STRATEGY = new InjectionToken("DialogScrollStrategy", {
  providedIn: "root",
  factory: () => {
    const overlay = inject(Overlay);
    return () => overlay.scrollStrategies.block();
  }
});
var DIALOG_DATA = new InjectionToken("DialogData");
var DEFAULT_DIALOG_CONFIG = new InjectionToken("DefaultDialogConfig");
var uniqueId = 0;
var _Dialog = class _Dialog {
  /** Keeps track of the currently-open dialogs. */
  get openDialogs() {
    return this._parentDialog ? this._parentDialog.openDialogs : this._openDialogsAtThisLevel;
  }
  /** Stream that emits when a dialog has been opened. */
  get afterOpened() {
    return this._parentDialog ? this._parentDialog.afterOpened : this._afterOpenedAtThisLevel;
  }
  constructor(_overlay, _injector, _defaultOptions, _parentDialog, _overlayContainer, scrollStrategy) {
    this._overlay = _overlay;
    this._injector = _injector;
    this._defaultOptions = _defaultOptions;
    this._parentDialog = _parentDialog;
    this._overlayContainer = _overlayContainer;
    this._openDialogsAtThisLevel = [];
    this._afterAllClosedAtThisLevel = new Subject();
    this._afterOpenedAtThisLevel = new Subject();
    this._ariaHiddenElements = /* @__PURE__ */ new Map();
    this.afterAllClosed = defer(() => this.openDialogs.length ? this._getAfterAllClosed() : this._getAfterAllClosed().pipe(startWith(void 0)));
    this._scrollStrategy = scrollStrategy;
  }
  open(componentOrTemplateRef, config) {
    const defaults = this._defaultOptions || new DialogConfig();
    config = __spreadValues(__spreadValues({}, defaults), config);
    config.id = config.id || `cdk-dialog-${uniqueId++}`;
    if (config.id && this.getDialogById(config.id) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error(`Dialog with id "${config.id}" exists already. The dialog id must be unique.`);
    }
    const overlayConfig = this._getOverlayConfig(config);
    const overlayRef = this._overlay.create(overlayConfig);
    const dialogRef = new DialogRef(overlayRef, config);
    const dialogContainer = this._attachContainer(overlayRef, dialogRef, config);
    dialogRef.containerInstance = dialogContainer;
    this._attachDialogContent(componentOrTemplateRef, dialogRef, dialogContainer, config);
    if (!this.openDialogs.length) {
      this._hideNonDialogContentFromAssistiveTechnology();
    }
    this.openDialogs.push(dialogRef);
    dialogRef.closed.subscribe(() => this._removeOpenDialog(dialogRef, true));
    this.afterOpened.next(dialogRef);
    return dialogRef;
  }
  /**
   * Closes all of the currently-open dialogs.
   */
  closeAll() {
    reverseForEach(this.openDialogs, (dialog) => dialog.close());
  }
  /**
   * Finds an open dialog by its id.
   * @param id ID to use when looking up the dialog.
   */
  getDialogById(id) {
    return this.openDialogs.find((dialog) => dialog.id === id);
  }
  ngOnDestroy() {
    reverseForEach(this._openDialogsAtThisLevel, (dialog) => {
      if (dialog.config.closeOnDestroy === false) {
        this._removeOpenDialog(dialog, false);
      }
    });
    reverseForEach(this._openDialogsAtThisLevel, (dialog) => dialog.close());
    this._afterAllClosedAtThisLevel.complete();
    this._afterOpenedAtThisLevel.complete();
    this._openDialogsAtThisLevel = [];
  }
  /**
   * Creates an overlay config from a dialog config.
   * @param config The dialog configuration.
   * @returns The overlay configuration.
   */
  _getOverlayConfig(config) {
    const state = new OverlayConfig({
      positionStrategy: config.positionStrategy || this._overlay.position().global().centerHorizontally().centerVertically(),
      scrollStrategy: config.scrollStrategy || this._scrollStrategy(),
      panelClass: config.panelClass,
      hasBackdrop: config.hasBackdrop,
      direction: config.direction,
      minWidth: config.minWidth,
      minHeight: config.minHeight,
      maxWidth: config.maxWidth,
      maxHeight: config.maxHeight,
      width: config.width,
      height: config.height,
      disposeOnNavigation: config.closeOnNavigation
    });
    if (config.backdropClass) {
      state.backdropClass = config.backdropClass;
    }
    return state;
  }
  /**
   * Attaches a dialog container to a dialog's already-created overlay.
   * @param overlay Reference to the dialog's underlying overlay.
   * @param config The dialog configuration.
   * @returns A promise resolving to a ComponentRef for the attached container.
   */
  _attachContainer(overlay, dialogRef, config) {
    const userInjector = config.injector || config.viewContainerRef?.injector;
    const providers = [{
      provide: DialogConfig,
      useValue: config
    }, {
      provide: DialogRef,
      useValue: dialogRef
    }, {
      provide: OverlayRef,
      useValue: overlay
    }];
    let containerType;
    if (config.container) {
      if (typeof config.container === "function") {
        containerType = config.container;
      } else {
        containerType = config.container.type;
        providers.push(...config.container.providers(config));
      }
    } else {
      containerType = CdkDialogContainer;
    }
    const containerPortal = new ComponentPortal(containerType, config.viewContainerRef, Injector.create({
      parent: userInjector || this._injector,
      providers
    }), config.componentFactoryResolver);
    const containerRef = overlay.attach(containerPortal);
    return containerRef.instance;
  }
  /**
   * Attaches the user-provided component to the already-created dialog container.
   * @param componentOrTemplateRef The type of component being loaded into the dialog,
   *     or a TemplateRef to instantiate as the content.
   * @param dialogRef Reference to the dialog being opened.
   * @param dialogContainer Component that is going to wrap the dialog content.
   * @param config Configuration used to open the dialog.
   */
  _attachDialogContent(componentOrTemplateRef, dialogRef, dialogContainer, config) {
    if (componentOrTemplateRef instanceof TemplateRef) {
      const injector = this._createInjector(config, dialogRef, dialogContainer, void 0);
      let context = {
        $implicit: config.data,
        dialogRef
      };
      if (config.templateContext) {
        context = __spreadValues(__spreadValues({}, context), typeof config.templateContext === "function" ? config.templateContext() : config.templateContext);
      }
      dialogContainer.attachTemplatePortal(new TemplatePortal(componentOrTemplateRef, null, context, injector));
    } else {
      const injector = this._createInjector(config, dialogRef, dialogContainer, this._injector);
      const contentRef = dialogContainer.attachComponentPortal(new ComponentPortal(componentOrTemplateRef, config.viewContainerRef, injector, config.componentFactoryResolver));
      dialogRef.componentRef = contentRef;
      dialogRef.componentInstance = contentRef.instance;
    }
  }
  /**
   * Creates a custom injector to be used inside the dialog. This allows a component loaded inside
   * of a dialog to close itself and, optionally, to return a value.
   * @param config Config object that is used to construct the dialog.
   * @param dialogRef Reference to the dialog being opened.
   * @param dialogContainer Component that is going to wrap the dialog content.
   * @param fallbackInjector Injector to use as a fallback when a lookup fails in the custom
   * dialog injector, if the user didn't provide a custom one.
   * @returns The custom injector that can be used inside the dialog.
   */
  _createInjector(config, dialogRef, dialogContainer, fallbackInjector) {
    const userInjector = config.injector || config.viewContainerRef?.injector;
    const providers = [{
      provide: DIALOG_DATA,
      useValue: config.data
    }, {
      provide: DialogRef,
      useValue: dialogRef
    }];
    if (config.providers) {
      if (typeof config.providers === "function") {
        providers.push(...config.providers(dialogRef, config, dialogContainer));
      } else {
        providers.push(...config.providers);
      }
    }
    if (config.direction && (!userInjector || !userInjector.get(Directionality, null, {
      optional: true
    }))) {
      providers.push({
        provide: Directionality,
        useValue: {
          value: config.direction,
          change: of()
        }
      });
    }
    return Injector.create({
      parent: userInjector || fallbackInjector,
      providers
    });
  }
  /**
   * Removes a dialog from the array of open dialogs.
   * @param dialogRef Dialog to be removed.
   * @param emitEvent Whether to emit an event if this is the last dialog.
   */
  _removeOpenDialog(dialogRef, emitEvent) {
    const index = this.openDialogs.indexOf(dialogRef);
    if (index > -1) {
      this.openDialogs.splice(index, 1);
      if (!this.openDialogs.length) {
        this._ariaHiddenElements.forEach((previousValue, element) => {
          if (previousValue) {
            element.setAttribute("aria-hidden", previousValue);
          } else {
            element.removeAttribute("aria-hidden");
          }
        });
        this._ariaHiddenElements.clear();
        if (emitEvent) {
          this._getAfterAllClosed().next();
        }
      }
    }
  }
  /** Hides all of the content that isn't an overlay from assistive technology. */
  _hideNonDialogContentFromAssistiveTechnology() {
    const overlayContainer = this._overlayContainer.getContainerElement();
    if (overlayContainer.parentElement) {
      const siblings = overlayContainer.parentElement.children;
      for (let i = siblings.length - 1; i > -1; i--) {
        const sibling = siblings[i];
        if (sibling !== overlayContainer && sibling.nodeName !== "SCRIPT" && sibling.nodeName !== "STYLE" && !sibling.hasAttribute("aria-live")) {
          this._ariaHiddenElements.set(sibling, sibling.getAttribute("aria-hidden"));
          sibling.setAttribute("aria-hidden", "true");
        }
      }
    }
  }
  _getAfterAllClosed() {
    const parent = this._parentDialog;
    return parent ? parent._getAfterAllClosed() : this._afterAllClosedAtThisLevel;
  }
};
_Dialog.ɵfac = function Dialog_Factory(t) {
  return new (t || _Dialog)(ɵɵinject(Overlay), ɵɵinject(Injector), ɵɵinject(DEFAULT_DIALOG_CONFIG, 8), ɵɵinject(_Dialog, 12), ɵɵinject(OverlayContainer), ɵɵinject(DIALOG_SCROLL_STRATEGY));
};
_Dialog.ɵprov = ɵɵdefineInjectable({
  token: _Dialog,
  factory: _Dialog.ɵfac,
  providedIn: "root"
});
var Dialog = _Dialog;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Dialog, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Overlay
  }, {
    type: Injector
  }, {
    type: DialogConfig,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [DEFAULT_DIALOG_CONFIG]
    }]
  }, {
    type: Dialog,
    decorators: [{
      type: Optional
    }, {
      type: SkipSelf
    }]
  }, {
    type: OverlayContainer
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DIALOG_SCROLL_STRATEGY]
    }]
  }], null);
})();
function reverseForEach(items, callback) {
  let i = items.length;
  while (i--) {
    callback(items[i]);
  }
}
var _DialogModule = class _DialogModule {
};
_DialogModule.ɵfac = function DialogModule_Factory(t) {
  return new (t || _DialogModule)();
};
_DialogModule.ɵmod = ɵɵdefineNgModule({
  type: _DialogModule,
  imports: [OverlayModule, PortalModule, A11yModule, CdkDialogContainer],
  exports: [
    // Re-export the PortalModule so that people extending the `CdkDialogContainer`
    // don't have to remember to import it or be faced with an unhelpful error.
    PortalModule,
    CdkDialogContainer
  ]
});
_DialogModule.ɵinj = ɵɵdefineInjector({
  providers: [Dialog],
  imports: [
    OverlayModule,
    PortalModule,
    A11yModule,
    // Re-export the PortalModule so that people extending the `CdkDialogContainer`
    // don't have to remember to import it or be faced with an unhelpful error.
    PortalModule
  ]
});
var DialogModule = _DialogModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DialogModule, [{
    type: NgModule,
    args: [{
      imports: [OverlayModule, PortalModule, A11yModule, CdkDialogContainer],
      exports: [
        // Re-export the PortalModule so that people extending the `CdkDialogContainer`
        // don't have to remember to import it or be faced with an unhelpful error.
        PortalModule,
        CdkDialogContainer
      ],
      providers: [Dialog]
    }]
  }], null, null);
})();

// node_modules/@spartan-ng/ui-dialog-brain/fesm2022/spartan-ng-ui-dialog-brain.mjs
var _c0 = ["*"];
var dialogSequence = 0;
var cssClassesToArray = (classes, defaultClass = "") => {
  if (typeof classes === "string") {
    const splitClasses = classes.trim().split(" ");
    if (splitClasses.length === 0) {
      return [defaultClass];
    }
    return splitClasses;
  }
  return classes ?? [];
};
var injectBrnDialogCtx = () => {
  return inject(DIALOG_DATA);
};
var injectBrnDialogContext = (options = {}) => {
  return inject(DIALOG_DATA, options);
};
var _BrnDialogService = class _BrnDialogService {
  constructor() {
    this._cdkDialog = inject(Dialog);
    this._rendererFactory = inject(RendererFactory2);
    this._renderer = this._rendererFactory.createRenderer(null, null);
    this._positionBuilder = inject(OverlayPositionBuilder);
    this._sso = inject(ScrollStrategyOptions);
    this._injector = inject(Injector);
  }
  open(content, vcr, context, options) {
    if (options?.id && this._cdkDialog.getDialogById(options.id)) {
      throw new Error(`Dialog with ID: ${options.id} already exists`);
    }
    const positionStrategy = options?.positionStrategy ?? (options?.attachTo && options?.attachPositions && options?.attachPositions?.length > 0 ? this._positionBuilder?.flexibleConnectedTo(options.attachTo).withPositions(options.attachPositions ?? []) : this._positionBuilder.global().centerHorizontally().centerVertically());
    let brnDialogRef;
    let effectRef;
    const contextOrData = __spreadProps(__spreadValues({}, context), {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      close: (result = void 0) => brnDialogRef.close(result, options?.closeDelay)
    });
    const destroyed$ = new Subject();
    const open = signal(true);
    const state = computed(() => open() ? "open" : "closed");
    const dialogId = dialogSequence++;
    const cdkDialogRef = this._cdkDialog.open(content, {
      id: options?.id ?? `brn-dialog-${dialogId}`,
      role: options?.role,
      viewContainerRef: vcr,
      templateContext: () => ({
        $implicit: contextOrData
      }),
      data: contextOrData,
      hasBackdrop: options?.hasBackdrop,
      panelClass: cssClassesToArray(options?.panelClass),
      backdropClass: cssClassesToArray(options?.backdropClass, "bg-transparent"),
      positionStrategy,
      scrollStrategy: options?.scrollStrategy ?? this._sso?.block(),
      restoreFocus: options?.restoreFocus,
      disableClose: true,
      autoFocus: options?.autoFocus ?? "first-tabbable",
      ariaDescribedBy: options?.ariaDescribedBy ?? `brn-dialog-description-${dialogId}`,
      ariaLabelledBy: options?.ariaLabelledBy ?? `brn-dialog-title-${dialogId}`,
      ariaLabel: options?.ariaLabel,
      ariaModal: options?.ariaModal,
      providers: (cdkDialogRef2) => {
        brnDialogRef = new BrnDialogRef(cdkDialogRef2, open, state, dialogId, options);
        runInInjectionContext(this._injector, () => {
          effectRef = effect(() => {
            if (overlay) {
              this._renderer.setAttribute(overlay, "data-state", state());
            }
            if (backdrop) {
              this._renderer.setAttribute(backdrop, "data-state", state());
            }
          });
        });
        const providers = [{
          provide: BrnDialogRef,
          useValue: brnDialogRef
        }];
        if (options?.providers) {
          if (typeof options.providers === "function") {
            providers.push(...options.providers());
          }
          if (Array.isArray(options.providers)) {
            providers.push(...options.providers);
          }
        }
        return providers;
      }
    });
    const overlay = cdkDialogRef.overlayRef.overlayElement;
    const backdrop = cdkDialogRef.overlayRef.backdropElement;
    if (options?.closeOnOutsidePointerEvents) {
      cdkDialogRef.outsidePointerEvents.pipe(takeUntil(destroyed$)).subscribe(() => {
        brnDialogRef.close(void 0, options?.closeDelay);
      });
    }
    if (options?.closeOnBackdropClick) {
      cdkDialogRef.backdropClick.pipe(takeUntil(destroyed$)).subscribe(() => {
        brnDialogRef.close(void 0, options?.closeDelay);
      });
    }
    if (!options?.disableClose) {
      cdkDialogRef.keydownEvents.pipe(filter((e) => e.key === "Escape"), takeUntil(destroyed$)).subscribe(() => {
        brnDialogRef.close(void 0, options?.closeDelay);
      });
    }
    cdkDialogRef.closed.pipe(takeUntil(destroyed$)).subscribe(() => {
      effectRef?.destroy();
      destroyed$.next();
    });
    return brnDialogRef;
  }
};
_BrnDialogService.ɵfac = function BrnDialogService_Factory(t) {
  return new (t || _BrnDialogService)();
};
_BrnDialogService.ɵprov = ɵɵdefineInjectable({
  token: _BrnDialogService,
  factory: _BrnDialogService.ɵfac,
  providedIn: "root"
});
var BrnDialogService = _BrnDialogService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrnDialogService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var BrnDialogRef = class {
  get open() {
    return this.state() === "open";
  }
  constructor(_cdkDialogRef, _open, state, dialogId, _options) {
    this._cdkDialogRef = _cdkDialogRef;
    this._open = _open;
    this.state = state;
    this.dialogId = dialogId;
    this._options = _options;
    this._closing$ = new Subject();
    this.closing$ = this._closing$.asObservable();
    this.closed$ = this._cdkDialogRef.closed.pipe(take(1));
  }
  close(result, delay = this._options?.closeDelay ?? 0) {
    if (!this.open || this._options?.disableClose)
      return;
    this._closing$.next();
    this._open.set(false);
    if (this._previousTimeout) {
      clearTimeout(this._previousTimeout);
    }
    this._previousTimeout = setTimeout(() => {
      this._cdkDialogRef.close(result);
    }, delay);
  }
  setPanelClass(paneClass) {
    this._cdkDialogRef.config.panelClass = cssClassesToArray(paneClass);
  }
  setOverlayClass(overlayClass) {
    this._cdkDialogRef.config.backdropClass = cssClassesToArray(overlayClass);
  }
  setAriaDescribedBy(ariaDescribedBy) {
    this._cdkDialogRef.config.ariaDescribedBy = ariaDescribedBy;
  }
  setAriaLabelledBy(ariaLabelledBy) {
    this._cdkDialogRef.config.ariaLabelledBy = ariaLabelledBy;
  }
  setAriaLabel(ariaLabel) {
    this._cdkDialogRef.config.ariaLabel = ariaLabel;
  }
};
var _BrnDialogCloseDirective = class _BrnDialogCloseDirective {
  constructor() {
    this._brnDialogRef = inject(BrnDialogRef);
  }
  set delay(value) {
    this._delay = coerceNumberProperty(value);
  }
  close() {
    this._brnDialogRef.close(void 0, this._delay);
  }
};
_BrnDialogCloseDirective.ɵfac = function BrnDialogCloseDirective_Factory(t) {
  return new (t || _BrnDialogCloseDirective)();
};
_BrnDialogCloseDirective.ɵdir = ɵɵdefineDirective({
  type: _BrnDialogCloseDirective,
  selectors: [["button", "brnDialogClose", ""]],
  hostBindings: function BrnDialogCloseDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function BrnDialogCloseDirective_click_HostBindingHandler() {
        return ctx.close();
      });
    }
  },
  inputs: {
    delay: "delay"
  },
  standalone: true
});
var BrnDialogCloseDirective = _BrnDialogCloseDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrnDialogCloseDirective, [{
    type: Directive,
    args: [{
      selector: "button[brnDialogClose]",
      standalone: true,
      host: {
        "(click)": "close()"
      }
    }]
  }], null, {
    delay: [{
      type: Input
    }]
  });
})();
var DEFAULT_BRN_DIALOG_OPTIONS = {
  role: "dialog",
  attachPositions: [],
  attachTo: null,
  autoFocus: "first-tabbable",
  backdropClass: "",
  closeDelay: 0,
  closeOnBackdropClick: true,
  closeOnOutsidePointerEvents: false,
  hasBackdrop: true,
  panelClass: "",
  positionStrategy: null,
  restoreFocus: true,
  scrollStrategy: null,
  disableClose: false,
  ariaLabel: void 0,
  ariaModal: true
};
var _BrnDialogComponent = class _BrnDialogComponent {
  constructor() {
    this._dialogService = inject(BrnDialogService);
    this._vcr = inject(ViewContainerRef);
    this.positionBuilder = inject(OverlayPositionBuilder);
    this.ssos = inject(ScrollStrategyOptions);
    this._injector = inject(Injector);
    this._context = {};
    this._options = __spreadValues({}, DEFAULT_BRN_DIALOG_OPTIONS);
    this._dialogRef = signal(void 0);
    this.state = computed(() => this._dialogRef()?.state() ?? "closed");
    this.closed = new EventEmitter();
    this.stateChanged = new EventEmitter();
  }
  // eslint-disable-next-line @angular-eslint/no-input-rename
  set newState(state) {
    if (state === "open") {
      this.open();
    }
    if (state === "closed") {
      this.close(this._options["closeDelay"]);
    }
  }
  set role(role) {
    this._options["role"] = role;
  }
  set hasBackdrop(hasBackdrop) {
    this._options["hasBackdrop"] = hasBackdrop;
  }
  set positionStrategy(positionStrategy) {
    this._options["positionStrategy"] = positionStrategy;
  }
  set scrollStrategy(scrollStrategy) {
    if (scrollStrategy === "close") {
      this._options["scrollStrategy"] = this.ssos.close();
    } else if (scrollStrategy === "reposition") {
      this._options["scrollStrategy"] = this.ssos.reposition();
    } else {
      this._options["scrollStrategy"] = scrollStrategy;
    }
  }
  set restoreFocus(restoreFocus) {
    this._options["restoreFocus"] = restoreFocus;
  }
  set closeOnOutsidePointerEvents(closeOnOutsidePointerEvents) {
    this._options["closeOnOutsidePointerEvents"] = closeOnOutsidePointerEvents;
  }
  set closeOnBackdropClick(closeOnBackdropClick) {
    this._options["closeOnBackdropClick"] = closeOnBackdropClick;
  }
  set attachTo(attachTo) {
    this._options["attachTo"] = attachTo;
  }
  set attachPositions(attachPositions) {
    this._options["attachPositions"] = attachPositions;
  }
  set autoFocus(autoFocus) {
    this._options["autoFocus"] = autoFocus;
  }
  set closeDelay(closeDelay) {
    this._options["closeDelay"] = closeDelay;
  }
  set disableClose(disableClose) {
    this._options["disableClose"] = disableClose;
  }
  /* eslint-disable-next-line @angular-eslint/no-input-rename */
  set ariaDescribedBy(ariaDescribedBy) {
    this.setAriaDescribedBy(ariaDescribedBy);
  }
  /* eslint-disable-next-line @angular-eslint/no-input-rename */
  set ariaLabelledBy(ariaLabelledBy) {
    this.setAriaLabelledBy(ariaLabelledBy);
  }
  /* eslint-disable-next-line @angular-eslint/no-input-rename */
  set ariaLabel(ariaLabel) {
    this.setAriaLabel(ariaLabel);
  }
  /* eslint-disable-next-line @angular-eslint/no-input-rename */
  set ariaModal(isModal) {
    this.setAriaModal(isModal);
  }
  open() {
    if (!this._contentTemplate || this._dialogRef())
      return;
    this._dialogStateEffectRef?.destroy();
    const dialogRef = this._dialogService.open(this._contentTemplate, this._vcr, this._context, this._options);
    this._dialogRef.set(dialogRef);
    runInInjectionContext(this._injector, () => {
      this._dialogStateEffectRef = effect(() => this.stateChanged.emit(dialogRef.state()));
    });
    dialogRef.closed$.pipe(take(1)).subscribe((result) => {
      this._dialogRef.set(void 0);
      this.closed.emit(result);
    });
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  close(result, delay) {
    this._dialogRef()?.close(result, delay ?? this._options.closeDelay);
  }
  registerTemplate(template) {
    this._contentTemplate = template;
  }
  setOverlayClass(overlayClass) {
    this._options["backdropClass"] = overlayClass ?? "";
    this._dialogRef()?.setOverlayClass(overlayClass);
  }
  setPanelClass(panelClass) {
    this._options["panelClass"] = panelClass ?? "";
    this._dialogRef()?.setPanelClass(panelClass);
  }
  setContext(context) {
    this._context = __spreadValues(__spreadValues({}, this._context), context);
  }
  setAriaDescribedBy(ariaDescribedBy) {
    this._options = __spreadProps(__spreadValues({}, this._options), {
      ariaDescribedBy
    });
    this._dialogRef()?.setAriaDescribedBy(ariaDescribedBy);
  }
  setAriaLabelledBy(ariaLabelledBy) {
    this._options = __spreadProps(__spreadValues({}, this._options), {
      ariaLabelledBy
    });
    this._dialogRef()?.setAriaLabelledBy(ariaLabelledBy);
  }
  setAriaLabel(ariaLabel) {
    this._options = __spreadProps(__spreadValues({}, this._options), {
      ariaLabel
    });
    this._dialogRef()?.setAriaLabel(ariaLabel);
  }
  setAriaModal(ariaModal) {
    this._options = __spreadProps(__spreadValues({}, this._options), {
      ariaModal
    });
  }
};
_BrnDialogComponent.ɵfac = function BrnDialogComponent_Factory(t) {
  return new (t || _BrnDialogComponent)();
};
_BrnDialogComponent.ɵcmp = ɵɵdefineComponent({
  type: _BrnDialogComponent,
  selectors: [["brn-dialog"]],
  inputs: {
    newState: [InputFlags.None, "state", "newState"],
    role: "role",
    hasBackdrop: [InputFlags.HasDecoratorInputTransform, "hasBackdrop", "hasBackdrop", booleanAttribute],
    positionStrategy: "positionStrategy",
    scrollStrategy: "scrollStrategy",
    restoreFocus: "restoreFocus",
    closeOnOutsidePointerEvents: [InputFlags.HasDecoratorInputTransform, "closeOnOutsidePointerEvents", "closeOnOutsidePointerEvents", booleanAttribute],
    closeOnBackdropClick: [InputFlags.HasDecoratorInputTransform, "closeOnBackdropClick", "closeOnBackdropClick", booleanAttribute],
    attachTo: "attachTo",
    attachPositions: "attachPositions",
    autoFocus: "autoFocus",
    closeDelay: [InputFlags.HasDecoratorInputTransform, "closeDelay", "closeDelay", numberAttribute],
    disableClose: [InputFlags.HasDecoratorInputTransform, "disableClose", "disableClose", booleanAttribute],
    ariaDescribedBy: [InputFlags.None, "aria-describedby", "ariaDescribedBy"],
    ariaLabelledBy: [InputFlags.None, "aria-labelledby", "ariaLabelledBy"],
    ariaLabel: [InputFlags.None, "aria-label", "ariaLabel"],
    ariaModal: [InputFlags.HasDecoratorInputTransform, "aria-modal", "ariaModal", booleanAttribute]
  },
  outputs: {
    closed: "closed",
    stateChanged: "stateChanged"
  },
  exportAs: ["brnDialog"],
  standalone: true,
  features: [ɵɵInputTransformsFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function BrnDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var BrnDialogComponent = _BrnDialogComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrnDialogComponent, [{
    type: Component,
    args: [{
      selector: "brn-dialog",
      standalone: true,
      template: `
		<ng-content />
	`,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      exportAs: "brnDialog"
    }]
  }], null, {
    closed: [{
      type: Output
    }],
    stateChanged: [{
      type: Output
    }],
    newState: [{
      type: Input,
      args: ["state"]
    }],
    role: [{
      type: Input
    }],
    hasBackdrop: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    positionStrategy: [{
      type: Input
    }],
    scrollStrategy: [{
      type: Input
    }],
    restoreFocus: [{
      type: Input
    }],
    closeOnOutsidePointerEvents: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    closeOnBackdropClick: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    attachTo: [{
      type: Input
    }],
    attachPositions: [{
      type: Input
    }],
    autoFocus: [{
      type: Input
    }],
    closeDelay: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    disableClose: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    ariaDescribedBy: [{
      type: Input,
      args: ["aria-describedby"]
    }],
    ariaLabelledBy: [{
      type: Input,
      args: ["aria-labelledby"]
    }],
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    ariaModal: [{
      type: Input,
      args: [{
        alias: "aria-modal",
        transform: booleanAttribute
      }]
    }]
  });
})();
var _BrnDialogContentDirective = class _BrnDialogContentDirective {
  constructor() {
    this._brnDialog = inject(BrnDialogComponent, {
      optional: true
    });
    this._brnDialogRef = inject(BrnDialogRef, {
      optional: true
    });
    this._template = inject(TemplateRef);
    this.state = computed(() => this._brnDialog?.state() ?? this._brnDialogRef?.state() ?? "closed");
    if (!this._brnDialog)
      return;
    this._brnDialog.registerTemplate(this._template);
  }
  set class(newClass) {
    if (!this._brnDialog)
      return;
    this._brnDialog.setPanelClass(newClass);
  }
  set context(context) {
    if (!this._brnDialog)
      return;
    this._brnDialog.setContext(context);
  }
};
_BrnDialogContentDirective.ɵfac = function BrnDialogContentDirective_Factory(t) {
  return new (t || _BrnDialogContentDirective)();
};
_BrnDialogContentDirective.ɵdir = ɵɵdefineDirective({
  type: _BrnDialogContentDirective,
  selectors: [["", "brnDialogContent", ""]],
  inputs: {
    class: "class",
    context: "context"
  },
  standalone: true,
  features: [ɵɵProvidersFeature([provideExposesStateProviderExisting(() => _BrnDialogContentDirective)])]
});
var BrnDialogContentDirective = _BrnDialogContentDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrnDialogContentDirective, [{
    type: Directive,
    args: [{
      selector: "[brnDialogContent]",
      standalone: true,
      providers: [provideExposesStateProviderExisting(() => BrnDialogContentDirective)]
    }]
  }], () => [], {
    class: [{
      type: Input
    }],
    context: [{
      type: Input
    }]
  });
})();
var _BrnDialogDescriptionDirective = class _BrnDialogDescriptionDirective {
  constructor() {
    this._brnDialogRef = inject(BrnDialogRef);
    this._id = signal(`brn-dialog-description-${this._brnDialogRef?.dialogId}`);
    effect(() => {
      this._brnDialogRef.setAriaDescribedBy(this._id());
    });
  }
};
_BrnDialogDescriptionDirective.ɵfac = function BrnDialogDescriptionDirective_Factory(t) {
  return new (t || _BrnDialogDescriptionDirective)();
};
_BrnDialogDescriptionDirective.ɵdir = ɵɵdefineDirective({
  type: _BrnDialogDescriptionDirective,
  selectors: [["", "brnDialogDescription", ""]],
  hostVars: 1,
  hostBindings: function BrnDialogDescriptionDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵhostProperty("id", ctx._id());
    }
  },
  standalone: true
});
var BrnDialogDescriptionDirective = _BrnDialogDescriptionDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrnDialogDescriptionDirective, [{
    type: Directive,
    args: [{
      selector: "[brnDialogDescription]",
      standalone: true,
      host: {
        "[id]": "_id()"
      }
    }]
  }], () => [], null);
})();
var _BrnDialogOverlayComponent = class _BrnDialogOverlayComponent {
  constructor() {
    this._brnDialog = inject(BrnDialogComponent);
  }
  set class(newClass) {
    this._brnDialog.setOverlayClass(newClass);
  }
  setClassToCustomElement(newClass) {
    this._brnDialog.setOverlayClass(newClass);
  }
};
_BrnDialogOverlayComponent.ɵfac = function BrnDialogOverlayComponent_Factory(t) {
  return new (t || _BrnDialogOverlayComponent)();
};
_BrnDialogOverlayComponent.ɵcmp = ɵɵdefineComponent({
  type: _BrnDialogOverlayComponent,
  selectors: [["brn-dialog-overlay"]],
  inputs: {
    class: "class"
  },
  standalone: true,
  features: [ɵɵProvidersFeature([provideCustomClassSettableExisting(() => _BrnDialogOverlayComponent)]), ɵɵStandaloneFeature],
  decls: 0,
  vars: 0,
  template: function BrnDialogOverlayComponent_Template(rf, ctx) {
  },
  encapsulation: 2,
  changeDetection: 0
});
var BrnDialogOverlayComponent = _BrnDialogOverlayComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrnDialogOverlayComponent, [{
    type: Component,
    args: [{
      selector: "brn-dialog-overlay",
      standalone: true,
      template: ``,
      providers: [provideCustomClassSettableExisting(() => BrnDialogOverlayComponent)],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None
    }]
  }], null, {
    class: [{
      type: Input
    }]
  });
})();
var _BrnDialogTitleDirective = class _BrnDialogTitleDirective {
  constructor() {
    this._brnDialogRef = inject(BrnDialogRef);
    this._id = signal(`brn-dialog-title-${this._brnDialogRef?.dialogId}`);
    effect(() => {
      this._brnDialogRef.setAriaLabelledBy(this._id());
    });
  }
};
_BrnDialogTitleDirective.ɵfac = function BrnDialogTitleDirective_Factory(t) {
  return new (t || _BrnDialogTitleDirective)();
};
_BrnDialogTitleDirective.ɵdir = ɵɵdefineDirective({
  type: _BrnDialogTitleDirective,
  selectors: [["", "brnDialogTitle", ""]],
  hostVars: 1,
  hostBindings: function BrnDialogTitleDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵhostProperty("id", ctx._id());
    }
  },
  standalone: true
});
var BrnDialogTitleDirective = _BrnDialogTitleDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrnDialogTitleDirective, [{
    type: Directive,
    args: [{
      selector: "[brnDialogTitle]",
      standalone: true,
      host: {
        "[id]": "_id()"
      }
    }]
  }], () => [], null);
})();
var idSequence = 0;
var _BrnDialogTriggerDirective = class _BrnDialogTriggerDirective {
  constructor() {
    this._brnDialog = inject(BrnDialogComponent, {
      optional: true
    });
    this._brnDialogRef = inject(BrnDialogRef, {
      optional: true
    });
    this.id = input(`brn-dialog-trigger-${idSequence++}`);
    this.state = this._brnDialogRef?.state ?? signal("closed");
    this.dialogId = `brn-dialog-${this._brnDialogRef?.dialogId ?? idSequence++}`;
  }
  set brnDialogTriggerFor(brnDialog) {
    this._brnDialog = brnDialog;
  }
  open() {
    this._brnDialog?.open();
  }
};
_BrnDialogTriggerDirective.ɵfac = function BrnDialogTriggerDirective_Factory(t) {
  return new (t || _BrnDialogTriggerDirective)();
};
_BrnDialogTriggerDirective.ɵdir = ɵɵdefineDirective({
  type: _BrnDialogTriggerDirective,
  selectors: [["button", "brnDialogTrigger", ""], ["button", "brnDialogTriggerFor", ""]],
  hostAttrs: ["aria-haspopup", "dialog"],
  hostVars: 4,
  hostBindings: function BrnDialogTriggerDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function BrnDialogTriggerDirective_click_HostBindingHandler() {
        return ctx.open();
      });
    }
    if (rf & 2) {
      ɵɵhostProperty("id", ctx.id());
      ɵɵattribute("aria-expanded", ctx.state() === "open" ? "true" : "false")("data-state", ctx.state())("aria-controls", ctx.dialogId);
    }
  },
  inputs: {
    id: [InputFlags.SignalBased, "id"],
    brnDialogTriggerFor: "brnDialogTriggerFor"
  },
  exportAs: ["brnDialogTrigger"],
  standalone: true
});
var BrnDialogTriggerDirective = _BrnDialogTriggerDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrnDialogTriggerDirective, [{
    type: Directive,
    args: [{
      selector: "button[brnDialogTrigger],button[brnDialogTriggerFor]",
      standalone: true,
      host: {
        "[id]": "id()",
        "(click)": "open()",
        "aria-haspopup": "dialog",
        "[attr.aria-expanded]": "state() === 'open' ? 'true': 'false'",
        "[attr.data-state]": "state()",
        "[attr.aria-controls]": "dialogId"
      },
      exportAs: "brnDialogTrigger"
    }]
  }], null, {
    brnDialogTriggerFor: [{
      type: Input
    }]
  });
})();
var BrnDialogImports = [BrnDialogComponent, BrnDialogOverlayComponent, BrnDialogTriggerDirective, BrnDialogCloseDirective, BrnDialogContentDirective, BrnDialogTitleDirective, BrnDialogDescriptionDirective];
var _BrnDialogModule = class _BrnDialogModule {
};
_BrnDialogModule.ɵfac = function BrnDialogModule_Factory(t) {
  return new (t || _BrnDialogModule)();
};
_BrnDialogModule.ɵmod = ɵɵdefineNgModule({
  type: _BrnDialogModule,
  imports: [BrnDialogComponent, BrnDialogOverlayComponent, BrnDialogTriggerDirective, BrnDialogCloseDirective, BrnDialogContentDirective, BrnDialogTitleDirective, BrnDialogDescriptionDirective],
  exports: [BrnDialogComponent, BrnDialogOverlayComponent, BrnDialogTriggerDirective, BrnDialogCloseDirective, BrnDialogContentDirective, BrnDialogTitleDirective, BrnDialogDescriptionDirective]
});
_BrnDialogModule.ɵinj = ɵɵdefineInjector({});
var BrnDialogModule = _BrnDialogModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrnDialogModule, [{
    type: NgModule,
    args: [{
      imports: [...BrnDialogImports],
      exports: [...BrnDialogImports]
    }]
  }], null, null);
})();
export {
  BrnDialogCloseDirective,
  BrnDialogComponent,
  BrnDialogContentDirective,
  BrnDialogDescriptionDirective,
  BrnDialogImports,
  BrnDialogModule,
  BrnDialogOverlayComponent,
  BrnDialogRef,
  BrnDialogService,
  BrnDialogTitleDirective,
  BrnDialogTriggerDirective,
  DEFAULT_BRN_DIALOG_OPTIONS,
  cssClassesToArray,
  injectBrnDialogContext,
  injectBrnDialogCtx
};
//# sourceMappingURL=@spartan-ng_ui-dialog-brain.js.map
