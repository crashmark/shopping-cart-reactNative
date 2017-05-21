import React, { Component } from 'react';
import { StyleSheet, View, ListView } from 'react-native';
import OrderItem from './OrderItem';
import Total from './Total';

class ShoppingList extends Component {
  //state = { total: 0 };
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1.title !== r2.title
    });
    this.state = {
      total: 0,
      dataSource: this.ds.cloneWithRows([]),
    };
  }
  /*<OrderItem
    img="https://pbs.twimg.com/profile_images/569593540674473984/slHSRznT.jpeg"
    title="BUH"
    desc="buh"
    price={25.36}
    onQuantityUpdate={this.updateTotal.bind(this)}
  />
  <OrderItem
    img="https://pbs.twimg.com/profile_images/569593540674473984/slHSRznT.jpeg"
    title="BUH"
    desc="buh"
    price={25.36}
    onQuantityUpdate={this.updateTotal.bind(this)}
  />
  <OrderItem
    img="https://pbs.twimg.com/profile_images/569593540674473984/slHSRznT.jpeg"
    title="BUH"
    desc="buh"
    price={25.36}
    onQuantityUpdate={this.updateTotal.bind(this)}
  />
  <OrderItem
    img="https://pbs.twimg.com/profile_images/569593540674473984/slHSRznT.jpeg"
    title="BUH"
    desc="buh"
    price={25.36}
    onQuantityUpdate={this.updateTotal.bind(this)}
  />*/
  componentWillMount() {
    fetch('https://www.dmi.unict.it/~calanducci/LAP2/data.json',
      { headers: { 'Cache-Control': 'no-cache' } }
    )
    .then(response => response.json())
    .then(responseData => this.setState({ dataSource: this.ds.cloneWithRows(responseData.items) }))
    .catch(error => alert('Errore caricando file json', error));
  }
  updateTotal(amount) {
      this.setState({ total: this.state.total + amount });
  }
  render() {
    return (
      <View style={styles.wrapper}>
        <Total total={this.state.total} />
        <ListView
          enableEmptySections
          dataSource={this.state.dataSource}
          renderRow={row =>
            <OrderItem
              img={row.thumbnailUrl}
              title={row.title}
              desc={row.description}
              price={row.price}
              onQuantityUpdate={this.updateTotal.bind(this)}
            />}
        />
      </View>
    );
  }
}
export default ShoppingList;
const styles = StyleSheet.create({
  wrapper: {
    flex: 1
    //justifyContent: 'flex-start'

  }
});

  /*renderOrderItems() {
    this.props.items.map(currentItem =>
      <OrderItem
      imgsrc={currentItem.thumbnailUrl}
      title={currentItem.title}
      desc={currentItem.description}
      price={currentItem.price}
      onQuantityUpdate={this.updateTotal.bind(this)}

      />);
    }*/
/*ShoppingList.defaultProps =
  { items:
    [{ title: 'Masterining React Native',
      thumbnailUrl: 'https://images-na.ssl-images-amazon.com/images/I/51OqHiEyDtL.jpg',
      description: 'One of the book used during the LAP2 course for learning React Native development',
      price: 30.4,
      url: 'https://www.amazon.it/dp/1785885782/ref=cm_sw_r_cp_ep_dp_xxFdzb4HAR9N9'},
     {title:"Getting Started With React Native","thumbnailUrl":"https://images-na.ssl-images-amazon.com/images/I/51DkGupUKoL.jpg","description":"One of the book used during the LAP2 course for learning React Native development","price":30.4,"url":"https://www.amazon.it/dp/1785885189/ref=cm_sw_r_cp_ep_dp_XyFdzbBK48PEE"},{"title":"Masterining React Native","thumbnailUrl":"https://images-na.ssl-images-amazon.com/images/I/51OqHiEyDtL.jpg","description":"One of the book used during the LAP2 course for learning React Native development","price":30.4,"url":"https://www.amazon.it/dp/1785885782/ref=cm_sw_r_cp_ep_dp_xxFdzb4HAR9N9"},{"title":"Getting Started With React Native","thumbnailUrl":"https://images-na.ssl-images-amazon.com/images/I/51DkGupUKoL.jpg","description":"One of the book used during the LAP2 course for learning React Native development","price":30.4,"url":"https://www.amazon.it/dp/1785885189/ref=cm_sw_r_cp_ep_dp_XyFdzbBK48PEE"},{"title":"Masterining React Native","thumbnailUrl":"https://images-na.ssl-images-amazon.com/images/I/51OqHiEyDtL.jpg","description":"One of the book used during the LAP2 course for learning React Native development","price":30.4,"url":"https://www.amazon.it/dp/1785885782/ref=cm_sw_r_cp_ep_dp_xxFdzb4HAR9N9"},{"title":"Getting Started With React Native","thumbnailUrl":"https://images-na.ssl-images-amazon.com/images/I/51DkGupUKoL.jpg","description":"One of the book used during the LAP2 course for learning React Native development","price":30.4,"url":"https://www.amazon.it/dp/1785885189/ref=cm_sw_r_cp_ep_dp_XyFdzbBK48PEE"}]}*/
