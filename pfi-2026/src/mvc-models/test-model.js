import pool from '#services/db.js';
import { handleDBError } from '#tools';

const TestModel = {

    selectAll: async () => {

        try {

            const query = `SELECT * from test`;

            const rows = await pool.query(query);
            
            return rows; // MariaDB retourne un tableau de résultats

        } catch(err) {

            handleDBError(err);

        }  
    },
    
};

export default TestModel;