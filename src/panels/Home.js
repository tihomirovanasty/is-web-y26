import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar } from '@vkontakte/vkui';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import PropTypes from 'prop-types';
import bridge from '@vkontakte/vk-bridge';
import { func } from 'prop-types';

export const Home = ({ id, fetchedUser }) => {
  const { photo_200, city, first_name, last_name } = { ...fetchedUser };
  const routeNavigator = useRouteNavigator();

  function openStoriesBox (){
    fetch('https://randcatimg.yabloko.dev/6831a364c070cb18')
      .then(response => response.text())
      .then(result => {
        console.log(result)
        bridge.send('VKWebAppShowStoryBox', {
          background_type: 'image',
          blob : result,
          attachment: {
            text: 'book',
            type: 'photo',
            owner_id: 743784474,
            id: 12345678
          }})
          .then((data) => {
            if (data.code_data) {
              // Редактор историй открыт
              console.log(data);
            }})
          .catch((error) => {
            // Ошибка
            console.log(error);
          });
      })

    // fetch('https://api.api-ninjas.com/v1/randomimage?category=abstract', {
    //   headers: {
    //     'X-Api-Key': 'BPX7shLCYSB8H9EoN2gUSg==TNw1Q8aUShGc7h5S', 'Accept': 'image/jpg'
    //   }})
    // .then(response => response.text())
    // .then(result => {
    //   console.log('data:image/jpeg;base64,' + result)
    //   bridge.send('VKWebAppShowStoryBox', {
    //     background_type: 'image',
    //     blob : 'data:image/jpeg;base64,' + result,
    //     attachment: {
    //       text: 'book',
    //       type: 'photo',
    //       owner_id: 743784474,
    //       id: 12345678
    //     }})
    //     .then((data) => {
    //       if (data.code_data) {
    //         // Редактор историй открыт
    //         console.log(data);
    //       }})
    //     .catch((error) => {
    //       // Ошибка
    //       console.log(error);
    //     });
    // });
    
  }

  return (
    <Panel id={id}>
      <PanelHeader>Главная</PanelHeader>
      {fetchedUser && (
        <Group header={<Header mode="secondary">User Data Fetched with VK Bridge</Header>}>
          <Cell before={photo_200 && <Avatar src={photo_200} />} subtitle={city?.title}>
            {`${first_name} ${last_name}`}
          </Cell>
        </Group>
      )}

      <Group header={<Header mode="secondary">Navigation Example</Header>}>
        <Div>
          <Button stretched size="l" mode="secondary" onClick={() => openStoriesBox() }>
            Тык
          </Button>
        </Div>
      </Group>
    </Panel>
  );
};

Home.propTypes = {
  id: PropTypes.string.isRequired,
  fetchedUser: PropTypes.shape({
    photo_200: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    city: PropTypes.shape({
      title: PropTypes.string,
    }),
  }),
};
