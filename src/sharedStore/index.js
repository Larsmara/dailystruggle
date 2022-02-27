import { defineStore } from 'pinia';

export const useSharedStore = defineStore('shared', {
    state: () => ({
        user: null
    }),
    getters: {},
    actions: {}
});
