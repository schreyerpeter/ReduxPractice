import React, { Component } from 'react'; //If we use curly braces, we pull just a property from imported object
import { connect } from 'react-redux'; //React-Redux is the glue between React and Redux
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux'; //Makes sure the action that is created flows through the reducers

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          onClick={() => this.props.selectBook(book)} 
          key={book.title}
          className="list-group-item">
          {book.title}
        </li>
      )
    })
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  //Whatever is returned from here will show up as props
  //inside of BookList
  //If state changes, this function will run again and re-render
  return {
    books: state.books
  }
}

//Anything returned from this function will end up as props
//on the bookList container
function mapDispatchToProps(dispatch) {
  //Whenever selectBook is called, the result should be passed to all of our reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

//Promote BookList from a component to a container - it needs to know about
//this new dispatch method, selectBook. Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);

//Containers are "smart" components with direct access to state produced by Redux
