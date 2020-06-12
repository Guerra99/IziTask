import { Tarefa } from './tarefa.model';
import { Equipe } from './equipe.model';

export class Quadro {
    idQuadro: string;
    nomeQuadro: string;
    favorito: boolean;
    equipe: Equipe;
    idsTarefas: string[];
    tarefasToDo: number;
    tarefasProgress: number;
    tarefasDone: number;
}
