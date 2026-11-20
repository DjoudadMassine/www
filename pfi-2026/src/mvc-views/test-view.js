const TestView = {

    single: (single) => {

        return { id : single.id };

    }, 

    collection: (tests) => {

        return tests.map(TestView.single);

    }

};

export default TestView;