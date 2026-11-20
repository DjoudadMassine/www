import { ResponseManager } from '#tools';
import TestModel from '#mvc-models/test-model.js';
import TestView from '#mvc-views/test-view.js';
import PROBLEMS from '#configurations/problems.js';

const TestController = {

    index: async (req, res) => {

        try {

            const test = await TestModel.selectAll();

            ResponseManager.send(req, res, 200, TestView.collection(test));
            return true;

            // ResponseManager.problem(req, res, PROBLEMS.SERVICE_UNAVAILABLE, 'Service Unavailable');
            // return false;

        } catch (err) {
            
            throw err;
        
        }        

    }    

};

export default TestController;