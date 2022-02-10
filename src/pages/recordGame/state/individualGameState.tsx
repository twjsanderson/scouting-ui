import { atom } from 'recoil';

export const individualGameAtom = atom({
    key: 'individualGameAtom',
    default: {
        id: new Number || null,
        league: '',
        arena: '',
        date: null,
    },
});
