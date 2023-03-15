import React from 'react';
import Link from 'next/link';

const Button = (props) => {
    return (
        <div>
            <Link className={props.class} href={'/' + props.path}>{props.name}</Link>
        </div>
    );
}

export default Button;