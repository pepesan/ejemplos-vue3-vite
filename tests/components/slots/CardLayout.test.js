import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import CardLayout from '../../../src/components/slots/CardLayout.vue';
describe('CardLayout', () => {
    it('renderiza el slot "titulo"', () => {
        const wrapper = mount(CardLayout, {
            slots: {
                titulo: '<h2>Mi tarjeta</h2>'
            }
        });
        expect(wrapper.find('header').html()).toContain('<h2>Mi tarjeta</h2>');
        expect(wrapper.text()).toContain('Mi tarjeta');
    });
    it('renderiza el slot "contenido"', () => {
        const wrapper = mount(CardLayout, {
            slots: {
                contenido: '<p>Este es el contenido principal</p>'
            }
        });
        expect(wrapper.find('section').html()).toContain('<p>Este es el contenido principal</p>');
        expect(wrapper.text()).toContain('Este es el contenido principal');
    });
    it('renderiza el slot "acciones"', () => {
        const wrapper = mount(CardLayout, {
            slots: {
                acciones: '<button>Aceptar</button>'
            }
        });
        expect(wrapper.find('footer').html()).toContain('<button>Aceptar</button>');
        expect(wrapper.text()).toContain('Aceptar');
    });
    it('renderiza todos los named slots a la vez', () => {
        const wrapper = mount(CardLayout, {
            slots: {
                titulo: '<h2>Mi tarjeta</h2>',
                contenido: '<p>Este es el contenido principal</p>',
                acciones: '<button>Aceptar</button>'
            }
        });
        expect(wrapper.find('header').text()).toContain('Mi tarjeta');
        expect(wrapper.find('section').text()).toContain('Este es el contenido principal');
        expect(wrapper.find('footer').text()).toContain('Aceptar');
    });
});
