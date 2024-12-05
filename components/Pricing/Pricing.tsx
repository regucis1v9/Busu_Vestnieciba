import {Group, Text} from '@mantine/core';
import classes from './Pricing.module.css';

const data = [
    {
        stats: 'Buss',
        title: '200€/h',
        description: 'Viens buss uz iepriekš norunātu laiku, ko var pagarināt, saskaņojot jauno termiņu.',
    },
    {
        stats: 'Buss + Krāvējs',
        title: '500€/h',
        description: 'Buss ar krāvējiem, kas veiks kravas iekraušanu un izkraušanu. Krāvējs arī strādā, kā busa šoferis.',
    },
    {
        stats: 'Papildus krāvējs',
        title: '100€/h',
        description: 'Krāvējs, kas palīdzēs ar iekraušanu un izrkaušanu, paātrinot procesu.',
    },
];

export default function Pricing() {
    const stats = data.map((stat) => (
        <div key={stat.title} className={classes.stat}>
            <Text className={classes.count}>{stat.stats}</Text>
            <Text className={classes.title}>{stat.title}</Text>
            <Text className={classes.description}>{stat.description}</Text>
        </div>
    ));
    return (
        <Group justify={"center"} pt={100} id="pricing">
        <div className={classes.root}>
            {stats}
        </div>
        </Group>
    )
}
