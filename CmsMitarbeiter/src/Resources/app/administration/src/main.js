import './extension/sw-cms/component/sw-cms-sidebar';

import './module/sw-cms/blocks/3-columns';

import deDE from './module/sw-cms/snippet/de-DE.json';
import enGB from './module/sw-cms/snippet/en-GB.json';

Shopware.Locale.extend('de-DE', deDE);
Shopware.Locale.extend('en-GB', enGB);