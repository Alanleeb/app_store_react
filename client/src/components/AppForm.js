import React from 'react'
import { connect } from 'react-redux'
import { Form } from 'semantic-ui-react'
import { updateApp, addApp } from '../reducers/apps'

class AppForm extends React.Component {
  initialState = {
    name: '', 
    category: '', 
    price: '',
    version: '',
    author: '',
  }

  state = {...this.initialState}

  componentDidMount() {
    if (this.props.id)
      this.setState({ ...this.props })
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const app = this.state
    const { closeForm, dispatch } = this.props
    const myFunc = this.props.id ? updateApp : addApp
    dispatch(myFunc(app))
    this.setState({...this.initialState})
    closeForm()
  }

  render() {
    const { name, description, category, version, price, author } = this.props
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          name="name"
          required
          defaultValue={name}
          onChange={this.handleChange}
          label="Name"
        />
        <Form.Input
          name="description"
          defaultValue={description}
          onChange={this.handleChange}
          label="Description"
        />
        <Form.Input
          name="category"
          defaultValue={category}
          onChange={this.handleChange}
          label="Category"
        />
        <Form.Input
          name="version"
          defaultValue={version}
          onChange={this.handleChange}
          label="Version"
        />
        <Form.Input
          name="price"
          defaultValue={price}
          type="number"
          min="0"
          onChange={this.handleChange}
          label="Price"
        />
        <Form.Input
          name="author"
          defaultValue={author}
          onChange={this.handleChange}
          label="Author"
        />
        <Form.Button>Save</Form.Button>
      </Form>
    )
  }
}

export default connect()(AppForm)