//Cart Component
import React, {Component} from 'react';
class Cart extends Component {
//Constructor is called First, to initialize value
// Mounting
  constructor(props){
    super(props);
    this.state = {qty: this.props.qty}
    console.log('constructor First');
  }

  static getDerivedStateFromProps(props, state) {
    if(props.qty !== state.qty) {
      return {qty: props.qty}
    }
    return null;
  }
//Third
  componentDidMount() {
    console.log('Invoked immediately after component render');
  }
//Fourth Checking
//Updating stage checking
  shouldComponentUpdate(nextProps, nextState) {
    if(this.props.qty !== nextProps.qty) {
      console.log('should component update');
      return true;
    }
    return false;
  }
//Fifth re-rendering of the state happens
  componentDidUpdate(prevProps, prevState){
    if(this.props.productId !== prevProps.productId){
      console.log('component updated');
    }
  }
//Last
  componentWillUnmount() {
    console.log('component is unmounted and destroyed');
  }
//Second displaying
  render(){
    return(
      <div>
        <h2>Cart Items ({this.state.qty})</h2>
      </div>
    )
  }
}
export default Cart