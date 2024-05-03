import {Image} from 'react-native';
import {Images} from '../../theme/image';

const CustomIcon = ({name = 'Agenda', size = 24, color = 'black'}) => {
  return (
    <Image
      source={Images['Agenda'] ?? ''}
      style={{width: size, height: size, tintColor: color}}
    />
  );
};

export default CustomIcon;
