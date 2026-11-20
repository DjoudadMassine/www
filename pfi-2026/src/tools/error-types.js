/* Custom error types */

export const ErrorTypes = {

    // Database

    DatabaseError : class extends Error {
        constructor(msg) { super(msg); this.name = 'DatabaseError'; }
    },

    DuplicateEntryError : class extends Error {
        constructor(msg) { super(msg); this.name = 'DuplicateEntryError'; }
    },
};