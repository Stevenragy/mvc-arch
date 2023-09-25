import { useEffect, useState } from "react";
import useView1Model from "./useView1Model";
import View1 from "./View1";

const View1Controller = () => {
    const { initialData } = useView1Model();
    const [data, setData] = useState();

    useEffect(() => {
        setData(initialData);
    }, [initialData]);

    const incrementCount = () => {
        setData((prevData) => ({ ...prevData, count: prevData.count + 1 }));
    };

    return <View1 data={data} incrementCount={incrementCount} />;
};

export default View1Controller;
