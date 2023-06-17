import { Container, List, ListItem, Typography, useTheme } from '@mui/material';
import React from 'react';

const Description = () => {
  const theme = useTheme();
  return (
    <Container>
      <Typography>
        Наше приложение предназначено для пользователей, которые желают создать
        свой блог или социальную сеть, где пользователи могут делиться своими
        идеями и опытом. В приложении доступны следующие функции:
      </Typography>
      <List>
        <ListItem sx={{ fontFamily: theme.typography.h5.fontFamily }}>
          1. Создание постов: пользователи могут создавать собственные посты,
          добавлять фотографии.
        </ListItem>
        <ListItem sx={{ fontFamily: theme.typography.h5.fontFamily }}>
          2. Отображение постов: пользователям в удобном виде доступны как свои
          посты, так и посты других пользователей.
        </ListItem>
        <ListItem sx={{ fontFamily: theme.typography.h5.fontFamily }}>
          3. Регистрация: новым пользователям необходимо зарегистрироваться в
          системе, введя свои личные данные, такие как имя пользователя, email и
          пароль.
        </ListItem>
        <ListItem sx={{ fontFamily: theme.typography.h5.fontFamily }}>
          4. Логин: зарегистрированные пользователи могут легко войти в систему,
          используя свои учетные данные.
        </ListItem>
        <ListItem sx={{ fontFamily: theme.typography.h5.fontFamily }}>
          5. Авторизация через JWT токен: безопасность и конфиденциальность
          пользовательских данных - это основные приоритеты нашего приложения, а
          для этого мы используем JWT токен, который подтверждает авторизацию
          пользователя и обеспечивает защиту его личных данных.
        </ListItem>
      </List>
    </Container>
  );
};

export default Description;
