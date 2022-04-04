import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import './CustomeLink.css'


function CustomeLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link className={(match ? 'active' : 'link')} style={{ textDecoration: match ? " underline" : "none" }}
                to={to}
                {...props}
            >
                {children}
            </Link>

        </div>
    );
}



export default CustomeLink;