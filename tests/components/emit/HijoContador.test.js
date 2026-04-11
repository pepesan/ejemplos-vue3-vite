import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import HijoContador from '../../../src/components/emit/HijoContador.vue';
describe('HijoContador', () => {
    it('emite el evento incrementar al hacer click', async () => {
        const wrapper = mount(HijoContador);
        await wrapper.get('button').trigger('click');
        expect(wrapper.emitted('incrementar')).toBeTruthy();
        expect(wrapper.emitted('incrementar')).toHaveLength(1);
    });
});
