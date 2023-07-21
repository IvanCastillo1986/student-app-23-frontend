# TODOs


# QUESTIONS
Why do we need React components to re-render?
    If we want to see somethng different, the component must re-render

What are the three things that would cause a React component to re-render?
    1. State changes
    2. Prop changes
    3. Parent re-renders
    (4. Context changes)


# THINGS TO ALWAYS INCLUDE IN APP
- A loading UI (spinners, progress bars, shimmer skeletons, etc.)


# THINGS I'VE LEARNED
What causes a React component to rerender?
- The component's parent renders again
- The component's props change
- The component's state changes

useEffect
- Guaranteed to render after the first time a component renders
- The component will first mount *without* calling useEffect. It will then call useEffect, then re-render
- React checks if useEffect needs to fire on re-render (dependency array)

useState
- Whenever state changes, the component re-renders

Network Tab
- Throttling simulates what it would be like for our user to use our app with different internet connection speeds

React DevTools
- Use the checkbox next to Boolean state to manually check what happens on toggle. Helpful for debugging

return()
- If we want to render either something or nothing, use ampersand {loading && <Loading />}
- If we want to render A or B, render ternary {loading ? <Loading /> : <StudentList />}
