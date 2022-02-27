import { defineStore } from 'pinia';
import * as actions from './actions';
import * as getters from './getters';

export const useSharedStore = defineStore('budget', {
    state: () => ({}),
    getters,
    actions
});
