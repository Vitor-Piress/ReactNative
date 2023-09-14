import { ScrollView, StyleSheet, View } from 'react-native';
import { Searchbar, Text, SegmentedButtons, Appbar, Checkbox, Button, Avatar } from 'react-native-paper';
import React, { useState } from 'react';

export default function Home({ navigation }) {
    const [value, setValue] = useState('');
    const [task1Checked, setTask1Checked] = useState(false);
    const [task2Checked, setTask2Checked] = useState(false);
    const [task3Checked, setTask3Checked] = useState(false);

    return (
        <View style={styles.container}>
            <ScrollView>
                <Appbar.Header style={{ backgroundColor: 'transparent' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16 }}>
                        <Appbar.BackAction onPress={() => navigation.goBack()} />
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
                            <Appbar.Action icon="calendar" onPress={() => { }} />
                            <Appbar.Action icon="account-cog-outline" onPress={() => navigation.navigate('User')} />
                        </View>
                    </View>
                </Appbar.Header>

                <View style={styles.align}>
                    <Avatar.Text size={40} label="LD" />
                    <Text style={styles.username}>Boa tarde, Feião!</Text>
                </View>

                <Searchbar mode='bar' placeholder="Pesquise suas tarefas" style={styles.margin} />

                <SegmentedButtons style={[styles.margin, { marginBottom: 80 }]}
                    value={value}
                    onValueChange={setValue}
                    buttons={[
                        {
                            value: 'personal',
                            icon: 'account',
                            label: 'Pessoal',
                        },
                        {
                            value: 'personal',
                            icon: 'account',
                            label: 'Pessoal',
                        },
                        {
                            value: 'school',
                            icon: 'school',
                            label: 'Escolar',
                        },
                    ]}
                />

                <View style={styles.cardDiv}>
                    <View style={styles.card}>
                        <Text style={styles.cardTitle}>Estudar demo</Text>
                        <Text style={styles.tag}>Pessoal</Text>
                        <Text style={styles.cardContent}>Aprender mais sobre o META atual</Text>

                        <View style={styles.checkboxAlign}>
                            <Checkbox
                                status={task1Checked ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setTask1Checked(!task1Checked);
                                }}
                            />
                            <Text>Concluído?</Text>
                        </View>

                        <View style={styles.buttonAlign}>
                            <Button
                                style={styles.cardDetails}
                                dark='true'
                                icon="details"
                                mode="outlined"
                                onPress={() => navigation.navigate('Task1')}>
                                Detalhes
                            </Button>
                        </View>
                    </View>
                </View>

                <View style={styles.cardDiv}>
                    <View style={styles.card}>
                        <Text style={styles.cardTitle}>Faxinar a casa</Text>
                        <Text style={styles.tag}>Pessoal</Text>
                        <Text style={styles.cardContent}>Dar um trato na casa para agradar a mamãe</Text>

                        <View style={styles.checkboxAlign}>
                            <Checkbox
                                status={task2Checked ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setTask2Checked(!task2Checked);
                                }}
                            />
                            <Text>Concluído?</Text>
                        </View>

                        <View style={styles.buttonAlign}>
                            <Button
                                style={styles.cardDetails}
                                dark='true'
                                icon="details"
                                mode="outlined"
                                onPress={() => navigation.navigate('Task2')}>
                                Detalhes
                            </Button>
                        </View>
                    </View>
                </View>

                <View style={styles.cardDiv}>
                    <View style={styles.card}>
                        <Text style={styles.cardTitle}>Atividade React 5 telas</Text>
                        <Text style={styles.tag}>Estudos</Text>
                        <Text style={styles.cardContent}>Entregar a atividade de ReactNative de criar 5 telas</Text>

                        <View style={styles.checkboxAlign}>
                            <Checkbox
                                status={task3Checked ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setTask3Checked(!task3Checked);
                                }}
                            />
                            <Text>Concluído?</Text>
                        </View>

                        <View style={styles.buttonAlign}>
                            <Button
                                style={styles.cardDetails}
                                dark='true'
                                icon="details"
                                mode="outlined"
                                onPress={() => navigation.navigate('Task3')}>
                                Detalhes
                            </Button>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
    },
    align: {
        margin: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    username: {
        fontSize: 25,
        margin: 20
    },
    margin: {
        margin: 20,
    },
    cardDiv: {
        marginHorizontal: '15%',
        marginVertical: 20,
        width: 250,
        height: 'auto',
        borderColor: '#24E4FF',
        borderWidth: 2,
        borderRadius: 10,
    },
    card: {
        marginLeft: 12,
        marginRight: 15,
    },
    cardTitle: {
        marginVertical: 10,
        fontSize: 18
    },
    cardDetails: {
        backgroundColor: '#24E4FF',
        marginVertical: 20,
        width: 200,
    },
    tag: {
        backgroundColor: '#24E4FF',
        textAlign: 'center',
        width: 80,
        borderRadius: 10,
        marginBottom: 20
    },
    checkboxAlign: {
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    buttonAlign: {
        justifyContent: 'center',
        alignItems: 'center',
    }
});