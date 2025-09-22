import CartButton from "./CartButton";

interface Props {
  showStatus: boolean;
  onSetShowCartInterface: (status: boolean) => void;
  cartLength: number;
}

const Header = ({ showStatus, onSetShowCartInterface, cartLength }: Props) => {
  return (
    <header className="w-100 d-flex justify-content-between align-items-center p-2">
      <p>React Shopping Cart</p>
      <CartButton
        onSetShowCartInterface={onSetShowCartInterface}
        showStatus={showStatus}
        cartLength={cartLength}
      />
    </header>
  );
};

export default Header;
