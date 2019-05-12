import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import getCategorys from '../../store/actions/items/getCategorys';
import addItem from '../../store/actions/items/addItem';
import SelectList from '../../components/selectList/SelectList';
import InputFieldWithTitle from '../../components/form/InputFieldWithTitle';
import FileInputField from '../../components/form/FileInputField';
import Form from '../../components/form/Form';

class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sign: '',
      description: '',
      category: '',
      file: null,
      fileName: '',
    };
  }

  handleEvent = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleImage = (event) => {
    this.setState({
      file: event.target.files[0],
      fileName: event.target.value,
    });
  };

  handleSubmit = event => {
    this.props.addItem({
      sign: this.state.sign,
      description: this.state.description,
      category: this.state.category,
    }, this.state.file)
      .then(() => {
        this.props.history.push('/me');
      });
    event.preventDefault();
  };

  componentDidMount() {
    if (!this.props.authenticated) {
      this.props.history.push('/signin');
    }
    this.props.getCategorys();
  }

  render() {
    return (
      <React.Fragment>
        <Form
          handleSubmit={this.handleSubmit}
          id={'additem'}
          name={'additem'}
          submitBtnType={'danger'}
          submitBtnValue={'Add item'}
        >
          <InputFieldWithTitle
            value={this.state.sign}
            name={'sign'}
            onChange={this.handleEvent}
            title={'Item Sign'}
          />
          <InputFieldWithTitle
            value={this.state.description}
            name={'description'}
            onChange={this.handleEvent}
            title={'Description'}
          />
          <FileInputField
            value={this.state.fileName}
            title={'Choose file'}
            name={'file'}
            type={'file'}
            onChange={this.handleImage}
          />
          <SelectList
            currentValue={this.state.category}
            onChange={this.handleEvent}
            list={this.props.categoryList}
            listLabel={'Category:'}
            listName={'category'}
          />
        </Form>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  categoryList: state.itemReducer.categoryList.map(item => item.title),
  authenticated: state.authReducer.authenticated,
});

const mapDispatchToProps = dispatch => ({
  getCategorys: bindActionCreators(getCategorys, dispatch),
  addItem: bindActionCreators(addItem, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddItem);
