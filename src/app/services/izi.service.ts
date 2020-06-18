import { Injectable } from '@angular/core';
import { Tarefa } from '../models/tarefa.model';
import { Quadro } from '../models/quadro.model';
import { Conta } from '../models/conta.model';

@Injectable()
export class IziService {
    constructor() { }

    tarefas: Tarefa[] =
        [
            { idTarefa: '1', idQuadro: '1', titulo: 'Criar tela inicial app', descricao: 'Tarefa de Mobile', responsavel: 'Dhiego', status: 'TODO' },
            { idTarefa: '2', idQuadro: '2', titulo: 'Criar loading', descricao: 'Tarefa de Mobile', responsavel: 'Dhiego', status: 'TODO' },
            { idTarefa: '3', idQuadro: '2', titulo: 'Criar endpoints', descricao: 'Tarefa de Back-end', responsavel: 'Yuri', status: 'TODO' },
            { idTarefa: '4', idQuadro: '1', titulo: 'Layout da web', descricao: 'Tarefa de Front-end', responsavel: 'Guerra', status: 'PROGRESS' },
            { idTarefa: '5', idQuadro: '2', titulo: 'Componentizar a web', descricao: 'Tarefa de Front-end', responsavel: 'Guerra', status: 'PROGRESS' },
            { idTarefa: '6', idQuadro: '1', titulo: 'Fazer conexão com os endpoints', descricao: 'Tarefa de Front-end', responsavel: 'Guerra', status: 'PROGRESS' },
            { idTarefa: '7', idQuadro: '1', titulo: 'Preparar querys', descricao: 'Tarefa de Banco de dados', responsavel: 'Guerra', status: 'DONE' },
            { idTarefa: '8', idQuadro: '2', titulo: 'Dashboard', descricao: 'Tarefa de Banco de dados', responsavel: 'Yuri', status: 'DONE' },
            { idTarefa: '9', idQuadro: '2', titulo: 'Bugs do app', descricao: 'Tarefa de Banco de dados', responsavel: 'Dhiego', status: 'DONE' }
        ];

    quadros: Quadro[] =
        [
            {
                idQuadro: '1', nomeQuadro: 'Projeto Izi',
                idsTarefas: ['1', '2', '3', '4', '5'],
                favorito: false,
                equipe: {
                    nome: 'Dev',
                    membros: [{ id: '1', nome: 'Guilherme', sobrenome: 'Guerra', email: 'guilherme@hotmail.com', senha: '123456', logado: true }]
                }, tarefasToDo: 0, tarefasProgress: 0, tarefasDone: 0
            },
            {
                idQuadro: '2', nomeQuadro: 'Projeto mobile',
                idsTarefas: ['6', '7', '8', '9'],
                favorito: false,
                equipe: {
                    nome: 'Dev',
                    membros: [{ id: '1', nome: 'Guilherme', sobrenome: 'Guerra', email: 'guilherme@hotmail.com', senha: '123456', logado: true }]
                }, tarefasToDo: 0, tarefasProgress: 0, tarefasDone: 0
            }
        ];

    contaUsuario: Conta = null;

    getTarefa(idQuadro: string) {
        const task: Tarefa[] = [];
        this.tarefas.forEach(x => {
            if (x.idQuadro === idQuadro) {
                task.push(x);
            }
        });
        return task;
    }

    getQuadro() {
        return this.quadros;
    }

    criarUsuarioConta(emailUser: string, inputUsuario: Conta) {
        localStorage.setItem(emailUser, JSON.stringify(inputUsuario));
    }

    getUsuarioConta(emailUser: string) {
        return localStorage.getItem(emailUser);
    }

    criarQuadro(nomeQuadro: string, inputQuadro: Quadro) {
        localStorage.setItem(nomeQuadro, JSON.stringify(inputQuadro));
    }

    getQuadros(nomeQuadro: string) {
        return localStorage.getItem(nomeQuadro);
    }

    criarTarefa(nomeTarefa: string, inputTarefa: Tarefa) {
        localStorage.setItem(nomeTarefa, JSON.stringify(inputTarefa));
    }

    getTarefas(nomeTarefa: string) {
        return localStorage.getItem(nomeTarefa);
    }

    criarTime(key: string, inputTime: any) {
        localStorage.setItem(key, JSON.stringify(inputTime));
    }

    getTime(key: string) {
        localStorage.getItem(key);
    }
}
