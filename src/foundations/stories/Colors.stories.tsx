import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Foundations/Colors',
};

export default meta;

type Story = StoryObj;

export const Palette: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        gap: '1rem',
      }}
    >
      <div
        style={{
          width: '100px',
          height: '100px',
          background: 'var(--ds-color-primary-500)',
          borderRadius: 'var(--ds-radius-md)',
        }}
      />

      <div
        style={{
          width: '100px',
          height: '100px',
          background: 'var(--ds-color-success-500)',
          borderRadius: 'var(--ds-radius-md)',
        }}
      />

      <div
        style={{
          width: '100px',
          height: '100px',
          background: 'var(--ds-color-danger-500)',
          borderRadius: 'var(--ds-radius-md)',
        }}
      />
    </div>
  ),
};