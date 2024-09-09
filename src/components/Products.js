import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./../rtk/slices/products-slice";
import { addToCart } from "../rtk/slices/cart-slice";
import Swal from "sweetalert2";
function Products() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <Container className=" py-5">
      <Row className=" py-5">
        {products.map((pro) => {
          return (
            <Col key={pro.id} className="col">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  style={{ height: "300px" }}
                  variant="top"
                  src={pro.image}
                />
                <Card.Body>
                  <Card.Title>{pro.title}</Card.Title>
                  <Card.Text>
                    {pro.description.length > 100
                      ? pro.description.substring(0, 100) + "..."
                      : pro.description}
                  </Card.Text>

                  <Card.Text>
                    {pro.price}
                    <span>$</span>
                  </Card.Text>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      dispatch(addToCart(pro));
                      Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your Product Add Successfully",
                        showConfirmButton: false,
                        timer: 1500,
                      });
                    }}
                  >
                    Add to Cart
                  </button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Products;
