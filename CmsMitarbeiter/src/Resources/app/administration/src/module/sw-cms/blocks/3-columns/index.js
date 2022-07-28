import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
    name: '3-columns',
    label: 'sas-cms-columns.blocks.columns.3-Column.label',
    category: 'sas-columns',
    component: 'sw-cms-block-3-columns',
    previewComponent: 'sw-cms-preview-3-columns',
    defaultConfig: {
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        sizingMode: 'boxed'
    },
    slots: {
        'col-1': 'text',
        'col-2': 'text',
        'col-3': 'text',
    }
});
