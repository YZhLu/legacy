import type { Chapter } from '$lib/types/Chapter';

// Static imports for all sections
import section0 from './sections/0/index';
// import section1 from './sections/1/index';
// import section2 from './sections/2/index';
// import section3 from './sections/3/index';
// import section4 from './sections/4/index';
// import section5 from './sections/5/index';

const sections = [
    section0,
    // section1,
    // section2,
    // section3,
    // section4,
    // section5
];

export default {
    id: `81e877da-4610-401f-83e4-156a4d6f947e`,
    title: `NÚMEROS NATURAIS`,
    sections,
    questsCount: 19
} as Chapter;
