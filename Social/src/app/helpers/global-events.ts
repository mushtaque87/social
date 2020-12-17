import EventEmitter from "events";
import {NavigationRoute} from "react-navigation";
import {unsubscribe} from "../utils/dummy-function";

const PAYMENT_REQUEST = "payMe";
const BRANCH_DATA = "branchData";
const DEALER_LOAD_AVAILABILITY = "dealerLoadAvailability";
const BOTTOM_TAB_NAVIGATOR = "bottomTabNavigator";

interface IGlobalEventEmitter {
  emitPaymentRequest(): void;
  subscribeToPayMeFeature(sub: () => void): void;
  unSubscribeToPayMeFeature(sub: () => void): void;
  emitBranchData({params, uri, error}): void;
  subscribeToBranch(sub: ({params, uri, error}) => void): void;
  initialBranchData: {params: object, uri: string, error: boolean | undefined};
  initialBottomNavigationRoutes: NavigationRoute[];
  emitDealerAvailabilityChange(): void;
  subscribeToDealerAvailabilityChange(sub: () => void): void;
  unSubscribeToDealerAvailabilityChange(sub: () => void): void;
  emitBottomTabNavigatorChange(routes): void;
  subscribeToBottomTabNavigator(cb: (routes) => void): () => void;
}

function _globalEventEmitter() {
  const _eventEmitter = new EventEmitter();
  this.initialBranchData = {params: {}, uri: "", error: undefined};
  this.initialBottomNavigationRoutes;

  this.emitPaymentRequest = function () {
    _eventEmitter.emit(PAYMENT_REQUEST);
  };

  this.subscribeToPayMeFeature = function (sub: () => void) {
    _eventEmitter.on(PAYMENT_REQUEST, sub);
  };

  this.unSubscribeToPayMeFeature = function (sub: () => void) {
    _eventEmitter.removeListener(PAYMENT_REQUEST, sub);
  };

  this.emitBranchData = function (branchData) {
    this.initialBranchData = branchData;
    _eventEmitter.emit(BRANCH_DATA, branchData);
  };

  this.subscribeToBranch = function (sub: ({params, uri, error}) => void) {
    _eventEmitter.on(BRANCH_DATA, sub);
  };

  this.emitDealerAvailabilityChange = function () {
    _eventEmitter.emit(DEALER_LOAD_AVAILABILITY)
  };

  this.subscribeToDealerAvailabilityChange = function (sub) {
    _eventEmitter.on(DEALER_LOAD_AVAILABILITY, sub)
  };

  this.unSubscribeToDealerAvailabilityChange = function (sub) {
    _eventEmitter.removeListener(DEALER_LOAD_AVAILABILITY, sub)
  };

  this.emitBottomTabNavigatorChange = function (routes) {
    this.initialBottomNavigationRoutes = routes;
    _eventEmitter.emit(BOTTOM_TAB_NAVIGATOR)
  };

  this.subscribeToBottomTabNavigator = function (cb): unsubscribe {
    _eventEmitter.on(BOTTOM_TAB_NAVIGATOR, cb);
    return () => _eventEmitter.removeListener(BOTTOM_TAB_NAVIGATOR, cb);
  };
}


export const GlobalEventEmitter: IGlobalEventEmitter = new _globalEventEmitter();
