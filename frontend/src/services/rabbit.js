import http from "../http-common";

class OrderDataService{
 getAll(props) {
    return http.get(`/orders`);
  }
}
export default new OrderDataService;