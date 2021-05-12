import { Dimensions, NativeModules, Platform } from 'react-native';

const { height, width } = Dimensions.get('window');
const { StatusBarManager } = NativeModules;

const isIOS = Platform.OS === 'ios';

let statusHeight = StatusBarManager.HEIGHT;
if (isIOS) {
    StatusBarManager.getHeight((data) => (statusHeight = data.height));
}

const Metrics = {
    DEVICE_WIDTH: width,
    DEVICE_HEIGHT: height,
    STATUS_BAR_HEIGHT: statusHeight,
    DEFAULT_HEADER_HEIGHT: 40
}

export default Metrics;
