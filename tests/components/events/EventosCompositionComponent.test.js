import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import EventosCompositionComponent from '../../../src/components/events/EventosCompositionComponent.vue';
describe('EventosCompositionComponent.vue', () => {
    it('muestra el valor inicial del contador', () => {
        const wrapper = mount(EventosCompositionComponent);
        expect(wrapper.get('[data-testid="contador"]').text())
            .toContain('Contador: 0');
    });
    it('incrementa el contador al hacer click', async () => {
        const wrapper = mount(EventosCompositionComponent);
        await wrapper.get('[data-testid="btn-inc"]').trigger('click');
        expect(wrapper.get('[data-testid="contador"]').text())
            .toContain('Contador: 1');
    });
    it('decrementa el contador cuando es mayor que 0', async () => {
        const wrapper = mount(EventosCompositionComponent);
        await wrapper.get('[data-testid="btn-inc"]').trigger('click');
        await wrapper.get('[data-testid="btn-dec"]').trigger('click');
        expect(wrapper.get('[data-testid="contador"]').text())
            .toContain('Contador: 0');
    });
    it('no permite que el contador sea negativo', async () => {
        const wrapper = mount(EventosCompositionComponent);
        await wrapper.get('[data-testid="btn-dec"]').trigger('click');
        expect(wrapper.get('[data-testid="contador"]').text())
            .toContain('Contador: 0');
    });
});
