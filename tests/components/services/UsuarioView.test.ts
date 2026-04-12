import { mount, flushPromises } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import UsuarioView from '../../../src/components/services/UsuarioView.vue'
import * as usuarioService from '../../../src/components/services/usuarioService'

describe('UsuarioView.vue', () => {
    it('muestra el nombre devuelto por el servicio', async () => {
        vi.spyOn(usuarioService, 'obtenerUsuario').mockResolvedValue({
            nombre: 'Ana'
        })

        const wrapper = mount(UsuarioView)

        await flushPromises()

        expect(usuarioService.obtenerUsuario).toHaveBeenCalled()
        expect(wrapper.text()).toContain('Usuario: Ana')
    })
})