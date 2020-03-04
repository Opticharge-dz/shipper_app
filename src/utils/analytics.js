import analytics from '@react-native-firebase/analytics';

export const setupUser = async user => {
  await Promise.all([analytics().setUserId(user.id)]);
};
