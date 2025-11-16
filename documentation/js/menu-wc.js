'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">mind-connect-ai documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                                <li class="link">
                                    <a href="overview.html" data-type="chapter-link">
                                        <span class="icon ion-ios-keypad"></span>Overview
                                    </a>
                                </li>

                            <li class="link">
                                <a href="index.html" data-type="chapter-link">
                                    <span class="icon ion-ios-paper"></span>
                                        README
                                </a>
                            </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>

                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-cb31cc881e885dbb1c64466d836ac7c4dfe749d63feb3304593290e282e7097563aed60dc47cdb36f0064e4557833fe70d468daefe42ac9ed7f7c7a0f8685ab7"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-cb31cc881e885dbb1c64466d836ac7c4dfe749d63feb3304593290e282e7097563aed60dc47cdb36f0064e4557833fe70d468daefe42ac9ed7f7c7a0f8685ab7"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-cb31cc881e885dbb1c64466d836ac7c4dfe749d63feb3304593290e282e7097563aed60dc47cdb36f0064e4557833fe70d468daefe42ac9ed7f7c7a0f8685ab7"' :
                                            'id="xs-controllers-links-module-AuthModule-cb31cc881e885dbb1c64466d836ac7c4dfe749d63feb3304593290e282e7097563aed60dc47cdb36f0064e4557833fe70d468daefe42ac9ed7f7c7a0f8685ab7"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-cb31cc881e885dbb1c64466d836ac7c4dfe749d63feb3304593290e282e7097563aed60dc47cdb36f0064e4557833fe70d468daefe42ac9ed7f7c7a0f8685ab7"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-cb31cc881e885dbb1c64466d836ac7c4dfe749d63feb3304593290e282e7097563aed60dc47cdb36f0064e4557833fe70d468daefe42ac9ed7f7c7a0f8685ab7"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-cb31cc881e885dbb1c64466d836ac7c4dfe749d63feb3304593290e282e7097563aed60dc47cdb36f0064e4557833fe70d468daefe42ac9ed7f7c7a0f8685ab7"' :
                                        'id="xs-injectables-links-module-AuthModule-cb31cc881e885dbb1c64466d836ac7c4dfe749d63feb3304593290e282e7097563aed60dc47cdb36f0064e4557833fe70d468daefe42ac9ed7f7c7a0f8685ab7"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/HistorialModule.html" data-type="entity-link" >HistorialModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-HistorialModule-b8dae9183bbce9793af5e505eb079376d4eee3ec0758bab86562fe45f5607999a65c0c9dd60c5dae0ce19e685a6fe8ab2cb802adb9847bb4bd733ad06678794f"' : 'data-bs-target="#xs-controllers-links-module-HistorialModule-b8dae9183bbce9793af5e505eb079376d4eee3ec0758bab86562fe45f5607999a65c0c9dd60c5dae0ce19e685a6fe8ab2cb802adb9847bb4bd733ad06678794f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-HistorialModule-b8dae9183bbce9793af5e505eb079376d4eee3ec0758bab86562fe45f5607999a65c0c9dd60c5dae0ce19e685a6fe8ab2cb802adb9847bb4bd733ad06678794f"' :
                                            'id="xs-controllers-links-module-HistorialModule-b8dae9183bbce9793af5e505eb079376d4eee3ec0758bab86562fe45f5607999a65c0c9dd60c5dae0ce19e685a6fe8ab2cb802adb9847bb4bd733ad06678794f"' }>
                                            <li class="link">
                                                <a href="controllers/HistorialController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HistorialController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-HistorialModule-b8dae9183bbce9793af5e505eb079376d4eee3ec0758bab86562fe45f5607999a65c0c9dd60c5dae0ce19e685a6fe8ab2cb802adb9847bb4bd733ad06678794f"' : 'data-bs-target="#xs-injectables-links-module-HistorialModule-b8dae9183bbce9793af5e505eb079376d4eee3ec0758bab86562fe45f5607999a65c0c9dd60c5dae0ce19e685a6fe8ab2cb802adb9847bb4bd733ad06678794f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-HistorialModule-b8dae9183bbce9793af5e505eb079376d4eee3ec0758bab86562fe45f5607999a65c0c9dd60c5dae0ce19e685a6fe8ab2cb802adb9847bb4bd733ad06678794f"' :
                                        'id="xs-injectables-links-module-HistorialModule-b8dae9183bbce9793af5e505eb079376d4eee3ec0758bab86562fe45f5607999a65c0c9dd60c5dae0ce19e685a6fe8ab2cb802adb9847bb4bd733ad06678794f"' }>
                                        <li class="link">
                                            <a href="injectables/HistorialService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HistorialService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MessageModule.html" data-type="entity-link" >MessageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-MessageModule-04e96f901bfa11c28a2227c07089a505364e9de8503819759c4b82ca3b44ff8bea08a1c2023a6f45403a87d52ae219b68b2ce73b18ee9fe0d273f456d2bf85a3"' : 'data-bs-target="#xs-controllers-links-module-MessageModule-04e96f901bfa11c28a2227c07089a505364e9de8503819759c4b82ca3b44ff8bea08a1c2023a6f45403a87d52ae219b68b2ce73b18ee9fe0d273f456d2bf85a3"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-MessageModule-04e96f901bfa11c28a2227c07089a505364e9de8503819759c4b82ca3b44ff8bea08a1c2023a6f45403a87d52ae219b68b2ce73b18ee9fe0d273f456d2bf85a3"' :
                                            'id="xs-controllers-links-module-MessageModule-04e96f901bfa11c28a2227c07089a505364e9de8503819759c4b82ca3b44ff8bea08a1c2023a6f45403a87d52ae219b68b2ce73b18ee9fe0d273f456d2bf85a3"' }>
                                            <li class="link">
                                                <a href="controllers/MessageController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MessageController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-MessageModule-04e96f901bfa11c28a2227c07089a505364e9de8503819759c4b82ca3b44ff8bea08a1c2023a6f45403a87d52ae219b68b2ce73b18ee9fe0d273f456d2bf85a3"' : 'data-bs-target="#xs-injectables-links-module-MessageModule-04e96f901bfa11c28a2227c07089a505364e9de8503819759c4b82ca3b44ff8bea08a1c2023a6f45403a87d52ae219b68b2ce73b18ee9fe0d273f456d2bf85a3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MessageModule-04e96f901bfa11c28a2227c07089a505364e9de8503819759c4b82ca3b44ff8bea08a1c2023a6f45403a87d52ae219b68b2ce73b18ee9fe0d273f456d2bf85a3"' :
                                        'id="xs-injectables-links-module-MessageModule-04e96f901bfa11c28a2227c07089a505364e9de8503819759c4b82ca3b44ff8bea08a1c2023a6f45403a87d52ae219b68b2ce73b18ee9fe0d273f456d2bf85a3"' }>
                                        <li class="link">
                                            <a href="injectables/MessageService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MessageService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/NotificationModule.html" data-type="entity-link" >NotificationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-NotificationModule-23c05cc6f8f879d4f320d2d5db82693887b698344e0df53a64c59ebf275f2fc76cdf65943cda534b0749d984ff1126b4fe732adc64317f77204fb09f6a80194b"' : 'data-bs-target="#xs-controllers-links-module-NotificationModule-23c05cc6f8f879d4f320d2d5db82693887b698344e0df53a64c59ebf275f2fc76cdf65943cda534b0749d984ff1126b4fe732adc64317f77204fb09f6a80194b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-NotificationModule-23c05cc6f8f879d4f320d2d5db82693887b698344e0df53a64c59ebf275f2fc76cdf65943cda534b0749d984ff1126b4fe732adc64317f77204fb09f6a80194b"' :
                                            'id="xs-controllers-links-module-NotificationModule-23c05cc6f8f879d4f320d2d5db82693887b698344e0df53a64c59ebf275f2fc76cdf65943cda534b0749d984ff1126b4fe732adc64317f77204fb09f6a80194b"' }>
                                            <li class="link">
                                                <a href="controllers/NotificationController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotificationController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-NotificationModule-23c05cc6f8f879d4f320d2d5db82693887b698344e0df53a64c59ebf275f2fc76cdf65943cda534b0749d984ff1126b4fe732adc64317f77204fb09f6a80194b"' : 'data-bs-target="#xs-injectables-links-module-NotificationModule-23c05cc6f8f879d4f320d2d5db82693887b698344e0df53a64c59ebf275f2fc76cdf65943cda534b0749d984ff1126b4fe732adc64317f77204fb09f6a80194b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-NotificationModule-23c05cc6f8f879d4f320d2d5db82693887b698344e0df53a64c59ebf275f2fc76cdf65943cda534b0749d984ff1126b4fe732adc64317f77204fb09f6a80194b"' :
                                        'id="xs-injectables-links-module-NotificationModule-23c05cc6f8f879d4f320d2d5db82693887b698344e0df53a64c59ebf275f2fc76cdf65943cda534b0749d984ff1126b4fe732adc64317f77204fb09f6a80194b"' }>
                                        <li class="link">
                                            <a href="injectables/NotificationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotificationService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TemplatePlaygroundModule.html" data-type="entity-link" >TemplatePlaygroundModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-TemplatePlaygroundModule-a48e698b66bad8be9ff3b78b5db8e15ee6bb54bd2575fdb1bb61a34e76437cc54b2e161854c3d6c97b4c751d05ff3a43b70b87ceffd46d3c5bf53f6f161e3044"' : 'data-bs-target="#xs-components-links-module-TemplatePlaygroundModule-a48e698b66bad8be9ff3b78b5db8e15ee6bb54bd2575fdb1bb61a34e76437cc54b2e161854c3d6c97b4c751d05ff3a43b70b87ceffd46d3c5bf53f6f161e3044"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TemplatePlaygroundModule-a48e698b66bad8be9ff3b78b5db8e15ee6bb54bd2575fdb1bb61a34e76437cc54b2e161854c3d6c97b4c751d05ff3a43b70b87ceffd46d3c5bf53f6f161e3044"' :
                                            'id="xs-components-links-module-TemplatePlaygroundModule-a48e698b66bad8be9ff3b78b5db8e15ee6bb54bd2575fdb1bb61a34e76437cc54b2e161854c3d6c97b4c751d05ff3a43b70b87ceffd46d3c5bf53f6f161e3044"' }>
                                            <li class="link">
                                                <a href="components/TemplatePlaygroundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TemplatePlaygroundComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-TemplatePlaygroundModule-a48e698b66bad8be9ff3b78b5db8e15ee6bb54bd2575fdb1bb61a34e76437cc54b2e161854c3d6c97b4c751d05ff3a43b70b87ceffd46d3c5bf53f6f161e3044"' : 'data-bs-target="#xs-injectables-links-module-TemplatePlaygroundModule-a48e698b66bad8be9ff3b78b5db8e15ee6bb54bd2575fdb1bb61a34e76437cc54b2e161854c3d6c97b4c751d05ff3a43b70b87ceffd46d3c5bf53f6f161e3044"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TemplatePlaygroundModule-a48e698b66bad8be9ff3b78b5db8e15ee6bb54bd2575fdb1bb61a34e76437cc54b2e161854c3d6c97b4c751d05ff3a43b70b87ceffd46d3c5bf53f6f161e3044"' :
                                        'id="xs-injectables-links-module-TemplatePlaygroundModule-a48e698b66bad8be9ff3b78b5db8e15ee6bb54bd2575fdb1bb61a34e76437cc54b2e161854c3d6c97b4c751d05ff3a43b70b87ceffd46d3c5bf53f6f161e3044"' }>
                                        <li class="link">
                                            <a href="injectables/HbsRenderService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HbsRenderService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TemplateEditorService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TemplateEditorService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ZipExportService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ZipExportService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UserModule-32e40ee452d0509b010a04ef37874f1a6876cc5de73e5753bd14aa1984be935fe39a6002777752690b30c4301a31f04fda1b5bae61ba277d968649cfe7fa3e50"' : 'data-bs-target="#xs-controllers-links-module-UserModule-32e40ee452d0509b010a04ef37874f1a6876cc5de73e5753bd14aa1984be935fe39a6002777752690b30c4301a31f04fda1b5bae61ba277d968649cfe7fa3e50"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-32e40ee452d0509b010a04ef37874f1a6876cc5de73e5753bd14aa1984be935fe39a6002777752690b30c4301a31f04fda1b5bae61ba277d968649cfe7fa3e50"' :
                                            'id="xs-controllers-links-module-UserModule-32e40ee452d0509b010a04ef37874f1a6876cc5de73e5753bd14aa1984be935fe39a6002777752690b30c4301a31f04fda1b5bae61ba277d968649cfe7fa3e50"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UserModule-32e40ee452d0509b010a04ef37874f1a6876cc5de73e5753bd14aa1984be935fe39a6002777752690b30c4301a31f04fda1b5bae61ba277d968649cfe7fa3e50"' : 'data-bs-target="#xs-injectables-links-module-UserModule-32e40ee452d0509b010a04ef37874f1a6876cc5de73e5753bd14aa1984be935fe39a6002777752690b30c4301a31f04fda1b5bae61ba277d968649cfe7fa3e50"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-32e40ee452d0509b010a04ef37874f1a6876cc5de73e5753bd14aa1984be935fe39a6002777752690b30c4301a31f04fda1b5bae61ba277d968649cfe7fa3e50"' :
                                        'id="xs-injectables-links-module-UserModule-32e40ee452d0509b010a04ef37874f1a6876cc5de73e5753bd14aa1984be935fe39a6002777752690b30c4301a31f04fda1b5bae61ba277d968649cfe7fa3e50"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/WiseChatModule.html" data-type="entity-link" >WiseChatModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-WiseChatModule-95f491d537fceed517a4618e81030d7d5601000a66d80c76bc799d4aa0699daa0214cb1ef12c821813ab3a5274a0bebdc823dcfe60bbaaea9550829fd54406c6"' : 'data-bs-target="#xs-controllers-links-module-WiseChatModule-95f491d537fceed517a4618e81030d7d5601000a66d80c76bc799d4aa0699daa0214cb1ef12c821813ab3a5274a0bebdc823dcfe60bbaaea9550829fd54406c6"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-WiseChatModule-95f491d537fceed517a4618e81030d7d5601000a66d80c76bc799d4aa0699daa0214cb1ef12c821813ab3a5274a0bebdc823dcfe60bbaaea9550829fd54406c6"' :
                                            'id="xs-controllers-links-module-WiseChatModule-95f491d537fceed517a4618e81030d7d5601000a66d80c76bc799d4aa0699daa0214cb1ef12c821813ab3a5274a0bebdc823dcfe60bbaaea9550829fd54406c6"' }>
                                            <li class="link">
                                                <a href="controllers/WiseChatController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WiseChatController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-WiseChatModule-95f491d537fceed517a4618e81030d7d5601000a66d80c76bc799d4aa0699daa0214cb1ef12c821813ab3a5274a0bebdc823dcfe60bbaaea9550829fd54406c6"' : 'data-bs-target="#xs-injectables-links-module-WiseChatModule-95f491d537fceed517a4618e81030d7d5601000a66d80c76bc799d4aa0699daa0214cb1ef12c821813ab3a5274a0bebdc823dcfe60bbaaea9550829fd54406c6"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-WiseChatModule-95f491d537fceed517a4618e81030d7d5601000a66d80c76bc799d4aa0699daa0214cb1ef12c821813ab3a5274a0bebdc823dcfe60bbaaea9550829fd54406c6"' :
                                        'id="xs-injectables-links-module-WiseChatModule-95f491d537fceed517a4618e81030d7d5601000a66d80c76bc799d4aa0699daa0214cb1ef12c821813ab3a5274a0bebdc823dcfe60bbaaea9550829fd54406c6"' }>
                                        <li class="link">
                                            <a href="injectables/WiseChatService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WiseChatService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/HistorialController.html" data-type="entity-link" >HistorialController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/MessageController.html" data-type="entity-link" >MessageController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/NotificationController.html" data-type="entity-link" >NotificationController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UserController.html" data-type="entity-link" >UserController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/WiseChatController.html" data-type="entity-link" >WiseChatController</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#entities-links"' :
                                'data-bs-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/Historial.html" data-type="entity-link" >Historial</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Message.html" data-type="entity-link" >Message</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Notification.html" data-type="entity-link" >Notification</a>
                                </li>
                                <li class="link">
                                    <a href="entities/User.html" data-type="entity-link" >User</a>
                                </li>
                                <li class="link">
                                    <a href="entities/WiseChat.html" data-type="entity-link" >WiseChat</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateHistorialDto.html" data-type="entity-link" >CreateHistorialDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateMessageDto.html" data-type="entity-link" >CreateMessageDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateNotificationDto.html" data-type="entity-link" >CreateNotificationDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateWiseChatDto.html" data-type="entity-link" >CreateWiseChatDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ForgotPasswordDto.html" data-type="entity-link" >ForgotPasswordDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginDto.html" data-type="entity-link" >LoginDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RegisterDto.html" data-type="entity-link" >RegisterDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ResetPasswordDto.html" data-type="entity-link" >ResetPasswordDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateHistorialDto.html" data-type="entity-link" >UpdateHistorialDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateMessageDto.html" data-type="entity-link" >UpdateMessageDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateNotificationDto.html" data-type="entity-link" >UpdateNotificationDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HbsRenderService.html" data-type="entity-link" >HbsRenderService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HistorialService.html" data-type="entity-link" >HistorialService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtAuthGuard.html" data-type="entity-link" >JwtAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MessageService.html" data-type="entity-link" >MessageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NotificationService.html" data-type="entity-link" >NotificationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TemplateEditorService.html" data-type="entity-link" >TemplateEditorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WiseChatService.html" data-type="entity-link" >WiseChatService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ZipExportService.html" data-type="entity-link" >ZipExportService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/RolesGuard.html" data-type="entity-link" >RolesGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/CompoDocConfig.html" data-type="entity-link" >CompoDocConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Session.html" data-type="entity-link" >Session</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Template.html" data-type="entity-link" >Template</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});