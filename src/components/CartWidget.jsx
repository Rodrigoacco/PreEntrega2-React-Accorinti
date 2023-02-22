import carrito from "./images/cart2.svg";

const CartWidget = () => {
    return (
        <button type="button" className="btn btn-primary position-relative">
            <img src={carrito} alt={"carrito"} width={24} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">10</span>
        </button>
    )
}

export default CartWidget;