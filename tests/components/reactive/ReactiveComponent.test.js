import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import ReactiveComponent from '../../../src/components/reactive/ReactiveComponent.vue';
describe('ReactiveComponent.vue', () => {
    it('muestra los valores iniciales correctamente', () => {
        const wrapper = mount(ReactiveComponent);
        const texto = wrapper.text();
        expect(texto).toContain('Contador: 0');
        expect(texto).toContain('Usuario: Ana (25 años)');
    });
    it('incrementa el contador al hacer click', async () => {
        const wrapper = mount(ReactiveComponent);
        const botones = wrapper.findAll('button');
        await botones[0].trigger('click');
        expect(wrapper.text()).toContain('Contador: 1');
    });
    it('incrementa la edad del usuario al hacer click', async () => {
        const wrapper = mount(ReactiveComponent);
        const botones = wrapper.findAll('button');
        await botones[1].trigger('click');
        expect(wrapper.text()).toContain('Usuario: Ana (26 años)');
    });
});
