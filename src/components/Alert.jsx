import clsx from 'clsx';
import { AiFillFire } from 'react-icons/ai';
import css from './Alert.module.css';

export const Alert = ({ variant, outlined, elevated, children }) => {
    return (
        <p
            className={clsx(css[variant], {
                [css.isOutlined]: outlined,
                [css.isElevated]: elevated,
            })}
        >
            <AiFillFire className="my-icon" size="24" /> {children}
        </p>
    );
};
