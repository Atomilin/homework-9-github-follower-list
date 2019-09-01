import React, { PureComponent } from 'react';
import styles from './UserInfo.module.css';

import { connect } from 'react-redux';
import { getUserData, getUserIsLoading } from '../../modules/User';

class UserInfo extends PureComponent {
  render() {
    const { data, isLoading } = this.props;

    if (isLoading) {
      return <p>Загрузка информации о пользователе</p>;
    }

    if (!data) {
      return <p class="t-no-user-info">Нет информации о пользователе</p>;
    }
    // Покажите статус загрузки
    // Если данные не были загружены - сообщите об этом пользователю
    const { name, bio, avatar_url } = data;

    return (
      <div className={styles.root}>
        {/* Отобразите данные о пользователе */}
        <div className={styles.imageWrapper}>
          <img className={styles.image} src={avatar_url} alt="user info" />
        </div>
        <div>
          <p className="t-user-name">{name}</p>
          <p className="t-user-bio">{bio}</p>
        </div>
      </div>
    );
  }
}

// Используйте поля data, isLoading из стейта
export default connect(state => ({data: getUserData(state), isLoading: getUserIsLoading(state)}))(UserInfo);
