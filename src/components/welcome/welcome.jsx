import style from './welcome.module.css';

const Welcome = (props) => {
    // Récuperation du name du parametre d'entré
    const {name} = props;

    // Renvoie du JSX
    return (
        <div className={style.title}>
            Welcome <span className={style.person}>{name}</span> !
        </div>
    );
}

export default Welcome;