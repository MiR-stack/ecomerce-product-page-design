import PageLayout from "../../layouts/pageLayout/pageLayout"
import PropTypes from 'prop-types'

function Product({product}) {
  console.log(product);
  return (
    <PageLayout >
        
    </PageLayout>
  )
}

export default Product


Product.propTypes = {
  product:PropTypes.object.isRequired
}