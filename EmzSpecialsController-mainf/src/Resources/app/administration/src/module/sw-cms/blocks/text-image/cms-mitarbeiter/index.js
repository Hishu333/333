import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'cms-mitarbeiter',
    label: 'cms-mitarbeiter.label',
    category: 'text-image',
    component: 'sw-cms-my-block-image-text-gallery',
    previewComponent: 'sw-cms-my-preview-block-image-text-gallery',
    defaultConfig: {
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        sizingMode: 'boxed',
    },
    slots: {
        'left-image': {
            type: 'image',
        },
        'left-text': {
            type: 'text',
        },
        'center-image': {
            type: 'image',
        },
        'center-text': {
            type: 'text',
        },
        'right-image': {
            type: 'image',
        },
        'right-text': {
            type: 'text',
        }
    }})