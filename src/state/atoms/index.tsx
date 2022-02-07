import { atom } from 'recoil';

export const individualGameState = atom({
    key: 'individualGameState',
    default: {
        id: null || 0, 
        league: '',
        arena: '',
        date: null,
    },
});
