import { Button, Container, Image, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeFromCart } from "../rtk/slices/cart-slice";
import Swal from "sweetalert2";

function Cart() {
  const carts = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const totalPrice = carts.reduce((acc, pro) => {
    acc += pro.price * pro.quantity;
    return acc;
  }, 0);
  return (
    <Container className="py-5">
      <h1 className=" text-center py-5">Cart</h1>
      <div className="d-flex justify-content-between align-items-center">
        <Button
          className="mb-3"
          variant="warning"
          onClick={() => {
            Swal.fire({
              title: "Are you sure?",
              text: "You won't be able to revert this!",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Yes, delete it!",
            }).then((result) => {
              if (result.isConfirmed) {
                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success",
                });

                dispatch(clearCart());
              }
            });
          }}
        >
          Clear Cart
        </Button>
        <span className=" fw-bold ">
          Total Price :
          <span className="  text-primary">{totalPrice.toFixed(2)} $</span>
        </span>
      </div>
      <Table striped bordered hover size="sm" className="text-center">
        <thead>
          <tr>
            <th>Id</th>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {carts.map((cart) => {
            return (
              <tr key={cart.id} className="align-middle">
                <td>{cart.id}</td>
                <td>
                  <Image
                    style={{ width: "60px", height: "60px" }}
                    src={cart.image}
                    alt={cart.title}
                  ></Image>
                </td>
                <td>{cart.title}</td>
                <td>{cart.price}$</td>
                <td>{cart.quantity}</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => {
                      Swal.fire({
                        title: "Are you sure?",
                        text: "You won't be able to revert this!",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Yes, delete it!",
                      }).then((result) => {
                        if (result.isConfirmed) {
                          Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success",
                          });

                          dispatch(removeFromCart(cart));
                        }
                      });
                    }}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}

export default Cart;
