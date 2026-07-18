# Engineering Reflection: Mission Deloitte 2

### Technical Hurdles & Resolutions
The biggest challenge was handling the conditional rendering (`showIf` logic) without causing performance bottlenecks. Initially, re-rendering the entire form on every keystroke was inefficient. I solved this by implementing `React.memo` on the `FieldRenderer` components, ensuring that only the fields affected by a state change are re-rendered.

### Lessons Learned
- **Architecture over Implementation**: I learned that a good form generator is essentially a "DSL" (Domain Specific Language) compiler. The JSON schema acts as the source code, and the React components act as the compiler.
- **The Power of Recursion**: Writing recursive components is cleaner, but requires careful handling of React keys to prevent reconciliation errors.

### Future Roadmap
If I were to take this to production, I would:
1. Integrate `react-hook-form` to handle complex validation schema (like Zod) instead of custom `onChange` validation.
2. Implement an "Async Validation" layer for fields that need to check against a server (e.g., checking if a username is taken).
