import React from 'react';
import { connect, useSelector, useDispatch } from 'react-redux'

//-----------------------------------------------
// HOF
//-----------------------------------------------

// function CartBadge(props) {
//     return (
//         <div>
//             {Object.entries(props.cart).length} item(s) in cart
//         </div>
//     );
// }

// function mapStateToProps(state) {
//     return {
//         cart: state.cart
//     }
// }
// export default connect(mapStateToProps, null)(CartBadge);

//-----------------------------------------------



//-----------------------------------------------
// hooks
//-----------------------------------------------


function CartBadge(props) {
    const cart = useSelector(state => state.cart)
    return (
        <div>
            <div>
                {Object.entries(cart).length} item(s) in cart
         </div>
        </div>
    );
}

export default CartBadge;