import type { Chapter } from '$lib/types/Chapter';

// Static imports for all sections
import section0 from './sections/0/index';
import section1 from './sections/1/index';
import section2 from './sections/2/index';
import section3 from './sections/3/index';
import section4 from './sections/4/index';
import section5 from './sections/5/index';
import section6 from './sections/6/index';
import section7 from './sections/7/index';
import section8 from './sections/8/index';

const sections = [
    section0,
    section1,
    section2,
    section3,
    section4,
    section5,
    section6,
    section7,
    section8
];

export default {
    id: `3873bc9d-645f-44ed-8337-d9520f64e2cc`,
    title: `EQUAÇÕES DO 2° GRAU`,
    sections,
    questsCount: 27
} as Chapter;
