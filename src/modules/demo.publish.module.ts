/**
 * @license
 * Copyright Paperbits. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file and at https://paperbits.io/license/mit.
 */

import * as path from "path";
import { ConsoleLogger } from "@paperbits/common/logging";
import { IInjector, IInjectorModule } from "@paperbits/common/injection";
import { MemoryBlobStorage } from "../persistence/memoryBlobStorage";
import { StaticUserService } from "../user/staticUserService";
import { FileSystemObjectStorage } from "../persistence/fileSystemObjectStorage";
import { FileSystemBlobStorage } from "../persistence/fileSystemBlobStorage";
import { StaticSettingsProvider } from "../configuration/staticSettingsProvider";
import { StaticRouter } from "../routing/staticRouter";
import { StaticRoleService } from "../user/staticRoleService";
import { SearchPublishModule } from "@paperbits/core/search/search.publish.module";
import { ClickCounterEditorModule } from "../components/click-counter/ko";
import { P5CanvasEditorModule } from "../components/p5Canvas/ko";
import { FileSystemDataProvider } from "../persistence/fileSystemDataProvider";
import { ReactModule } from "@paperbits/react/react.module";
import { inject } from "@angular/core";


export class DemoPublishModule implements IInjectorModule {
    constructor(
        private readonly dataPath: string,
        private readonly settingsPath: string,
        private readonly outputBasePath: string
    ) { }

    public register(injector: IInjector): void {
        injector.bindSingleton("logger", ConsoleLogger);
        injector.bindSingleton("userService", StaticUserService);
        injector.bindSingleton("roleService", StaticRoleService);
        injector.bindSingleton("router", StaticRouter);
        injector.bindSingleton("blobStorage", MemoryBlobStorage);
        injector.bindInstance("dataProvider", new FileSystemDataProvider(path.resolve(this.dataPath)));
        injector.bindInstance("objectStorage", new FileSystemObjectStorage(path.resolve(this.dataPath)));
        injector.bindInstance("outputBlobStorage", new FileSystemBlobStorage(path.resolve(this.outputBasePath)));
        injector.bindInstance("settingsProvider", new StaticSettingsProvider(path.resolve(this.settingsPath)));
        injector.bindModule(new SearchPublishModule());
        injector.bindModule(new ClickCounterEditorModule());
        injector.bindModule(new P5CanvasEditorModule());
        injector.bindModule(new ReactModule());
    }
}