
const Welcome = (props) => {
    // Récuperation du name du parametre d'entré
    const {name} = props;

    // Renvoie du JSX
    return (
        <div>
            Welcome {name} !
        </div>
    );
}

export default Welcome;