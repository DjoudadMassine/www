import TestController from '#mvc-controllers/test-controller.js';

export const testRoutes = [

    { pattern: '/', method: 'GET', handler: TestController.index }
    
];