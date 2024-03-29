import './App.css';
// import '~modern-normalize/modern-normalize.css';
// import clsx from 'clsx';
import userData from './userData.json';
import Profile from './components/Profile';
import friends from './friends.json';
import FriendList from './components/FriendList';
import transactions from './transactions.json';
import TransactionHistory from './components/TransactionHistory';

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
