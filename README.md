# TODOs


# QUESTIONS


# THINGS TO DISCUSS


# THINGS I'VE LEARNED
What causes a React component to rerender?
- The component's parent renders again
- The component's props change
- The component's state changes

useEffect
- Guaranteed to render the first time a component renders
- React checks if useEffect needs to fire on re-render (dependency array)

useState
- Whenever state changes, the component re-renders
