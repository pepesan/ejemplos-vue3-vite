import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import LlamaListadoCompositionComponent from '../../../src/components/directives/LlamaListadoCompositionComponent.vue';
import ListadoCompositionComponent from '../../../src/components/directives/ListadoCompositionComponent.vue';
describe('LlamaListadoCompositionComponent.vue', () => {
    it('renderiza el título', () => {
        const wrapper = mount(LlamaListadoCompositionComponent);
        expect(wrapper.find('h2').text()).toBe('Llama');
    });
    it('renderiza el componente ListadoCompositionComponent', () => {
        const wrapper = mount(LlamaListadoCompositionComponent);
        expect(wrapper.findComponent(ListadoCompositionComponent).exists()).toBe(true);
    });
    it('pasa tres items al componente hijo', () => {
        const wrapper = mount(LlamaListadoCompositionComponent);
        const listado = wrapper.findComponent(ListadoCompositionComponent);
        expect(listado.props('items')).toHaveLength(3);
        expect(listado.props('items')).toEqual([
            { id: 1, name: 'Item 1' },
            { id: 2, name: 'Item 2' },
            { id: 3, name: 'Item 3' }
        ]);
    });
    it('muestra los items renderizados en pantalla', () => {
        const wrapper = mount(LlamaListadoCompositionComponent);
        const texto = wrapper.text();
        expect(texto).toContain('Item 1');
        expect(texto).toContain('Item 2');
        expect(texto).toContain('Item 3');
    });
});
