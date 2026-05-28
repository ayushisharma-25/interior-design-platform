function CartError({ error }) {
    if (!error) return null;

    return (
        <div className="no">
            <i className="fas fa-face-frown-open"></i>
            <p className="error-texts">{error}</p>
        </div>
    );
}

export default CartError;