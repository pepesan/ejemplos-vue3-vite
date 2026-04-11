import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import CondicionalCompositionComponent from '../../../src/components/directives/CondicionalCompositionComponent.vue';
describe('CondicionalCompositionComponent.vue', () => {
    it('no muestra el contenido inicialmente', () => {
        const wrapper = mount(CondicionalCompositionComponent);
        expect(wrapper.text()).toContain('Mostrar');
        expect(wrapper.text()).not.toContain('El contenido está visible');
    });
    it('muestra el contenido al hacer click', async () => {
        const wrapper = mount(CondicionalCompositionComponent);
        await wrapper.get('button').trigger('click');
        expect(wrapper.text()).toContain('Ocultar');
        expect(wrapper.text()).toContain('El contenido está visible');
    });
    it('oculta el contenido al hacer doble click', async () => {
        const wrapper = mount(CondicionalCompositionComponent);
        const boton = wrapper.get('button');
        await boton.trigger('click');
        await boton.trigger('click');
        expect(wrapper.text()).toContain('Mostrar');
        expect(wrapper.text()).not.toContain('El contenido está visible');
    });
});
