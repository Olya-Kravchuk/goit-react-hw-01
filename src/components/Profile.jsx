import css from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.profileCard}>
      <div>
        <img className={css.profileAvatar} src={image} alt="User avatar" />
        <p>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>
      <ul className={css.profileStatsList}>
        <li className={css.profileStatsItem}>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className={css.profileStatsItem}>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className={css.profileStatsItem}>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
