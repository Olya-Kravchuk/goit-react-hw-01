const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map(friend => {
        return (
          <li key={friend.id}>
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          </li>
        );
      })}
    </ul>
  );
};

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <img src={avatar} alt="Avatar" width="148" />
      <p>{name}</p>
      {isOnline ? <p>Online</p> : <p>Offline</p>}
    </div>
  );
};

export default FriendList;
