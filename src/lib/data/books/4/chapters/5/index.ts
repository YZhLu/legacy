import type { Chapter } from '$lib/types/Chapter';

import section0 from './sections/0/index';
import section1 from './sections/1/index';
import section2 from './sections/2/index';
import section3 from './sections/3/index';
import section4 from './sections/4/index';
import section5 from './sections/5/index';

const sections = [section0, section1, section2, section3, section4, section5];

export default {
    id: 'b1a2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6',
    title: 'FUNÇÃO AFIM',
    sections,
    questsCount: 18
} as Chapter;
