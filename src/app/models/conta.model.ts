import { Quadro } from './quadro.model';

export class Conta {
    id: string;
    nome: string;
    email: string;
    senha: string;
    quadros: Quadro[];
    logado: boolean;
}
