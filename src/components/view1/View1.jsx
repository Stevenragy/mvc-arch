/* eslint-disable react/prop-types */
const View1 = ({ data, incrementCount }) => {
    return (
        <div>
            <h1>Counter</h1>
            <p>Count: {data?.count}</p>
            <button onClick={incrementCount}>Increment</button>
        </div>
    );
};

export default View1;
