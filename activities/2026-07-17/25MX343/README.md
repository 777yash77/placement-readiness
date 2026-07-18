# Dynamic JSON-Driven Form Engine

## Overview
This project implements a scalable, JSON-driven form generator in React/Next.js. The engine parses a nested JSON configuration to render complex, dynamic questionnaires, enforcing both validation and conditional logic (dependency-based rendering).

## Features
- **Recursive Rendering**: Deeply nested questionnaire structures are rendered using a recursive component pattern.
- **Dynamic Validation**: Real-time validation schemas (e.g., `age > 18`).
- **Conditional Logic**: Form fields respond to state changes (e.g., `showIf` attribute hides/shows fields based on sibling input).
- **State Management**: Centralized `useState` handler for tracking deep object updates.

## Technical Architecture
- **Component Pattern**: `FormGenerator` (Root) -> `FieldRenderer` (Recursive Component) -> `InputType` (Leaf Components).
- **State Flow**: Lifting state up to the root to allow for cross-field dependency evaluation.

## Complexity Analysis
- **Time Complexity**: 
    - Rendering: $O(N)$ where $N$ is the total number of fields in the schema.
    - Validation/Condition Checks: $O(M)$ where $M$ is the number of dependencies per field.
- **Space Complexity**: $O(K)$ where $K$ is the number of form inputs, as we maintain a flat state object for values.

## Trade-offs & Decisions
1. **Recursion vs. Iteration**: We chose recursion for the schema parsing to support arbitrarily deep nesting, trading a slightly higher call-stack depth for code maintainability.
2. **Schema-Driven vs. Hardcoded**: By moving the form logic to JSON, we decouple the UI from business requirements, allowing non-developers to update the questionnaire without code changes.

## Setup Instructions
1. Install dependencies: `npm install`
2. Run development server: `npm run dev`
