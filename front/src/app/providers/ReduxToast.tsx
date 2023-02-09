import { FC } from 'react';
import ReduxToastrLib from 'react-redux-toastr';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'


const ReduxToast: FC = () => {
    return (
        <div>
            <ReduxToastrLib
                newestOnTop={false}
                preventDuplicates
                progressBar
                closeOnToastrClick
                timeOut={3000}
                position="top-right"
                transitionIn='fadeIn'
                transitionOut='fadeOut'
            />
        </div>
    )
}

export default ReduxToast;  