/// <reference path="../_references.ts" />

export class Module {
    private _name: string;
    private _path: string;
    private _triggerModuleLoaded: () => void;
    private _resourceUrls:any = {};

    //events: nsEventManager.EventManager;
    constructor(name: string, path: string, triggerModuleLoaded: () => void) {
        this._name = name;
        this._path = path;
        this._triggerModuleLoaded = triggerModuleLoaded;
        //this.events = new nsEventManager.EventManager(this, 'Module_' + name + '_');
    }

    mapPath(path: string): string {
        if (path === null || path == '') return '';
        return this._path + '/' + path;
    }

}