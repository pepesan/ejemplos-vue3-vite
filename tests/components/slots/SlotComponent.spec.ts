// tests/slots/SlotComponent.spec.ts
import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import SlotComponent from '../../../src/components/slots/SlotComponent.vue'

describe("SlotComponent", () => {
    it("renderiza el título del componente", () => {
        const wrapper = mount(SlotComponent);

        expect(wrapper.text()).toContain("Componente Slot");
    });

    it("renderiza el contenido del slot", () => {
        const wrapper = mount(SlotComponent, {
            slots: {
                default: "<h3>contenido de slot</h3>",
            },
        });

        expect(wrapper.html()).toContain("<h3>contenido de slot</h3>");
        expect(wrapper.text()).toContain("contenido de slot");
    });
});