import PropTypes from 'prop-types';
import PeopleTabRow from './people-tab-row';
import style from './people-tab.module.css';

const PeopleTab = (props) => {
    const {peopleList} = props;
    console.log(peopleList);

    const peopleRowJSX = peopleList.map(
        person => <PeopleTabRow key={person.id} {...person} />
    );
    console.log(peopleRowJSX);

    return (
        <table className={style.peopleTable}>
            <thead>
                <tr>
                    <th>Prenom</th>
                    <th>Nom</th>
                </tr>
            </thead>
            <tbody>
                {peopleRowJSX}
            </tbody>
        </table>
    );
}

PeopleTab.defaultProps = {
    peopleList: []
}

PeopleTab.propTypes = {
    peopleList: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        firstname: PropTypes.string.isRequired,
        lastname: PropTypes.string.isRequired
    }))
}

export default PeopleTab;