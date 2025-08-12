import type { Chapter } from '$lib/types/Chapter';

// Static imports for all sections
import section0 from './sections/0/index';
import section1 from './sections/1/index';
import section2 from './sections/2/index';
import section3 from './sections/3/index';
import section4 from './sections/4/index';

const sections = [
    section0,
    section1,
    section2,
    section3,
    section4
];

export default {
    id: `e5107f62-7c81-4b5b-b3a3-20b03b4efe42`,
    title: `RADICIAÇÃO`,
    sections,
    questsCount: 17
} as Chapter;
