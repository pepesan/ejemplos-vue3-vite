// src/components/slots/__tests__/UsaSlotComponent.spec.ts
import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import UsaSlotComponent from "../../../src/components/slots/UsaSlotComponent.vue";
import SlotComponent from "../../../src/components/slots/SlotComponent.vue";
describe("UsaSlotComponent", () => {
    it("renderiza el título del componente padre", () => {
        const wrapper = mount(UsaSlotComponent);
        expect(wrapper.text()).toContain("Usa Slot");
    });
    it("renderiza el componente hijo SlotComponent", () => {
        const wrapper = mount(UsaSlotComponent);
        expect(wrapper.findComponent(SlotComponent).exists()).toBe(true);
    });
    it("muestra el contenido enviado al slot dentro del componente hijo", () => {
        const wrapper = mount(UsaSlotComponent);
        expect(wrapper.text()).toContain("Componente Slot");
        expect(wrapper.text()).toContain("contenido de slot");
        expect(wrapper.html()).toContain("<h3>contenido de slot</h3>");
    });
});
