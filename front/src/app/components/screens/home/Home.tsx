
import { FC } from 'react';
import Meta from '../../../utils/meta/Meta';
import { IHome } from './home.interface';
import Heading from '../../ui/heading/Heading';
import { toastr } from 'react-redux-toastr';

const Home: FC<IHome> = () => {

    return (
        <Meta
            title="Watch movies online"
            description="Watch movies online in your browser"
        >
            <Heading
                title="Watch movies online" className='text-gray-300 mb-8 text-xl'
            />
            {/* <button onClick={() => toastr.success('Auth', 'You have successfully!')}>
                {' '}
                Show message
            </button> */}
        </Meta >
    )
}

export default Home;