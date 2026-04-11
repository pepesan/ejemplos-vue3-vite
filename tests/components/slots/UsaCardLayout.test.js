import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import UsaCardLayout from '../../../src/components/slots/UsaCardLayout.vue';
import CardLayout from '../../../src/components/slots/CardLayout.vue';
describe('UsaCardLayout', () => {
    it('renderiza el componente CardLayout', () => {
        const wrapper = mount(UsaCardLayout);
        expect(wrapper.findComponent(CardLayout).exists()).toBe(true);
    });
    it('muestra el contenido del slot "titulo"', () => {
        const wrapper = mount(UsaCardLayout);
        expect(wrapper.find('header').text()).toContain('Mi tarjeta');
    });
    it('muestra el contenido del slot "contenido"', () => {
        const wrapper = mount(UsaCardLayout);
        expect(wrapper.find('section').text()).toContain('Este es el contenido principal');
    });
    it('muestra el contenido del slot "acciones"', () => {
        const wrapper = mount(UsaCardLayout);
        expect(wrapper.find('footer').text()).toContain('Aceptar');
    });
    it('renderiza correctamente toda la estructura de la tarjeta', () => {
        const wrapper = mount(UsaCardLayout);
        expect(wrapper.text()).toContain('Mi tarjeta');
        expect(wrapper.text()).toContain('Este es el contenido principal');
        expect(wrapper.text()).toContain('Aceptar');
    });
});
