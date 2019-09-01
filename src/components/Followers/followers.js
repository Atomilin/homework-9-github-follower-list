import React, { PureComponent } from 'react';
import styles from './followers.module.css';
import { getFollowersData, getFollowersIsLoading } from '../../modules/Followers';
import { connect } from 'react-redux';
import cx from 'classnames';

class Followers extends PureComponent {
  render() {
    const { data, isLoading } = this.props;

    if (isLoading) {
      return <p>Загрузка информации о подписчиках</p>;
    }

    if (!data) {
      return <p class="t-no-followers">Нет информации о подписчиках</p>;
    }
    // Покажите статус загрузки
    // Если данные не были загружены - сообщите об этом пользователю
    return (
      <div className={cx(styles.root, 't-followers')}>
        {/* 
        Отобразите список пользователей.
        Для каждого пользователя покажите имя и аватарку.
      */}
        {data.map(({ id, login, avatar_url }) => (
          <div key={id} className={styles.follower}>
            <img src={avatar_url} className={styles.followerImg} alt="" />
            <p className={styles.followerLogin}>{login}</p>
          </div>
        ))}
      </div>
    );
  }
}

// Используйте поля data, isLoading из стейта
export default connect(state => ({ data: getFollowersData(state), isLoading: getFollowersIsLoading(state)}))(Followers);
