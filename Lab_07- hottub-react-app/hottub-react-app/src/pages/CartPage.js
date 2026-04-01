import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import PageShell from "../components/common/PageShell";
import { cartItemsSeed } from "../data/products";

function CartPage() {
  const [items, setItems] = useState(cartItemsSeed);

  const total = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items]
  );

  const updateQuantity = (id, quantity) => {
    setItems((prev) => prev.map((item) => (item.id === id ? { ...item, quantity } : item)));
  };

  return (
    <PageShell title="Shopping Cart" crumb="Shopping Cart">
      <table className="cart-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Details</th>
            <th>Qty</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>
                <img src={item.image} alt={item.name} className="cart-thumb" />
              </td>
              <td>{item.name}</td>
              <td>
                <select
                  value={item.quantity}
                  onChange={(event) => updateQuantity(item.id, Number(event.target.value))}
                >
                  {[1, 2, 3, 4, 5].map((count) => (
                    <option key={count} value={count}>
                      {count}
                    </option>
                  ))}
                </select>
              </td>
              <td>${item.price * item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="cart-summary">
        <strong>Total: ${total}</strong>
      </div>
      <div className="cart-actions">
        <Link to="/category" className="secondary-btn">
          Continue Shopping
        </Link>
        <Link to="/payment" className="primary-btn link-btn">
          Proceed to Checkout
        </Link>
      </div>
    </PageShell>
  );
}

export default CartPage;
