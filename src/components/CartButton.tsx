interface Props {
  showStatus: boolean;
  onSetShowCartInterface: (status: boolean) => void;
  cartLength: number;
}

const CartButton = ({
  showStatus,
  onSetShowCartInterface,
  cartLength,
}: Props) => {
  return (
    <button
      className="btn btn-success d-flex align-items-center p-1 gap-2"
      onClick={() => {
        onSetShowCartInterface(!showStatus);
      }}
    >
      {!showStatus ? (
        <>
          <i className="bi bi-cart"></i>
          Cart ({cartLength})
        </>
      ) : (
        <>
          <i className="bi bi-arrow-left"></i> Back to Products
        </>
      )}
    </button>
  );
};

export default CartButton;
