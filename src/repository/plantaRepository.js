import {
    con
} from "./connection.js";



export async function inserirPlanta(planta) {
    const comando = `INSERT INTO Planta (nome, descricao)
                                 VALUES (?, ?)`;

    const [resposta] = await con.query(comando, [planta.nome, planta.descricao]);
    planta.id = resposta.insertId;

    return planta;
}


export async function listarTodasPlantas() {
    const comando =
        `SELECT id_planta,
              nome		    nome
         FROM Planta`;

    const [linhas] = await con.query(comando);
    return linhas;
}




export async function buscarPorId(id) {
    const comando =
        `SELECT id_planta		    id,
              nome		    nome,
              descricao      descricao
         FROM Planta
        WHERE id_planta = ? `;

    const [linhas] = await con.query(comando, [id]);
    return linhas[0];
}




export async function buscarPorNome(nome) {
    const comando =
        `SELECT id_planta		    id,
              nome		    nome,
              descricao      descricao
         FROM Planta
        WHERE nome like ? `;

    const [linhas] = await con.query(comando, [`%${nome}%`]);
    return linhas;
}




export async function removerPlanta(id) {
    const comando =
        `DELETE FROM Planta 
             WHERE id_planta = ? `;

    const [resposta] = await con.query(comando, [id]);
    return resposta.affectedRows;
}





export async function alterarPlanta(id, planta) {
    const comando =
        `UPDATE Planta 
          SET nome = ?,
          descricao= ?
        WHERE id_planta      = ?`

    const [resposta] = await con.query(comando, [planta.nome,planta.descricao, id]);
    return resposta.affectedRows;
}