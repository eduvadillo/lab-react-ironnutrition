import { Card, Col, Button } from "antd";


function FoodBox(props) {
        

  return (
           props.allFoods.map((everyFood) => (
<Col>
  <Card
    title={everyFood.name}
    style={{ width: 230, height: 300, margin: 10 }}
  >
    <img src={everyFood.image} alt="foodimage" height={60} />
    <p>Calories: {everyFood.calories}</p>
    <p>Servings: {everyFood.servings}</p>
    <p>
      <b>Total Calories: {everyFood.calories * everyFood.servings}  </b> kcal
    </p>
    <Button type="primary"> Delete </Button>
  </Card>
</Col>
  ))
  )}

export default FoodBox;




