import PropTypes from 'prop-types';
import Header from '../../elements/Header/Header';
import Footer from '../../elements/Footer/Footer';

function FormatLayout({ children }) {
    return (
        <div className='flex flex-col w-full p-0'>
            <Header />
            <main className=''>{children}</main>
            <Footer />
        </div>
    )
}


FormatLayout.propTypes = {
    children: PropTypes.node.isRequired
};

export default FormatLayout