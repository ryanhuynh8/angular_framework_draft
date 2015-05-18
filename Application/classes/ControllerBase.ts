/// <reference path="../_references.ts" />

export interface IController<TScope> {
    scope: TScope;
    route: ng.route.IRouteService;
    location: ng.ILocationService;
    timeout: ng.ITimeoutService;
    routeParams: ng.route.IRouteParamsService;
    process: () => void;
}

export class ControllerBase<TScope> implements IController<TScope>{
    scope: TScope;
    route: ng.route.IRouteService;
    location: ng.ILocationService;
    timeout: ng.ITimeoutService;
    routeParams: ng.route.IRouteParamsService;
    process() {

    }

    apply(): void {
        var scope = <ng.IScope><any>this.scope;
        if (!scope['$$phase'] && !scope['$root']['$$phase']) {
            scope.$apply();
        }
    }
}