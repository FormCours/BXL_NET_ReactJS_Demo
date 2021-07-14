import PropTypes from 'prop-types';

const PeopleTabRow = (props) => {
    const {firstname, lastname} = props;

    return (
        <tr>
            <td>{firstname}</td>
            <td>{lastname}</td>
        </tr>
    );
}

PeopleTabRow.propTypes = {
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired
}

export default PeopleTabRow;