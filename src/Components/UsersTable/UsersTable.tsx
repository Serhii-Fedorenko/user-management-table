import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { fetchUsers } from "../../redux/users/operations";
import { selectFilter, selectUsers } from "../../redux/users/selectors";
import { setFilter } from "../../redux/users/slice";
import SearchInput from "../SearchInput/SearchInput";
import { StyledTable } from "./UserTable.styled";

const UsersTable = () => {
  const dispatch = useDispatch<AppDispatch>();
  const users = useSelector(selectUsers);
  const filters = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(filters.name.toLowerCase()) &&
      user.username.toLowerCase().includes(filters.username.toLowerCase()) &&
      user.email.toLowerCase().includes(filters.email.toLowerCase()) &&
      user.phone.toLowerCase().includes(filters.phone.toLowerCase())
  );

  const handleFilterChange =
    (field: keyof typeof filters) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setFilter({ field, value: e.target.value }));
    };

  return (
    <div>
      <StyledTable>
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
          <tr>
            <th>
              <SearchInput
                value={filters.name}
                onChange={handleFilterChange("name")}
              />
            </th>
            <th>
              <SearchInput
                value={filters.username}
                onChange={handleFilterChange("username")}
              />
            </th>
            <th>
              <SearchInput
                value={filters.email}
                onChange={handleFilterChange("email")}
              />
            </th>
            <th>
              <SearchInput
                value={filters.phone}
                onChange={handleFilterChange("phone")}
              />
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              <th>{user.name}</th>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </div>
  );
};

export default UsersTable;
