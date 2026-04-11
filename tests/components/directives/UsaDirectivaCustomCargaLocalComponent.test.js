import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import UsaDirectivaCustomCargaLocalComponent from '../../../src/components/directives/UsaDirectivaCustomCargaLocalComponent.vue';
describe('UsaDirectivaCustomCargaLocalComponent.vue', () => {
    it('aplica correctamente los estilos de las directivas locales', () => {
        const wrapper = mount(UsaDirectivaCustomCargaLocalComponent);
        const rojo = wrapper.get('#rojo').element;
        const amarillo = wrapper.get('#amarillo').element;
        expect(rojo.style.backgroundColor).toBe('red');
        expect(amarillo.style.backgroundColor).toBe('yellow');
    });
    it('renderiza correctamente los textos', () => {
        const wrapper = mount(UsaDirectivaCustomCargaLocalComponent);
        const texto = wrapper.text();
        expect(texto).toContain('Este div tiene un fondo amarillo.');
        expect(texto).toContain('Este div tiene un fondo rojo.');
    });
});
