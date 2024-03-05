/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { request } from 'react-native-permissions';
import { Camera, useCameraDevice } from 'react-native-vision-camera';

function App(): React.JSX.Element {
    const [hasPermission, setHasPermission] = React.useState(false);
    const device = useCameraDevice('back');

    request('ios.permission.CAMERA').then((result) => {
        console.log('result', result);
        if (result === 'granted') {
            setHasPermission(true);
        }
    });

    console.log(hasPermission);
    console.log(device);

    if (device === undefined) {
        return <></>;
    }

    if (!hasPermission) {
        return <></>;
    }

    return (
        <Camera
            device={device}
            isActive={true}
            style={{
                width: '100%',
                height: '100%',
            }}
        />
    );
}

export default App;
