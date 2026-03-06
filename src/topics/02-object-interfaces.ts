const skills: string[] = ['Bash', 'Counter-Strike', 'Nginx', 'Docker', 'TypeScript', 'NestJS'];

interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string;
}

const strider: Character = {
    name: 'Strider',
    hp: 95,
    skills: skills,
}

strider.hometown = 'Riverdell';

console.table(strider);

export {};