import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import ComputedComponent from '../../../src/components/reactive/ComputedComponent.vue';
describe('ComputedComponent.vue', () => {
    it('muestra el nombre, el apellido y el nombre completo inicial', () => {
        const wrapper = mount(ComputedComponent);
        const texto = wrapper.text();
        expect(texto).toContain('Nombre: Ana');
        expect(texto).toContain('Apellido: García');
        expect(texto).toContain('Nombre completo: Ana García');
    });
    it('actualiza el nombre completo al pulsar el botón', async () => {
        const wrapper = mount(ComputedComponent);
        await wrapper.get('button').trigger('click');
        const texto = wrapper.text();
        expect(texto).toContain('Nombre: Luis');
        expect(texto).toContain('Apellido: García');
        expect(texto).toContain('Nombre completo: Luis García');
    });
});
