import React from 'react'
import { connect } from 'react-redux'
import {
  Divider,
  Header,
  Image,
  Container,
  Table,
  Button,
} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import AppForm from './AppForm'

class AppView extends React.Component {
  state = { showForm: false }

  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm })
  }

  render() {
    const { app = {} } = this.props
    const { showForm } = this.state
    return (
      <Container>
        <Link to="/apps">View All Apps</Link>
        <Button onClick={this.toggleForm}>
          { showForm ? 'Cancel' : 'Edit' }
        </Button>
        { showForm ?
            <AppForm closeForm={this.toggleForm} {...app} />
            :
            <div>
              <Header as="h3" textAlign="center">{app.name}</Header>
              <Image src={app.logo} />
              <Table definition>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell />
                    <Table.HeaderCell />
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  <Table.Row>
                    <Table.Cell>Description</Table.Cell>
                    <Table.Cell>{app.description}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Author</Table.Cell>
                    <Table.Cell>{app.author}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Version</Table.Cell>
                    <Table.Cell>{app.version}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Price</Table.Cell>
                    <Table.Cell>${app.price}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Category</Table.Cell>
                    <Table.Cell>{app.category}</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </div>
        }
      </Container>
    )
  }
}

const mapStateToProps = (state, props) => {
  const { id } = props.match.params
  const app = state.apps.find( a => a.id === parseInt(id, 10) )
  return { app }
}

export default connect(mapStateToProps)(AppView)