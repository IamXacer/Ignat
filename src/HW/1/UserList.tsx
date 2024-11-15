type AddressType = {
  street: string; // ПОДПРАВЛЯЕМ any
  city: string; // ПОДПРАВЛЯЕМ any
};
export type UserType = {
  id: number,
  name: string,
  age: number,
  address: AddressType
};

// Определение типа UserListPropsType, описывающего свойства (props) компонента UserList
type UserListPropsType = {
  users: UserType[]; // Пропс users должен содержать массив объектов типа UserType
};

export const UserList = (props: UserListPropsType) => {
  return (
    <div id={'hw01-users'}>
      <h2>User List:</h2>

      <ul>
        {props.users.map((user) => ( // ВСЕ ТОВАРЫ В СТРАНУ ПРИЕЗЖАЮТ В КОНТЕЙНЕРАХ, А В РЕАКТЕ...
          <li key={user .id}
              id={`hw01-user-${user.id}`}>
              {/*id={`hw01-user-${ЭЛЕМЕНТ МАССИВА.id}`}>*/}
            <strong>{user.name}</strong> (Age: {user.age})<strong> Address:</strong>
            {user.address.street}, {user.address.city}
          </li>
        ))}
      </ul>
    </div>
  );
};
