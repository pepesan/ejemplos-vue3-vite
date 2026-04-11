import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import UsaUserList from '../../../src/components/slots/UsaUserList.vue';
import UserList from '../../../src/components/slots/UserList.vue';
describe('UsaUserList', () => {
    it('renderiza el componente UserList', () => {
        const wrapper = mount(UsaUserList);
        expect(wrapper.findComponent(UserList).exists()).toBe(true);
    });
    it('muestra los usuarios usando el scoped slot', () => {
        const wrapper = mount(UsaUserList);
        expect(wrapper.text()).toContain('Ana - 25 años');
        expect(wrapper.text()).toContain('Luis - 30 años');
    });
    it('renderiza un párrafo por cada usuario', () => {
        const wrapper = mount(UsaUserList);
        const paragraphs = wrapper.findAll('p');
        expect(paragraphs).toHaveLength(2);
    });
    it('mantiene la estructura de lista del componente hijo', () => {
        const wrapper = mount(UsaUserList);
        expect(wrapper.find('ul').exists()).toBe(true);
        expect(wrapper.findAll('li')).toHaveLength(2);
    });
});
