### If your component is ` Hook `, and need to get the data from redux. You can use ` useSelector ` to get state in redux. Like below:
```Javascript=
import { useSelector } from 'react-redux';

const auth = useSelector(state => state.auth);

console.log(`In hook component, the state in redux: `, auth)
```