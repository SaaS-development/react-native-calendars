import {StyleSheet} from 'react-native';
import * as defaultStyle from '../style';
import { RFValue } from 'react-native-responsive-fontsize';

const STYLESHEET_ID = 'stylesheet.calendar.main';

export default function getStyle(theme={}) {
  const appStyle = {...defaultStyle, ...theme};
  return StyleSheet.create({
    container: {
      paddingLeft: 5,
      paddingRight: 5,
      backgroundColor: appStyle.calendarBackground,
      borderRadius: RFValue(20) 
    },
    monthView: {
      backgroundColor: appStyle.calendarBackground
    },
    week: {
      marginTop: 7,
      marginBottom: 7,
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
    ...(theme[STYLESHEET_ID] || {})
  });
}

