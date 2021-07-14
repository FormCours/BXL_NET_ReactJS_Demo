import PropTypes from 'prop-types';

const Addition = (props) => {
    const { nb1, nb2 } = props;

    console.log(typeof (nb1));

    const result = nb1 + nb2;

    return (
        <div>
            La somme de {nb1} et {nb2} donne {result}
        </div>
    );
}

// Ajout d'un typage via 'prop-types'
// -> npm install prop-types
Addition.propTypes = {
    nb1: PropTypes.number.isRequired,
    nb2: PropTypes.number.isRequired
}
// Cela permet d'avoir des messages d'erreurs lier au typage

export default Addition;