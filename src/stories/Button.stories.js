import VButton from '../components/VButton.vue';
import { Connotation } from '@vonage/vvd-foundation/constants';

export default {
  title: 'Wrappers/Button',
  component: VButton,
  argTypes: {
    label: {
      type: { name: 'string', required: true },
      defaultValue: 'Button',
    },
    connotation: { control: 'select', options: Object.values(Connotation) },
    onClick: {},
  }
};

const Template = (args) => ({
  components: { VButton },
  setup() {
    return { args };
  },
  template: '<v-button v-bind="args" />',
});

export const Basic = Template.bind({});

export const Filled = Template.bind({});
Filled.args = { layout : "filled" };

export const Outlined = Template.bind({});
Outlined.args = { layout : "outlined" };

export const PillShape = Template.bind({});
PillShape.args = {
  layout : "filled",
  shape: 'pill',
};

export const Dense = Template.bind({});
Dense.args = {
  layout : "filled",
  dense: true,
};

export const Pending = Template.bind({});
Pending.args = {
  layout : "filled",
  pending: true,
};