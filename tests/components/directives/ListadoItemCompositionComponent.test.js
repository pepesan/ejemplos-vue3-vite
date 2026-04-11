import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import ListadoItemCompositionComponent from '../../../src/components/directives/ListadoItemCompositionComponent.vue';
describe('ListadoItemCompositionComponent.vue', () => {
    it('renderiza el nombre del item', () => {
        const item = { id: 1, name: 'Item 1' };
        const wrapper = mount(ListadoItemCompositionComponent, {
            props: { item }
        });
        expect(wrapper.text()).toContain('Item 1');
    });
    it('renderiza un elemento li', () => {
        const item = { id: 2, name: 'Item 2' };
        const wrapper = mount(ListadoItemCompositionComponent, {
            props: { item }
        });
        expect(wrapper.find('li').exists()).toBe(true);
    });
});
