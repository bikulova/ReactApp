export default function IconButton (props) {
    return(
        <button {...props} className = "btn btn-lg">
            {props.children}
        </button>
    );
}