import { describe, it, expect, vi, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import { nextTick } from 'vue';
import axios from 'axios';
import PartidosAxiosComponent from '../../../src/components/httprequest/PartidosAxiosComponent.vue';
vi.mock('axios');
const mockedAxios = vi.mocked(axios);
describe('PartidosAxiosComponent', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });
    it('muestra el mensaje de carga al inicio', () => {
        mockedAxios.get.mockReturnValue(new Promise(() => { }));
        const wrapper = mount(PartidosAxiosComponent);
        expect(wrapper.text()).toContain('Cargando resultados...');
    });
    it('muestra los datos en la tabla cuando la petición es correcta', async () => {
        mockedAxios.get.mockResolvedValue({
            data: [
                {
                    nombre: 'Partido A',
                    imagen: 'partido-a.png',
                    dipu: 120
                },
                {
                    nombre: 'Partido B',
                    imagen: 'partido-b.png',
                    dipu: 80
                }
            ]
        });
        const wrapper = mount(PartidosAxiosComponent);
        await flushPromises();
        const rows = wrapper.findAll('tbody tr');
        expect(rows).toHaveLength(2);
        expect(wrapper.text()).toContain('Partido A');
        expect(wrapper.text()).toContain('120 diputados');
        expect(wrapper.text()).toContain('Partido B');
        expect(wrapper.text()).toContain('80 diputados');
        const images = wrapper.findAll('img');
        expect(images).toHaveLength(2);
        expect(images[0].attributes('src')).toBe('https://pactometro.cursosdedesarrollo.com/img/partido-a.png');
        expect(images[0].attributes('alt')).toBe('Partido A');
    });
    it('muestra un mensaje de error si falla la petición', async () => {
        mockedAxios.get.mockRejectedValue(new Error('Network Error'));
        const wrapper = mount(PartidosAxiosComponent);
        await flushPromises();
        expect(wrapper.text()).toContain('Error al cargar los datos: Network Error');
    });
});
async function flushPromises() {
    await Promise.resolve();
    await nextTick();
}
