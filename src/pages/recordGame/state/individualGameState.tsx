import { atom } from 'recoil';

export const individualGameAtom = atom({
    key: 'individualGameAtom',
    default: {
        id: 0,
        league: '',
        arena: '',
        date: null,
    },
});
