export interface Ability {
    id: number;
    name: string;
    description: string;
    damage: number;
    cooldown: number;
}

export const abilities = {
    swordSlash: {
        id: 1,
        name: 'Sword Slash',
        description: 'Strikes the target with a powerful sword slash',
        damage: 10,
        cooldown: 1
    },
    shadowBlade: {
        id: 2,
        name: 'Shadow Blade',
        description: 'Strikes the target from behind with a stealth attack',
        damage: 13,
        cooldown: 1
    },
    arrowShot: {
        id: 3,
        name: 'Arrow Shot',
        description: 'Shoots an arrow at the target from a distance',
        damage: 15,
        cooldown: 1
    },
    spark: {
        id: 4,
        name: 'Spark',
        description: 'Casts a spark of magic at the target',
        damage: 17,
        cooldown: 1
    }
};

