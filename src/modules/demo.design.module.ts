/**
 * @license
 * Copyright Paperbits. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file and at https://paperbits.io/license/mit.
 */


import { IInjector, IInjectorModule } from "@paperbits/common/injection";
import { App } from "../components/app/app";
import { ConsoleLogger } from "@paperbits/common/logging";
import { SearchDesignModule } from "@paperbits/core/search/search.design.module";
import { MemoryObjectStorage } from "../persistence/memoryObjectStorage";
import { MemoryBlobStorage } from "../persistence/memoryBlobStorage";
import { StaticRoleService } from "../user/staticRoleService";
import { ClickCounterEditorModule } from "../components/click-counter/clickCounter.design.module";
import { P5CanvasEditorModule } from "../components/p5Canvas/p5Canvas.design.module";
import { HistoryRouteHandler, AnchorRouteHandler } from "@paperbits/common/routing";
import { HttpDataProvider } from "../persistence/httpDataProvider";
import { ReactModule } from "@paperbits/react/react.module";
import { PopupDesignModule } from "@paperbits/core/popup";


export class DemoDesignModule implements IInjectorModule {
    public register(injector: IInjector): void {
        injector.bindSingleton("app", App);
        injector.bindSingleton("dataProvider", HttpDataProvider);
        injector.bindSingleton("blobStorage", MemoryBlobStorage);
        injector.bindSingleton("objectStorage", MemoryObjectStorage);
        injector.bindSingleton("roleService", StaticRoleService);
        injector.bindToCollection("autostart", HistoryRouteHandler);
        injector.bindToCollection("autostart", AnchorRouteHandler);
        injector.bindSingleton("logger", ConsoleLogger);
        injector.bindModule(new SearchDesignModule());
        injector.bindModule(new ClickCounterEditorModule());
        injector.bindModule(new P5CanvasEditorModule());
        injector.bindModule(new ReactModule());
        injector.bindModule(new PopupDesignModule());
    }
}