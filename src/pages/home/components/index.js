import React, {useState, useEffect, Suspense} from "react";
import { Stack } from "@mui/material";
import { getCustomList } from "../utils/data_transformer"

const TestCP = React.lazy(() => import('./test/'))

const Home = () => {

    const [ customList, setCustomList ] = useState(null)

    useEffect(() => {
        getCustomList().then((res) => {
            console.log(`res: `, res)
            setTimeout(() => {
                setCustomList(res)
            }, 5000);
        }).catch((error) => {
            console.error(`Get customer list ERROR: `, error)
        })
    }, [])

    return(
        <Stack >
            <h1>Home Page</h1>
            {/* Use Suspense can add the fallback JSX if the inside JSX is not render yet. */}
            <Suspense fallback={<div>Loading...</div>}>
                <TestCP />
                    {
                        customList !== null&&
                        customList.map(c => 
                            <li>{c.name}</li>
                        )
                    }
            </Suspense>
        </Stack>
    )
}

export default Home