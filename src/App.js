/*import React, { useState, useEffect } from 'react';
import connect from '@vkontakte/vk-connect';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Persik from './panels/Persik';*/
import React from 'react';
import {Div, Group, Panel, PanelHeader, View} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

class App extends React.Component {

    render() {
        return (
            <View activePanel="mainPanel">
                <Panel id="mainPanel">
                    <PanelHeader>Example</PanelHeader>
                    <Group>
                        <Div>
                            Hello world
                        </Div>
                    </Group>
                </Panel>
            </View>
        );
    }
}

export default App;
