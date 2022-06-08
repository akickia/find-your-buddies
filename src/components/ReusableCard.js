import PropTypes from "prop-types";

const ReusableCard = ({children}) => {
    return(
        <div className="re-card">
            {children}
        </div>
    );
};

export default ReusableCard;

ReusableCard.propTypes = {
    children: PropTypes.node.isRequired
}