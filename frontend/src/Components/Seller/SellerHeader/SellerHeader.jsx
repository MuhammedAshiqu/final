import React from 'react';
import { Link } from 'react-router-dom';

function SellerHeader() {
    return (
        <div>
            <Link to='/seller-viewprod'>View products</Link>
            <Link to='/seller-addprod'>Add products</Link>
        </div>
    );
}

export default SellerHeader;
