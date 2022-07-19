import { AdminContainer } from "./content/mapping";
import useAdmin from "./content-hook/lifycycle";

export default function AdminComponent(){

    const [ JSX, hookState ] = useAdmin({props1: '222'})

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            {/* Custom Component */}
            <AdminContainer params1={'AAAAAABBBB'}/>
            {/* Hook Component */}
            { JSX }
        </div>
        
    )
}