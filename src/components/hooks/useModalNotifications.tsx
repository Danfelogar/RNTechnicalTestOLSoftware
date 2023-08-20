//components
import {dummyServices} from '../../services';
import {useAppDispatch} from '../../redux/hooks';
import {notificationsActions} from '../../redux/actions';

export function useModalNotifications() {
  //globalContext
  const dispatch = useAppDispatch();
  const {addNotification} = notificationsActions();
  async function getServicesNotifications() {
    try {
      const [notificationRes, todosRes] = await Promise.allSettled([
        dummyServices.get('/notification'),
        dummyServices.get('/todos'),
      ]);

      const notificationData =
        notificationRes.status === 'fulfilled'
          ? notificationRes.value.data
          : {pagination: {total: 0}, data: []};
      const todosData =
        todosRes.status === 'fulfilled'
          ? todosRes.value.data
          : {pagination: {total: 0}, data: []};

      const updatedData = {
        counterNotifications:
          notificationData.pagination.total + todosData.pagination.total,
        notificationsArr: Object.keys(notificationData.data).map(
          key => notificationData.data[key],
        ),
        todosArr: Object.keys(todosData.data).map(key => todosData.data[key]),
      };

      dispatch(addNotification(updatedData));
    } catch (err) {
      console.log({err});
    }
  }
  return {
    //state
    //methods
    //functions
    getServicesNotifications,
  };
}
