import { Table } from "reactstrap";
import NewUserModal from "./NewUserModal";
import ConfirmRemovalModal from "./ConfirmRemovalModal";

const ListUsers = ({ users }) => {

  const renderUserRow = (user) => (
    <tr key={user.id}>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.document}</td>
      <td>{user.phone}</td>
      <td>{formatDate(user.registrationDate)}</td>
      <td className="action-cell">
        <NewUserModal user={user} />
        &nbsp;&nbsp;
        <ConfirmRemovalModal userId={user.id} />
      </td>
    </tr>
  );

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };


  return (
    <Table borderless={false} hover responsive size={'lg'} striped={false}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Document</th>
          <th>Phone</th>
          <th>Registration</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {!users || users.length <= 0 ? (
          <tr>
            <td colSpan="6" align="center">
              <b>No users available, Try creating a new one.</b>
            </td>
          </tr>
        ) : (
          users.map(renderUserRow)
        )}
      </tbody>
    </Table>
  );
};
export default ListUsers;
