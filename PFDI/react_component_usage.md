# PFDI-20 Questionnaire Component

This React component implements the Pelvic Floor Distress Inventory (PFDI-20) questionnaire, a validated tool for assessing pelvic floor disorders.

## Installation

1. Ensure you have React and the necessary dependencies installed in your project.
2. This component uses the `shadcn/ui` library for styling. Make sure you have it set up in your project. You can find installation instructions at [shadcn/ui documentation](https://ui.shadcn.com/docs/installation).

## Usage

1. Copy the `PFDI20Form.tsx` file into your project's components directory.
2. Import the component in your desired page or component:

    ```jsx
    import PFDI20Form from './path/to/PFDI20Form';
    ```

3. Use the component in your JSX:

    ```javascript
    <PFDI20Form />
    ```

## Features

- Implements all 20 questions of the PFDI-20 questionnaire.
- Divided into three sections: POPDI-6, CRADI-8, and UDI-6.
- Conditional rendering for follow-up questions.
- Responsive design with proper text wrapping.
- Uses shadcn/ui components for consistent styling and accessibility.

## Customization

The component uses a `pfdiData` object to populate the questionnaire. If you need to modify the questions or add translations, you can edit this object directly in the component file.

## Form Submission

The component includes a basic form submission handler that logs the answers to the console. To integrate with your backend or perform custom actions on submission, modify the `handleSubmit` function in the component.

## Accessibility

This component is built with accessibility in mind, using semantic HTML and proper ARIA attributes. However, always test with screen readers and keyboard navigation to ensure it meets your specific accessibility requirements.

## Dependencies

- React
- shadcn/ui components (Button, Card, Label, RadioGroup, ScrollArea)

Ensure these dependencies are properly installed and configured in your project.