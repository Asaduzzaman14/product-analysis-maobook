import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div>
            <h1 className='text-3xl'>Question  and Answer</h1>
            <div className='ans-container grid md:grid-cols-2 sm:grid-cols-1'>
                <div >
                    <h1 className='text-2xl mt-3 mb-2' >What is Context API?</h1>
                    <p>React introduces state Management Solutions Context API. Context API is a way for a React app to produce global variables that can be passed around effectively. The simplest way to pass data from a parent to a child in a React Application is by passing it on to the child's props to solve the prop drilling issue. React introduces state Management Solutions Context API. Context API is a way for a React app to produce global variables that can be passed around effectively.</p>
                </div>
                <div>
                    <h1 className='text-2xl mt-3 mb-2' >How does it work?</h1>
                    React.createContext() is all you need. It returns a consumer and a provider. The provider is a component that provides the state to its children, as its name suggests. It will hold the "store" and be the parent of all the components that might need that store. As it so happens, the consumer is a component that consumes and uses the state.
                </div>
                <div>
                    <h1 className='text-2xl mt-3 mb-2' >What Is Semantic Tag ?</h1>
                    <p>Semantic HTML elements are those that clearly describe their meaning in a human- and machine-readable way. Elements such as header, footer, and article are all considered semantic because they accurately describe the purpose of the element and the type of content that is inside them.</p>
                </div>
            </div>
            <hr className='hr' />
        </div>
    );
};

export default Blogs;