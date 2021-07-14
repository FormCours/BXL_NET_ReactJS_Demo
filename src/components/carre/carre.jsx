import PropTypes from 'prop-types';

const Carre = (props) => {
    const {nb} = props;

    const result = Math.pow(nb, 2);

    return (
        <p>Le carré de {nb} vaut {result}</p>
    );
}

// Définir une valeur par defaut au "props"
Carre.defaultProps = {
    nb: 2
}

// Définition d'un type de donnée pour les "props"
Carre.propTypes = {
    nb: PropTypes.number
}

export default Carre;