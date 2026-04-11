import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import DataBinding from '../../../src/components/data-binding/DataBinding.vue';
describe('DataBinding.vue', () => {
    it('renderiza correctamente el mensaje', () => {
        const wrapper = mount(DataBinding);
        expect(wrapper.text()).toContain('Hola Vue');
    });
    it('enlaza correctamente el atributo href', () => {
        const wrapper = mount(DataBinding);
        const enlace = wrapper.get('a');
        expect(enlace.attributes('href')).toBe('https://vuejs.org');
    });
    it('tiene definidos los ref mensaje y url', () => {
        const wrapper = mount(DataBinding);
        expect(wrapper.vm.mensaje).toBeDefined();
        expect(wrapper.vm.url).toBeDefined();
    });
    it('tiene valores iniciales correctos en los ref', () => {
        const wrapper = mount(DataBinding);
        expect(wrapper.vm.mensaje).toBe('Hola Vue');
        expect(wrapper.vm.url).toBe('https://vuejs.org');
    });
});
