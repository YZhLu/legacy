import type { Book } from '$lib/types/Book';

// Static imports for all chapters
import chapter0 from './chapters/0/index';
// import chapter1 from './chapters/1/index';
// import chapter2 from './chapters/2/index';
// import chapter3 from './chapters/3/index';
// import chapter4 from './chapters/4/index';
// import chapter5 from './chapters/5/index';
// import chapter6 from './chapters/6/index';
// import chapter7 from './chapters/7/index';
// import chapter8 from './chapters/8/index';


export const book_1_air: Book = {
    id: 'ed759451-d1e7-4bf4-9db6-6a6a952a5401',
    title: 'Book 1 - Air',
    chapters: [
        chapter0,
        /* chapter1,
        chapter2,
        chapter3,
        chapter4,
        chapter5,
        chapter6,
        chapter7,
        chapter8 */
    ],
    createdAt: '2025-08-12T03:43:38.796Z',
    updatedAt: '2025-08-12T03:43:38.796Z'
};
