import './component';
import './preview';


Shopware.Service('cmsService').registerCmsBlock({
    name: 'my-three-colomns',
    category: 'text-image',
    label: 'My three colomns',
    component: 'sw-cms-block-my-three-colomns',
    previewComponent: 'sw-cms-preview-my-three-colomns',
    defaultConfig: {
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        sizingMode: 'boxed'
    },
    slots: {
        slots: {
            'col-1': 'image',
            'col-2': 'image',
            'col-3': 'image',
        }
    }
});