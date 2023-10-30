/*! For license information please see pubsub-stories.b1f4c90f.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkpubsub_hooks=self.webpackChunkpubsub_hooks||[]).push([[538],{"./stories/pubsub.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{PubSub:()=>PubSub,__namedExportsOrder:()=>__namedExportsOrder,default:()=>pubsub_stories});var react=__webpack_require__("./node_modules/react/index.js"),extendStatics=function(d,b){return extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b}||function(d,b){for(var p in b)Object.prototype.hasOwnProperty.call(b,p)&&(d[p]=b[p])},extendStatics(d,b)};function __extends(d,b){if("function"!=typeof b&&null!==b)throw new TypeError("Class extends value "+String(b)+" is not a constructor or null");function __(){this.constructor=d}extendStatics(d,b),d.prototype=null===b?Object.create(b):(__.prototype=b.prototype,new __)}Object.create;function __values(o){var s="function"==typeof Symbol&&Symbol.iterator,m=s&&o[s],i=0;if(m)return m.call(o);if(o&&"number"==typeof o.length)return{next:function(){return o&&i>=o.length&&(o=void 0),{value:o&&o[i++],done:!o}}};throw new TypeError(s?"Object is not iterable.":"Symbol.iterator is not defined.")}function __read(o,n){var m="function"==typeof Symbol&&o[Symbol.iterator];if(!m)return o;var r,e,i=m.call(o),ar=[];try{for(;(void 0===n||n-- >0)&&!(r=i.next()).done;)ar.push(r.value)}catch(error){e={error}}finally{try{r&&!r.done&&(m=i.return)&&m.call(i)}finally{if(e)throw e.error}}return ar}function __spreadArray(to,from,pack){if(pack||2===arguments.length)for(var ar,i=0,l=from.length;i<l;i++)!ar&&i in from||(ar||(ar=Array.prototype.slice.call(from,0,i)),ar[i]=from[i]);return to.concat(ar||Array.prototype.slice.call(from))}Object.create;"function"==typeof SuppressedError&&SuppressedError;function isFunction(value){return"function"==typeof value}function createErrorClass(createImpl){var ctorFunc=createImpl((function(instance){Error.call(instance),instance.stack=(new Error).stack}));return ctorFunc.prototype=Object.create(Error.prototype),ctorFunc.prototype.constructor=ctorFunc,ctorFunc}var UnsubscriptionError=createErrorClass((function(_super){return function UnsubscriptionErrorImpl(errors){_super(this),this.message=errors?errors.length+" errors occurred during unsubscription:\n"+errors.map((function(err,i){return i+1+") "+err.toString()})).join("\n  "):"",this.name="UnsubscriptionError",this.errors=errors}}));function arrRemove(arr,item){if(arr){var index=arr.indexOf(item);0<=index&&arr.splice(index,1)}}var Subscription=function(){function Subscription(initialTeardown){this.initialTeardown=initialTeardown,this.closed=!1,this._parentage=null,this._finalizers=null}var empty;return Subscription.prototype.unsubscribe=function(){var e_1,_a,e_2,_b,errors;if(!this.closed){this.closed=!0;var _parentage=this._parentage;if(_parentage)if(this._parentage=null,Array.isArray(_parentage))try{for(var _parentage_1=__values(_parentage),_parentage_1_1=_parentage_1.next();!_parentage_1_1.done;_parentage_1_1=_parentage_1.next()){_parentage_1_1.value.remove(this)}}catch(e_1_1){e_1={error:e_1_1}}finally{try{_parentage_1_1&&!_parentage_1_1.done&&(_a=_parentage_1.return)&&_a.call(_parentage_1)}finally{if(e_1)throw e_1.error}}else _parentage.remove(this);var initialFinalizer=this.initialTeardown;if(isFunction(initialFinalizer))try{initialFinalizer()}catch(e){errors=e instanceof UnsubscriptionError?e.errors:[e]}var _finalizers=this._finalizers;if(_finalizers){this._finalizers=null;try{for(var _finalizers_1=__values(_finalizers),_finalizers_1_1=_finalizers_1.next();!_finalizers_1_1.done;_finalizers_1_1=_finalizers_1.next()){var finalizer=_finalizers_1_1.value;try{execFinalizer(finalizer)}catch(err){errors=null!=errors?errors:[],err instanceof UnsubscriptionError?errors=__spreadArray(__spreadArray([],__read(errors)),__read(err.errors)):errors.push(err)}}}catch(e_2_1){e_2={error:e_2_1}}finally{try{_finalizers_1_1&&!_finalizers_1_1.done&&(_b=_finalizers_1.return)&&_b.call(_finalizers_1)}finally{if(e_2)throw e_2.error}}}if(errors)throw new UnsubscriptionError(errors)}},Subscription.prototype.add=function(teardown){var _a;if(teardown&&teardown!==this)if(this.closed)execFinalizer(teardown);else{if(teardown instanceof Subscription){if(teardown.closed||teardown._hasParent(this))return;teardown._addParent(this)}(this._finalizers=null!==(_a=this._finalizers)&&void 0!==_a?_a:[]).push(teardown)}},Subscription.prototype._hasParent=function(parent){var _parentage=this._parentage;return _parentage===parent||Array.isArray(_parentage)&&_parentage.includes(parent)},Subscription.prototype._addParent=function(parent){var _parentage=this._parentage;this._parentage=Array.isArray(_parentage)?(_parentage.push(parent),_parentage):_parentage?[_parentage,parent]:parent},Subscription.prototype._removeParent=function(parent){var _parentage=this._parentage;_parentage===parent?this._parentage=null:Array.isArray(_parentage)&&arrRemove(_parentage,parent)},Subscription.prototype.remove=function(teardown){var _finalizers=this._finalizers;_finalizers&&arrRemove(_finalizers,teardown),teardown instanceof Subscription&&teardown._removeParent(this)},Subscription.EMPTY=((empty=new Subscription).closed=!0,empty),Subscription}(),EMPTY_SUBSCRIPTION=Subscription.EMPTY;function isSubscription(value){return value instanceof Subscription||value&&"closed"in value&&isFunction(value.remove)&&isFunction(value.add)&&isFunction(value.unsubscribe)}function execFinalizer(finalizer){isFunction(finalizer)?finalizer():finalizer.unsubscribe()}var config={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},timeoutProvider={setTimeout:function(handler,timeout){for(var args=[],_i=2;_i<arguments.length;_i++)args[_i-2]=arguments[_i];var delegate=timeoutProvider.delegate;return(null==delegate?void 0:delegate.setTimeout)?delegate.setTimeout.apply(delegate,__spreadArray([handler,timeout],__read(args))):setTimeout.apply(void 0,__spreadArray([handler,timeout],__read(args)))},clearTimeout:function(handle){var delegate=timeoutProvider.delegate;return((null==delegate?void 0:delegate.clearTimeout)||clearTimeout)(handle)},delegate:void 0};function noop(){}var COMPLETE_NOTIFICATION=createNotification("C",void 0,void 0);function createNotification(kind,value,error){return{kind,value,error}}var context=null;function errorContext(cb){if(config.useDeprecatedSynchronousErrorHandling){var isRoot=!context;if(isRoot&&(context={errorThrown:!1,error:null}),cb(),isRoot){var _a=context,errorThrown=_a.errorThrown,error=_a.error;if(context=null,errorThrown)throw error}}else cb()}var Subscriber=function(_super){function Subscriber(destination){var _this=_super.call(this)||this;return _this.isStopped=!1,destination?(_this.destination=destination,isSubscription(destination)&&destination.add(_this)):_this.destination=EMPTY_OBSERVER,_this}return __extends(Subscriber,_super),Subscriber.create=function(next,error,complete){return new SafeSubscriber(next,error,complete)},Subscriber.prototype.next=function(value){this.isStopped?handleStoppedNotification(function nextNotification(value){return createNotification("N",value,void 0)}(value),this):this._next(value)},Subscriber.prototype.error=function(err){this.isStopped?handleStoppedNotification(function errorNotification(error){return createNotification("E",void 0,error)}(err),this):(this.isStopped=!0,this._error(err))},Subscriber.prototype.complete=function(){this.isStopped?handleStoppedNotification(COMPLETE_NOTIFICATION,this):(this.isStopped=!0,this._complete())},Subscriber.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,_super.prototype.unsubscribe.call(this),this.destination=null)},Subscriber.prototype._next=function(value){this.destination.next(value)},Subscriber.prototype._error=function(err){try{this.destination.error(err)}finally{this.unsubscribe()}},Subscriber.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},Subscriber}(Subscription),_bind=Function.prototype.bind;function bind(fn,thisArg){return _bind.call(fn,thisArg)}var ConsumerObserver=function(){function ConsumerObserver(partialObserver){this.partialObserver=partialObserver}return ConsumerObserver.prototype.next=function(value){var partialObserver=this.partialObserver;if(partialObserver.next)try{partialObserver.next(value)}catch(error){handleUnhandledError(error)}},ConsumerObserver.prototype.error=function(err){var partialObserver=this.partialObserver;if(partialObserver.error)try{partialObserver.error(err)}catch(error){handleUnhandledError(error)}else handleUnhandledError(err)},ConsumerObserver.prototype.complete=function(){var partialObserver=this.partialObserver;if(partialObserver.complete)try{partialObserver.complete()}catch(error){handleUnhandledError(error)}},ConsumerObserver}(),SafeSubscriber=function(_super){function SafeSubscriber(observerOrNext,error,complete){var partialObserver,context_1,_this=_super.call(this)||this;isFunction(observerOrNext)||!observerOrNext?partialObserver={next:null!=observerOrNext?observerOrNext:void 0,error:null!=error?error:void 0,complete:null!=complete?complete:void 0}:_this&&config.useDeprecatedNextContext?((context_1=Object.create(observerOrNext)).unsubscribe=function(){return _this.unsubscribe()},partialObserver={next:observerOrNext.next&&bind(observerOrNext.next,context_1),error:observerOrNext.error&&bind(observerOrNext.error,context_1),complete:observerOrNext.complete&&bind(observerOrNext.complete,context_1)}):partialObserver=observerOrNext;return _this.destination=new ConsumerObserver(partialObserver),_this}return __extends(SafeSubscriber,_super),SafeSubscriber}(Subscriber);function handleUnhandledError(error){config.useDeprecatedSynchronousErrorHandling?function captureError(err){config.useDeprecatedSynchronousErrorHandling&&context&&(context.errorThrown=!0,context.error=err)}(error):function reportUnhandledError(err){timeoutProvider.setTimeout((function(){var onUnhandledError=config.onUnhandledError;if(!onUnhandledError)throw err;onUnhandledError(err)}))}(error)}function handleStoppedNotification(notification,subscriber){var onStoppedNotification=config.onStoppedNotification;onStoppedNotification&&timeoutProvider.setTimeout((function(){return onStoppedNotification(notification,subscriber)}))}var EMPTY_OBSERVER={closed:!0,next:noop,error:function defaultErrorHandler(err){throw err},complete:noop},observable="function"==typeof Symbol&&Symbol.observable||"@@observable";function identity(x){return x}function pipeFromArray(fns){return 0===fns.length?identity:1===fns.length?fns[0]:function piped(input){return fns.reduce((function(prev,fn){return fn(prev)}),input)}}var Observable=function(){function Observable(subscribe){subscribe&&(this._subscribe=subscribe)}return Observable.prototype.lift=function(operator){var observable=new Observable;return observable.source=this,observable.operator=operator,observable},Observable.prototype.subscribe=function(observerOrNext,error,complete){var _this=this,subscriber=function isSubscriber(value){return value&&value instanceof Subscriber||function isObserver(value){return value&&isFunction(value.next)&&isFunction(value.error)&&isFunction(value.complete)}(value)&&isSubscription(value)}(observerOrNext)?observerOrNext:new SafeSubscriber(observerOrNext,error,complete);return errorContext((function(){var _a=_this,operator=_a.operator,source=_a.source;subscriber.add(operator?operator.call(subscriber,source):source?_this._subscribe(subscriber):_this._trySubscribe(subscriber))})),subscriber},Observable.prototype._trySubscribe=function(sink){try{return this._subscribe(sink)}catch(err){sink.error(err)}},Observable.prototype.forEach=function(next,promiseCtor){var _this=this;return new(promiseCtor=getPromiseCtor(promiseCtor))((function(resolve,reject){var subscriber=new SafeSubscriber({next:function(value){try{next(value)}catch(err){reject(err),subscriber.unsubscribe()}},error:reject,complete:resolve});_this.subscribe(subscriber)}))},Observable.prototype._subscribe=function(subscriber){var _a;return null===(_a=this.source)||void 0===_a?void 0:_a.subscribe(subscriber)},Observable.prototype[observable]=function(){return this},Observable.prototype.pipe=function(){for(var operations=[],_i=0;_i<arguments.length;_i++)operations[_i]=arguments[_i];return pipeFromArray(operations)(this)},Observable.prototype.toPromise=function(promiseCtor){var _this=this;return new(promiseCtor=getPromiseCtor(promiseCtor))((function(resolve,reject){var value;_this.subscribe((function(x){return value=x}),(function(err){return reject(err)}),(function(){return resolve(value)}))}))},Observable.create=function(subscribe){return new Observable(subscribe)},Observable}();function getPromiseCtor(promiseCtor){var _a;return null!==(_a=null!=promiseCtor?promiseCtor:config.Promise)&&void 0!==_a?_a:Promise}var ObjectUnsubscribedError=createErrorClass((function(_super){return function ObjectUnsubscribedErrorImpl(){_super(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}})),Subject=function(_super){function Subject(){var _this=_super.call(this)||this;return _this.closed=!1,_this.currentObservers=null,_this.observers=[],_this.isStopped=!1,_this.hasError=!1,_this.thrownError=null,_this}return __extends(Subject,_super),Subject.prototype.lift=function(operator){var subject=new AnonymousSubject(this,this);return subject.operator=operator,subject},Subject.prototype._throwIfClosed=function(){if(this.closed)throw new ObjectUnsubscribedError},Subject.prototype.next=function(value){var _this=this;errorContext((function(){var e_1,_a;if(_this._throwIfClosed(),!_this.isStopped){_this.currentObservers||(_this.currentObservers=Array.from(_this.observers));try{for(var _b=__values(_this.currentObservers),_c=_b.next();!_c.done;_c=_b.next()){_c.value.next(value)}}catch(e_1_1){e_1={error:e_1_1}}finally{try{_c&&!_c.done&&(_a=_b.return)&&_a.call(_b)}finally{if(e_1)throw e_1.error}}}}))},Subject.prototype.error=function(err){var _this=this;errorContext((function(){if(_this._throwIfClosed(),!_this.isStopped){_this.hasError=_this.isStopped=!0,_this.thrownError=err;for(var observers=_this.observers;observers.length;)observers.shift().error(err)}}))},Subject.prototype.complete=function(){var _this=this;errorContext((function(){if(_this._throwIfClosed(),!_this.isStopped){_this.isStopped=!0;for(var observers=_this.observers;observers.length;)observers.shift().complete()}}))},Subject.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(Subject.prototype,"observed",{get:function(){var _a;return(null===(_a=this.observers)||void 0===_a?void 0:_a.length)>0},enumerable:!1,configurable:!0}),Subject.prototype._trySubscribe=function(subscriber){return this._throwIfClosed(),_super.prototype._trySubscribe.call(this,subscriber)},Subject.prototype._subscribe=function(subscriber){return this._throwIfClosed(),this._checkFinalizedStatuses(subscriber),this._innerSubscribe(subscriber)},Subject.prototype._innerSubscribe=function(subscriber){var _this=this,hasError=this.hasError,isStopped=this.isStopped,observers=this.observers;return hasError||isStopped?EMPTY_SUBSCRIPTION:(this.currentObservers=null,observers.push(subscriber),new Subscription((function(){_this.currentObservers=null,arrRemove(observers,subscriber)})))},Subject.prototype._checkFinalizedStatuses=function(subscriber){var hasError=this.hasError,thrownError=this.thrownError,isStopped=this.isStopped;hasError?subscriber.error(thrownError):isStopped&&subscriber.complete()},Subject.prototype.asObservable=function(){var observable=new Observable;return observable.source=this,observable},Subject.create=function(destination,source){return new AnonymousSubject(destination,source)},Subject}(Observable),AnonymousSubject=function(_super){function AnonymousSubject(destination,source){var _this=_super.call(this)||this;return _this.destination=destination,_this.source=source,_this}return __extends(AnonymousSubject,_super),AnonymousSubject.prototype.next=function(value){var _a,_b;null===(_b=null===(_a=this.destination)||void 0===_a?void 0:_a.next)||void 0===_b||_b.call(_a,value)},AnonymousSubject.prototype.error=function(err){var _a,_b;null===(_b=null===(_a=this.destination)||void 0===_a?void 0:_a.error)||void 0===_b||_b.call(_a,err)},AnonymousSubject.prototype.complete=function(){var _a,_b;null===(_b=null===(_a=this.destination)||void 0===_a?void 0:_a.complete)||void 0===_b||_b.call(_a)},AnonymousSubject.prototype._subscribe=function(subscriber){var _a,_b;return null!==(_b=null===(_a=this.source)||void 0===_a?void 0:_a.subscribe(subscriber))&&void 0!==_b?_b:EMPTY_SUBSCRIPTION},AnonymousSubject}(Subject),BehaviorSubject=function(_super){function BehaviorSubject(_value){var _this=_super.call(this)||this;return _this._value=_value,_this}return __extends(BehaviorSubject,_super),Object.defineProperty(BehaviorSubject.prototype,"value",{get:function(){return this.getValue()},enumerable:!1,configurable:!0}),BehaviorSubject.prototype._subscribe=function(subscriber){var subscription=_super.prototype._subscribe.call(this,subscriber);return!subscription.closed&&subscriber.next(this._value),subscription},BehaviorSubject.prototype.getValue=function(){var hasError=this.hasError,thrownError=this.thrownError,_value=this._value;if(hasError)throw thrownError;return this._throwIfClosed(),_value},BehaviorSubject.prototype.next=function(value){_super.prototype.next.call(this,this._value=value)},BehaviorSubject}(Subject);function getSubject(name,defaults,storage){return storage[name]||(storage[name]=new BehaviorSubject(defaults[name])),storage[name]}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");var StateKeys=function(StateKeys){return StateKeys.Counter="counter",StateKeys}(StateKeys||{});window.pubsub={};const pubSub=function(defaults){let storage=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{usePub(name,callback){const subject=getSubject(name,defaults,storage);return(0,react.useCallback)((()=>{const currentValue=subject.getValue(),nextValue=callback(currentValue);nextValue!==currentValue&&subject.next(nextValue)}),[subject,callback])},useSub(name){const subject=getSubject(name,defaults,storage),[state,setState]=(0,react.useState)(subject.getValue());return(0,react.useEffect)((()=>{const subscription=subject.subscribe(setState);return()=>subscription.unsubscribe()}),[subject,setState]),state}}}({counter:0},window.pubsub),Incrementer=()=>{const increment=pubSub.usePub(StateKeys.Counter,(x=>x+1));return(0,jsx_runtime.jsx)("button",{onClick:increment,children:"Increment"})};Incrementer.displayName="Incrementer";const Decrementer=()=>{const decrement=pubSub.usePub(StateKeys.Counter,(x=>x-1));return(0,jsx_runtime.jsx)("button",{onClick:decrement,children:"Decrement"})};Decrementer.displayName="Decrementer";const Static=()=>{const update=pubSub.usePub(StateKeys.Counter,(()=>42));return(0,jsx_runtime.jsx)("button",{onClick:update,children:"Set 42"})};Static.displayName="Static";const pubsub_stories_Subscriber=()=>{const counter=pubSub.useSub(StateKeys.Counter);return(0,jsx_runtime.jsx)("div",{children:counter})};pubsub_stories_Subscriber.displayName="Subscriber";const PubSub=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(Incrementer,{}),(0,jsx_runtime.jsx)(Decrementer,{}),(0,jsx_runtime.jsx)(Static,{})]}),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)(pubsub_stories_Subscriber,{})]})]}),pubsub_stories={title:"PubSub example",component:PubSub};PubSub.parameters={...PubSub.parameters,docs:{...PubSub.parameters?.docs,source:{originalSource:"() => {\n  return <>\n      <div>\n        <Incrementer />\n        <Decrementer />\n        <Static />\n      </div>\n      <div>\n        <br />\n        <Subscriber />\n      </div>\n    </>;\n}",...PubSub.parameters?.docs?.source}}};const __namedExportsOrder=["PubSub"]},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);