import React from 'react'
import { withBounty } from './BountyProvider'
import People from './components/People'
import Form from './components/Form'

const App = (props) => {
    const mappedBounties = props.people.savedData.map(single => <People {...single}
    key = {single._id} />)

    return (
        <div>
            <People />
            {mappedBounties}
            <Form/>
        </div>
    )
}


export default withBounty(App)